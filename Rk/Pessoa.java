public class Pessoa {
     
    private String nome;
    private double altura;
    private double peso;

    public void andar(){ System.out.println("Estou andando...");}
    public void correr(){ System.out.ptintln("Estou correndo...");}
    public void falar(){System.out.println("Bla bla bla...");}

    public void setNome(String nome){
        this.nome = nome;
        
    }

    public void setPeso(double peso){
        this.peso = peso;

    }

    public void setAltura(double altura){
        this.altura = altura;

    }

    public String getNome(){ return this.nome;}
    public double getPeso(){ return this.peso;}
    public double getAltura(){ return this.altura;}
}
  