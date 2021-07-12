function DatePicker() {
    var options = {
        dateFormat: "yy-mm-dd",
        // prevText: '이전 달',
        // nextText: '다음 달',
        monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        monthNamesShort: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
        ],
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        showMonthAfterYear: true,
        yearSuffix: "년",
        onSelect: function (dateText, inst) {
            DatePicker.prototype.bindSelect(dateText, inst);
            $(this).change();
        },
        onClose: function (dateText, inst) {},
    };

    this.init = function () {
        this.datepicker = $(".js-picker-calendar").datepicker(options);
        this.datepicker.on("change", this.onSelect.bind(this));
        $(".ui-datepicker-calendar").find(".ui-state-active").removeClass("ui-state-active");
    };

    this.onSelect = function () {
        this.onChangeDate &&
            this.onChangeDate(this.dateText, this.dateInstance);
    };
    this.setChangeDateListener = function (onChangeDate) {
        this.onChangeDate = onChangeDate;
    };

    this.onChangeDisable = function (turnOn) {
        if (turnOn) {
            this.datepicker.closest(".js-basic-option").addClass("dimmed");
        } else {
            this.datepicker.closest(".js-basic-option").removeClass("dimmed");
        }
    };
}

DatePicker.prototype.bindSelect = function (dateText, inst) {
    this.dateText = dateText;
    this.dateInstance = inst;
};