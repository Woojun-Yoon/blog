import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { headers } from 'next/headers'

const prisma = new PrismaClient()

const getIpAddress = async (): Promise<string | null> => {
  const allHeaders = await headers()

  const ipFromCF = allHeaders.get('cf-connecting-ip')
  if (ipFromCF) {
    return ipFromCF
  }

  const forwardedFor = allHeaders.get('x-forwarded-for')
  if (!forwardedFor) {
    return null
  }
  return forwardedFor.split(',')[0].trim()
}

const getTodayDate = (): Date => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

export const POST = async () => {
  try {
    const ip = await getIpAddress()
    if (!ip) {
      return NextResponse.json({ message: 'No IP found' }, { status: 400 })
    }

    const now = new Date()
    const today = getTodayDate()
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

    const existingVisit = await prisma.userVisit.findFirst({
      where: {
        ip,
        visitDate: {
          gte: today,
          lt: tomorrow,
        },
      },
    })

    if (!existingVisit) {
      await prisma.$transaction([
        prisma.userVisit.create({
          data: { ip, visitDate: now },
        }),
        prisma.blogVisit.upsert({
          where: { id: 1 },
          update: { totalViews: { increment: 1 } },
          create: { id: 1, totalViews: 1 },
        }),
      ])
    }

    return NextResponse.json({ message: 'Tracked' })
  } catch (error) {
    console.error('Error tracking visit:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
