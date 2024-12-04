function generateCoupon(type) {
    const couponCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById(`${type}-coupon`).innerText = `Your coupon code is: ${couponCode}`;
}

function validateBirthday() {
    const dobInput = document.getElementById('birthday-input').value;
    const today = new Date();
    const dob = new Date(dobInput);

    if (dobInput === "") {
        alert("Please enter your date of birth.");
        return;
    }

    if (today.getDate() === dob.getDate() && today.getMonth() === dob.getMonth()) {
        generateCoupon('birthday');
    } else {
        alert("Your birthday does not match today's date. Coupon not valid.");
        document.getElementById('birthday-coupon').innerText = "";
    }
}

function validateAnniversary() {
    const anniversaryInput = document.getElementById('anniversary-input').value;
    const today = new Date();
    const anniversary = new Date(anniversaryInput);

    if (anniversaryInput === "") {
        alert("Please enter your anniversary date.");
        return;
    }

    if (today.getDate() === anniversary.getDate() && today.getMonth() === anniversary.getMonth()) {
        generateCoupon('anniversary');
    } else {
        alert("Your anniversary does not match today's date. Coupon not valid.");
        document.getElementById('anniversary-coupon').innerText = "";
    }
}