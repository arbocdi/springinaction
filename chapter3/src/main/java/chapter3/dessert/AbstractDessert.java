package chapter3.dessert;

/**
 *
 * @author arbocdi
 */
public abstract class AbstractDessert implements Dessert {
    @Override
    public String getTaste(){
        return this.getClass().getSimpleName();
    }
}
