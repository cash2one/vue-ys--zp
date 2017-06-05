const Date = function(date){

    let firstDate = new Date( Date.parse(moment().month(date).format()));
    firstDate.setDate(1); //第一天
    let monthFirstday = moment(firstDate.setDate(1)).format('YYYY-MM-DD'); //月初第一天
    let endDate = new Date(firstDate);
    endDate.setMonth(firstDate.getMonth()+1);
    endDate.setDate(0);
    let ftime = new XDate(firstDate).toString('yyyy-MM-dd');

    let ltime = new XDate(endDate).toString('yyyy-MM-dd'); //月末最后一天
    let firstMonday = '';  //第一个周一
    let j = 0;
    let lastdata = '';
    for(var i =0;i<Number(moment(ltime).format('D'));i++) {
        if(moment(ftime).add(i,"day").format('d') == "0") {
            var first_momentdata = Number(moment(ftime).add(i,"day").format("D")) - Number(moment(ftime).format('D'));
            if(first_momentdata<7) {
                var sutime = Number(moment(ftime).add(i,"day").format("D")) - Number(moment(ftime).format('D'));
                var fitst_data =  moment(ftime).add(i,"day").subtract(sutime,"day").format('YYYY-MM-DD');
            }else {
                j++;
                if(j == 1) {
                    firstMonday = moment(ftime).add(i,"day").subtract(6,"day").format('YYYY-MM-DD');
                }
                var nextdata = moment(ftime).add(i,"day").subtract(6,"day").format('YYYY-MM-DD');
                lastdata = moment(nextdata).add(6,"day").format('YYYY-MM-DD');
                momtdate.push({first:nextdata,last:lastdata});
            }
//                        $('.data').append(tb({time: j,data:moment(ftime).add(i,"day").format('YYYY-MM-DD'),fitst_data:fitst_data,ftime:ftime,nextdata:nextdata,f_moment:first_momentdata}));
        }
    }
    var first_time = Number(moment( firstMonday).format('D'))-Number(moment(monthFirstday).format('D'));
    var last_time = Number(moment( ltime).format('D'))-Number(moment(lastdata).format('D'));
    //判断是否第一个天是否为星期日
    if(first_time != 0) {
        var nextdata1 = moment(firstMonday).subtract(1,"day").format('YYYY-MM-DD');
        momtdate.unshift({first:monthFirstday,last:nextdata1});
    }
    //判断是否最后一个天是否为星期日
    if(last_time != 0) {
        var monthLastData = moment(ltime).subtract(last_time-1,"day").format('YYYY-MM-DD');
        momtdate.push({first:monthLastData,last:ltime});
    }
}
