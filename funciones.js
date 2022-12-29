
var userp = "";
var nombre_user = "";
var titulop = "";
var descripcionp = "";
var puntuacionp = 0;
var preciop = 0
var id_id = 0;




function MostrarActores(){

    mostrar('tabla_actores')
    Ocultar('Login')
    Ocultar('tabla_categorias')
    
}

function MostrarCategorias(){
    Ocultar('tabla_actores')
    Ocultar('Login')
    mostrar('tabla_categorias')

}



document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);
function iniciarSesion(){
    
    var user = '';
    var password = '';
    var checkbox = false
    var accesol = false;

    user = document.querySelector('#txtuser').value;
    password = document.querySelector('#txtpassword').value;
    checkbox = document.querySelector('#cbox1').checked;
    accesol = validarusuario(user,password);
    if(validarusuario(user,password) == true && checkbox == true){
    console.log("Ingreso Correcto");
    mostrarOcultar('Login');
    mostrarOcultar('paneladmin');
    mostrarOcultar('grafoss');
    mostrarOcultar('blockchain')
    

    }else if(validarusuario(user,password) == true){
        console.log("Ingreso")
        Ocultar('Login')
        mostrar('CerrarSesionCliente')
        mostrar('OrdenarPelis')
        mostrar('VistaAC')
        mostrar('table_peliculas')
        userp = user;
    }
   
    
    

}

function validarusuario(pUser, pPass){

    var user = "EDD"
    var password = 123
    var Acceso = false;
    if(pUser == user && pPass == password){
        Acceso = true;

        return Acceso;
      
     } else if(ListaClientes.EstaVacia() != true && ListaClientes.BuscarCliente(pUser,pPass) == true){
        Acceso = true;
        return Acceso;


    }       
      else{
        console.log("Usuario y/o Contraseña Incorrectos")
        alert("Usuario y/o Contraseña Incorrectos");
    }

    }


function mostrar(id){
    if(document.getElementById(id).style.display == 'none'){

        document.getElementById(id).style.display = 'block';
        

    }else{

        document.getElementById(id).style.display = 'block';
        
    }
}

function Ocultar(id){
    if(document.getElementById(id).style.display == 'block'){

        document.getElementById(id).style.display = 'none';
        

    }else{

        document.getElementById(id).style.display = 'none';
        
    }
}

const mostrar2 = (elemento) => {
    elemento.style.display = 'block';
}
const ocultar2 = (elemento) => {
    elemento.style.display = 'none';
}
function mostrarOcultar(id){
    let div = document.getElementById(id);
    if( window.getComputedStyle(div).display !== 'none' ){
      ocultar2(div);
      return false;
    }

    mostrar2(div);
}



var a=document.getElementById("a");
  var b=document.getElementById("b");
  var c=document.getElementById("c");
  var d=document.getElementById("d");
  var e=document.getElementById("e");
  var b1=document.getElementById("bPeliculas");
  var b2=document.getElementById("bClientes");
  var b3=document.getElementById("bactores");
  var b4=document.getElementById("bcategorias");
  b1.onclick=function(){
    
    a.style.display="block";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    document.getElementById('descargar').onclick=function(){
        DGrafo("arbolAVL") 

    }
    
    
  }
   b2.onclick=function(){
    
    a.style.display="none";
    b.style.display="block";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    document.getElementById('descargar').onclick=function(){
        DGrafo("listaclientes") 

    }

    
           
  }
  b3.onclick=function(){
    a.style.display="none";
          b.style.display="none";
          c.style.display="block";
          d.style.display="none";
          e.style.display="none";
          document.getElementById('descargar').onclick=function(){
            DGrafo("arbolactores") 
    
        }
           
  }
  b4.onclick=function(){
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="block";
    e.style.display="none";
    document.getElementById('descargar').onclick=function(){
        DGrafo("graflistacategorias") 

    }
           
  }

  var aa=document.getElementById("e1");
  var ba=document.getElementById("e2");
  var ca=document.getElementById("e3");
  var da=document.getElementById("e4");
  var ea=document.getElementById("e5");
  
  function CambiarP(){
    
    var punteo = document.querySelector('#txtpuntos').value;
    


    if(punteo == 1){
        aa.style.display="block";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="none";


    }else if(punteo == 2){
        aa.style.display="none";
        ba.style.display="block";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="none";
    
    }else if(punteo == 3){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="block";
        da.style.display="none";
        ea.style.display="none";
    
    }else if(punteo == 4){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="block";
        ea.style.display="none";
    
    }else if(punteo == 5){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="block";
    
    }else{
        alert("Solo se puede calificar de 1-5")
    }

    console.log(id_id)
    ArbolAVL.ModificarPunteo(id_id,ArbolAVL.raiz,punteo)
    ArbolAVL.inorden()
    
    document.querySelector('#txtpuntos').value = "";



    

    


  }
  function MostrarP(punteo){
    if(punteo == 1){
        aa.style.display="block";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="none";


    }else if(punteo == 2){
        aa.style.display="none";
        ba.style.display="block";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="none";
    
    }else if(punteo == 3){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="block";
        da.style.display="none";
        ea.style.display="none";
    
    }else if(punteo == 4){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="block";
        ea.style.display="none";
    
    }else if(punteo == 5){
        aa.style.display="none";
        ba.style.display="none";
        ca.style.display="none";
        da.style.display="none";
        ea.style.display="block";
    
    }else{
       
    }
}

  //Lectura de Archivos
  document.querySelector('#btn-clientes').addEventListener('change', LeerClientes);

  function LeerClientes(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
    var contenido = e.target.result;
    let intern = JSON.parse(contenido); // parsear json 
      for(let item of intern) {
        ListaClientes.InsertarCliente(item.dpi,item.nombre_completo,item.nombre_usuario,item.correo,item.contrasenia,item.telefono)
    

   }
   ListaClientes.GraficarLista();
   
   
  
    };
    
    lector.readAsText(archivo);
    
  }

  document.querySelector('#btn-actores').addEventListener('change', LeerActores);
  function LeerActores(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
    var contenido = e.target.result;
    let intern = JSON.parse(contenido); // parsear json 
      for(let item of intern) {
        Arbol.InsertarActor(item.dni,item.nombre_actor,item.correo,item.descripcion)

   }

   console.log(Arbol.PreOrden())
  Arbol.GraficoArbol2();
  Arbol.CrearTablaActores_PreOrden()
   
   
  
    };
    
    lector.readAsText(archivo);
    
  }

  document.querySelector('#btn-file').addEventListener('change', LeerPeliculas);

function LeerPeliculas(e){
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
    var contenido = e.target.result;
    let intern = JSON.parse(contenido);
      for(let item of intern) {
        ArbolAVL.InsertarPelicula(item.id_pelicula,item.nombre_pelicula,item.descripcion,item.puntuacion_star,item.precio_Q)
        
   }

   //console.log(ArbolAVL.preorden())
   ArbolAVL.GraficarArbolAVL()
   ArbolAVL.CrearTablaPeliculas();
   ArbolAVL.preorden();
   ListaComentarios.MostrarUsers();
   
  
   
   
  
    };
    
    lector.readAsText(archivo);


}

document.querySelector('#btn-categorias').addEventListener('change', LeerCategorias);
function LeerCategorias(e){
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
    var contenido = e.target.result;
    let intern = JSON.parse(contenido); // parsear json 
      for(let item of intern) {
        Listap.InsertarCliente(item.id_categoria,item.company)
   }
   Listap.MostrarLista()
   TablaHashh.GraficarListadeListas()
   //TablaHashh.VerCats()
   TablaHashh.GraficarCategorias()
   
   
  
   
   
  
    };
    
    lector.readAsText(archivo);


}
  

  class NodoLS{
    constructor(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        
       this.dpi = dpi
       this.nombre_completo = nombre_completo
       this.nombre_usuario = nombre_usuario
       this.correo = correo
       this.contrasenia = contrasenia
       this.telefono = telefono
        this.siguiente = null
    }


}

class ListaSimpleClientes{
    constructor(){

        this.cabeza = null
        this.tamanio = 0;
    }

    InsertarCliente(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono){
        var nuevo = new NodoLS(dpi,nombre_completo,nombre_usuario,correo,contrasenia,telefono)
        
        if(this.cabeza == null){
            this.cabeza = nuevo;
            this.tamanio++;
        }else{
            var aux = this.cabeza
            while(aux.siguiente != null){
                aux = aux.siguiente


            }
            aux.siguiente = nuevo
            this.tamanio++;

        }


    }

    MostrarLista(){
        var temp = this.cabeza
        while(temp != null){

            console.log(temp.nombre_usuario)
            temp = temp.siguiente;
        }

    }
    BuscarCliente(user,password){
        var aux = this.cabeza
        var encontrado = false;

        while(aux != null && encontrado != true){

            if (user == aux.nombre_usuario && password== aux.contrasenia){
                
                encontrado = true;
            }
            else{
                
                aux = aux.siguiente;
        }

    }
         return encontrado
    }

    BuscarNombreCliente(user){
        var aux = this.cabeza
        var encontrado = false;

        while(aux != null && encontrado != true){

            if (user == aux.nombre_usuario){
                
                encontrado = true;
                nombre_user = aux.nombre_completo
            }
            else{
                
                aux = aux.siguiente;
        }

    }
         return encontrado
    }

    GraficarLista(){
        var codigodot = "digraph G{\n\nnode [shape=box];\ngraph [pad="+'"'+0.2+'"'+", nodesep="+'"'+0.5+'"'+"];\n";
            var temporal = this.cabeza
            var conexiones ="";
            var nodos ="";
            var numnodo= 0;
            
            while(temporal != null){

                    
                
                    if(temporal.siguiente == null){
                   
                        nodos+=  "N" + numnodo + "[label=\"" +"Usuario: "+ temporal.nombre_usuario + "\n"+"Contraseña: "+temporal.contrasenia + "\" ];\n"
                        var auxnum = numnodo+1
                        //conexiones += "N" + numnodo + " -> N" + 0 + ";\n"
    
                    }else{
                nodos+=  "N" + numnodo + "[label=\"" + "Usuario: "+ temporal.nombre_usuario + "\n"+"Contraseña: "+temporal.contrasenia+"\" ];\n"
               
                    var auxnum = numnodo+1
                    conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                
                    }
                    
                temporal = temporal.siguiente
                numnodo++; 
                
            }
                
            
            codigodot += "//agregando nodos\n"
            codigodot += nodos+"\n"
            codigodot += "//agregando conexiones o flechas\n"
            codigodot += "{rank=same;\n"+conexiones+"\n}\n}"

            //console.log(codigodot)
            
           
            d3.select('#listaclientes').graphviz()
                .width(800)
                .height(300)
                .renderDot(codigodot)
            


    }

    EstaVacia(){

        if(this.cabeza == null)
        return true
    }

}

class NodoABB{

    constructor(dni,nombre_actor,correo,descripcion){
        this.dni = dni
        this.nombre_actor = nombre_actor
        this.correo = correo
        this.descripcion = descripcion
        this.left = null
        this.right = null


    }
    
}

class Arbol_ABB{
    nodos = "";
    relaciones ="";
    codigodot = "";
    rellenadotabla = "";
    rellenadotabla2 = "";
    bautor = "";
    bcorreo = "";
    btelefono = "";
    bdireccion = "";
    bbiografia = "";

        
    constructor(){
        this.raiz = null;
        
    }

    InsertarActor(dni,nombre_actor,correo,descripcion){
        this.raiz = this.Agregar(dni,nombre_actor,correo,descripcion,this.raiz);
    }
   
    Agregar(dni,nombre_actor,correo,descripcion,cabeza){
        if(cabeza == null){
            return new NodoABB(dni,nombre_actor,correo,descripcion);
        }else{
            if(dni > cabeza.dni){
                cabeza.right = this.Agregar(dni,nombre_actor,correo,descripcion, cabeza.right);
            }else{
                cabeza.left = this.Agregar(dni,nombre_actor,correo,descripcion, cabeza.left);
            }
        }
        return cabeza;
    }
    
    
    PreOrden(){
        this.Pre_Orden(this.raiz);
    }

    Pre_Orden(cabeza){
        if(cabeza!=null){
            console.log("Actor: ",cabeza.dni);
            this.Pre_Orden(cabeza.left);
            this.Pre_Orden(cabeza.right);
        }
    }
    
    Inorden(){
        this.In_Orden(this.raiz);
    }
    
    In_Orden(cabeza){
        if(cabeza!=null){
            this.In_Orden(cabeza.left);
            console.log("Actor: ",cabeza.dni);
            this.In_Orden(cabeza.right);
        }
    }

   
    PostOrden(){
        this.Pos_Orden(this.raiz);
    }
    
    Pos_Orden(cabeza){
        if(cabeza!=null){
            this.Pos_Orden(cabeza.left);
            this.Pos_Orden(cabeza.right);
            console.log("Actor: ",cabeza.nombre_actor);           
        }
    }

    GraficoArbol2(){
        this.codigodot = this.nodos = this.relaciones = "";
        this.codigodot = "digraph G{\nnode [shape=oval];\n edge[dir = none];\n";
        this.GraficoArbol(this.raiz)
        this.codigodot += this.nodos;
        
        this.codigodot += this.relaciones
        this.codigodot += "\n}"
        
        console.log(this.codigodot)
        d3.select('#arbolactores').graphviz()
                .width(700)
                .height(500)
                .renderDot(this.codigodot)
    }

    GraficoArbol(cabeza){
       
       if(cabeza != null){
        this.nodos += cabeza.dni+  "[label=\"" + cabeza.nombre_actor + "\"];\n";
        if (cabeza.left != null) {
            this.relaciones += cabeza.dni + " -> " + cabeza.left.dni + ";\n";
        }
        if (cabeza.right != null) {
            this.relaciones += cabeza.dni + " -> " + cabeza.right.dni + ";\n";
        }
        this.GraficoArbol(cabeza.left);
        this.GraficoArbol(cabeza.right);


       }

    }

    CrearTablaActores_PreOrden(){
        
        this.rellenadotabla = document.querySelector('#rellenadotablactores');
        this.crearTablaA(this.raiz)
    }
    
    crearTablaA(cabeza){
       
        if(cabeza!=null){
            this.rellenadotabla.innerHTML += `
            <tr>

                <td><b>Actor :</b> ${cabeza.nombre_actor}<br>
                
                <b>Descripcion: </b> ${cabeza.descripcion}</td>
                

            </tr>
            
            `;
            this.crearTablaA(cabeza.left);
            this.crearTablaA(cabeza.right);
        
    }
}

CrearTablaActores_InOrden(){
    
    this.rellenadotabla = document.querySelector('#rellenadotablactores');
    this.crearTablaB(this.raiz)
}

crearTablaB(cabeza){
   
    if(cabeza!=null){
        this.crearTablaB(cabeza.left);
        this.rellenadotabla.innerHTML += `
        <tr>

            <td><b>Actor :</b> ${cabeza.nombre_actor}<br>
            
            <b>Descripcion: </b> ${cabeza.descripcion}</td>
            

        </tr>
        
        `;
       
        this.crearTablaB(cabeza.right);
    
}
}
CrearTablaActores_PostOrden(){
    
    this.rellenadotabla = document.querySelector('#rellenadotablactores');
    this.crearTablaC(this.raiz)
}

crearTablaC(cabeza){
   
    if(cabeza!=null){
        this.crearTablaC(cabeza.left);
        this.crearTablaC(cabeza.right);
        this.rellenadotabla.innerHTML += `
        <tr>

            <td><b>Actor :</b> ${cabeza.nombre_actor}<br>
            
            <b>Descripcion: </b> ${cabeza.descripcion}</td>
            

        </tr>
        
        `;
       
       
    
}
}

}

class NodoAVL{

    constructor(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio){
        this.id_pelicula = id_pelicula
        this.nombre_pelicula = nombre_pelicula
        this.descripcion = descripcion
        this.puntuacion_star = puntuacion_star
        this.precio = precio
        this.left = null
        this.right = null
        this.Height = 0


    }
}

class Arbol_AVL{
    nodos = "";
    relaciones ="";
    codigodot = "";
    rellenadotabla = "";
    rellenadotabla2 = "";

    constructor(){
        this.raiz = null
    
    }

    InsertarPelicula(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio){
        this.raiz = this.Agregar(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio,this.raiz)


    }

    Agregar(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio,nodo){
        if( nodo == null)return new NodoAVL(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio)
            
        else{

            if(id_pelicula < nodo.id_pelicula){

                nodo.left = this.Agregar(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio,nodo.left)
                if(this.Nodo_Heigth(nodo.right) - this.Nodo_Heigth(nodo.left) == -2){

                    if(id_pelicula < nodo.left.id_pelicula){
                        
                        nodo = this.LeftRotation(nodo)
                        

                    }else{
                        
                        nodo = this.LDRotation(nodo)
                    }
                }
            }else if(id_pelicula > nodo.id_pelicula){
                nodo.right = this.Agregar(id_pelicula,nombre_pelicula,descripcion,puntuacion_star,precio,nodo.right)
                if(this.Nodo_Heigth(nodo.right) - this.Nodo_Heigth(nodo.left) == 2){
                    if(id_pelicula > nodo.right.id_pelicula){
                       
                       
                        nodo = this.RightRotation(nodo)

                    }else{
                      
                       
                        nodo = this.RDRotation(nodo)
                        
                    }

                }
            }else{
                nodo.id_pelicula = id_pelicula;
            }
        }
        nodo.Height = this.Max_Height(this.Nodo_Heigth(nodo.left), this.Nodo_Heigth(nodo.right))+1
        return nodo;

    }

    LeftRotation(nodo){
        var temp = nodo.left
        nodo.left = temp.right
        temp.right = nodo;

        nodo.Height = (this.Max_Height(this.Nodo_Heigth(nodo.right),this.Nodo_Heigth(nodo.left))+1);
        temp.Height = (this.Max_Height(this.Nodo_Heigth(nodo.left),nodo.Height)+1);
        return temp
    }

    RightRotation(nodo){
        var temp = nodo.right
        nodo.right = temp.left
        temp.left = nodo; 
        nodo.Height = (this.Max_Height(this.Nodo_Heigth(nodo.right),this.Nodo_Heigth(nodo.left))+1);
        temp.Height = (this.Max_Height(this.Nodo_Heigth(nodo.right),nodo.Height)+1);
        return temp;
        
    }
    RDRotation(actual){
        actual.right = this.LeftRotation(actual.right)
        return this.RightRotation(actual)


    }
    LDRotation(actual){
        actual.left = this.RightRotation(actual.left)
        return this.LeftRotation(actual)       

    }



    Max_Height(dato1,dato2){
        if(dato1>dato2){
            return dato1
        }else{
            return dato2
        }


    }

    Nodo_Heigth(node){

        if(node == null){
            return -1
        }else{
            return node.Height;
        }
    }
    preorden(){
        this.pre_orden(this.raiz);
    }
    pre_orden(nodo){
        if(nodo!=null){
            console.log("valor=" +nodo.nombre_pelicula);
            ListaComentarios.InsertarPeli(nodo.nombre_pelicula)
            this.pre_orden(nodo.left);
            this.pre_orden(nodo.right);
        }
    }

    inorden(){
        this.in_orden(this.raiz);
    }
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.left);
            console.log("Pelicula: "+nodo.nombre_pelicula+" valor= " +nodo.puntuacion_star);
            this.in_orden(nodo.right);    
        }
    }


    Buscar(id,raiz){
        if(raiz == null){
            return "No existe"
        }else if(id> raiz.id_pelicula){
            return this.Buscar(id,raiz.right)


        }else if(id <raiz.id_pelicula){
            return this.Buscar(id,raiz.left)
        }else{

            //console.log(raiz.nombre_pelicula)
            titulop = raiz.nombre_pelicula
            descripcionp = raiz.descripcion
            puntuacionp = raiz.puntuacion_star
            preciop = raiz.precio

            return true;

        }

    }
    Buscar2(id,raiz){
        if(raiz == null){
            return "No existe"
        }else if(id> raiz.id_pelicula){
            return this.Buscar2(id,raiz.right)


        }else if(id <raiz.id_pelicula){
            return this.Buscar2(id,raiz.left)
        }else{

            console.log("Epli: "+raiz.nombre_pelicula)
            

            return raiz.nombre_pelicula;

        }

    }

    ModificarPunteo(id,raiz,punteo){
        if(raiz == null){
            return "No existe"
        }else if(id > raiz.id_pelicula){
            return this.ModificarPunteo(id,raiz.right,punteo)


        }else if(id <raiz.id_pelicula){
            return this.ModificarPunteo(id,raiz.left,punteo)
        }else{
            raiz.puntuacion_star = punteo;

            return raiz.puntuacion_star;

        }

    }

    Eliminar(id_peli){
        this.eliminar(id_peli,this.raiz,null);
        this.balancear()


    }

    eliminar(id_peli,temporal,anterior){

        if(id_peli == temporal.id_pelicula){

            if(temporal.right == null && temporal.left == null){
                if(anterior.right == temporal){
                    anterior.right = null;
                }else if(anterior.left == temporal){
                    anterior.left = null;
                }
            }else if(temporal.left != null){

                this.reemplazo(temporal,temporal.left, anterior)
            }else if(temporal.left == null && temporal.right != null){
                if(anterior.right == temporal){
                        anterior.right = temporal.right
                        temporal = null
                }else if(anterior.left == temporal){
                    anterior.left = temporal.right
                    temporal = null


                }
            }
        }
        if(temporal != null){

            if(temporal.left != null){

                if(id_peli <= temporal.left.id_pelicula){

                    this.eliminar(id_peli,temporal.left,temporal)
                }if(temporal.right!= null){

                    if(id_peli >= temporal.right.id_pelicula){
                        this.eliminar(id_peli,temporal.right,temporal)
                    }
                }
            }
        }
    }

    reemplazo(tempeliminar,temporal,anteriorv){
        var aux = temporal
        var anterioraux = null
        var encicla = false
        while(aux.right != null){

            encicla = true
            anterioraux = aux
            aux = aux.right
        }

        if(aux.left != null){

            anterioraux.right = aux.left
        }else if(encicla == true){
            anterioraux.right = null
        }else if(encicla == false){
           if(tempeliminar.left == temporal){
            tempeliminar.left = temporal.left


           }
        }if(anteriorv.right == tempeliminar){

            anteriorv.right.id_pelicula = aux.id_pelicula
        }else if(anteriorv.left == tempeliminar){
            anteriorv.left.id_pelicula = aux.id_pelicula
        }

        aux = null


    }

    balancear(){

        this.balancearalturas(this.raiz)
        this.raiz = this._balancear(this.raiz)
    }

    _balancear(temporal){
        if(temporal.left == null){
            return temporal
        }else if(temporal.right == null){
            return temporal
        }else{
            temporal.left = this._balancear(temporal.left)
            if((this.Nodo_Heigth(temporal.left)-this.Nodo_Heigth(temporal.right))== 2){

                if(temporal.left.right == null){
                    temporal = this.LeftRotation(temporal)
                }else{
                    temporal = this.RDRotation(temporal)
                }
            }
            temporal.right = this._balancear(temporal.right)
            if((this.Nodo_Heigth(temporal.right)-this.Nodo_Heigth(temporal.left))== 2){
                if(temporal.right.left == null){
                    temporal = this.RightRotation(temporal)
                }else{
                    temporal = this.LDRotation(temporal)
                }

            }

        }

        var al_der = this.Nodo_Heigth(temporal.right)
        var al_izq = this.Nodo_Heigth(temporal.left)
        temporal.Height = this.Max_Height(al_der,al_izq) +1
        return temporal

    }


balancearalturas(temporal){
    if(temporal.left != null){

        this.balancearalturas(temporal.left)
    }else if(temporal.right != null){

        this.balancearalturas(temporal.right)
    }
    temporal.Height = this.Max_Height(this.Nodo_Heigth(temporal.right),this.Nodo_Heigth(temporal.left))+1

}

    

    GraficarArbolAVL(){
        this.codigodot = this.nodos = this.relaciones = "";
        this.codigodot = "digraph G{\nnode [shape=oval];\n edge[dir = none];\n";
        this.GraficarArbol(this.raiz)
        this.codigodot += this.nodos;
        
        this.codigodot += this.relaciones
        this.codigodot += "\n}"
        
        //console.log(this.codigodot)
        d3.select('#arbolAVL').graphviz()
                .width(900)
                .height(500)
                .renderDot(this.codigodot)


    }

    GraficarArbol(cabeza){

        if(cabeza != null){
            this.nodos += cabeza.id_pelicula+  "[label=\"" + cabeza.nombre_pelicula + "\"];\n";
            if (cabeza.left != null) {
                this.relaciones += cabeza.id_pelicula + " -> " + cabeza.left.id_pelicula + ";\n";
            }
            if (cabeza.right != null) {
                this.relaciones += cabeza.id_pelicula + " -> " + cabeza.right.id_pelicula + ";\n";
            }
            this.GraficarArbol(cabeza.left);
            this.GraficarArbol(cabeza.right);
    
    
           }



    }

    

    CrearTablaPeliculas(){
       
        this.rellenadotabla = document.querySelector('#rellenadotablapeliculas');
        this.rellenadotabla2 = document.querySelector('#rellenadotablapel');
        this.rellenadotabla.innerHTML = "";
        this.TablaPelis(this.raiz)


    }

    TablaPelis(cabeza){
        if(cabeza!=null){
            
            this.rellenadotabla.innerHTML += `
            <tr>
                <td><h4>${cabeza.nombre_pelicula}</h4></td>
                <td><b>Descripcion: </b> ${cabeza.descripcion}</td>
                
                <td> <button type="button"  id='btnp${cabeza.id_pelicula}' onclick="Pelicula(${cabeza.id_pelicula})"><b>Información</b></button></td>
                <td> <button type="button" id='btn${cabeza.id_pelicula}' onclick="cambiarND(${cabeza.id_pelicula})" ><b>Alquilar</b></button></td>
                <td><b>Q${cabeza.precio}</b></td>



            </tr>
            
            `;


            
            this.TablaPelis(cabeza.left);
            this.TablaPelis(cabeza.right);
        
    }


    }

    

    TablaPelisAscendente_1(){
        this.rellenadotabla = document.querySelector('#rellenadotablapeliculas');
        this.rellenadotabla.innerHTML = '';
        this.TablaPelisAscendente(this.raiz)


    }

    TablaPelisAscendente(cabeza){
        
        if(cabeza!=null){
            
            this.TablaPelisAscendente(cabeza.left);
            this.rellenadotabla.innerHTML += `
            <tr>
                <td><h4>${cabeza.nombre_pelicula}</h4></td>
                <td><b>Descripcion: </b> ${cabeza.descripcion}</td>
                
                <td> <button type="button"  id='btnp${cabeza.id_pelicula}' onclick="Pelicula(${cabeza.id_pelicula})"><b>Información</b></button></td>
                <td> <button type="button" id='btn${cabeza.id_pelicula}' onclick="cambiarND(${cabeza.id_pelicula})" ><b>Alquilar</b></button></td>
                <td><b>Q${cabeza.precio}</b></td>



            </tr>
            
            `;
           
            this.TablaPelisAscendente(cabeza.right);
        
    }


    }

    TablaPelisDescendente_1(){
        this.rellenadotabla = document.querySelector('#rellenadotablapeliculas');
        this.rellenadotabla.innerHTML = '';
        this.TablaPelisDescendente(this.raiz)


    }
    TablaPelisDescendente(cabeza){
        
        if(cabeza!=null){
           
            this.TablaPelisDescendente(cabeza.right);
            this.rellenadotabla.innerHTML += `
            <tr>
                <td><h4>${cabeza.nombre_pelicula}</h4></td>
                <td><b>Descripcion: </b> ${cabeza.descripcion}</td>
                
                <td> <button type="button"  id='btnp${cabeza.id_pelicula}' onclick="Pelicula(${cabeza.id_pelicula})"><b>Información</b></button></td>
                <td> <button type="button" id='btn${cabeza.id_pelicula}' onclick="cambiarND(${cabeza.id_pelicula})" ><b>Alquilar</b></button></td>
                <td><b>Q${cabeza.precio}</b></td>



            </tr>
            
            `;
           
            this.TablaPelisDescendente(cabeza.left);
        
    }


    }

    


}

function Pelicula(id){
    let rellenadotabla = document.querySelector('#rellenadotablapel');
    if(ArbolAVL.Buscar(id,ArbolAVL.raiz) == true){
        id_id = id
        
        rellenadotabla.innerHTML = "";

    rellenadotabla.innerHTML += `
    <tr>
        <h5>${titulop}</h5><br>
        <b>Descripcion: </b> ${descripcionp}<br>`;

    
    
    rellenadotabla.innerHTML += `<br> <button id="btn2${id}" type="button" onclick="cambiarND2(${id})"><b>Alquilar  </b></button>
          <b>Q${preciop}</b>



    </tr>
    
    `;
    MostrarP(puntuacionp)
    console.log(titulop)
    if(ListaComentarios.EstaVacia(titulop) != false){

        ListaComentarios.GraficarListadeListas(titulop)
        mostrar('coment')
    }else{

        Ocultar('coment')
    }

    
    
    
    mostrar('Pelicula')
    Ocultar('OrdenarPelis')
    Ocultar('VistaAC')
    Ocultar('table_peliculas')
   
    }
    
    

}
function eliminarAVL(id){
    ArbolAVL.Eliminar(id)
    ArbolAVL.CrearTablaPeliculas()


}
function cambiarND(id){
    document.getElementById("btn"+id).onclick=function(){
        this.textContent = "No disponible";
        this.style.backgroundColor ="red"

        var bb = document.getElementById("btnp"+id)
        bb.disabled = true;
        this.disabled = true
        

        if(ListaClientes.BuscarNombreCliente(userp)== true){

            var data = nombre_user + " - " + ArbolAVL.Buscar2(id,ArbolAVL.raiz)
            Merklee.InsertarDatos(new Nodo1(data))
            //console.log(nombre_user)
            //console.log(ArbolAVL.Buscar2(id,ArbolAVL.raiz))
            console.log(data)
        }

    
        
}

}
function cambiarND2(id){
    document.getElementById("btn2"+id).onclick=function(){
        this.textContent = "No disponible";
        this.style.backgroundColor ="red"
        var l = document.getElementById("btn"+id)
        l.disabled = true
        l.textContent = "No disponible";
        l.style.backgroundColor ="red"

        var bb = document.getElementById("btnp"+id)
        bb.disabled = true;
        this.disabled = true


        if(ListaClientes.BuscarNombreCliente(userp)== true){

            var data = nombre_user + " - " + ArbolAVL.Buscar2(id,ArbolAVL.raiz)
            Merklee.InsertarDatos(new Nodo1(data))
            //console.log(nombre_user)
            //console.log(ArbolAVL.Buscar2(id,ArbolAVL.raiz))
            console.log(data)
        }
        
}
document.getElementById("btn"+id).onclick=function(){
    this.textContent = "No disponible";
    this.style.backgroundColor ="red"
    
}

}

function OA(){
    ArbolAVL.TablaPelisAscendente_1();
    
}
function OD(){
    ArbolAVL.TablaPelisDescendente_1();
    
}
/*var arboll = new Arbol_AVL()
arboll.InsertarPelicula(11,"1")
arboll.InsertarPelicula(23,"1")
arboll.InsertarPelicula(35,"1")
arboll.InsertarPelicula(46,"1")
arboll.InsertarPelicula(54,"1")
arboll.InsertarPelicula(26,"1")
arboll.InsertarPelicula(83,"1")
arboll.InsertarPelicula(20,"1")
arboll.InsertarPelicula(100,"1")
arboll.InsertarPelicula(54,"1")
arboll.InsertarPelicula(2,"1")
arboll.InsertarPelicula(1,"1")
arboll.InsertarPelicula(6,"1")
arboll.InsertarPelicula(8,"1")*/
//arboll.GraficarArbolAVL()


class NodoTH{

    constructor(id){
        this.id = id
        
        this.siguiente = null;
        this.abajo = null;


    }
}

class NodoCat{

    constructor(id,company){
        this.id = id
        this.company = company;
        this.siguiente = null


    }
}

class TablaHash{
    constructor(){
        this.cabeza = null
        this.ultimo = null
        this.tamanio = 0

}

    Insertar(id){
        var temp = new NodoTH(id)

        if(this.cabeza == null){
            this.cabeza = temp;
            this.ultimo = temp;
            this.cabeza.siguiente = this.cabeza;
            this.ultimo.anterior = temp;
            this.tamanio++;
        }else{
            this.ultimo.siguiente = temp
            temp.siguiente = this.cabeza;
            this.ultimo = temp;
           
            this.tamanio++;

        }



    }

    InsertarCat(id,company){
        var ec = (id%20);
        var temp = this.cabeza
        
        while(temp != null){

            var iniciocats = temp.abajo;
            var nuevo = new NodoCat(id,company)
            if(temp.id == ec ){
               
                temp.abajo = nuevo
                nuevo.siguiente = iniciocats
                return
                    
                    
                    
            }
            temp = temp.siguiente

        
            
            }
            
            if(temp == null ){
                console.log("No está La categoria")
                
            }



    }
    BuscarCat(id,id_cat){
        var temp = this.cabeza;
        var encontrado = false
        while(temp != null){
            if(temp.id == id ){
                
                var temporallibros = temp.abajo;

                if(temporallibros == null){

                    return encontrado
                }
                while(temporallibros != null && encontrado != true){

                    if(temporallibros.id == id_cat){
                        console.log(temporallibros.company)
                        encontrado = true;
                        

                    }else{
                   
                    temporallibros = temporallibros.siguiente;
                    }
                }
                return encontrado
           
}
                temp = temp.siguiente;
    }
        if(temp == null){
            console.log("no se encontro el Usuario solicitado")
        }

}


    

    GraficarListadeListas(){
        var codigodot = "digraph G{\n node [shape=box];\ngraph [pad="+'"'+0.5+'"'+", nodesep="+'"'+0.5+'"'+"ranksep="+'"'+0.02+'"'+"];\n";
        var temporal = this.cabeza;
        var conexiones ="";
        var conexiones2 ="";
        var nodos ="";
        var numnodo= 0;
        var numnodo2 = numnodo;
        var auxnum = numnodo;
        var primer = true;
        var auxx = 1;
        
        do {

            
            nodos+=  "N" + numnodo + "[label=\"" + temporal.id + "\"];\n"
                
                if(!primer){
                    conexiones += "N" + auxnum + " -> N" + numnodo + ";\n"
                    
                    auxx++;


                }else{
                    primer = false;
                }
                auxnum = numnodo
                numnodo2 = numnodo
                numnodo++; 


               
                var temp2 = temporal.abajo
                while(temp2 != null){
                    
                    nodos+=  "N" + numnodo + "[label=\"" + "Company: "+temp2.company+ "\" ];\n"
              
                conexiones2 += "{rank=same;\n N" + numnodo2 + " -> N" + numnodo + ";}\n"
                numnodo2=numnodo;
                numnodo++;
                temp2 = temp2.siguiente;
        

                
                
                
            }
            temporal = temporal.siguiente           
        }while (temporal != this.cabeza);
       // console.log(this.tamanio)
        //console.log(auxx);
        codigodot += nodos+"\n"
        //codigodot += conexiones2
        codigodot += conexiones2
        //codigodot += rank
        codigodot += "edge[dir=none]\n"
        codigodot += conexiones+ "\n}"
        

        //console.log(codigodot)
       
        d3.select('#graflistacategorias').graphviz()
            .width(700)
           .height(500)
            .renderDot(codigodot)

    }

    VerCats(){
        let rellenadotabla = document.querySelector('#rellenadotablacats');
        
        var temp = this.cabeza
        for(var i = 0; i < 20; i++){
            rellenadotabla.innerHTML += `
            <tr>

                <td><b>Categoria ${i}:</b><br>
            
            `;
            var temp2 = temp.abajo
            
            while(temp2 != null){

                rellenadotabla.innerHTML +=    `Company: ${temp2.company}<br>
                `;

                temp2 = temp2.siguiente;
                
            }
            rellenadotabla.innerHTML +=` </td>  </tr>
                `;
            temp = temp.siguiente;
        }


    }
    GraficarCategorias(){
        var codigodot = 'digraph G{\ngraph [pad="0.3", nodesep="1", ranksep="1"];\n bgcolor=none;\n  node [shape=plain]\n'
        var temporal = this.cabeza;
       
        var nodos ="";
        var numnodo= 0;
        var numnodo2 = numnodo;
        var auxnum = numnodo;
        var primer = true;
        var auxx = 0;
       
                
        
                for(var i = 0; i < 20; i++){
                    nodos+= 't'+i+' [label=< \n<table border="0" cellborder="1" cellspacing="02">\n'
                    nodos += '<tr><td bgcolor="brown1">'+'  Categoria: '+i+'  </td> </tr>\n'
                    
                    var temp2 = temporal.abajo
                    
                    if(temp2 == null){
                        nodos += '<tr><td bgcolor="darkolivegreen1">  '+'                    '+'  </td> </tr>\n'

                    }
                    while(temp2 != null){
        
                        nodos += '<tr><td bgcolor="darkolivegreen1">'+'  Company: '+temp2.company +'  </td> </tr>\n'
        
                        temp2 = temp2.siguiente;
                        
                    }
                    nodos += '</table>\n >]\n'
                    temporal = temporal.siguiente;
                }        
                
                
        
       // console.log(this.tamanio)
        //console.log(auxx);
        codigodot += nodos+"\n"
        
        codigodot += '{rank=same; t0; t1}\n'
        codigodot += '{rank=same t2; t3}\n'
        codigodot += '{rank=same; t4; t5}\n'
        codigodot += '{rank=same t6; t7}\n'
        codigodot += '{rank=same; t8; t9}\n'
        codigodot += '{rank=same t10; t11}\n'
        codigodot += '{rank=same; t12; t13}\n'
        codigodot += '{rank=same t14; t15}\n'
        codigodot += '{rank=same; t16; t17}\n'
        codigodot += '{rank=same t18; t19}\n'
        codigodot+= 't0 -> t2[style = invis]\n'
        codigodot+= 't2 -> t4[style = invis]\n'
        codigodot+= 't4 -> t6[style = invis]\n'
        codigodot+= 't6 -> t8[style = invis]\n'
        codigodot+= 't8 -> t10[style = invis]\n'
        codigodot+= 't10 -> t12[style = invis]\n'
        codigodot+= 't12 -> t14[style = invis]\n'
        codigodot+= 't14 -> t16[style = invis]\n'
        codigodot+= 't16 -> t18[style = invis]\n'
        
        codigodot += '}'
        

        //console.log(codigodot)
       
        d3.select('#cate2').graphviz()
            .zoom(false)
            .renderDot(codigodot)

    }

   

}

class NodoLSS{
    constructor(id,dato){
        
       this.id = id
       this.dato = dato
       
        this.siguiente = null
    }


}

class ListaSimpleP{
    constructor(){

        this.cabeza = null
        this.tamanio = 0;
    }

    InsertarCliente(id,dato){
        var nuevo = new NodoLSS(id,dato)
        
        if(this.cabeza == null){
            this.cabeza = nuevo;
            this.tamanio++;
        }else{

            if(this.BuscarP(id)== false){
                var aux = this.cabeza
                while(aux.siguiente != null){
                    aux = aux.siguiente

            }
            aux.siguiente = nuevo
            this.tamanio++;
            }
            

        }


    }

    MostrarLista(){
        var temp = this.cabeza
        while(temp != null){
            TablaHashh.InsertarCat(temp.id,temp.dato)
            console.log(temp.dato)
            temp = temp.siguiente;
        }

    }
    BuscarP(id){
        var aux = this.cabeza
        var encontrado = false;

        while(aux != null && encontrado != true){

            if (id == aux.id){
                
                encontrado = true;
            }
            else{
                
                aux = aux.siguiente;
        }

    }
         return encontrado
    }
}

class NodoLL2{
    constructor(nombre_peli){
       this.nombre_peli = nombre_peli
        this.siguiente = null;
        this.abajo = null;


    }
}

class NodoListaComent{

    constructor(user,comentario){

        this.user = user;
        this.comentario = comentario;
        this.siguiente = null;
    }
}

class ListadeListas2{
    constructor(){
        this.cabeza = null
        this.ultimo = null
        this.tamanio = 0

}

    

    InsertarPeli(nombre_peli){
        var temp = new NodoLL2(nombre_peli);

        if(this.cabeza == null){
            this.cabeza = temp;
            this.ultimo = temp;
            this.cabeza.siguiente = this.cabeza;
            this.ultimo.anterior = temp;
            this.tamanio++;
        }else{
            this.ultimo.siguiente = temp
            temp.siguiente = this.cabeza;
            this.ultimo = temp;
           
            this.tamanio++;

        }

    }

    InsertarComentario(nombre_peli,usuario, dato){
        var temp = this.cabeza;
        while(temp != null){
            if(temp.nombre_peli == nombre_peli ){
               
                var nuevo = new NodoListaComent(usuario,dato);
                var iniciolibros = temp.abajo;
                temp.abajo = nuevo;
                nuevo.siguiente  = iniciolibros;
                return
            }
            temp = temp.siguiente
            }
            if(temp == null ){
                console.log("No está el usuario")
                
            }


    }

    MostrarUsers(){
        var temporal = this.cabeza
        var cont =0;
        while(cont<this.tamanio){
            console.log(temporal.nombre_peli)
            temporal = temporal.siguiente
            cont++;
}
    }

    EstaVacia(nombre_peli){
        var temp = this.cabeza;
        
        while(temp != null){
            if(temp.nombre_peli == nombre_peli ){
                
                var temporallibros = temp.abajo;
                if(temporallibros != null){
                    return true


                }else{

                    return false
                }
           
}
                temp = temp.siguiente;
    }


    }

    MostarLibros(nombre_peli){
        var temp = this.cabeza;
        
        while(temp != null){
            if(temp.nombre_peli == nombre_peli ){
                
                var temporallibros = temp.abajo;
                while(temporallibros != null){
                    console.log(temporallibros.comentario)
                    temporallibros = temporallibros.siguiente;
                }
                return
           
}
                temp = temp.siguiente;
    }
        if(temp == null){
            console.log("no se encontro el Usuario solicitado")
        }

}
    GraficarListadeListas(nombre_peli){
        var codigodot = 'digraph G{\ngraph [pad="0.5", nodesep="5", ranksep="3"];\n bgcolor=none;\n  node [shape=plain]\n  rankdir=LR; \tabla [label=< \n<table border="0" cellborder="1" cellspacing="02">\n'
        var temporal = this.cabeza;
        var conexiones ="";
        var conexiones2 ="";
        var nodos ="";
        var numnodo= 0;
        var numnodo2 = numnodo;
        var auxnum = numnodo;
        var primer = true;
        var auxx = 1;
        
        do {

            if(temporal.nombre_peli == nombre_peli) {  
                var temp2 = temporal.abajo
                while(temp2 != null){
                    
                    nodos += '<tr><td bgcolor="orange">'+"    "+temp2.user +": "+ temp2.comentario+"    "+'</td> </tr>\n'
                temp2 = temp2.siguiente;

            }
        }
            temporal = temporal.siguiente           
        }while (temporal != this.cabeza);
       // console.log(this.tamanio)
        //console.log(auxx);
        codigodot += nodos+"\n"
        
        //codigodot += rank
        codigodot += '</table>>];\n }'
        

        console.log(codigodot)
       
        d3.select('#coment').graphviz()
            .width(600)
           .height(200)
            .renderDot(codigodot)

    }

    Buscar(user, password){

        var aux = this.cabeza
        encontrado = false;

        do{
            
            if (aux.nombreuser== user  && password == aux.contrasenia){
                
                encontrado = true;
            }
            else{
                
                aux = aux.siguiente;
            }
        }while(aux != this.cabeza && encontrado != true);
        
        return aux.rol;



    }
}


/*var ll = new ListadeListas2()
ll.InsertarPeli("buenas")
ll.InsertarPeli("buenas2")
ll.InsertarPeli("buenas3")
ll.InsertarPeli("buenas4")

ll.InsertarComentario("buenas","Jorge","Muy buena pelicula, pero le falto mas accion")
ll.InsertarComentario("buenas","Mario","no me gusto")
ll.InsertarComentario("buenas2","ppee","Muy buena ")
ll.InsertarComentario("buenas2","ddd"," buena pelicula")
ll.InsertarComentario("buenas","ddd","no tanto pelicula")

ll.GraficarListadeListas("buenas")*/
var Sha256 = {};
Sha256.hash = function(msg, utf8encode) {
    utf8encode =  (typeof utf8encode == 'undefined') ? true : utf8encode;
    
    // convert string to UTF-8, as SHA only deals with byte-streams
    if (utf8encode) msg = Utf8.encode(msg);
    
    // constants [§4.2.2]
    var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
             0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
             0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
             0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
             0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
             0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
             0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
             0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    // initial hash value [§5.3.1]
    var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

    // PREPROCESSING 
 
    msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

    // convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
    var l = msg.length/4 + 2;  // length (in 32-bit integers) of msg + ‘1’ + appended length
    var N = Math.ceil(l/16);   // number of 16-integer-blocks required to hold 'l' ints
    var M = new Array(N);

    for (var i=0; i<N; i++) {
        M[i] = new Array(16);
        for (var j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
            M[i][j] = (msg.charCodeAt(i*64+j*4)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16) | 
                      (msg.charCodeAt(i*64+j*4+2)<<8) | (msg.charCodeAt(i*64+j*4+3));
        } // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
    }
    // add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
    // note: most significant word would be (len-1)*8 >>> 32, but since JS converts
    // bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
    M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14])
    M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;


    // HASH COMPUTATION [§6.1.2]

    var W = new Array(64); var a, b, c, d, e, f, g, h;
    for (var i=0; i<N; i++) {

        // 1 - prepare message schedule 'W'
        for (var t=0;  t<16; t++) W[t] = M[i][t];
        for (var t=16; t<64; t++) W[t] = (Sha256.sigma1(W[t-2]) + W[t-7] + Sha256.sigma0(W[t-15]) + W[t-16]) & 0xffffffff;

        // 2 - initialise working variables a, b, c, d, e, f, g, h with previous hash value
        a = H[0]; b = H[1]; c = H[2]; d = H[3]; e = H[4]; f = H[5]; g = H[6]; h = H[7];

        // 3 - main loop (note 'addition modulo 2^32')
        for (var t=0; t<64; t++) {
            var T1 = h + Sha256.Sigma1(e) + Sha256.Ch(e, f, g) + K[t] + W[t];
            var T2 = Sha256.Sigma0(a) + Sha256.Maj(a, b, c);
            h = g;
            g = f;
            f = e;
            e = (d + T1) & 0xffffffff;
            d = c;
            c = b;
            b = a;
            a = (T1 + T2) & 0xffffffff;
        }
         // 4 - compute the new intermediate hash value (note 'addition modulo 2^32')
        H[0] = (H[0]+a) & 0xffffffff;
        H[1] = (H[1]+b) & 0xffffffff; 
        H[2] = (H[2]+c) & 0xffffffff; 
        H[3] = (H[3]+d) & 0xffffffff; 
        H[4] = (H[4]+e) & 0xffffffff;
        H[5] = (H[5]+f) & 0xffffffff;
        H[6] = (H[6]+g) & 0xffffffff; 
        H[7] = (H[7]+h) & 0xffffffff; 
    }

    return Sha256.toHexStr(H[0]) + Sha256.toHexStr(H[1]) + Sha256.toHexStr(H[2]) + Sha256.toHexStr(H[3]) + 
           Sha256.toHexStr(H[4]) + Sha256.toHexStr(H[5]) + Sha256.toHexStr(H[6]) + Sha256.toHexStr(H[7]);
}


Sha256.ROTR = function(n, x) { return (x >>> n) | (x << (32-n)); }
Sha256.Sigma0 = function(x) { return Sha256.ROTR(2,  x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x); }
Sha256.Sigma1 = function(x) { return Sha256.ROTR(6,  x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x); }
Sha256.sigma0 = function(x) { return Sha256.ROTR(7,  x) ^ Sha256.ROTR(18, x) ^ (x>>>3);  }
Sha256.sigma1 = function(x) { return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ (x>>>10); }
Sha256.Ch = function(x, y, z)  { return (x & y) ^ (~x & z); }
Sha256.Maj = function(x, y, z) { return (x & y) ^ (x & z) ^ (y & z); }

//
// hexadecimal representation of a number 
//   (note toString(16) is implementation-dependant, and  
//   in IE returns signed numbers when used on full words)
//
Sha256.toHexStr = function(n) {
  var s="", v;
  for (var i=7; i>=0; i--) { v = (n>>>(i*4)) & 0xf; s += v.toString(16); }
  return s;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Utf8 class: encode / decode between multi-byte Unicode characters and UTF-8 multiple          */
/*              single-byte character encoding (c) Chris Veness 2002-2010                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

var Utf8 = {};  // Utf8 namespace

/**
 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters 
 * (BMP / basic multilingual plane only)
 *
 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
 *
 * @param {String} strUni Unicode string to be encoded as UTF-8
 * @returns {String} encoded string
 */
Utf8.encode = function(strUni) {
  // use regular expressions & String.replace callback function for better efficiency 
  // than procedural approaches
  var strUtf = strUni.replace(
      /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
      function(c) { 
        var cc = c.charCodeAt(0);
        return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); }
    );
  strUtf = strUtf.replace(
      /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
      function(c) { 
        var cc = c.charCodeAt(0); 
        return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); }
    );
  return strUtf;
}

/**
 * Decode utf-8 encoded string back into multi-byte Unicode characters
 *
 * @param {String} strUtf UTF-8 string to be decoded back to Unicode
 * @returns {String} decoded string
 */
Utf8.decode = function(strUtf) {
  // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
  var strUni = strUtf.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
      function(c) {  // (note parentheses for precence)
        var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f); 
        return String.fromCharCode(cc); }
    );
  strUni = strUni.replace(
      /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
      function(c) {  // (note parentheses for precence)
        var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
        return String.fromCharCode(cc); }
    );
  return strUni;
} 

class Nodo1{
    constructor(dato){
    this.dato = dato
    this.siguiente = null
    this.anterior = null

    }

}

class ListaM{

    constructor(){
        this.inicio = null
        this.final = null
        this.tamanio = 0
    }

    Insertar(nuevo){
        if(this.inicio == null){

            this.inicio = this.final = nuevo
        }else{
            nuevo.siguiente = this.inicio 
            this.inicio.anterior = nuevo
            this.inicio = nuevo
        }
        this.tamanio++;

    }
}

class NodoHash{
    constructor(hash){
        this.hash = hash
        this.left = null
        this.right = null


    }
}

class Arbol_Merkle{

    constructor(){
        this.raiz = null
        this.temporal = null
        this.lista = new ListaM()

    }

    RetornarRaiz(){
        var l = this.raiz.hash
        return l
    }

    InsertarDatos(data){

        this.lista.Insertar(data);
    }

    Crear(dat){
        this.raiz = new NodoHash(0)
        this.creara(this.raiz,dat)


    }
    creara(aux,dat){
        if(dat > 0){
            aux.left = new NodoHash(0)
            aux.right = new NodoHash(0)
            this.creara(aux.left,dat-1)
            this.creara(aux.right,dat-1)

        }


    }

    CodigoHash(recorrer){
    if(recorrer != null){
        this.CodigoHash(recorrer.left)
        this.CodigoHash(recorrer.right)

        if(recorrer.left == null && recorrer.right == null){
            recorrer.left = this.temporal
            this.temporal = this.temporal.anterior
            recorrer.hash = Sha256.hash((recorrer.left.dato*1000).toString())
        }else{
            recorrer.hash = Sha256.hash(Sha256.hash(recorrer.left.hash.toString())+Sha256.hash(recorrer.right.hash.toString()))


        }

    }   

    }

    ExpA(){

        var ex = 1

        while (Math.pow(2, ex) < this.lista.tamanio) {
            ex += 1
          }
          for (var i = this.lista.tamanio; i < Math.pow(2, ex); i++) {
            this.lista.Insertar(new Nodo1(i*100))
          }
          this.temporal = this.lista.final
          this.Crear(ex)
          this.CodigoHash(this.raiz)
         
    }

    Graficar(){
        this.codigodot = "digraph G{\n";
        this.preorder(this.raiz, null)
        this.codigodot += "}"

        console.log(this.codigodot)
        d3.select("#Merkle").graphviz().renderDot(this.codigodot)
        this.codigodot = "";

    }

    preorder(aux,atras){

        if(aux!= null){
            if(aux instanceof NodoHash){

                this.codigodot += "nodo"+aux.hash+"[label =\"" +aux.hash + "\"]\n";
                if(atras != null){

                    this.codigodot += "nodo"+atras.hash+"->nodo"+aux.hash+"\n";
                }
            }else{
                var temp = Sha256.hash(aux.dato.toString())
                this.codigodot += "nodo"+temp+"[label=\"" +aux.dato+"\"]\n";
                if(atras != null){
                    this.codigodot += "nodo"+atras.hash+"->nodo"+temp+"\n";

                }
            }
            this.preorder(aux.left,aux)
            this.preorder(aux.right,aux)

        }
    }


}

var merk = new Arbol_Merkle()
merk.InsertarDatos(new Nodo1(4))
merk.InsertarDatos(new Nodo1(6))
merk.InsertarDatos(new Nodo1(5))
merk.InsertarDatos(new Nodo1(3))
merk.InsertarDatos(new Nodo1(2))

merk.ExpA()

//merk.Graficar()


function VerACtores(){
    mostrarOcultar('tabla_actores')
    mostrarOcultar('table_peliculas')
    mostrarOcultar('OrdenarPelis')
    Ocultar('Login')
    Ocultar('tabla_categorias')


}
function VerCategorias(){

    mostrarOcultar('tabla_categorias')
    Ocultar('Login')
    Ocultar('tabla_actores')
    mostrarOcultar('table_peliculas')
    mostrarOcultar('OrdenarPelis')


}
function OcultarPeli(){

    
    Ocultar('Pelicula')
    mostrar('OrdenarPelis')
    mostrar('VistaAC')
    mostrar('table_peliculas')
}

function GuardarComentario(){
    var coment = document.getElementById("txtcomentario").value
    ListaComentarios.InsertarComentario(titulop,userp,coment);
    ListaComentarios.GraficarListadeListas(titulop)
    mostrar('coment')
    document.getElementById("txtcomentario").value = "";
    
}


function MostrarLog(){

    Ocultar('tabla_actores')
    mostrar('Login')
    Ocultar('tabla_categorias')
}

function LimpiarLogin(){
    document.getElementById("txtuser").value = "";
    document.getElementById("txtpassword").value = "";
    document.querySelector('#cbox1').checked = false;
    
    Ocultar('paneladmin')
    mostrar('Login')
    Ocultar('grafoss')
    Ocultar('blockchain')
    
}

function CSCliente(){
    document.getElementById("txtuser").value = "";
    document.getElementById("txtpassword").value = "";
    document.querySelector('#cbox1').checked = false;
    userp = "";
    nombre_user = "";

    mostrar('Login')
    Ocultar('CerrarSesionCliente')
    Ocultar('OrdenarPelis')
    Ocultar('VistaAC')
    Ocultar('table_peliculas')




}
function Pre(){
    Arbol.rellenadotabla.innerHTML = "";
    Arbol.CrearTablaActores_PreOrden()
} 
function In(){
    Arbol.rellenadotabla.innerHTML = "";
    Arbol.CrearTablaActores_InOrden()

}
function Post(){
    Arbol.rellenadotabla.innerHTML = "";
    Arbol.CrearTablaActores_PostOrden()

}




  d3.select("#descargar4").on("click", function () {
   

    var html = d3.select("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

        var DOMURL = self.URL || self.webkitURL || self;
        var svg = new Blob([html], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svg);
        
        var image = new Image;
        image.src = url;

        var canvas = document.querySelector("canvas");
        var context = canvas.getContext("2d");
    

    image.onload = function () {
        context.drawImage(image, 0, 0);
        DOMURL.revokeObjectURL(url);
        var canvasdata = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        a.download = "grafo.png";
        a.href = canvasdata;
        a.click();
        
        
    };

    canvasdata = "";
    
}); 

function DGrafo(id_div) {
    html2canvas($('#' + id_div)[0]).then(function (canvas) {
        
        return Canvas2Image.saveAsPNG(canvas);
        //$(".response").append(canvas);
    });
}


class Temporizador{

    constructor(id, inicio, final){
        this.id = id;
        this.inicio = inicio;
        this.final = final;
        this.contador = this.inicio;

    }

   

    conteoSegundos = function(){
      if (this.contador == this.final){
        this.conteoSegundos = null;
        return;
      }

      document.getElementById(this.id).innerHTML = this.contador--;
      setTimeout(this.conteoSegundos.bind(this), 1000);
    };
  }

  let temporizador = new Temporizador('temporizador', 300, -1);
  temporizador.conteoSegundos();

  document.querySelector('#btnmodti').addEventListener('click', ModificarT); 
  document.querySelector('#btngrafmerk').addEventListener('click', GrafMerk); 

  function GrafMerk(){
    Merklee.ExpA()
    Merklee.Graficar()

  }

  function ModificarT(){

    var s = document.querySelector('#txtnumerob').value;
    temporizador.conteoSegundos = null;
    temporizador = new Temporizador('temporizador', s, -1);
    temporizador.conteoSegundos();

    document.querySelector('#txtnumerob').value = "";

  }

class Nodo_Bloque{

    constructor(index,data,previus = ""){
        this.index = index
        this.data = data
        this.timestamp = this.CrearFecha()
        this.previus = previus
        this.hash =  this.CrearHash();
        this.nonce = 0


    }

    PruebaTrabajo(dificultad){
        while(this.hash.substring(0,dificultad) !== Array(dificultad+1).join("0")){
            this.nonce++;
            this.hash = this.CrearHash();
        }
        return this.hash;

    }

    CrearHash(){

        return Sha256.hash(this.index+this.timestamp + this.previus+this.nonce).toString()
    }

    CrearFecha(){
        	
        var hoy = new Date();
        var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
        var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        var fechaYHora = fecha + ' ' + hora;

        return fechaYHora;

    }
}
class ListaBlock{
    constructor(){

        this.cabeza = null
        this.tamanio = 0;
    }

    InsertarCliente(index,data,previus){
        var nuevo = new Nodo_Bloque(index,data,previus)
        
        if(this.cabeza == null){
            this.cabeza = nuevo;
            this.tamanio++;
        }else{
            var aux = this.cabeza
            while(aux.siguiente != null){
                aux = aux.siguiente


            }
            aux.siguiente = nuevo
            this.tamanio++;

        }


    }

    

    
    GraficarLista(){
        var codigodot = "digraph G{\n\nnode [shape=box];\ngraph [pad="+'"'+0.2+'"'+", nodesep="+'"'+0.5+'"'+"];\n";
            var temporal = this.cabeza
            var conexiones ="";
            var nodos ="";
            var numnodo= 0;
            
            while(temporal != null){

                    
                
                    if(temporal.siguiente == null){
                   
                        nodos+=  "N" + numnodo + "[label=\"" +"Bloque "+ temporal.index + "\n"
                                                            +"Hash: "+temporal.hash + "\n"
                                                            +"Previus: "+ temporal.previus + "\n"
                                                            +"Root Merkle: "+ Merklee.RetornarRaiz() + "\n"
                                                            +"Transacciones: "+ temporal.data + "\n"
                                                            +"Fecha:"+ temporal.timestamp + "\" ];\n"
                                                            
                        var auxnum = numnodo+1
                        //conexiones += "N" + numnodo + " -> N" + 0 + ";\n"
    
                    }else{
                        nodos+=  "N" + numnodo + "[label=\"" +"Bloque "+ temporal.index + "\n"
                        +"Hash: "+temporal.hash 
                        +"Previus "+ temporal.previus + "\n"
                        +"Root Merkle "+ "temporal.index" + "\n"
                        +"Transacciones "+ temporal.data + "\n"
                        +"Fecha "+ temporal.timestamp +"\" ];\n"               
                    var auxnum = numnodo+1
                    conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
                
                    }
                    
                temporal = temporal.siguiente
                numnodo++; 
                
            }
                
            
            codigodot += "//agregando nodos\n"
            codigodot += nodos+"\n"
            codigodot += "//agregando conexiones o flechas\n"
            codigodot += "{rank=same;\n"+conexiones+"\n}\n}"

            console.log(codigodot)
            
           
            d3.select('#grafblock').graphviz()
                .width(800)
                .height(300)
                .renderDot(codigodot)
            


    }


}

document.querySelector('#btngenerarBlock').addEventListener('click', Bloquee); 

function Bloquee(){

    ll.InsertarCliente(0,"")
    ll.GraficarLista()
}


var blo = new Nodo_Bloque(0,'prueba')
console.log(JSON.stringify(blo,null,2));

    
// Inializacion de Estructuras

var ListaClientes = new ListaSimpleClientes();
var Arbol = new Arbol_ABB();
var ArbolAVL = new Arbol_AVL();
var TablaHashh = new TablaHash();
var Listap = new ListaSimpleP();
var ListaComentarios = new ListadeListas2()
var Merklee = new Arbol_Merkle()
var ll = new ListaBlock()

for(var i = 0; i <20; i++){
    TablaHashh.Insertar(i)


}
/*var hola = Sha256.hash("Hola123")

console.log(hola)*/