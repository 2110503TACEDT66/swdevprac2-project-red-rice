interface Reservation {
    dateTime: string,
    id: string,
    restaurant: {
      address: string,
      closeTime: string,
      description: string,
      facebook: string,
      id: string,
      imageUrl: string,
      instagram: string,
      name: string,
      openTime: string,
      telephone: string
    },
    restaurantId: string,
    user: {
      email: string,
      id: string,
      name: string,
      password: string,
      role: string,
      telephone: string
    },
    userId: string
  }

export default Reservation;


