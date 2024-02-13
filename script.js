let deliverTo = document.querySelector("#deliverto");
let setLocation = document.querySelector(".setLocation");
let dropdown = document.querySelectorAll(".setLocation select")
let done = document.querySelector("#done p");
let deliverPlace = document.querySelector("#dd2");
let allsel = document.querySelectorAll(".sel select");
let searchic = document.querySelector("#searchic");
let URL = `https://www.amazon.com/s?k=`;
let searchica = document.querySelector("#searchbar a")
let b4sel = document.querySelectorAll("#b4sel");
let b5 = document.querySelector("#box5");
let flyout = document.querySelector("#flyout");
let box5 = document.querySelector("#box5");
let fly = document.querySelector(".fly");
let box7 = document.querySelector("#box7");
let all = document.querySelector("#all");
let lwin = document.querySelector(".lwin");
let cross = document.querySelector(".cross");
let addtoCart = document.querySelectorAll("#a button")
let c = 0;
let sum = 0;
let q = 0;
let addedimg = document.querySelector("#added2 img");
let platformDis = document.querySelector("#added2p2_1");
let cartSub = document.querySelector("#cartsub1");
let amazon = document.querySelector("#logo");
let im = document.querySelectorAll(".chk1")
let subtotal = document.querySelector("#subtotal b");
let del = document.querySelectorAll("#chk117");

amazon.addEventListener("click",()=>{
    document.querySelector("#front").style.display = "block";
    document.querySelector("#cart").style.display = "none";
    document.querySelector("#fn2").style.top = "700px";
    document.querySelector("#fn3").style.top = "700px";
    document.querySelector("#fn4").style.top = "700px";
    document.querySelector("#footnav1").style.top = "700px";
    document.querySelector("#added").style.display = "none";
})

deliverTo.addEventListener("click", ()=>{
    setLocation.classList.add("hidden");
    bright();
});

for(select of dropdown){
    for(country of countryList){
        let newOption = document.createElement("option");
        newOption.innerText = country;
        newOption.value = country;
        if(newOption.value==="India")
        {
            newOption.selected = "selected";
        }
        select.append(newOption);
        
    }
    select.addEventListener("change",(evt)=>{
        complete(evt.target);

    })
};

const complete = (element) =>{
    done.addEventListener("click",()=>{
        deliverPlace.innerText = element.value;
        deliverTo.style.width = "auto";
        setLocation.classList.remove("hidden");
        normal();
    })
}

done.addEventListener("click",()=>{
    setLocation.classList.remove("hidden");
    normal();
})

const bright = () =>{
    document.querySelector("#front").classList.add("bright");
    document.querySelector("#cart").classList.add("bright");
    document.querySelector("footer").classList.add("bright");
    let ab = document.querySelectorAll(".ab");
    for(a of ab){
        a.classList.add("bright");
    }
    document.querySelector("#searchbar").classList.add("bright");
    document.querySelector(".navbar2").classList.add("bright");
}

const normal = () =>{
    document.querySelector("#front").classList.remove("bright");
    document.querySelector("#cart").classList.remove("bright");
    document.querySelector("footer").classList.remove("bright");
    let ab = document.querySelectorAll(".ab");
    for(a of ab){
        a.classList.remove("bright");
    }
    document.querySelector("#searchbar").classList.remove("bright");
    document.querySelector(".navbar2").classList.remove("bright");
}

const bri = () =>{
    document.querySelector("#front").classList.add("bright");
    document.querySelector("#cart").classList.add("bright");
}

const nor = () =>{
    document.querySelector("#front").classList.remove("bright");
    document.querySelector("#cart").classList.remove("bright");
}

const br = () =>{
    document.querySelector("header").classList.add("bright");
    document.querySelector("main").classList.add("bright");
    document.querySelector("footer").classList.add("bright");
}

const no = () =>{
    document.querySelector("header").classList.remove("bright");
    document.querySelector("main").classList.remove("bright");
    document.querySelector("footer").classList.remove("bright");
}

for(sel of allsel){
    for(dep of departments){
        let newOption = document.createElement("option");
        newOption.innerText = dep;
        newOption.value = dep;
        sel.append(newOption);
    }
    sel.addEventListener("change",(evt)=>{
        let event = evt.target;
        if(event.value.length<=5)
        {
            document.querySelector(".sel").style.width = "56px";
            sel.style.width = "56px";
        }
        else if(event.value.length<=13){
            document.querySelector(".sel").style.width = "102px";
            sel.style.width = "102px";
        }
        else if(event.value.length>=18){
            document.querySelector(".sel").style.width = "170px";
            sel.style.width = "170px";
        }
        else if(event.value.length>=13){
            document.querySelector(".sel").style.width = "136px";
            sel.style.width = "136px";
        }
    })
    document.querySelector("#sear").addEventListener("change",(evt)=>{
        document.querySelector("#sear").ariaPlaceholder = evt.target.value;
        if(sel.value!="nfsjns") // CHANGE THIS TO ALL IN FUTURE TO APPLY THE CATEGORY TO DIFFERENT SELECTS
        {
            searchica.href = `${URL}${evt.target.value}`; // IN FUTURE ADD SEARCH BASED ON CATEGORIES
        }
        searchic.addEventListener("click",()=>{
        })
    });

}

for(sel2 of b4sel){
    for(code of codes)
    {
        let newOption = document.createElement("option");
        newOption.innerText = code.toUpperCase();
        newOption.value = code.toUpperCase();
        sel2.append(newOption);
    }
}

window.addEventListener("load",()=>{
    setTimeout(()=>{
        flyout.classList.add("hide");
    },4000)
    setTimeout(()=>{
        flyout.style.display = "none";
    },7000)
})

box5.addEventListener("mouseover",()=>{
    fly.classList.add("hidden");
    flyout.style.display = "none";
    bri();
    fly.addEventListener("mouseover",()=>{
        fly.classList.add("hidden");
        bri();
        box5.addEventListener("mouseout",()=>{
            fly.classList.remove("hidden");
            normal();
        })
        fly.addEventListener("mouseout",()=>{
            fly.classList.remove("hidden");
            normal();
        })
    })
})

box7.addEventListener("click",()=>{
    document.querySelector("#front").style.display = "none";
    document.querySelector("#cart").style.display = "block";
    document.querySelector("#footnav1").style.top = "350px";
    document.querySelector("#fn2").style.top = "350px";
    document.querySelector("#fn3").style.top = "350px";
    document.querySelector("#fn4").style.top = "350px";
    document.querySelector("#added").style.display = "none";
})

all.addEventListener("click", ()=>{
    lwin.classList.remove("remove");
    lwin.classList.add("show");
    setTimeout(()=>{
        lwin.style.left = "0px";
        cross.style.display = "inline";
        br();
    },500)
})

cross.addEventListener("click",()=>{
    lwin.classList.remove("show");
    lwin.classList.add("remove");
    setTimeout(()=>{
        lwin.style.left = "-365px";
        cross.style.display = "none";
        no();
    },500)
})

// window.addEventListener("load",()=>{
//     evt.preventDefault();
// })


// document.querySelector("#sear").addEventListener("change",(evt)=>{
//     document.querySelector("#sear").ariaPlaceholder = evt.target.value;
    
// })

for(cart of addtoCart){
    cart.addEventListener("click",(evt)=>{
        let even = evt.target;
        let en = even.parentElement.parentElement;
        document.querySelector("#added").style.display = "inline"
        document.querySelector("#cart").style.display = "none";
        document.querySelector("#subtotal").style.display = "block";
        document.querySelector("#b7o").innerText = ++c;
        let e = en.childNodes;
        let pd = e[3];
        pd = pd.childNodes;
        cartSub.innerText = pd[17].innerText.trim();
        platformDis.innerText = pd[15].innerText.trim();
        addedimg.src = e[1].src;
        for(i = 0; i<=7; i++)
        {
            let imag = im[i].childNodes;
            let imag2 = imag[3].childNodes;
            let imag3 = imag2[5].childNodes;
            if(e[1].src.slice(43)==imag[1].src.slice(43)){
                document.querySelector(`#${im[i].getAttribute("id")}`).style.display = "flex";
                imag3[1].innerText = Number(imag3[1].innerText)+1;
                imag2[3].innerText = cartSub.innerText;
                sum = Number(sum) + Number(cartSub.innerText.slice(1));
                sum = sum.toFixed(2);
                subtotal.innerText = `$${sum}`;
            }
        }
        // console.log(document.querySelector(".chk1 img").src);
    })
}

document.querySelector("#cartsub3").addEventListener("click",()=>{
    // document.querySelector("#checkout").style.display = "inline";
    document.querySelector("#footnav1").style.top = "450px";
    document.querySelector("#fn2").style.top = "450px";
    document.querySelector("#fn3").style.top = "450px";
    document.querySelector("#fn4").style.top = "450px";
    document.querySelector("#added").style.display = "none";
    document.querySelector("#cart").style.display = "inline";
    document.querySelector("#cbox").style.display = "none";
    document.querySelector("#checkoutinner").style.display = "inline";
    document.querySelector("#cboo").style.display = "none";
    document.querySelector("#spare").style.display = "none";
    document.querySelector("#cboo1").style.display = "none";
    document.querySelector(".hr1").style.display = "none";
    document.querySelector(".hr2").style.display = "none";
})

for(d of del){
    d.addEventListener("click", (evt)=>{
        let event = evt.target;
        let pd = event.parentElement.parentElement;
        let pd1 =  event.parentElement;
        pd1 = pd1.childNodes;
        pd2 = pd1[5];
        pd2 = pd2.childNodes;
        if(pd2[1].innerText==1)
        {
            pd.style.display = "none";
        }
        pd2[1].innerText = Number(pd2[1].innerText) - 1;
        pd1 = pd1[3];
        pd1 = Number(pd1.innerText.slice(1));
        sum = (sum-pd1).toFixed(2);
        subtotal.innerText = `$${sum}`;
        document.querySelector("#b7o").innerText = --c;
    })
}









