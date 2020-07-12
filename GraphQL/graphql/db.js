export let People = [
    {
        id: 0,
        name: 'person1',
        age: '19',
    },
    {
        id: 1,
        name: 'person2',
        age: '19',
    },
    {
        id: 2,
        name: 'person3',
        age: '20',
    },
];

export const getPersonsById = (id) => {
    let filteredPeople = People.filter((person) => {
        return person.id === id;
    });
    return filteredPeople[0];
};
