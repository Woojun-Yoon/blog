import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(_request: NextRequest) {
  try {
    // blogVisit에서 id=1 행을 가져온다고 가정 (단 하나의 row로 관리)
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
