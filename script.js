
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleIcon.textContent = "☀️";
    } else {
        toggleIcon.textContent = "🌙"; 
    }
}

function switchToSignup() {
    document.getElementById("loginForm").classList.add("d-none");
    document.getElementById("signupForm").classList.remove("d-none");
    document.getElementById("modalTitle").innerText = "Sign Up";
    document.getElementById("switchText").innerHTML = 
        `Already have an account? <a href="#" onclick="switchToLogin()">Login</a>`;
}

function switchToLogin() {
    document.getElementById("signupForm").classList.add("d-none");
    document.getElementById("loginForm").classList.remove("d-none");
    document.getElementById("modalTitle").innerText = "Login";
    document.getElementById("switchText").innerHTML = 
        `Don’t have an account? <a href="#" onclick="switchToSignup()">Sign Up</a>`;
}

(function(){
      const wishes = new Set();
      let cartCount = 0;
      const wishCountEl = document.getElementById('wishCount');
      const cartCountEl = document.getElementById('cartCount');
      document.querySelectorAll('.wish').forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          const card = btn.closest('.product-card');
          const id = card.getAttribute('data-id');
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            wishes.delete(id);
          } else {
            btn.classList.add('active');
            wishes.add(id);
          }
          wishCountEl.textContent = wishes.size;
        });
      });
      document.querySelectorAll('.btn-add').forEach(b=>{
        b.addEventListener('click', function(e){
          e.stopPropagation();
          cartCount++;
          cartCountEl.textContent = cartCount;
          b.textContent = "Added ✓";
          b.disabled = true;
          setTimeout(()=>{ b.textContent = "Add to Cart"; b.disabled=false; }, 1300);
        });
      });
      document.querySelectorAll('.btn-quick').forEach(b=>{
        b.addEventListener('click', function(e){
          e.stopPropagation();
          const card = b.closest('.product-card');
          const title = card.querySelector('.title').textContent;
          alert("Quick view: " + title);
        });
      });
    })();
function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email === "" || pass === "") {
        alert("Please fill all login fields!");
        return;
    }

    alert("Login Successful!");
}
const products = Array.from({ length: 30 }, (_, i) => ({
title: `Product ${i+1}`,
desc: `This is product description ${i+1}.`,
price: Math.floor(Math.random() * 3000) + 499,
img: `images/products/p${i+1}.jpg`
}));


const list = document.getElementById("product-list");


products.forEach(p => {
list.innerHTML += `
<div class="col-md-3 mb-4">
<div class="card product-card shadow-sm">
<img src="${p.img}" class="card-img-top" />
<div class="card-body">
<h5 class="card-title">${p.title}</h5>
<p class="text-muted small">${p.desc}</p>
<p class="fw-bold">₹${p.price}</p>
<div class="d-flex justify-content-between mt-3">
<button class="btn btn-outline-dark btn-sm">Wishlist</button>
<button class="btn btn-dark btn-sm">Add to Cart</button>
</div>
</div>
</div>
</div>`;
});
let cart = [];
let wishlist = [];


function addToCart(product) {
cart.push(product);
console.log("CART:", cart);
alert(product.title + " added to cart!");
}


function addToWishlist(product) {
wishlist.push(product);
console.log("WISHLIST:", wishlist);
alert(product.title + " added to wishlist!");
}
setTimeout(() => {
document.querySelectorAll('.btn-dark.btn-sm').forEach((btn, index) => {
btn.addEventListener('click', () => addToCart(products[index]));
});


document.querySelectorAll('.btn-outline-dark.btn-sm').forEach((btn, index) => {
btn.addEventListener('click', () => addToWishlist(products[index]));
});
}, 300);

