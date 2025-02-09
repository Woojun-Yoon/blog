import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async () => {
  try {
    // Manage the total visitCount by one row in the database
    const blogVisit = await prisma.blogVisit.findUnique({
      where: { id: 1 },
    })
    const totalViews = blogVisit?.totalViews ?? 0

    return NextResponse.json({ totalViews })
  } catch (error) {
    console.error('Error fetching visits:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
