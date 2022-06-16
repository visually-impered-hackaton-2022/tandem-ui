
/**
 * Define Person object
 *
 * @author nmajorov@redhat.com
 *
 */
interface Person {
  id: number | null;

  firstName: string;

  lastName: string;

  blind: boolean;

  interests: string[];

}
export default Person;
