import { useBusiness } from './BusinessProvider'


const allBusinesses = useBusiness()

for (const business of allBusinesses){
    console.log(business)
}

