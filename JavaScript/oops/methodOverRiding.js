class Parent {
    bike() {
        return `Himalayan`
    }
    bike1() {
        return `Himalayan......`
    }
}

class Child extends Parent {
    bike() {
        return `pulser`
    }

}

var obj = new Child()
obj.bike1()