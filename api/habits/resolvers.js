export const habitResolvers = {
  Query: {
    async addHabit() {
      console.log('habits')
      return [
        {
          _id: 'dslafjd;kafjdskfds',
          name: 'make my bed',
        },
      ]
    },
  },
}
