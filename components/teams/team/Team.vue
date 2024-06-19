<template>
	<div class="team">
		<div class="team-content">
			<div class="team-content__logo">
				<img src="/liquid.png" width="64" height="64" />
			</div>
			<div class="team-content__info">
				<h3 class="team-content__info__name">Team Liquid</h3>
				<ul class="team-content__info__players">
					<li class="team-content__info__players__item">
						<span>iNSaNiA</span>
						<Icon name="twemoji:flag-china" size="16" />
					</li>
					<li class="team-content__info__players__item">
						<span>zai</span>
						<Icon name="twemoji:flag-china" size="16" />
					</li>
					<li class="team-content__info__players__item">
						<span>Boxi</span>
						<Icon name="twemoji:flag-china" size="16" />
					</li>
					<li class="team-content__info__players__item">
						<span>miCKe</span>
						<Icon name="twemoji:flag-china" size="16" />
					</li>
					<li class="team-content__info__players__item">
						<span>Nisha</span>
						<Icon name="twemoji:flag-china" size="16" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.team {
	width: 300px;
	&-content {
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid rgb(27, 27, 27);
		border-radius: 9px;
		background: rgb(10, 10, 10);
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__logo {
			width: 80px;
			backdrop-filter: blur(81px);
			background: rgba(10, 10, 10, 0.3);
		}
		&__info {
			width: 80%;
			&__name {
				color: rgb(161, 161, 161);
				font-size: 24px;
				font-weight: 600;
				line-height: 18px;
				letter-spacing: 3%;
			}
			&__players {
				margin-top: 20px;
				&__item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					color: rgb(102, 102, 102);
					font-size: 18px;
					font-weight: 500;
					line-height: 14px;
					letter-spacing: 3%;
					margin-bottom: 10px;
				}
			}
		}
	}
}
</style>
