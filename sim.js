// function randomNumbers(arr, menh) {
//     const result = [];
//     for (const item of arr) {
//       let min, max;
//       if (menh === 'kim') {
//         if (item === 'lộc') {
//           min = 1;
//           max = 6;
//         } else if (item === 'bạn') {
//           min = 4;
//           max = 9;
//         } else if (item === 'vượng') {
//           min = 0;
//           max = 5;
//         }
//       } else if (menh === 'mộc') {
//         if (item === 'lộc') {
//           min = 2;
//           max = 7;
//         } else if (item === 'bạn') {
//           min = 3;
//           max = 8;
//         } else if (item === 'vượng') {
//           min = 1;
//           max = 6;
//         }
//       } else if (menh === 'thủy') {
//         if (item === 'lộc') {
//           min = 3;
//           max = 8;
//         } else if (item === 'bạn') {
//           min = 1;
//           max = 6;
//         } else if (item === 'vượng') {
//           min = 4;
//           max = 9;
//         }
//       } else if (menh === 'hỏa') {
//         if (item === 'lộc') {
//           min = 0;
//           max = 5;
//         } else if (item === 'bạn') {
//           min = 2;
//           max = 7;
//         } else if (item === 'vượng') {
//           min = 3;
//           max = 8;
//         }
//       } else if (menh === 'thổ') {
//         if (item === 'lộc') {
//           min = 4;
//           max = 9;
//         } else if (item === 'bạn') {
//           min = 0;
//           max = 5;
//         } else if (item === 'vượng') {
//           min = 2;
//           max = 7;
//         }
//       }
  
//       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//       result.push(randomNumber);
//     }
  
//     return result;
//   }
  
  function randomNumbers(arr, menh) {
    const result = [];
    for (const item of arr) {
      let min, max;
  
      if (menh === 'kim') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        }
      } else if (menh === 'mộc') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        }
      } else if (menh === 'thủy') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 1 : 6;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        }
      } else if (menh === 'hỏa') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 3 : 8;
          result.push(randomNumber);
        }
      } else if (menh === 'thổ') {
        if (item === 'lộc') {
          const randomNumber = Math.random() < 0.5 ? 4 : 9;
          result.push(randomNumber);
        } else if (item === 'bạn') {
          const randomNumber = Math.random() < 0.5 ? 5 : 5;
          result.push(randomNumber);
        } else if (item === 'vượng') {
          const randomNumber = Math.random() < 0.5 ? 2 : 7;
          result.push(randomNumber);
        }
      }
    }
  
    return result;
  }
  
 
  
  


  // dữ liệu đữa vào 
  var data = [
    {
        id: 1,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'bạn - bạn',
        array:['lộc','lộc','lộc','lộc','bạn','bạn']
    },    {
        id: 2,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'vượng - vượng',
        array:['lộc','lộc','lộc','lộc','vượng','vượng']
    },    {
        id: 3,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'vượng - bạn',
        array:['lộc','lộc','lộc','lộc','vượng','bạn']
    },    {
        id: 4,
        td1: 'lộc - lộc',
        td2: 'lộc - lộc',
        td3: 'bạn - vượng',
        array:['lộc','lộc','lộc','lộc','bạn','vượng']
    },
    {
        id: 5,
         td1: 'lộc - lộc',
         td2: 'lộc - bạn',
         td3: 'vượng - bạn',
         array:['lộc','lộc','lộc','bạn','vượng','bạn']
    },
    {
        id: 6,
         td1: 'lộc - lộc',
         td2: 'lộc - bạn',
         td3: 'bạn - bạn',
         array:['lộc','lộc','lộc','bạn','bạn','bạn']
    },
    {
        id: 7,
         td1: 'lộc - bạn',
         td2: 'lộc - bạn',
         td3: 'vượng - bạn',
         array:['lộc','bạn','lộc','bạn','vượng','bạn']
    },{
        id: 8,
         td1: 'lộc - bạn',
         td2: 'lộc - bạn',
         td3: 'bạn - bạn',
         array:['lộc','bạn','lộc','bạn','bạn','bạn']
    },{
        id: 9,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 10,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 11,
         td1: 'vượng - bạn',
         td2: 'lộc - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','bạn','lộc','bạn']
    },{
        id: 12,
         td1: 'bạn - bạn',
         td2: 'lộc - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','lộc','bạn','lộc','bạn']
    },{
        id: 13,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','vượng','bạn','lộc','bạn']
    },{
        id: 14,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','bạn','bạn','lộc','bạn']
    },{
        id: 15,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - bạn',
         array:['vượng','bạn','vượng','bạn','lộc','bạn']
    },{
        id: 16,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - bạn',
         array:['bạn','bạn','bạn','bạn','lộc','bạn']
    },{
        id: 17,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - lộc',
         array:['vượng','bạn','vượng','bạn','lộc','lộc']
    },{
        id: 18,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','bạn','lộc','lộc']
    },{
        id: 19,
         td1: 'vượng - bạn',
         td2: 'vượng - bạn',
         td3: 'lộc - lộc',
         array:['vượng','bạn','vượng','bạn','lộc','lộc']
    },{
        id: 20,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','bạn','lộc','lộc']
    },{
        id: 21,
         td1: 'lộc - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['lộc','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 22,
         td1: 'lộc - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['lộc','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 23,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['lộc','bạn','bạn','lộc','vượng','bạn']
    },{
        id: 24,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['lộc','bạn','bạn','lộc','bạn','bạn']
    },{
        id: 25,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['bạn','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 26,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['bạn','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 27,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'vượng - bạn',
         array:['bạn','lộc','bạn','lộc','vượng','bạn']
    },{
        id: 28,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'bạn - bạn',
         array:['bạn','lộc','bạn','lộc','bạn','bạn']
    },{
        id: 29,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'bạn - lộc',
         array:['vượng','bạn','lộc','lộc','bạn','lộc']
    },{
        id: 30,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'bạn - lộc',
         array:['bạn','bạn','lộc','lộc','bạn','lộc']
    },{
        id: 31,
         td1: 'vượng - bạn',
         td2: 'lộc - bạn',
         td3: 'bạn - lộc',
         array:['vương','bạn','lộc','bạn','bạn','lộc']
    },{
        id: 32,
         td1: 'bạn - bạn',
         td2: 'lộc- bạn',
         td3: 'bạn - lộc',
         array:['bạn','bạn','lộc','bạn','bạn','lộc']
    },{
        id: 33,
         td1: 'lộc - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['lộc','bạn','lộc','lộc','lộc','bạn']
    },{
        id: 34,
         td1: 'bạn - bạn',
         td2: 'bạn - bạn',
         td3: 'bạn - lộc',
         array:['bạn','bạn','bạn','bạn','bạn','lộc']
    },{
        id: 35,
         td1: 'vượng - bạn',
         td2: 'vượng- bạn',
         td3: 'bạn - lộc',
         array:['vượng','bạn','vượng','bạn','bạn','lộc']
    },
    {
        id: 36,
         td1: 'bạn - lộc',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','lộc','lộc','lộc','lộc','bạn']
    },
    {
        id: 37,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','bạn','lộc','lộc','lộc','bạn']
    },
    {
        id: 38,
         td1: 'bạn - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['bạn','vượng','lộc','lộc','lộc','bạn']
    },
    {
        id: 39,
         td1: 'vượng - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - bạn',
         array:['vượng','vượng','lộc','lộc','lộc','bạn']
    },
    {
        id: 40,
         td1: 'bạn - lộc',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','lộc','bạn','lộc','lộc','lộc']
    },
    {
        id: 41,
         td1: 'lộc - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['lộc','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 42,
         td1: 'bạn - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 43,
         td1: 'vượng - bạn',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['vượng','bạn','bạn','lộc','lộc','lộc']
    },
    {
        id: 44,
         td1: 'bạn - vượng',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['bạn','vượng','bạn','lộc','lộc','lộc']
    },
    {
        id: 45,
         td1: 'vượng - vượng',
         td2: 'bạn - lộc',
         td3: 'lộc - lộc',
         array:['vượng','vượng','bạn','lộc','lộc','lộc']
    },
    {
        id: 46,
         td1: 'bạn - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['bạn','bạn','lộc','lộc','lộc','lộc']
    },
    {
        id: 47,
         td1: 'vượng - bạn',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['vượng','bạn','lộc','lộc','lộc','lộc']
    },
    {
        id: 48,
         td1: 'bạn - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['bạn','vượng','lộc','lộc','lộc','lộc']
    },
    {
        id: 49,
         td1: 'vượng - vượng',
         td2: 'lộc - lộc',
         td3: 'lộc - lộc',
         array:['vượng','vượng','lộc','lộc','lộc','lộc']
    }
    
  ];
  var tableBody = document.getElementById("customers");
        var previousButton = null;

        data.forEach(function(item, index) {
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.td1}</td>
                <td>${item.td2}</td>
                <td>${item.td3}</td>
                <td><button class="change-button" data-index="${index}">Chọn</button></td>
            `;
            tableBody.appendChild(row);
        });
        var menhh = '';
        var output = document.getElementById("output");

        var changeButtons = document.querySelectorAll(".change-button");

        changeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                var index = button.getAttribute("data-index"); // Lấy giá trị index từ thuộc tính data-index
                if (previousButton) {
                    previousButton.style.backgroundColor = "";
                }
                button.style.backgroundColor = "green";
                previousButton = button;

                // Lấy mảng tương ứng với hàng đã nhấp
                var selectedArray = data[index].array;
                // Hiển thị mảng trong phần tử "output"
                output.textContent = selectedArray;
                
            });
        });
        var output_menh = document.getElementById("output-menh");
        var buttons = document.querySelectorAll(".menh button");
        var previousButtons = null;

        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Trả lại màu của nút trước đó về ban đầu
                if (previousButtons) {
                    previousButtons.style.backgroundColor = previousButtons.originalColor;
                }

                // Đổi màu của nút mới
                button.originalColor = button.style.backgroundColor;
                button.style.backgroundColor = "green"; // Màu mới

                // Lưu lại nút mới như nút trước đó
                previousButtons = button;

                // Lấy nội dung của nút
                var buttonText = button.textContent;
                output_menh.textContent = buttonText;
            });
        });
        let resultArray = [];
        let resultNumber;
        let result;
        var searchButton = document.getElementById("searchButton");

        searchButton.addEventListener("click", function() {
            // Đổi màu của nút "Tìm Sim"
             var menhip = document.getElementById("output-menh");
             var arrayip = document.getElementById("output");
             var ip = arrayip.textContent;
             const menh = menhip.textContent;
             const arr = ip.split(',');
  const sodep = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 20, 21, 23, 24, 25, 27, 28, 30, 31, 32, 36, 38, 40, 42, 43, 46, 47, 51, 56, 62, 64, 66, 67, 72, 76, 78, 80];
 
  
  do {
    resultArray = randomNumbers(arr, menh);
    const numberString = resultArray.join(''); // Kết hợp mảng thành chuỗi
    resultNumber = parseInt(numberString, 10);
  
    const numberArrr = resultNumber / 80;
    const decimalPart = numberArrr % 1;
  
    result = decimalPart * 80;
  
    if (result % 2 !== 0) {
      result = Math.ceil(result);
    }
  } while (!sodep.includes(result));
  
  console.log(result);
  console.log(resultArray);
  var kqc= resultArray.join("");
  hienThiDoiTuongTheoId(result,kqc); 
  hirenThiMenh(kqc,QDich);
 }); 
const yngia = [
     {
         id: 1,
         gnghia: "Đại triển đồng hồ khả được thành công",
         mucd: "Cát"
     },
     {
         id: 3,
         gnghia: "ngày ngày tiến tới, vạn sự thuận toàn",
         mucd: "Đại cát"
     },
      {
         id: 5,
         gnghia: "Làm ăn phát đạt, danh lợi đều có",
         mucd: "Đại cát"
     },
      {
         id: 6,
         gnghia: "Trời cho số phận, có thể thành công",
         mucd: "Cát"
     },
      {
         id: 7,
         gnghia: "Ôn hòa êm dịu, nhất định thành công",
         mucd: "Cát"
     },
      {
         id: 8,
         gnghia: "Qua đoạn gian nan, có ngày thành công",
         mucd: "Cát"
     },
      {
         id: 11,
         gnghia: "Vững đi từng bước, được người trọng vọng",
         mucd: "Cát"
     },
      {
         id: 13,
         gnghia: "Trời cho cát vận, được người kính trọng",
         mucd: "Đại cát"
     },
      {
         id: 15,
         gnghia: "Đại sự thành tựu, nhất định hưng vượng",
         mucd: "Cát"
     },
      {
         id: 16,
         gnghia: "Thành tựu to lớn, tên tuổi lừng danh",
         mucd: "Đại cát"
     }, {
         id: 17,
         gnghia: "Quý nhân trợ giúp, sẽ đạt thành công",
         mucd: "Cát"
     }, {
         id: 18,
         gnghia: "Thuận lợi hưng thịnh, trăm việc trôi chảy",
         mucd: "Đại cát"
     }, {
         id: 21,
         gnghia: "Chuyên tâm kinh doanh, hay dùng trí tuệ",
         mucd: "Cát"
     }, {
         id: 23,
         gnghia: "Tên tuổi bốn phương sẽ thành đại nghiệp",
         mucd: "Đại cát"
     }, {
         id: 24,
         gnghia: "Phải dựa tự lập, sẽ thành đại nghiệp",
         mucd: "Đại cát"
     }, {
         id: 25,
         gnghia: "Thiên thời địa lợi, vì được nhân cách",
         mucd: "Đại cát"
     }, {
         id: 27,
         gnghia: "Lúc thắng lúc thua, giữ được thành công",
         mucd: "Cát"
     }, {
         id: 28,
         gnghia: "Tiến mãi không lùi, trí tuệ được dùng",
         mucd: "Đại cát"
     }, {
         id: 30,
         gnghia: "Danh lợi được mùa, đại sự thành công",
         mucd: "Đại cát"
     }, {
         id: 31,
         gnghia: "Con rồng trong nước, thành công sẽ đến",
         mucd: "Đại cát"
     }, {
         id: 32,
         gnghia: "Dùng chí lâu dài, sẽ được hưng thịnh",
         mucd: "Cát"
     }, {
         id: 36,
         gnghia: "Tránh được điềm ác, thuận buồm xuôi gió",
         mucd: "Cát"
     }, {
         id: 38,
         gnghia: "Đường rộng thênh thang, nhìn tới tương lai",
         mucd: "Đại cát"
     }, {
         id: 40,
         gnghia: "Thiên ý cát vận, tiền đồ sáng sủa",
         mucd: "Đại cát"
     }, {
         id: 42,
         gnghia: "Nhẫn nhịn chịu đựng, xấu cũng thành tốt",
         mucd: "Cát"
     }, {
         id: 43,
         gnghia: "Cây xanh trổ lá, đột nhiên thành công",
         mucd: "Cát"
     }, {
         id: 46,
         gnghia: "Quý nhân trợ giúp, thành công đại sự",
         mucd: "Đại cát"
     }, {
         id: 47,
         gnghia: "Danh lợi đều có, thành công đại sự",
         mucd: "Đại cát"
     }, {
         id: 51,
         gnghia: "Trời quang mây tạnh, đạt được thành công",
         mucd: "Cát"
     }, {
         id: 56,
         gnghia: "Nỗ lực phấn đấu, phận tốt quay về",
         mucd: "Cát"
     }, {
         id: 62,
         gnghia: "Biết hướng nỗ lực, con đường phồn vinh",
         mucd: "Cát"
     }, {
         id: 64,
         gnghia: "Cát vận tự đến, có được thành công",
         mucd: "Cát"
     }, {
         id: 66,
         gnghia: "Mọi việc như ý, phú quý tự đến",
         mucd: "Đại cát"
     }, {
         id: 67,
         gnghia: "Nắm vững thời cơ, thành công sẽ đến",
         mucd: "Cát"
     },{
         id: 72,
         gnghia: "An lạc tự đến, tự nhiên cát tường",
         mucd: "Cát"
     },{
         id: 76,
         gnghia: "Khổ trước sướng sau không bị thất bại",
         mucd: "Cát"
     },{
         id: 78,
         gnghia: "Tiền đồ tươi sáng, tràn đầy hy vọng",
         mucd: "Đại cát"
     },{
         id: 80,
         gnghia: "Số phận cao nhất, sẽ được thành công",
         mucd: "Đại cát"
     }
];
function hirenThiMenh(arr,dt)
{
    const [result1, result2, result3] = splitArray(arr);
    const tienvanTable = document.querySelector('#customerse-tienvan tbody');
    const trungvanTable = document.querySelector('#customerse-trungvan tbody');
    const hauvanTable = document.querySelector('#customerse-hauvan tbody');
    tienvanTable.innerHTML="";
    trungvanTable.innerHTML="";
    hauvanTable.innerHTML="";
    const tB = {
        tv: null,
        trv: null,
        hv:null
    };
    console.log(result1,result2,result3);
    console.log(tienvanTable,trungvanTable,hauvanTable);
    dt.forEach(function(item) {

        if (result1 == item.Stt) {
            
            tB.tv = `
                <td>Tiền Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
    
        if (result2 == item.Stt) {
              tB.trv= `
                <td>Trung Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
    
        if (result3 == item.Stt) {
           tB.hv = `
                 <td>Hậu Vận</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
  
            
        }
      });
      if (tB.tv) {
        const newRowChu = document.createElement("tr");
        newRowChu.innerHTML = tB.tv;
        tienvanTable.appendChild(newRowChu);
    }
    
    if (tB.trv) {
        const newRowHo = document.createElement("tr");
        newRowHo.innerHTML = tB.trv;
        tienvanTable.appendChild(newRowHo);
    }
    
    if (tB.hv) {
        const newRowBien = document.createElement("tr");
        newRowBien.innerHTML = tB.hv;
        tienvanTable.appendChild(newRowBien);
    }
}
function hienThiDoiTuongTheoId(idCanTim,so) {
  const tbody = document.querySelector("#customer tbody");
  tbody.innerHTML = ""; // Xóa nội dung cũ của tbody

  for (let i = 0; i < yngia.length; i++) {
      if (yngia[i].id === idCanTim) {
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
              <td>${so}</td>
              <td>${yngia[i].id}</td>
              <td>${yngia[i].gnghia}</td>
              <td>${yngia[i].mucd}</td>
          `;

          tbody.appendChild(newRow);
      }
  }
}

// Gọi hàm với id cần tìm
// Đổi thành id mà bạn muốn tìm kiếm
const titleElement = document.querySelector(".title");
    const colors = ["#FFFFFF", "#273c75", "#333333", "#0000FF", "#5f27cd"]; // Danh sách màu bạn muốn sử dụng
    let colorIndex = 0;

    setInterval(function() {
      titleElement.style.color = colors[colorIndex]; // Đặt màu mới cho chữ

      colorIndex++; // Chuyển đến màu tiếp theo trong danh sách
      if (colorIndex >= colors.length) {
        colorIndex = 0; // Quay lại màu đầu khi đã đi qua tất cả màu
      }
    }, 100); 

    // 
    const QDich = [
        {
            Tenqd : 'CÀN VI THIÊN',
            Stt : '1/1',
            Tthai: 'ĐẠI CÁT',
            Kword: 'khỏe, chính trực, toại chí',
            Nghia : 'Mọi việc đều diễn ra theo đúng kế hoạch hoặc sự mong đợi, thành công và danh tiếng lẫn vận may đều biến thành hiện thực, tuy nhiên sự quá thoả mãn và kiêu ngạo hay thái độ hống hách sẽ đưa đến những điều không may. Do đó phải biết cẩn trọng, chu đáo và suy nghĩ khi làm mọi việc, tránh kiêu căng tự mãn'
        },
        {
            Tenqd : 'THIÊN TRẠCH LÝ',
            Stt : '1/2',
            Tthai: 'CÁT',
            Kword: 'khó tính, lý lẽ, nghi lễ, khuôn phép, nghi thức, có ý chí chặn đường không có làm sai, chừng mực, lý lẽ, khắc nghiệt, hợp lý, khó tính',
            Nghia: 'Dù có những khó khăn và trở ngại, nhưng với thái độ hòa nhã, mềm mỏng và nhân hậu sẽ an toàn vượt qua được trở ngại và gặp điều tốt lành. Khó khăn và nguy hiểm khắp nơi, nhưng nếu biết kiên nhẫn, khiêm tốn và nhã nhặn để chờ cơ hội, vận may sẽ đến. Đừng có thái độ tự tiện hay xấu xổ. Hãy giữ vững lập trường của mình'
           
        }, {
            Tenqd : 'THIÊN HOẢ ĐỒNG NHÂN',
            Stt : '1/3',
            Tthai: 'CÁT',
            Kword: 'thân thiện, đồng lòng, đồng tâm hiệp lực',
            Nghia: 'An toàn và vững vàng, cát tưởng. Toàn bộ công việc được tiến hành trong sự phối hợp với người khác sẽ thành công. liên mở rộng thêm các mối quan hệ, kết gian thêm nhiều bạn bè. Khi đạt được hòa hợp với người khác, không nên hành động ích kỷ, xem thưởng ý kiến của người khác, hay có thành kiến, nếu không sẽ gây phương hại. Tránh những cuộc tranh cãi hay bất hòa với người khác'
        }, {
            Tenqd : 'THIÊN LÔI VÔ VỌNG',
            Stt : '1/4',
            Tthai: 'HUNG',
            Kword: 'làm bậy, không hy vọng, không có lề lối, không theo quy cũ, chống đối, thất bại, hư hỏng',
            Nghia: 'Đừng mê đắm việc giành lợi thế bản thân hay thỏa mãn các ước muốn hoặc thú vui riêng tư, nếu không sẽ gặp điều không may. Hãy đối đãi với mọi người và xử trí các công việc bằng sự thành thực hết mực. Thuận theo một cách tự nhiên, đồng thời vẫn giữ vững lập trường của mình thì sẽ tốt lành. Hành động cưỡng cầu – tức là, hành động mãnh liệt, thậm chí triệt để'

        }, {
            Tenqd : 'THIÊN PHONG CẤU',
            Stt : '1/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'gặp gỡ bất thình lình, tượng của sự cấu kết',
            Nghia: 'Không nên hành động chỉ vì bị ảnh hưởng. Lực âm đang tăng lên và lực dương đang giảm xuống, vận hội đang thay đổi theo hướng xấu di. Hãy cẩn thận và đề phòng để ngăn chặn sự bắt đầu của vận may đang hồi xuống dốc. Có thể gặp sự không may, ai đó có thể gây hại hoặc vu khống, một phụ nữ có thể gây rắc rối và tổn hại'
        }, {
            Tenqd : 'THIÊN THUỶ TỤNG',
            Stt : '1/6',
            Tthai: 'HUNG',
            Kword: 'bất hòa, cãi vã, kiện tụng, bất ổn',
            Nghia: 'Sẽ chẳng có điều gì diễn ra đúng theo mong đợi hay ước muốn. Mọi việc đầy khó khăn, phiền muộn, rắc rối và trở ngại. Không có lợi để tiến tới hay đi lên. Tốt nhất hãy thoái lui và giữ yên vị trí, chỗ đứng. đồng thời chờ đến khi vận hội thay đổi.'
        }, {
            Tenqd : 'THIÊN SƠN ĐỘN',
            Stt : '1/7',
            Tthai: 'HUNG',
            Kword: 'dã dối, trá hình, không trung thực',
            Nghia: 'Điềm báo trước cơ nghiệp suy. Xét về mọi mặt, hãy rút lui và giữ nguyên tình trạng đó. Hãy cực kỳ cẩn thận trọng lời nói, hành động và cách thức xử lý công việc, có thể an toàn cũng như vững vàng. Có thể bị vu khống bởi những kẻ như mụn, bị lôi kéo vào những phiền phức bởi cấp dưới, và có thể bị mất của cải hay tiền bạc'
        }, {
            Tenqd : 'THIÊN ĐỊA BĨ',
            Stt : '1/8',
            Tthai: 'HUNG',
            Kword: 'lôi thôi, không xong, thất bại, xấu',
            Nghia: 'Vận rủi. Mọi việc sẽ không diễn ra đúng như mong đợi, sẽ có thể gặp vất vả và cam go. Kẻ tiểu nhân có thể gây tổn thương, mất mát, thiệt hại cho mình. Thậm chí, bạn có thể phải trải qua nỗi đau khổi của chia ly hay ngăn cách. Vận hội có thể thay đổi nếu ta vẫn trước sau như một, can đảm và cố gắng. Tốt nhất hãy giữ nguyên tình trạng hiện tại'
        },{
            Tenqd : 'TRẠCH THIÊN QUẢI',
            Stt : '2/1',
            Tthai: 'HUNG',
            Kword: 'dứt khoát, rõ ràng',
            Nghia: 'Mặc dù cơ đồ đang sung thịnh, nhưng chẳng bao lâu khó khăn và gian nan sẽ xuất hiện. Phải cẩn thận, tự chủ và hết lòng đi theo con đường chính đáng. Có thể bị lôi kéo vào một trận tranh cãi hay bị bệnh vì làm việc quá sức. Bạn cũng có thể xử lý làm công việc, và do đó bị tổn thất. một người khác có thể đang ngấm ngầm gây khó khăn cho bạn'
        },{
            Tenqd : 'ĐOÀI VI TRẠCH',
            Stt : '2/2',
            Tthai: 'CÁT HANH',
            Kword: 'tươi đẹp, vui vẻ',
            Nghia: 'Vận hội cát tường với mọi sự diễn ra đúng như mong đợi. Ta có thể trải qua một biến cố hạnh phúc. mặt khác, những lời lẽ bất cần có thế dẫn đến rắc rối, hoặc một phụ nữ có thể gây cho ta sự khổ sử hay đau đớn. Trong đối nhân xử thế, hãy hòa nhã, mềm mỏng và thành thật. Trong xử lý công việc, hãy thận trọng và kỹ lưỡng'
        },{
            Tenqd : 'TRẠCH HOẢ CÁCH',
            Stt : '2/3',
            Tthai: 'CÁT',
            Kword: 'chiều theo, chuyển động, đi theo',
            Nghia: 'Tùy tượng trưng cho cái cương kiện đang phục tùng theo cái âm nhu, do đó giành được sự sẵn lòng phục tùng của mọi người và thành công trong công việc. Hãy tôn trọng ý kiến của người khác và hay nhận sự giúp đỡ của người khác – khi đó sự nghiệp sẽ thành công, đồng thời danh vọng và giàu sang sẽ đến'
        },{
            Tenqd : 'TRẠCH LÔI TUỲ',
            Stt : '2/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'lôi thôi, không xong, thất bại, xấu',
            Nghia: 'Vận rủi. Mọi việc sẽ không diễn ra đúng như mong đợi, sẽ có thể gặp vất vả và cam go. Kẻ tiểu nhân có thể gây tổn thương, mất mát, thiệt hại cho mình. Thậm chí, bạn có thể phải trải qua nỗi đau khổi của chia ly hay ngăn cách. Vận hội có thể thay đổi nếu ta vẫn trước sau như một, can đảm và cố gắng. Tốt nhất hãy giữ nguyên tình trạng hiện tại'
        },{
            Tenqd : 'TRẠCH PHONG ĐẠI QUÁ',
            Stt : '2/5',
            Tthai: 'LỢI',
            Kword: 'quá sức chịu đựng',
            Nghia: 'Bởi các gánh nặng và trách nhiệm quá sức nặng nề, không thể cưu mang hay thực hiện một cách hoàn chỉnh hay trọn vẹn được, do đó gặp phải thất bại. Nên đánh giá những ưu điểm và khuyết điểm của mình, và chọn ra đường hướng hành động thích hợp. Có thể bị lôi kéo vào những phiền phức, rắc rối và tâm trí của bạn rồi tung, Hành động hấp tấp và mù quáng sẽ khiến bạn gặp thất bại'
        },{
            Tenqd : 'TRẠCH THUỶ KHỐN',
            Stt : '2/6',
            Tthai: 'BÌNH HÒA',
            Kword: 'nguy lo, mệt mỏi, giữ mình chờ đợi',
            Nghia: 'Đang ở giữa cảnh khó khăn và thiếu thốn. Tuy nhiên, có thể chờ đại cho đến lúc hanh thông bằng cách lúc nào cũng giữ vững con đường chính trực, sự tự chủ và nhẫn nại. Thời điểm khó khăn, gieo neo, thất bại và côn độc. Sự tiến bước sẽ dẫn đến nghịch cảnh. Tất nhất là hãy thoát: lui và giữ nguyên trạng. Hãy kiên trì và tự chủ chờ cho đến lúc thời vận thay đổi'
        },{
            Tenqd : 'TRẠCH SƠN HÀM',
            Stt : '2/7',
            Tthai: 'CÁT',
            Kword: 'lắng nghe, xúc động, khả năng ăn nói tốt, chiều được tình cảm của người khác',
            Nghia: 'Toàn quả tượng trưng cho bình an và yên tịnh xuất phát từ sự hài lòng, kết quả của hạnh phúc hay vui vẻ. Trong đoán quả, điều này có nghĩa rằng mọi việc sẽ diễn ra đúng như hy vọng và sẽ có hạnh phúc. Tuy nhiên, phải tránh thái độ ngoan cố và bất chính, vì một tương tác như vậy sẽ gây ra ô uế'
        },{
            Tenqd : 'TRẠCH ĐỊA TUỴ',
            Stt : '2/8',
            Tthai: 'HANH',
            Kword: 'vui vẻ, nhen nhúm, quây quần',
            Nghia: 'Tinh thần và tài vật lực của một người đang được tập hợp lại. Đây là quẻ rất cát tường. Sự tụ tập của cải. Những người khác có thể mang lại sự hợp tác, và những lợi nhuận rất lớn có thể biến thành hiện thực được. Tốt nhất là hãy nghe theo lời khuyên của những bậc trưởng thượng. mùa gặt trúng đậm'
        },{
            Tenqd : 'HOẢ THIÊN ĐẠI HỮU',
            Stt : '3/1',
            Tthai: 'ĐẠI CÁT',
            Kword: 'độ lượng, đức độ',
            Nghia: 'Đang hưởng được vận may và sự kính trọng của mọi người. Sẽ gặt hái được rất nhiều lợi nhuận hay lợi ích nhưng trong tất cả mọi việc, phải hết sức cẩn thận và kỹ lưỡng để duy trì vận may của mình. Không nên tự mãn để đánh mất vận may của mình'
        },{
            Tenqd : 'HOẢ TRẠCH KHUÊ',
            Stt : '3/2',
            Tthai: 'HUNG',
            Kword: 'lìa xa, 2 bên lợi dụng lẫn nhau, mượn sức ra oai',
            Nghia: 'Diễn biến xấu, khó khăn, nhục nhằn. Các khó khăn sẽ chi phối mọi việc và các kỳ vọng sẽ chẳng đi đến đâu. Hay tránh sự tiến bước hay đi lên. Hãy an phận và hòa nhã thực hiện các công việc của mình. Khi đó, có thể biến nguy hiểm thành bình yên và an toàn. Có thể bị lôi kéo vào sự rắc rối nào đó liên quan đến người khác, thực hiện những kế hoạch lầm lẫn, hay khiến bạn bè ghét bỏ'
        },{
            Tenqd : 'LY VI HOẢ',
            Stt : '3/3',
            Tthai: 'HANH',
            Kword: 'tượng không yên, có việc xui rủi, nóng tính',
            Nghia: 'Vận may sẽ đến nếu hết lòng đi theo con đường chính đáng, giữ gìn tính khiêm tốn, có thái độ sẵn lòng giúp đỡ, biết tôn trọng ý kiến của người khác, và hợp tác với người khác trong mọi việc. Những đầu tư hợp tác sẽ thành công. Nghe theo ý kiến của bậc trưởng thường là cát tường. Nếu khinh suất, thiển cận hay dao động bởi tình cảm trong xử lý công việc, bạn sẽ thất bại'
        },{
            Tenqd : 'HOẢ LÔI PHỆ HẠP',
            Stt : '3/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'vặn vẹo, bám víu, hay hỏi vặn vẹo',
            Nghia: 'mọi việc sẽ không diễn ra đúng như mong đợi – nhiều khó khăn. Phải có hành động tích cực. Thái độ thụ động sẽ có nghĩa là thất bại giữa đường. nếu can đảm tiến bước, nhất định có thể đi đến đích. Có khả năng bạn sẽ tranh biện hay bất hòa với ai đó. Cách tốt nhất là tự thân xử trí vấn đề. Đừng trông dựa vào người khác'
        },{
            Tenqd : 'HOẢ PHONG ĐỈNH',
            Stt : '3/5',
            Tthai: 'CÁT HANH',
            Kword: 'Nhất cữ lưỡng tiện, ra đi đắc lợi, giao dịch tất thành, cầu tài có lộc, buôn bán phát tài',
            Nghia: 'Đã đến lúc mọi việc đều có thể thay đổi được. Với sự can đảm và khôn ngoan, nên sắp xếp ngăn nắp mọi thứ, đồng thời có những sắp đặt mới. Nếu làm được như vậy, vận may sẽ bắt đầu, và những triển vọng tươi sáng sẽ xuất hiện. Tuy nhiên, điều quan trọng nhất là phái giữ theo chính đạo. Có thể sẽ thay đổi chỗ ở hay thậm chí bị lôi kéo vào những phiền phức'
        },{
            Tenqd : 'HOẢ THUỶ VỊ TẾ',
            Stt : '3/6',
            Tthai: 'HUNG',
            Kword: 'mừng mừng lo lo nữa vời',
            Nghia: 'Vận hội giờ đây đang không được tốt đẹp cho lắm, nhưng sẽ dần dần thay đổi để trở nên tốt đẹp hơn. Từ từ, hãy hòa thuận cùng với mọi người, và vận may sẽ từ từ cải thiện. Sự khinh suất, liều lĩnh hay hấp tấp khi thực hiện các công việc sẽ dẫn đến thất bại. Không suôn sẻ, không việc gì diễn ra đúng như mong đợi. Hãy bình tĩnh, hãy tiến bước một cách đều đặn'
        },{
            Tenqd : 'HOẢ SƠN LỮ',
            Stt : '3/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'tạm bợ, gá vào, đến rồi đi không bền',
            Nghia: 'Hãy xử lý các vấn đề bằng thái độ hòa nhã, thân thiện. Nếu được như vậy, khi đó mọi việc sẽ ổn thỏa. Điều sau đây có thể xảy ra: một sự thay đổi công việc, chỗ làm, hay nghề nghiệp có thể rơi vào cảnh côn độc và không có sự giúp đỡ, trong lúc đang thực hiện một chuyển đi, sự khó khăn hay rắc rối nào đó có thể nảy sinh trong nhà, sự thay đổi chỗ ở có thể dẫn đến rắc rối và buồn phiền'
        },{
            Tenqd : 'HOẢ ĐỊA TẤN',
            Stt : '3/8',
            Tthai: 'CÁT',
            Kword: 'điềm lành',
            Nghia: 'To lớn, thịnh đạt, sung túc, vận may. Có thể được trợ giúp bởi ai đó hay bậc trưởng thượng. Sự phát đạt trong kinh doanh, làm ăn và danh tiếng dần dần nổi trội, mọi việc diễn ra đúng như mang đại. Cũng thích hợp để cộng tác với người khác. Tuy nhiên, ai đó có thể đang đố kỵ với mình'
        },{
            Tenqd : 'LÔI THIÊN ĐẠI TRÁNG',
            Stt : '4/1',
            Tthai: 'CÁT',
            Kword: 'Đại thịnh, chí khí, tự lập tự cường, đơn độc, phượng đậu trên núi, độc lập',
            Nghia: 'Tài sản sung thịnh, công việc làm ăn phát đạt. Hiếu xử lý công việc thiếu thân thiện hay thiếu lòng chân thành sẽ dẫn đến xung đột và những hành động lo lắng, bốc đồng sẽ gây tổn thất hoặc thất bại. Phải có tấm lòng rộng mở và khiêm tốn trong xử sự với người khác hay trong xử lý công việc'
        },{
            Tenqd : 'LÔI TRẠCH QUY MUỘI',
            Stt : '4/2',
            Tthai: 'HUNG',
            Kword: 'mù mịt, rối ren, lôi thôi, luộm thuộm',
            Nghia: 'nếu mê đắm với lạc thú thể xác mà vi phạm các qui ước của xã hội. chẳng bao lâu sẽ gặp phải điều không may. Do đó, phải thay đổi cách sống để trở thành người tốt hơn, và phải sửa đổi bản thân mình để tránh tai họa. Chẳng có cái gì vẫn trước sau như một từ lúc khởi đầu cho đến tận lúc cuối. Cũng có thể bị lôi kéo vào những phiền toái nào đó'
        },{
            Tenqd : 'LÔI HOẢ PHONG',
            Stt : '4/3',
            Tthai: 'CÁT HANH',
            Kword: 'phú quý, dồi dào, sung túc',
            Nghia: 'Hưởng được vận may, sự suôn sẻ. Tuy nhiên, sự tự mãn, lơ đễnh và thiếu cố gắng sẽ dẫn đến vận hội suy vi. Phải tránh sự hoang phí, ngông cuồng, khoa trương và tự đắc. Có khả năng việc làm cho người ta chú ý đến mình quá nhiều sẽ dẫn đến tình trạng bị lửa hay bị vướng vào sự rắc rối nào đó. Trung lãnh vực nghệ thuật và trong các ngành nghề văn hóa, tương lai sẽ là những triển vọng vô hạn'
        },{
            Tenqd : 'CHẤN VI LÔI',
            Stt : '4/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'giai đoạn đầu thường gây chấn động khắp nơi',
            Nghia: 'Vận hội đang thay đổi từ bóng tối sang ánh sáng. Hãy thực hiện mọi việc cẩn thận, đồng thời theo trình tự hợp lý, và khắc phục các khôn khăn. Có thể thành công hay thừa kế công việc của ai đó, và gặt hải được danh tiếng lẫn của cải. Mặt khác, thái độ quá tự tin, sự bất chấp ý kiến của người khác, hay sự thiển cận có thể dẫn đến xung đột hay thất bại. Phải thận trọng'
        },{
            Tenqd : 'LÔI PHONG HẰNG',
            Stt : '4/5',
            Tthai: 'CÁT',
            Kword: 'xưa cũ, lâu bền dư đẵng, chung thủy, bền lâu, từ từ, chậm chạp',
            Nghia: 'nên duy trì tình trạng hiện tại và tránh các kế hoạch mới. Nhờ vậy, có thể đạt được vận may lâu dài và thoát khỏi ưu phiền. Trung hậu, thành thật và việc bảo vệ vị thế một cách cẩn thận sẽ có nghĩa là mọi việc suôn sẻ, và có thể duy trì được sự thịnh vượng của mình. Trên là Chấn trưởng nam, dưới là Tốn, trưởng nữ, chồng trên vợ dưới ,rất hợp đạn, thì tất được lâu dài'
        },{
            Tenqd : 'LÔI THUỶ GIẢI',
            Stt : '4/6',
            Tthai: 'CÁT',
            Kword: 'làm xua tan sự nguy hiểm, sấm động, không còn nguy hiểm, lan truyền ra ngoài',
            Nghia: 'Những gian khổ đang tan dần, sự vận động mái có thể bắt đầu. Sau một thời gian dài gian khổ, vận hội đang bắt đầu thay đổi và tiến triển theo hướng suôn sẻ và tuyệt vời. Hãy hành động tích cực, hãy nắm bắt cơ hội này, và hãy đấu tranh cho danh tiếng và cơ đồ. Hành động mới ở hướng tây nam là cát tưởng. một sự việc vui vẻ có thể xảy ra trong gia đình'
        },{
            Tenqd : 'LÔI SƠN TIỂU QUÁ',
            Stt : '4/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'thiếu cường lực, buồn thảm, nhỏ nhặt, gian nan, vất vả, bị chèn ép',
            Nghia: 'Không hy vọng làm được điều gì đó bên ngoài phạm vi chuyên môn hay khả năng của mình. Hãy đặc biệt cẩn thận đừng tranh biện với người khác hẳn với mình về thế mạnh hay khả năng nội tại, bởi vì điều này sẽ dẫn đến thất bại. Kiềm chế và giữ nguyên trạng là cát tường. Tiến bước đi lên là bất lợi. Có khả năng sẽ chia tay với bạn bè thân hay bà con thân thích, bởi phạm sai lầm trong công việc'
        },{
            Tenqd : 'LÔI ĐỊA DỰ',
            Stt : '4/8',
            Tthai: 'LỢI',
            Kword: 'Duyệt dã. Thuận động. Dự bị, dự phòng, canh chừng, sớm, vui vầy. Thượng hạ duyệt dịch chi tượng: tượng trên dưới vui vẻ.',
            Nghia: 'Mọi việc sẽ diễn ra đúng như mang đợi nhưng không nên lơ là, biếng nhác hay sao lãng. Nếu không sẽ tự mang đến cho mình vận rủi và đau khổ, chua xót. Cùng lúc đó, phải biết làm chủ bản thân mình trong cuộc sống cá nhân, và kiểm tra giấy tờ hay tư liệu cá nhân để phỏng khi bảo vệ cho mình thoát khỏi sự rắc rối hay phiền phức bất ngờ. Thêm nữa, phải đề phòng kẻ trộm'
        },{
            Tenqd : 'PHONG THIÊN TIỂU XÚC',
            Stt : '5/1',
            Tthai: 'BÌNH HÒA',
            Kword: 'cô quả, cô độc, oán hận, nhỏ nhen, tiểu nhân, Tắc dã. Dị đồng. Lúc bế tắc, không đồng ý nhau, cô quả, súc oán, chứa mọi oán giận, có ý trái lại, không hòa hợp, nhỏ nhen',
            Nghia: 'ám chỉ mọi việc sẽ không diễn ra trôi chảy hay êm đẹp. Đầy trở ngại. mọi việc sẽ không diễn ra như mong đợi. Đừng bi quan, yếu đuối hay quá độ. Hãy kiên nhẫn và tiếp tục cố gắng, bởi vì sau khi mây tan sẽ có ánh sáng mặt trời và vận hội sẽ thay đổi.'
        },{
            Tenqd : 'PHONG TRẠCH TRUNG PHU',
            Stt : '5/2',
            Tthai: 'CÁT HANH',
            Kword: 'Trung thực, uy tín từ trong ra ngoài',
            Nghia :'Hãy xử trí với mọi công việc bằng lòng thành tín và thật lòng, hãy tin tưởng người khác. Những ý định xấu và sự xem thường lòng tin cây sẽ dẫn đến điều không may. Khi cư xử với người khác, hay đặc biệt chú ý đến lòng tin tưởng. Những cuộc đầu tư hợp tác là cát tường. Có khả năng sẽ có những chuyến đi thường xuyên'
        },{
            Tenqd : 'PHONG HOẢ GIAI NHÂN',
            Stt : '5/3',
            Tthai: 'CÁT',
            Kword: 'nảy nở, đồng nghiệp, trổ bông sinh trái, tăng trưởng, mở mang, phát triển thêm',
            Nghia: 'Phải giữ mình tu dưỡng chứ không phải tiến lên điều hành việc nào đó. Gia đình đang đi trên con đường thích hợp và thịnh vượng vận may to lớn và tràn đầy niềm vui. Hãy thực hiện bổn phận của mình và hãy chăm chỉ làm việc mà không có bất kỳ toan tính hay hành động hấp tấp, liều lĩnh nào khác. Như vậy, mới có thể giữ gìn được van may'
        },{
            Tenqd : 'PHONG LÔI ÍCH',
            Stt : '5/4',
            Tthai: 'CÁT',
            Kword: 'có thêm, vượt lên, thêm lợi lộc, vang xa, có quý nhân phù trợ',
            Nghia: 'Hướng được sự suôn sẻ và vận may – thời điểm thích hợp để khỏi xướng hay khuếch trương. Hãy quả quyết và mạnh dạn tiến bước về phía trước. Đừng chần chừ hay do dự. Cùng lúc đó, phải nghĩ đến người khác và nghĩ cách, làm sao cho đôi bên cùng có lợi. Có thể được ai đó giúp đỡ. Hạnh phúc có thể sẽ diễn ra trong gia đình bạn. Đầu tư hợp tác các tường'
        },{
            Tenqd : 'TỔN VI PHONG',
            Stt : '5/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'nhu thuận, kết hợp, hòa nhập, thẩm thấu, giao hòa',
            Nghia: 'Vận hội đang chuyển động giống như cơn gió. Bất ổn định và quanh ca. Trong đối nhân hay xử thế, phải có thái độ khiêm cung, tùng phục và nhanh chóng thích ứng theo hoàn cảnh đổi thay. Có thể gặp những rủi ro sau đây: trộm cướp, sự bất lợi do chần chừ và thiếu dứt khoát, sự tổn thất do xung đột hay hành vi manh động'
        },{
            Tenqd : 'PHONG THUỶ HOÁN',
            Stt : '5/6',
            Tthai: 'HANH',
            Kword: 'xa lánh, hao, tán ra, ly tán',
            Nghia: 'Vận hội bắt đầu thay đổi và các gian nan đang tan dần nhưng cũng đừng quá dễ dãi, buông lỏng. Thất bại sẽ đến từ sự thiếu thận trọng, bất cẩn và quá phóng túng. Những điều sau đây có thể xảy ra: một chuyến đi xa nhà, nhận được sự giúp dỡ của ai đó, hoặc sự thất bại do thiếu ý chỉ hay không kiên định'
        },{
            Tenqd : 'PHONG SƠN TIỆM',
            Stt : '5/7',
            Tthai: 'CÁT',
            Kword: 'Tuần tự. Từ từ, thong thả đến, lần lần, bò tới, chậm chạp, nhai nhỏ nuốt vào, phúc lộc đến từ từ, chậm mà chắc',
            Nghia: 'Vận may đang dần dần hé mở mọi việc đang từ từ trở nên suôn sẻ, êm đẹp. Tương lai đầy xán lạn và hy vọng. Thành công sẽ đến từ sự tiến bước dần dần. Tiến tới phía trước quá nhanh hay khinh suất thì bất lợi. Đối với phụ nữ, quẻ này có nghĩa rằng có khả năng sẽ có một biến cố vui vẻ nào đó xảy ra'
        },{
            Tenqd : 'PHONG ĐỊA QUAN',
            Stt : '5/8',
            Tthai: 'BÌNH HÒA',
            Kword: 'thắng trận, lướt qua, bèo hợp mây tan',
            Nghia: 'Bắt đầu của sự suy tàn, xuống dốc. cần phải biết suy ngẫm và xem xét bản thân, cũng như phải biết dối xử với người khác bằng thái độ chân tình để đảm bảo sự bình an, yên tĩnh. Nếu có thể giành được sự ủng hộ hay giúp đỡ của các bậc trưởng thượng hoặc cấp trên của mình, sẽ có khả năng thăng tiến'
        },{
            Tenqd : 'THUỶ THIÊN NHU',
            Stt : '6/1',
            Tthai: 'CÁT',
            Kword: 'quân tử, hội họp vui vẻ, chờ thời, nghiên cứu, tìm tòi',
            Nghia: 'Hãy tìm phương cách thích hợp, và phải quyết tâm cũng như tận tâm. Đừng hấp tấp, liều lĩnh, khinh suất hay quá cực đoan trang hành động. Hay chủ thời cơ và vận may đến, cuối cùng, sẽ thực hiện được các kỳ vọng và khát vọng của mình. Nếu tham lợi lộc hay lợi thế nhỏ đang có trước mắt, tất sẽ gánh chịu thất bại'
        },{
            Tenqd : 'THUỶ TRẠCH TIẾT',
            Stt : '6/2',
            Tthai: 'CÁT',
            Kword: 'tiết chế chừng mực, nói chuyện hay bị mất lòng',
            Nghia: 'Việc xem thường nguyên tắc thứ tự và chừng mực, lẫn những hành động bừa bãi bắt nguồn từ sự say sưa trong khoái lạc dẫn đến thất bại và bất hạnh. Trong kinh doanh, các chi tiêu có thể đang quá lớn. Có những khó khăn về tài chính. Sự việc sẽ không diễn ra suôn sẻ. Những lời nói bất cẩn, những lời đàm tiếu hay những lời vu khống hoặc phỉ báng có thể gây ra tổn thương'
        },{
            Tenqd : 'THUỶ HOẢ KÝ TẾ',
            Stt : '6/3',
            Tthai: 'CÁT HANH',
            Kword: 'thuận tự nhiên, có lợi nhỏ, vui vẻ',
            Nghia: 'Thảnh thơi, cơ đồ sung thịnh. Sẽ có những thành tựu, nhưng khi may mắn đã lên đến cực độ, những dấu hiệu suy tàn sẽ xuất hiện. Do đó, phải không được kiêu căng hay lơ là. Thận trọng và kỹ lưỡng là điều bắt buộc. Không nên thực hiện những kế hoạch cho các phát triển mới. Hãy giữ nguyên tình trạng hiện thời, hay sắp xếp ngăn nắp mọi thứ'
        },{
            Tenqd : 'THUỶ LÔI TRÂN',
            Stt : '6/4',
            Tthai: 'HUNG',
            Kword: 'do dự, vất vả, truân chuyên, trắc trở',
            Nghia: 'Hãy cô” gắng chịu đựng những khó khăn hiện tại, nỗ lực trong thầm lặng. Nếu khởi lập doanh nghiệp, sẽ gặp nhiều rủi ro và gian nan. Đừng hành động cẩu thả, liều lĩnh hay mù quáng. Phải có lòng dũng cảm chịu đựng để đấu tranh bằng quyết tâm và sự hết lòng. Nếu đa nỗ lực toàn tâm toàn ý, những khó khăn sẽ dần dần được giải quyết'
        },{
            Tenqd : 'THUỶ PHONG TỈNH',
            Stt : '6/5',
            Tthai: 'BÌNH HÒA',
            Kword: 'tĩnh lặng, trầm tĩnh, lặng, ổn định, bình an',
            Nghia: 'Người ta phải có những hành vi thiện lành để tạo lợi ích cho người khác. Cùng lúc đó, người ta cũng cần phải giữ gìn sự an bình và yên tịnh giống như giếng. May mắn của sự yên tịnh và hòa nhã. Tất nhất hãy tránh hành động cực đoan. Hãy giữ nguyên hiện trạng để gìn giữ sự bình an, yên tĩnh và chấp nhận hoàn cảnh hiện tại'
        },{
            Tenqd : 'KHẢM VI THUỶ',
            Stt : '6/6',
            Tthai: 'CÁT',
            Kword: 'gập gềnh, khổ tận cam lai',
            Nghia: 'Nhiều gian khổ và khó khăn. Phải có lòng tin chắc chắn và không sự khó. Điều duy nhất cần làm là chờ đến lúc vận hội thay đổi. Không thể tiến tới, cũng không thể thoái lui. Có lẽ thân tâm đều sẽ bất an, không thể sống yên ổn. Trong cảnh nổi trôi, có thể gặp phải trộm cắp, lừa gạt, bệnh tật hoặc bị thương tích hay tổn thương'
        },{
            Tenqd : 'THUỶ SƠN KIỂN',
            Stt : '6/7',
            Tthai: 'HUNG',
            Kword: 'trở ngại, khó khăn, tai nạn chân tay',
            Nghia: 'Có những gian nan lẫn khốn khổ. Hãy chờ đợi nhẫn nại bằng thái độ tự chủ, tuân theo những bậc tài giỏi và đức hạnh, hãy trau dồi bản thân. Trong vùng sớm nhất là năm tháng hay năm năm. Sự phát triển sang hướng tây nam thì có thể tốt, nhưng bất lợi sẽ theo liền với những bước tiến về phía đông bắc. Tránh nạn trộm cắp, lừa gạt, lũ lụt, hay bạn bè thân hãm hại'
        },{
            Tenqd : 'THUỶ ĐỊA TỶ',
            Stt : '6/8',
            Tthai: 'CÁT',
            Kword: 'việc tiếp xúc với người khác sẽ diễn ra tốt đẹp và mọi việc sẽ được tiến hành thuận lợi. Nếu sống riêng rẽ, lưng chừng, không chịu đoàn kết với nhau ắt sẽ gặp hoạ hung',
            Nghia: 'Thanh bình, an toàn, tốt lành. Nên hòa đồng với mọi người và thân thiết với người khác. Nhưng nếu hành động tra trán và quá đáng, sẽ làm tiêu tan vận may này. Đoàn kết và hợp tác với người khác khi làm điều gì đó sẽ mang đến tốt lành. Vận may cũng sẽ bao gồm sự ủng hộ, lòng tin của mọi người, sự tin tưởng của mọi người vào tiến triển của công việc'
        },{
            Tenqd : 'SƠN THIÊN ĐẠI SÚC',
            Stt : '7/1',
            Tthai: 'CÁT',
            Kword: 'cục bộ 1 phe, tiến triển thành đại, chứa đựng',
            Nghia: 'Trong lúc này, mọi việc đều ngưng đọng và thoái trào, không diễn ra đúng như mong đợi. Nhưng nếu không xem sự làm việc chăm chỉ, siêng năng là khôn lao và vẫn giữ được sự điềm tĩnh, thanh thản, sẽ vượt qua được các khó khăn trong tương lai gần và thực hiện được mục tiêu của mình. Có thể tiết kiệm tiền bạc, thực hiện công việc làm ăn nào đó, giành được sự ủng hộ hay yêu mến'
        },{
            Tenqd : 'SƠN TRẠCH TỔN',
            Stt : '7/2',
            Tthai: 'BÌNH HÒA',
            Kword: 'đề phòng sự việc, tổn hao, hao tổn',
            Nghia: 'Tuy hiện thời đang có sự tổn thất hay thiệt hại, nhưng chẳng bao lâu tình hình sẽ được cân bằng trở lại và hanh thông. Mọi việc không diễn ra đúng như mong đợi và thậm chí có thể gặp phải sự tổn thất. Nhưng dần dần dòng triều bất lợi này sẽ đổi chiều, và những tia bình minh của sự thành công sẽ ló dạng. Những dầu tư hợp tác là cát tưởng'
        },{
            Tenqd : 'SƠN HOẢ BÍ',
            Stt : '7/3',
            Tthai: 'ĐẠI CÁT',
            Kword: 'rõ ràng, sáng suốt, quang minh được nhiều người biết đến',
            Nghia: 'Những gì người ta thấy và biết chỉ là thiển cận, ở trước mắt - chẳng có sự nhìn xa trông rộng hay suy nghĩ sâu xa. Bất kỳ việc gì có liên quan đến nghệ thuật hay mỹ thuật đều thuận lợi. Đối với những việc khác, việc nhỏ thì cát tường, nhưng ở các việc lớn, lực bất tòng tâm (khả năng không phù hợp với ý muốn). Có khả năng có thể bị lừa, mắc bẫy hoặc bị vu khống'
        },{
            Tenqd : 'SƠN LÔI DI',
            Stt : '7/4',
            Tthai: 'CÁT',
            Kword: 'rồng nghỉ ngơi, nuôi dưỡng, nên bồi bổ sức khỏe về ăn uống',
            Nghia: 'Những hành động hấp tấp sẽ dẫn đến thất bại. Phải giữ vững con đường chính đáng của mình, vun bồi nhân cách và khả năng để đạt được thành công. Những lời nói và hành vi bất cẩn có thể mang dén điều không may. Bệnh tật có thể đến từ sự thiếu chăm sóc sức khỏe đúng đắn. Những đầu tư hợp tác thì thuận lợi và khả quan hơn những đầu tư một mình'
        },{
            Tenqd : 'SƠN PHONG CỔ',
            Stt : '7/5',
            Tthai: 'HUNG',
            Kword: 'có sự không yên trong lòng, sửa chữa lại, ngờ vực, tu sửa lại',
            Nghia: 'Tình hình xung quanh cực kỳ rối loạn và phức tạp. Phải dụng công để dọn dẹp ngăn nắp hay duy trì trật tự bằng không sẽ gặp thất bại. Mọi việc đều ngừng trệ và ách tắc - nhiều loại khó khăn và trở ngại xuất hiện. Cùng lúc đó, phải lo toan cho gia đình. Việc gia đình có thể cũng đang rối loạn và xáo trộn'
        },{
            Tenqd : 'SƠN THUỶ MÔNG',
            Stt : '7/6',
            Tthai: 'HUNG',
            Kword: 'không trung thực, mông lung, mê muội',
            Nghia: 'Có sự thiếu dứt khoát, và thiếu quyết tâm. Bạn nên đi theo hay vâng theo các chỉ dẫn của người lớn tuổi, nhiều kinh nghiệm, đồng thời đón nhận lời chỉ bảo bằng thái độ khiêm tốn và cởi mở. Với sự nhẫn nại, lòng tự trọng và tình thần kỷ luật, hãy chờ đợi cho đến khi có chuyển biến tốt đẹp hơn. Khi đó, tương lai xán lạn sẽ đến'
        },{
            Tenqd : 'CẤN VI SƠN',
            Stt : '7/7',
            Tthai: 'BÌNH HÒA',
            Kword: 'chờ đợi, không làm nữa, ngăn cấm',
            Nghia: 'Nhiều trở ngại. Vận hội đang đình trệ và bất động. Hãy bàng quan với các lợi ích thế gian, đừng nói năng quả nhiều, hãy cao thượng và tôn quí giống như ngọn núi, và hay giữ vững những niềm tin hoặc nhận thức không gì lay chuyển mình và chờ đến lúc thích hợp'
        },{
            Tenqd : 'SƠN ĐỊA BÁC',
            Stt : '7/8',
            Tthai: 'HUNG',
            Kword: 'đến rồi đi, buồn thảm, bà con xa lìa nhau và rơi rụng',
            Nghia: 'Vận may của đang xuống dốc. Có thể xảy ra cảnh buồn bã, nghèo khổ hay suy vì trong công việc hoặc sự nghiệp. Thêm nữa, thậm chí có thể bị lôi kéo vào việc tình ái, bị phản bội, bị vu khống, hay bị hại bởi ai đó, và do đó bị mất mát tiền bạc, tài sản.... Phải cẩn thận và thậm chí nên rút lui để bảo toàn tình trạng hay địa vị của mình'
        },{
            Tenqd : 'ĐỊA THIÊN THÁI',
            Stt : '8/1',
            Tthai: 'CÁT HANH',
            Kword: 'trời đất giao hòa, phát triển về phía trước, mở mang, am tường, thấu tình đạt lý',
            Nghia: 'mọi việc sẽ diễn ra đúng như mong đợi hay hy vọng; tương lai trông thật khả quan. Việc kinh doanh sẽ hưng thịnh. Thậm chí có thể côn cơ hội để vui chơi. Nhưng không được vì lẽ đó mà trở nên kiêu ngạo, chểnh mảng, bất cẩn hay lơ là'
        },{
            Tenqd : 'ĐỊA TRẠCH LÂM',
            Stt : '8/2',
            Tthai: 'BÌNH HÒA',
            Kword: 'Bao quản. Việc lớn, người lớn, cha nuôi, vú nuôi, giáo học, nhà sư, kẻ cả, dạy dân, nhà thầu. Quân tử dĩ giáo tư chi tượng: người quân tử dạy dân, che chở, bảo bọc cho dân vô bờ bến.',
            Nghia: 'nếu xử lý mọi việc với thái độ nhường nhịn và hợp tác, cư xử với người khác phù hợp với qui tắc đạo đức đúng đắn, sẽ hưởng được vận may và mọi việc sẽ diễn ra đúng theo mong đợi. Tuy nhiên, để duy trì được vận may, phải biết khiêm tốn, không được ngạo mạn hay hống hách, đồng thời phải đối xử với người khác một cách hòa nhã và nồng hậu'
        },{
            Tenqd : 'ĐỊA HOẢ MINH DI',
            Stt : '8/3',
            Tthai: 'HUNG',
            Kword: 'đau lòng, vắng bóng, tối tăm',
            Nghia: 'Giống như đêm tối, tương lai thật mù mờ, do đó phải nên hết sức cẩn thận cho đến khi bầu trời sáng tỏ. Hãy chờ đợi nhẫn nại cho đến khi vành sáng trở lại trước khi hành động hay tiến bước. Vận rủi, gian nan và vất vả. Ai đó có thể ghen ghét, đố kỵ hay lừa đảo. Có thể bị tổn thương. Phải thật cẩn thận và chờ đợi nhẫn nại với thái độ tự chủ cho đến khi vận hội thay đổi'
        },{
            Tenqd : 'ĐỊA LÔI PHỤC',
            Stt : '8/4',
            Tthai: 'BÌNH HÒA',
            Kword: 'phục hồi, phản đòn, phục lương, quay đầu trở lại, tái diễn',
            Nghia: 'Gần đây vận hội của bạn thật xấu hay đại loại như vậy, nhưng giờ đây vận may đang đến gần. Hãy thận trọng tiến bước bằng những biện pháp có tính toán, biết cân nhắc và theo trình tự, tất cả sẽ chuyển biến tốt đẹp hơn. Đừng hành động liều lĩnh hay khinh suất. Quẻ này cũng gợi ý sự bắt đầu thành công của các kế hoạch'
        },{
            Tenqd : 'ĐỊA PHONG THĂNG',
            Stt : '8/5',
            Tthai: 'CÁT HANH',
            Kword: 'Tiến thủ. Thăng tiến, trực chỉ, tiến mau, bay lên, vọt tới trước, bay lên không trung, thăng chức, thăng hà. Phù giao trực thượng chi tượng: chà đạp để ngoi lên trên',
            Nghia: 'mọi việc đang diễn ra đúng như mong đợi. Đây là lúc cho sự tiến bước dần dần. Thực hiện các việc theo trình tự hợp lý hoặc như đã được hoạch định chu đáo là cát tưởng. Đừng hành động nông nổi hay vội vàng. Những phát triển về phía nam là cát tường. Hữu Ích để thuận theo người có quyền thế, ảnh hưởng và đức hạnh. Bạn có thế thăng tiến cấp bậc hay địa vị'
        },{
            Tenqd : 'ĐỊA THUỶ SƯ',
            Stt : '8/6',
            Tthai: 'CÁT',
            Kword: 'thầy bạn, thân mật, học hỏi, nương tựa lẫn nhau',
            Nghia: 'Thay đổi, chuyển động và dao động. Sóng lớn và gian nan rất nhiều. Đừng hời hợt chạy theo những kế hoạch nhỏ nhặt và phương tiện bất chính. Hay vạch kế hoạch cho bản thân, hãy giữ gìn chính đạo cũng như xử lý mọi việc bằng thái độ quyết tâm, kiên trì, khi đó có thể vượt qua hết mọi khó khăn, đồng thời còn đạt được sự độc đáo, thăng tiến, lợi nhuận cao'
        },{
            Tenqd : 'ĐỊA SƠN KHIÊM',
            Stt : '8/7',
            Tthai: 'CÁT',
            Kword: 'khiêm tốn nhún nhường, lui vào trong',
            Nghia: 'Sự thịnh đạt sẽ đến nếu hết giữ gìn sự khiêm tốn và chân thật trong hành động. an toàn và cát tường, mọi việc sẽ diễn ra đúng như mong đợi. Sẽ gặp thất bại nếu đánh mất lòng khiêm tốn và nhũn nhận. Phải thật nhún nhường'
        },{
            Tenqd : 'KHÔN VI ĐỊA',
            Stt : '8/8',
            Tthai: 'ĐẠI CÁT',
            Kword: 'mềm dẻo, toại chí nương nhờ, có lợi',
            Nghia: 'Đừng hấp tấp, vội vàng, cũng đừng khinh suất, liều lĩnh và đừng hành động một cách quyết liệt, triệt để hay cẩu thả. Hay thực hiện bổn phận của mình một cách thận trọng và có chăm chủ. Hãy nghe theo những lời khuyên của người có khả năng và người khôn ngoan'
        }
    ];

    function splitArray(arr) {
        if (arr.length !== 6) {
          return null; // Đảm bảo rằng mảng có đúng 6 phần tử
        }
      
        const variable1 = `${arr[0] > 8 ? arr[0] - 8 : arr[0]}/${arr[1] > 8 ? arr[1] - 8 : arr[1]}`;
        const variable2 = `${arr[2] > 8 ? arr[2] - 8 : arr[2]}/${arr[3] > 8 ? arr[3] - 8 : arr[3]}`;
        const variable3 = `${arr[4] > 8 ? arr[4] - 8 : arr[4]}/${arr[5] > 8 ? arr[5] - 8 : arr[5]}`;
      
        return [variable1, variable2, variable3];
      }
      

      document.getElementById("logoutButton").addEventListener("click", function () {
        // Chuyển hướng về trang đăng nhập (index.html)
        window.location.href = "index.html";
    });
    
    // phần 2 
    function showInputValue() {
        // Lấy thẻ input theo class
        var inputElement = document.querySelector('.chuoi');
    
        // Lấy nội dung của thẻ input
        var inputValue = inputElement.value;
    
        // Hiển thị giá trị trong console
        
    
        // Hoặc bạn có thể làm gì đó với giá trị này, ví dụ như hiển thị trong một phần tử khác
        // var displayElement = document.getElementById("displayContent");
        // displayElement.textContent = "Nội dung của input là: " + inputValue;

        var bien1 = inputValue.substring(0, 4); // Lấy 4 kí tự đầu
       var bien2 = inputValue.substring(4, 10); // Lấy 6 kí tự tiếp theo (từ kí tự thứ 5 đến kí tự thứ 10)

    // Hiển thị giá trị trong console
        console.log("Biến 1: " + bien1);
       console.log("Biến 2: " + bien2);  
       var sum1 = calculateSum(bien1);
       var sum2 = calculateSum(bien2);
       var sumsdt = sum1+sum2;
       var dusdt = sumsdt%6;
       console.log(sumsdt);
       var Quec1 = sum1%8;
       var Quec2 = sum2%8;
       console.log('quẻ chủ 1 :'+ Quec1 + ' quẻ chủ 2 :'+ Quec2);

       var newObject1 = {};

// Duyệt qua mảng Number và gán giá trị vào đối tượng mới theo điều kiện
Number.forEach(obj => {
  if (obj.id === Quec1) {
    newObject1.hao6 = obj.Hao3;
    newObject1.hao5 = obj.Hao2;
    newObject1.hao4 = obj.Hao1;
  }
  if (obj.id === Quec2) {
    newObject1.hao3 = obj.Hao3;
    newObject1.hao2 = obj.Hao2;
    newObject1.hao1 = obj.Hao1;
  }
});

console.log("Đối tượng mới: ", newObject1);
var newObject2 = {};
newObject2.hao1=newObject1.hao2;
newObject2.hao2=newObject1.hao3;
newObject2.hao3=newObject1.hao4;
newObject2.hao4=newObject1.hao3;
newObject2.hao5=newObject1.hao4;
newObject2.hao6=newObject1.hao5;
console.log("Đối tượng mới: ", newObject2);

// Khởi tạo một đối tượng mới
var newObject3 = {};

// Điều kiện để gán giá trị cho thuộc tính mới của đối tượng mới
if (dusdt !== 1 && dusdt !== 0) {
    newObject3.hao1 = newObject1.hao1;
} else {
    if (newObject1.hao1 === 0) {
        newObject3.hao1 = 1;
    } else {
        newObject3.hao1 = 0;
    }
}

if (dusdt !== 2 && dusdt !== 0) {
    newObject3.hao2 = newObject1.hao2;
} else {
    if (newObject1.hao2 === 0) {
        newObject3.hao2 = 1;
    } else {
        newObject3.hao2 = 0;
    }
}

if (dusdt !== 3 && dusdt !== 0) {
    newObject3.hao3 = newObject1.hao3;
} else {
    if (newObject1.hao3 === 0) {
        newObject3.hao3 = 1;
    } else {
        newObject3.hao3 = 0;
    }
}

if (dusdt !== 4 && dusdt !== 0) {
    newObject3.hao4 = newObject1.hao4;
} else {
    if (newObject1.hao4 === 0) {
        newObject3.hao4 = 1;
    } else {
        newObject3.hao4 = 0;
    }
}

if (dusdt !== 5 && dusdt !== 0) {
    newObject3.hao5 = newObject1.hao5;
} else {
    if (newObject1.hao5 === 0) {
        newObject3.hao5 = 1;
    } else {
        newObject3.hao5 = 0;
    }
}

if (dusdt !== 6 && dusdt !== 0) {
    newObject3.hao6 = newObject1.hao6;
} else {
    if (newObject1.hao6 === 0) {
        newObject3.hao6 = 1;
    } else {
        newObject3.hao6 = 0;

    }
}

   console.log("Đối tượng mới thứ 3: ", newObject3);
   
    var Queh1;
    if (newObject2.hao6 === 0 && newObject2.hao5 === 0 && newObject2.hao4 === 0) {
        Queh1=8;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 0 && newObject2.hao4 === 0) {
        Queh1=7;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 1 && newObject2.hao4 === 0) {
        Queh1=6;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 1 && newObject2.hao4 === 0) {
        Queh1=5;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 0 && newObject2.hao4 === 1) {
        Queh1=4;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 0 && newObject2.hao4 === 1) {
        Queh1=3;
    } else if (newObject2.hao6 === 0 && newObject2.hao5 === 1 && newObject2.hao4 === 1) {
        Queh1=2;
    } else if (newObject2.hao6 === 1 && newObject2.hao5 === 1 && newObject2.hao4 === 1) {
        Queh1=1;
    } else {
        console.log("Sai");
    }
      console.log('quẻ hỗ 1 : '+Queh1);

      var Queh2 ;

      if (newObject2.hao3 === 0 && newObject2.hao2 === 0 && newObject2.hao1 === 0) {
        Queh2=8;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 0 && newObject2.hao1 === 0) {
        Queh2=7;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 1 && newObject2.hao1 === 0) {
        Queh2=6;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 1 && newObject2.hao1 === 0) {
        Queh2=5;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 0 && newObject2.hao1 === 1) {
        Queh2=4;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 0 && newObject2.hao1 === 1) {
        Queh2=3;
    } else if (newObject2.hao3 === 0 && newObject2.hao2 === 1 && newObject2.hao1 === 1) {
        Queh2=2;
    } else if (newObject2.hao3 === 1 && newObject2.hao2 === 1 && newObject2.hao1 === 1) {
        Queh2=1;
    } else {
        console.log("Sai");
    }

    console.log('quẻ hỗ 2 : '+Queh2);

    var Queb1;
    if (newObject3.hao6 === 0 && newObject3.hao5 === 0 && newObject3.hao4 === 0) {
        Queb1=8;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 0 && newObject3.hao4 === 0) {
        Queb1=7;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 1 && newObject3.hao4 === 0) {
        Queb1=6;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 1 && newObject3.hao4 === 0) {
        Queb1=5;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 0 && newObject3.hao4 === 1) {
        Queb1=4;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 0 && newObject3.hao4 === 1) {
        Queb1=3;
    } else if (newObject3.hao6 === 0 && newObject3.hao5 === 1 && newObject3.hao4 === 1) {
        Queb1=2;
    } else if (newObject3.hao6 === 1 && newObject3.hao5 === 1 && newObject3.hao4 === 1) {
        Queb1=1;
    } else {
        console.log("Sai");
    }
    console.log('quẻ b1 : '+Queb1);
     
    var Queb2;
    if (newObject3.hao3 === 0 && newObject3.hao2 === 0 && newObject3.hao1 === 0) {
        Queb2=8;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 0 && newObject3.hao1 === 0) {
        Queb2=7;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 1 && newObject3.hao1 === 0) {
        Queb2=6;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 1 && newObject3.hao1 === 0) {
        Queb2=5;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 0 && newObject3.hao1 === 1) {
        Queb2=4;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 0 && newObject3.hao1 === 1) {
        Queb2=3;
    } else if (newObject3.hao3 === 0 && newObject3.hao2 === 1 && newObject3.hao1 === 1) {
        Queb2=2;
    } else if (newObject3.hao3 === 1 && newObject3.hao2 === 1 && newObject3.hao1 === 1) {
        Queb2=1;
    } else {
        console.log("Sai");
    }
    
     var q1 = Quec1.toString() + '/' + Quec2.toString();
     var q2 = Queh1.toString() + '/' + Queh2.toString();
     var q3 = Queb1.toString() + '/' + Queb2.toString();
     
    
     const BangCuoi = document.querySelector('#customerse-bangc tbody');
     BangCuoi.innerHTML="";
     let quyChe = {
        quyCheChu: null,
        quyCheHo: null,
        quyCheBien: null
    };
    
    QDich.forEach(function (item) {
        if (q1 == item.Stt) {
            quyChe.quyCheChu = `
                <td>Quẻ chủ</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
    
        if (q2 == item.Stt) {
            quyChe.quyCheHo = `
                <td>Quẻ hỗ</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
    
        if (q3 == item.Stt) {
            quyChe.quyCheBien = `
                <td>Quẻ biến</td>
                <td>${item.Tenqd}</td>
                <td>${item.Stt}</td>
                <td>${item.Tthai}</td>
                <td>${item.Kword}</td>
                <td>${item.Nghia}</td>
            `;
        }
    });
    
    BangCuoi.innerHTML = "";
    
    const newRowChu = document.createElement("tr");
    newRowChu.innerHTML = quyChe.quyCheChu;
    BangCuoi.appendChild(newRowChu);
    
    const newRowHo = document.createElement("tr");
    newRowHo.innerHTML = quyChe.quyCheHo;
    BangCuoi.appendChild(newRowHo);
    
    const newRowBien = document.createElement("tr");
    newRowBien.innerHTML = quyChe.quyCheBien;
    BangCuoi.appendChild(newRowBien);
    
    }
    function calculateSum(str) {
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        return sum;
    }
    const Number=[
        {
            id : 0,
            Hao3: 0,
            Hao2: 0,
            Hao1: 0
        },{
            id : 1,
            Hao3: 1,
            Hao2: 1,
            Hao1: 1
        },{
            id : 2,
            Hao3: 0,
            Hao2: 1,
            Hao1: 1
        },{
            id : 3,
            Hao3: 1,
            Hao2: 0,
            Hao1: 1
        },{
            id : 4,
            Hao3: 0,
            Hao2: 0,
            Hao1: 1
        },{
            id : 5,
            Hao3: 1,
            Hao2: 1,
            Hao1: 0
        },{
            id : 6,
            Hao3: 0,
            Hao2: 1,
            Hao1: 0
        },{
            id : 7,
            Hao3: 1,
            Hao2: 0,
            Hao1: 0
        },{
            id : 8,
            Hao3: 0,
            Hao2: 0,
            Hao1: 0
        },{
            id : 9,
            Hao3: 1,
            Hao2: 1,
            Hao1: 1
        }
    ];
      
      
      