import sequelize from "../database/database";

const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        sequelize.sync();
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();