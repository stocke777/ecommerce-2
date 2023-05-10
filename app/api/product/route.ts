import { NextResponse } from "next/server"
import products from '../../data/products.json'
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id')
  const productDetails = products.products.find(obj=>obj.id===id)
  console.log("HOHO", productDetails)
  return NextResponse.json({"product": productDetails})
}
