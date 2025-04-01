import { type NextRequest, NextResponse } from "next/server"

// In a real application, we would use a database to store portfolios
// For this demo, we'll use an in-memory store
const portfolios: Record<string, any> = {}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.title) {
      return NextResponse.json({ error: "Name and title are required" }, { status: 400 })
    }

    // Generate a unique ID for the portfolio
    const portfolioId = `${data.template || "minimal"}-${Math.random().toString(36).substring(2, 8)}`

    // Store the portfolio data
    portfolios[portfolioId] = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      portfolioId,
      url: `/portfolio/${portfolioId}`,
    })
  } catch (error) {
    console.error("Error creating portfolio:", error)
    return NextResponse.json({ error: "Failed to create portfolio" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Portfolio ID is required" }, { status: 400 })
    }

    const portfolio = portfolios[id]

    if (!portfolio) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 })
    }

    return NextResponse.json({ data: portfolio })
  } catch (error) {
    console.error("Error retrieving portfolio:", error)
    return NextResponse.json({ error: "Failed to retrieve portfolio" }, { status: 500 })
  }
}

