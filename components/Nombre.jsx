import TypeIt from 'typeit-react';

const Nombre = () => (
    <TypeIt
        style={{
            fontSize: "80px"
        }}
        getBeforeInit={(instance) => {
            instance
                .type("Hoola", { delay: 300 })
                .move(-3)
                .delete(1, { delay: 500 })
                .move(null, { to: "END", delay: 1000 })
                .type(" yo soy")
                .break({ delay: 500 })
                .type("Jose luis")
                .move(-3)
                .delete(1, { delay: 200 })
                .type("L")
                .move(null, { to: "END" })
                .move(-5)
                .delete(1, { delay: 200 })
                .type("é")
                .move(null, { to: "END" })
                .break({ delay: 1000 })
                .type(" Gayoso Fernandez")
                .move(-4)
                .delete(1, { delay: 200 })
                .type("á")
                .move(null, { to: "END" })
                .go()

            return instance;
        }}
    />
)

export default Nombre;