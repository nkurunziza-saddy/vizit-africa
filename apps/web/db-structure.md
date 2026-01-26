// users
Table users {
id integer [primary key]
full_name varchar
email varchar [unique]
password_hash varchar
phone varchar
role varchar // 'tourist', 'vendor', 'admin'
preferred_currency varchar
created_at timestamp
}

Table vendors {
id integer [primary key]
user_id integer [ref: - users.id]
business_name varchar
vendor_type varchar // 'hotel','bnb','car_rental','guide','tour_operator'
bio text
is_approved boolean [default: false]
approved_by integer [ref: > users.id]
approved_at timestamp
}

// locations
Table locations {
id integer [primary key]
name varchar // 'Kigali', 'Musanze'
country varchar
latitude decimal
longitude decimal
}

// listings
Table listings {
id integer [primary key]
vendor_id integer [ref: > vendors.id]
location_id integer [ref: > locations.id]
title varchar
listing_type varchar // 'hotel_room','bnb','car','tour','guide'
description text
base_price decimal
currency varchar
capacity integer
status varchar // 'draft','active','paused'
created_at timestamp
}

Table listing_media {
id integer [primary key]
listing_id integer [ref: > listings.id]
media_url varchar
media_type varchar // 'image','video'
sort_order integer
}

Table availabilities {
id integer [primary key]
listing_id integer [ref: > listings.id]
start_date date
end_date date
available_quantity integer
price_override decimal
is_blocked boolean [default: false]
}

// booking
Table bookings {
id integer [primary key]
user_id integer [ref: > users.id]
total_amount decimal
currency varchar
status varchar // 'pending','confirmed','cancelled','completed'
created_at timestamp
updated_at timestamp
}

Table booking_items {
id integer [primary key]
booking_id integer [ref: > bookings.id]
listing_id integer [ref: > listings.id]
start_date date
end_date date
quantity integer
unit_price decimal
subtotal decimal
}

Table tickets {
id integer [primary key]
booking_id integer [ref: > bookings.id]
pdf_url varchar
qr_code_data varchar
issued_at timestamp
expires_at timestamp
}

// finance
Table payments {
id integer [primary key]
booking_id integer [ref: - bookings.id]
provider varchar // 'Stripe'
provider_payment_id varchar
amount decimal
currency varchar
status varchar // 'pending','succeeded','failed','refunded'
paid_at timestamp
}

Table transactions {
id integer [primary key]
booking_id integer [ref: > bookings.id]
vendor_id integer [ref: > vendors.id]
amount decimal
currency varchar
transaction_type varchar // 'commission','payout','refund'
status varchar
created_at timestamp
}

Table currency_rates {
id integer [primary key]
base_currency varchar
target_currency varchar
rate decimal
fetched_at timestamp
}

// feedback
Table testimonials {
id integer [primary key]
user_id integer [ref: > users.id]
listing_id integer [ref: > listings.id]
rating int
comment text
created_at timestamp
}
