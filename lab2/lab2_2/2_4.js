<script>
function calculate(str) {
    var was_str;
    var sum_or_diff=function(sub, a, sign, b) {
        return sign=="-" ? a-b : +a + +b;
    };
    var mult_or_div= function(sub, a, sign, b) {
        return sign=="*" ? a*b : a/b;
    };
    var power= function(sub, a, b) {
        return Math.pow(a, b);
    };
    var match_power= /(-?[\d\.]+)\s*\^\s*(-?[\d\.]+)/g;
    var match_mult_div= /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;
    var match_sum_diff= /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;

    var get_value= function(sub, exp) {
        while(exp.indexOf("^")!==-1)
            exp= exp.replace(match_power, power);
        while(match_mult_div.test(exp))
            exp= exp.replace(match_mult_div, mult_or_div);
        while(match_sum_diff.test(exp))
            exp= exp.replace(match_sum_diff, sum_or_diff);
        return exp;
    };
    while(str.indexOf("(") !== -1) // убираем скобки
        str=str.replace(/\(([^\(\)]*)\)/g, get_value);

    return get_value("", str);

};
</script>
<input value="0.5 * 2 + 7 + -3*2"><input type="button" onclick="alert(calculate(this.previousSibling.value))" value="Посчитать">