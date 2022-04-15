import {Company} from "./Company";
import {User} from "./User";
import {CustomMap} from "./CustomMap";

const user = new User();
const comapny = new Company();
const customMap = new CustomMap('map');

customMap.addMaker(comapny);
customMap.addMaker(user);