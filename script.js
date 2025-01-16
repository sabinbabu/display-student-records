// students records
const students = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    age: 21,
    address: "123 Maple Street, Sydney, Australia",
    email: "alice.johnson@example.com",
    phone: "0412 345 678",
  },
  {
    name: "Bob Smith",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    age: 23,
    address: "456 Oak Avenue, Melbourne, Australia",
    email: "bob.smith@example.com",
    phone: "0413 456 789",
  },
  {
    name: "Charlie Brown",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    age: 22,
    address: "789 Pine Road, Brisbane, Australia",
    email: "charlie.brown@example.com",
    phone: "0414 567 890",
  },
  {
    name: "Daisy Wilson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    age: 24,
    address: "321 Elm Street, Perth, Australia",
    email: "daisy.wilson@example.com",
    phone: "0415 678 901",
  },
  {
    name: "Ethan Garcia",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 25,
    address: "654 Cedar Lane, Adelaide, Australia",
    email: "ethan.garcia@example.com",
    phone: "0416 789 012",
  },
  {
    name: "Fiona Lee",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    age: 22,
    address: "987 Birch Blvd, Canberra, Australia",
    email: "fiona.lee@example.com",
    phone: "0417 890 123",
  },
  {
    name: "George Miller",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    age: 20,
    address: "543 Spruce Court, Hobart, Australia",
    email: "george.miller@example.com",
    phone: "0418 901 234",
  },
  {
    name: "Hannah Clark",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    age: 21,
    address: "876 Willow Way, Darwin, Australia",
    email: "hannah.clark@example.com",
    phone: "0419 012 345",
  },
  {
    name: "Ian Martinez",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    age: 23,
    address: "432 Aspen Drive, Sydney, Australia",
    email: "ian.martinez@example.com",
    phone: "0420 123 456",
  },
  {
    name: "Julia Lopez",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    age: 24,
    address: "765 Redwood Trail, Melbourne, Australia",
    email: "julia.lopez@example.com",
    phone: "0421 234 567",
  },
  {
    name: "Kevin Turner",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    age: 22,
    address: "678 Magnolia Lane, Brisbane, Australia",
    email: "kevin.turner@example.com",
    phone: "0422 345 678",
  },
  {
    name: "Laura Adams",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    age: 21,
    address: "987 Cypress Road, Perth, Australia",
    email: "laura.adams@example.com",
    phone: "0423 456 789",
  },
  {
    name: "Michael White",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    age: 23,
    address: "321 Maple Street, Adelaide, Australia",
    email: "michael.white@example.com",
    phone: "0424 567 890",
  },
  {
    name: "Natalie Hill",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    age: 25,
    address: "654 Elm Avenue, Canberra, Australia",
    email: "natalie.hill@example.com",
    phone: "0425 678 901",
  },
  {
    name: "Oliver Scott",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    age: 22,
    address: "789 Cedar Blvd, Hobart, Australia",
    email: "oliver.scott@example.com",
    phone: "0426 789 012",
  },
  {
    name: "Paula King",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    age: 20,
    address: "543 Birch Trail, Darwin, Australia",
    email: "paula.king@example.com",
    phone: "0427 890 123",
  },
  {
    name: "Quinn Parker",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    age: 23,
    address: "876 Spruce Way, Sydney, Australia",
    email: "quinn.parker@example.com",
    phone: "0428 901 234",
  },
  {
    name: "Rachel Allen",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    age: 24,
    address: "432 Willow Court, Melbourne, Australia",
    email: "rachel.allen@example.com",
    phone: "0429 012 345",
  },
  {
    name: "Sam Davis",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    age: 22,
    address: "765 Aspen Lane, Brisbane, Australia",
    email: "sam.davis@example.com",
    phone: "0430 123 456",
  },
  {
    name: "Tina Edwards",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    age: 21,
    address: "678 Redwood Blvd, Perth, Australia",
    email: "tina.edwards@example.com",
    phone: "0431 234 567",
  },
];

const studentContainer = document.querySelector(".student-records-container");

// looping over data
students.map((student) => {
  // create new div element
  const studentCard = document.createElement("div");
  studentCard.classList.add("card");
  studentCard.innerHTML = `<div class="flex">
                                <img
                                    src=${student.image}
                                    alt=${student.name}
                                />
                            </div>
                             <h2>${student.name}</h2>
                            <table>
                                <tr>
                                    <td>Age :</td>
                                    <td><b>${student.age}</b></td>
                                </tr>  

                                 <tr>
                                    <td>Address:</td>
                                    <td><b>${student.address}</b></td>
                                </tr>    
                                
                                <tr>
                                    <td>Email :</td>
                                    <td><b>${student.email}</b></td>
                                </tr>   

                                <tr>
                                    <td>Phone :</td>
                                    <td><b>${student.phone}</b></td>
                                </tr>   
                            </table>
`;
  // add new div to container
  studentContainer.appendChild(studentCard);
});
