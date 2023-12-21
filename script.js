var platformIndexAdjust = $("#Research").children().length - $(".platform").length - 1; // Adjustment to platform index
var sidebarDisplayTolerance = 30; // tolerance to decide to display sidebar or not

$(".platform").hover(
	function() {
		var windowWidth = $(window).width();
		var sidebarWidth = $(".socials").width();
		var platformPosition = $(this).position().left + $(this).width();

		if (platformPosition > (windowWidth - sidebarWidth - sidebarDisplayTolerance)) {
			sidebarDisplayFlag = 0;
			toggleSidebarDisplay();
		}

		var platformIndex = $(this).index() - platformIndexAdjust;
		$(".background").eq(platformIndex).css({
			"opacity":"0.2"
		});
		$(".platformDescription").eq(platformIndex).css({
			"opacity":"1"
		});
	}, function() {
		if (sidebarDisplayFlag == 0) {
			sidebarDisplayFlag = 1;
			toggleSidebarDisplay();
		}

		var platformIndex = $(this).index() - platformIndexAdjust;
		$(".background").eq(platformIndex).css({
			"opacity":""
		});
		$(".platformDescription").eq(platformIndex).css({
			"opacity":""
		});
	}
);