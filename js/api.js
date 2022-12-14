$(document).ready(function () {

    const adoptCard = $("#adoptCard");
    const detail = $("#detail");

    axios.get('https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=1000&$skip=0&animal_kind=%e8%b2%93')
        .then((res) => {

            let data = res.data;
            let dataText = "";
            let detailText = "";

            data.forEach(petFun);

            function petFun(item, index) {
                
                if(item.animal_Variety == "混種貓"){
                    item.animal_Variety = "米克斯"
                }
                if(item.animal_sex == "F"){
                    item.animal_sex = "母&nbsp;<i class='fa-solid fa-venus'></i>";
                }else{
                    item.animal_sex = "公&nbsp;<i class='fa-solid fa-mars'></i>";
                }
                
                if (index < 100)
                    if (item.album_file !== "") {
                        dataText +=
                            `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :(&nbsp;圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                        detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                    } else {

                        dataText +=
                            `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                        detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    }
            }

            adoptCard.append(dataText);
            detail.append(detailText);

            $("#cat1").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 100)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat2").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 200 && index >= 100)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat3").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 300 && index >= 200)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat4").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 400 && index >= 300)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat5").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 500 && index >= 400)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat6").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 600 && index >= 500)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4">
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })
            
            $("#cat7").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 700 && index >= 600)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })

            $("#cat8").on("click", function () {

                adoptCard.empty();
                let dataText = "";
                let detailText = "";

                data.forEach(petFun);

                function petFun(item, index) {
                    if (index < 800 && index >= 700)
                        if (item.album_file !== "") {
                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="${item.album_file}" alt=" &nbsp; :( 圖片網址失效" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index+1}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                                <p><a href='${item.album_file}' target='_blank'>點擊看大圖&nbsp;<i class='fa-solid fa-arrow-up-right-from-square'></i></a></p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                        } else {

                            dataText +=
                                `<div class="col mb-4 wow animate__animated animate__slideInUp mt-4" >
                                    <div class="card catCard " data-toggle="modal" data-target="#detailModal${item.animal_id}">

                                        <img src="./img/alt.png" alt="photo" class="card-img-top photo" title="編號-${item.animal_subid}">

                                        <div class="card-body">
                                        <h5 class="card-title">no.&nbsp;${index}</h5>
                                        <p class="card-text">品種:&nbsp;${item.animal_Variety}</p>
                                        <p class="card-text">地區:&nbsp;${item.shelter_address.slice(0,3)}</p>
                                        </div>
                                    </div>                                            
                            </div>`;

                            detailText += `
                                <div class="modal fade" id="detailModal${item.animal_id}" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered">
                                        <div class="modal-content" >
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">編號:&nbsp;${item.animal_subid}</h5>
                                            </div>
                                            <div class="modal-body px-4" >
                                                <p>品種:&nbsp;${item.animal_Variety}</p>
                                                <p>毛色:&nbsp;${item.animal_colour}</p>
                                                <p>性別:&nbsp;${item.animal_sex}</p>
                                                <p>認養地點:&nbsp;${item.shelter_name}</p>
                                                <p>地址:&nbsp;${item.shelter_address}</p>
                                                <p>電話:&nbsp;${item.shelter_tel}</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                }

                adoptCard.append(dataText);
                detail.append(detailText);
            })

        });

});