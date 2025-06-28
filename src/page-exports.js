export function home_page() {
    const content = document.querySelector("#content");
    const heading = document.querySelector("#heading");
    const overView = document.createElement("div");
    const hours = document.createElement("div");
    const location = document.createElement("div");
    const overView_text = document.createElement("p");
    const hours_head = document.createElement("h2");
    const hours_wrapper = document.createElement("div");
    const hours_text = document.createElement("p");
    const hours_text2 = document.createElement("p");
    const location_header = document.createElement("h2");
    const location_text = document.createElement("p");
    
    heading.textContent = "Cooper's Pancakes and Waffle shop";
    overView.setAttribute("id", "content-wrapper");
    hours.setAttribute("id", "content-wrapper");
    location.setAttribute("id", "content-wrapper");
    overView_text.textContent = "This pancake and waffle resturant serves the top quality pancakes and waffles. We have many kinds and many toppings. We have waffles and pancakes for everyone.";
    hours_head.textContent = "Hours:";
    hours_text.textContent = "Monday - Friday: 11:00am - 6:00pm";
    hours_text2.textContent = "Saturday - Sunday: 12:00pm - 4:00pm";
    location_header.textContent = "Location:";
    location_text.textContent = "Melbourne N/A 123 road.";

    overView.appendChild(overView_text);
    hours.appendChild(hours_head);
    hours_wrapper.appendChild(hours_text);
    hours_wrapper.appendChild(hours_text2);
    hours.appendChild(hours_wrapper);
    location.appendChild(location_header);
    location.appendChild(location_text);
    content.appendChild(overView);
    content.appendChild(hours);
    content.appendChild(location);
}

export function menu_page() {
    const content = document.querySelector("#content");
    const heading = document.querySelector("#heading");
    const pancake_menu = document.createElement("div");
    const waffle_menu = document.createElement("div");
    const other_menu = document.createElement("div");
    const pancake_menu_head = document.createElement("h2");
    const pancake_menu_list = document.createElement("ul");
    const pancake_1 = document.createElement("li");
    const pancake_2 = document.createElement("li");
    const pancake_3 = document.createElement("li");
    const waffle_menu_head = document.createElement("h2");
    const waffle_menu_list = document.createElement("ul");
    const waffle_1 = document.createElement("li");
    const waffle_2 = document.createElement("li");
    const waffle_3 = document.createElement("li");
    const other_menu_head = document.createElement("h2");
    const other_menu_list = document.createElement("ul");
    const other_1 = document.createElement("li");
    const other_2 = document.createElement("li");
    const other_3 = document.createElement("li");

    heading.textContent = "Our Menu:";
    pancake_menu.setAttribute("id", "content-wrapper");
    waffle_menu.setAttribute("id", "content-wrapper");
    other_menu.setAttribute("id", "content-wrapper");
    pancake_menu_head.textContent = "Our pancake menu:";
    pancake_1.textContent = "regular: $6.50";
    pancake_2.textContent = "strawberry: $8.00";
    pancake_3.textContent = "banana: $8.00";
    waffle_menu_head.textContent = "Our waffle menu:";
    waffle_1.textContent = "regular: $7.00";
    waffle_2.textContent = "strawberry: $8.00";
    waffle_3.textContent = "banana: $9.00";
    other_menu_head.textContent = "Others:";
    other_1.textContent = "ice-cream: $5.00";
    other_2.textContent = "Frozen Yoghurt: $7.00";
    other_3.textContent = "Smoothies: $6.00";

    pancake_menu_list.appendChild(pancake_1);
    pancake_menu_list.appendChild(pancake_2);
    pancake_menu_list.appendChild(pancake_3);
    pancake_menu.appendChild(pancake_menu_head);
    pancake_menu.appendChild(pancake_menu_list);
    waffle_menu_list.appendChild(waffle_1);
    waffle_menu_list.appendChild(waffle_2);
    waffle_menu_list.appendChild(waffle_3);
    waffle_menu.appendChild(waffle_menu_head);
    waffle_menu.appendChild(waffle_menu_list);
    other_menu_list.appendChild(other_1);
    other_menu_list.appendChild(other_2);
    other_menu_list.appendChild(other_3);
    other_menu.appendChild(other_menu_head);
    other_menu.appendChild(other_menu_list);
    content.appendChild(pancake_menu);
    content.appendChild(waffle_menu);
    content.appendChild(other_menu);
}

export function about_page() {
    const content = document.querySelector("#content");
    const heading = document.querySelector("#heading");
    const about = document.createElement("div");
    const staff = document.createElement("div");
    const contact = document.createElement("div");
    const about_text = document.createElement("p");
    const staff_head = document.createElement("h2");
    const staff_list = document.createElement("ul");
    const staff_1 = document.createElement("li");
    const staff_2 = document.createElement("li");
    const contact_head = document.createElement("h2");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    about.setAttribute("id", "content-wrapper");
    staff.setAttribute("id", "content-wrapper");
    contact.setAttribute("id", "content-wrapper");
    heading.textContent = "About us:";
    about_text.textContent = "This pancake and waffle shop started when we wanted to give this town a delicous treat. We have a deep love for pancakes and waffles and felt the town needed more of them.";
    staff_head.textContent = "Our staff:";
    staff_1.textContent = "Manager: Cooper";
    staff_2.textContent = "Web designer: Cooper";
    contact_head.textContent = "Contact us";
    email.textContent = "resturant@gmail.com";
    phone.textContent = "555-555-5555";

    staff_list.appendChild(staff_1);
    staff_list.appendChild(staff_2);
    about.appendChild(about_text);
    staff.appendChild(staff_head);
    staff.appendChild(staff_list);
    contact.appendChild(contact_head);
    contact.appendChild(email);
    contact.appendChild(phone);
    content.appendChild(about);
    content.appendChild(staff);
    content.appendChild(contact);
}