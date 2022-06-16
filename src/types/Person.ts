
/**
 * Define Person object
 *
 * @author nmajorov@redhat.com
 *
 */
interface Person {
  id: number | null;

  username: string;

  password: string;

  blind: boolean;

  interests: string[];

}
export default Person;
