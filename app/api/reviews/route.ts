import { NextResponse } from "next/server"
import reviews from '../../data/reviews.json'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id')
  const productReviews = reviews.reviews.filter(obj=>obj.productId===id)
  console.log("HOHOHOHO", productReviews)
  return NextResponse.json({"reviews": productReviews})
}
