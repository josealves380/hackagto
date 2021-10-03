import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Select } from "../components/Select";
import { TextArea } from "../components/TextArea";

export function CadastroNF() {
    return (
        <div>
            <Header />
            <h3>Cadastrar NF de insumos</h3>
            <aside>
                <form>
                    <Label>Produtos</Label>
                    <Input
                         placeholder="Ex:Soja"/>
                </form>
                <form>
                    <Label>Produto</Label>
                    <Input placeholder="cadastro"/>
                </form>
                <form>
                    <Label>Produto</Label>
                    <Select value="Cadastro">
                        <option>Opcao 1</option>
                    </Select>
                </form>
                <Button>Cadastrar</Button>
            </aside>
            <main>
               <Label>Produto</Label>
               <Label>Quantidade</Label>
               <Label>Valor</Label>
               <TextArea/>

           </main>
        </div>
    );
}