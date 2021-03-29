//old object express before ES6
var old_obj1 = {};
var old_obj1 = {a:"foo", b:42, c:{}};

var a = "foo", b = 42, c = {};
var old_obj2 = {a:a, b:b, c:c};

var olb_obj3 = {
    property : function ([parmeters]){},
    get property() {},
    set property(value) {},
};


//new object express in ES6

//단축 속성명
let a_ = "foo", b_ = 42, c_ ={};
let new_obj1 = {a,b,c};

//단축 메서드명
var new_obj2 = {
    property([parameters]){}
}

//계산된 속성명
var prop ='foo';
var new_obj3 = {
    [prop] : 'hey',
    ['b' + 'ar'] : 'there'
}

//속성 접근자
var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value';
console.log(object[bar]);
