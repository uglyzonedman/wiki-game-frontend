<template>
	<footer class="footer">
		<nav class="footer-navigation">
			<div class="footer-navigation__container">
				<div class="footer-navigation__content">
					<div class="footer-navigation__content__left">
						<h3>LIQUIDPEDIA</h3>
					</div>
					<ul class="footer-navigation__content__list">
						<li class="footer-navigation__content__list__item">
							<a href="">
								<Icon name="logos:discord-icon" size="36px" />
							</a>
						</li>
						<li class="footer-navigation__content__list__item">
							<a href="">
								<Icon name="logos:telegram" size="36px" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="footer-bottom">
			<span>© 2023 ACHE. Inc. All rights reserved.</span>
		</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
	&-bottom {
		padding: 24px 0;
		color: rgb(91, 91, 91);
		font-size: 18px;
		font-weight: 400;
		line-height: 18px;
		letter-spacing: 0%;
		text-align: center;
	}
	&-navigation {
		box-sizing: border-box;
		border-bottom: 1px solid rgb(38, 38, 38);
		border-top: 1px solid rgb(38, 38, 38);
		background: rgb(10, 10, 10);
		padding: 20px;
		&__container {
			max-width: 1488px;
			margin: 0 auto;
		}
		&__content {
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: space-between;
			&__left {
				h3 {
					color: rgb(161, 161, 161);
					font-size: 32px;
					font-weight: 500;
					line-height: 32px;
					letter-spacing: 3%;
				}
			}
			&__list {
				display: flex;
				align-items: center;
				&__item {
					margin-left: 20px;
				}
			}
		}
	}
}
</style>
