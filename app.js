let qrt = prompt("กรุณากรอกจำนวนสินค้า")
for (let i = 1 ; i <= qrt ;i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่ "+ i)
    document.getElementById("price-list").innerHTML +="รายการสินค้าชิ้นที่" + i + ":" + item_price + " "
} 