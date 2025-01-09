const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allUsers: [],
			tenRandomUsers: [],
			fiftyRandomUsers: [],
			hundredRandomUsers: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllUsers: () => {

				const myHeaders = new Headers();
				myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxMYUyUVI2bUNO-Z9FkAWlQiww5N11oA9AzcFvfOGCrUZBxohmpIdxi1g_uAxlMdL0TOqGfzWkEDYVwvn3vCEpC65MIa3mbU5uzmFnfxoeZO0am2wYbbNVcRZtwDfnS9BPDEie4B3i1PuFAaUkhYop2ReuQ99MAUbu6Uoga4pSo2H8X_IuQ8FRPnHcACg7ONWXIdQkHSZbR7cPTQr48xTZAATxuraPWDanaYd-tbnCg-mZuJvYBD6WnpOAeuYIAEZANvYaJgXECyXPJMykJ-6APg7yBa5K3Qt7Tzy8q663M-P976e-_5sTl9XSNdWkFy3WlbwiDutacLTUd0TmWIhb8cvxulv_OPAZdU7bgxZpXMOsIcw4Xca-JBL8kytR8St1GfUnJzVpxNgp4YLvtrWoFy2QcpidGWATmPQswQHUv03sgNxvbt7SqB069AMMwWJsveiEwM2SOVdS-8sYjkUiyT56Nt_WOk7eFXAETl-EGaJwpyZAqhZDMSHxrvMMNdUislgXt-85u19qExLafBF4nbo4gDJ1hEqjQ9m0VX5H0LP5Qkx5olteZFAGmQsGl8DeoOgnAljK7olG9s-Erk09LvoRIa97NgakiAOE2txyfnRTvxwYBD8liRmlBTzffFJE0MQEvMLeQF0ru4yoHUXEeqnO6GBibprRoIjRN4pHIm2mWTe1JCYmbhJkGTJGCRXEUZkP75I2DWh_cuZ6YauoWfrUzIz0cZNDILU90P7lpeqipWe__4dTyf4vAFzjbL4dUuKxsjAZF4UdSB3VyHQFgCc-eMYn5-3nOR1NTCFzGBgu_ZI8me86RvmarNr7A6ckHc-MIiuJT2-nq3t2-RnFnt4hnZpTqQsAqOC8vB2uCRuHKUIGfvPBnPQS6eZrRCj0UfQyd_wrMGaiiPzNMEGFmiRiRK0N7j_r6Kxkq_swHuyx9p99-o5-q2x51okWD471SjbikYZ1xuVTIn-rp6IbsY");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://didactic-capybara-97qwj6wx7jwc7vj-3001.app.github.dev/api/users", requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ allUsers: result }))
					.catch((error) => console.error(error));

			},

			getTenRandomUsers: () => {

				const myHeaders = new Headers();
				myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOmSDuR7LBkPW_CSOIt6mvzBdAAMGylfQGaYzEvr0gnv1X4cY1p6DylcMmCsRM7K1PrA0U7G9yim4i45GihqyljtKFD1sORnHPux7rtix1wwkpUtpVg9SV-vDhViYSu4P1FkhPFHUBTObaG_QLprphuoF_kbtY9ub42f2x_wLXMiP8th-Y6lcgCChb35uYFx9CfLjMH_pqSVRGEzBCxoncCspHQyeXT1p_YqzqZscFAyY6MmBr5_Lk0g1UNble_84ECqUBodmyojvTqM28shfYNOA9cDFlHGIVRBsssqv5VHms5xOJCTyBBKnQzcPN4qe6BiqrV05m9nMsATI11txupiFzPLFxwl1HWYa0Cs28FbKzAYL8Fa0ILZcStfZyRoxUFveKytyamH4ehR9fqezVPpuKZ_K0x3Ks5D6i2r0SkcQUALOFSuHdXyscy9LRnS4AyKZMB1Jbhvn8zT6oJ_9iHl_X-oBzr9S7BRmtXESxCB7N-FrAxIzm1Dqcguu_G54qKitqDboL31eOyh8dNMAlwo93aW8Liu_3psqhhsxywOjodjFcUzBxOjEnWntB7VezGQ9_Uug6SO3thOGoaDLBkOi82s_d7IMm_ydX_nsE0Dld4wJkCWKHTFDOqZDc3zvF7rIOGVHWII5hRDpre2MpVRySSTAxWWTpqOcOPRYEot1ONLFZ6h8kqwoX7Vf87lf5XLtlpqqmXX17Y1ytTjb8teW5vpfDgrAv7QXepiI9NLxAkKAjxUwzzzuCCOPUUKXCHCexNvajlo6oS61iW7dZzcKR8zwQCOu01Q-ewQNvr_Uon-NWDICKOkIriBahbadSQLxhrp2ndaeebhYoF-Vv6IOfNGvTviKBhFblejevw-lrNVckWVDHnu6LNfgJFQmlwa2L48MZFBannNhc2yGP-d7-pk_FRItHEpzSZk7PLhseAzRVy7j7zh9O3EYzvI1e8a8vp88qfDubzObbZp-o1");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://didactic-capybara-97qwj6wx7jwc7vj-3001.app.github.dev/api/randomUsers/10", requestOptions)
					.then((response) => response.text())
					.then((result) => setStore({ tenRandomUsers: result }))
					.catch((error) => console.error(error));

			},

			getFiftyRandomUsers: () => {

				const myHeaders = new Headers();
				myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPkRTS-R8sLCmBkn9GDI2KeEV9B7fY7LFIXFNtR2g3VjVE2gGn9C4OWVbQJxv9M9ZPjRefbTa_okZW-0eyskCp0LUQzQUngx6ZOE_sJamFJbgHNCo8MBErjbnVRc_8Nz0zq4NitW8AavBbMOIhtPmvde6_-HuC-_Ys5oMubeHFigPx5e2IvlcaNRCeEvp70RxwSaGzQak8dcY55JAUmSNdf2rowAZr4nDbBYtHWWZL2WCgFyEPOvQ2SI6XFkpJNBJZ2-2W1fz7nXUb_AA1u4aDvcTePzC-r65GkgtBkkinWKYnJPeuwiHQkmnbgTy5SjDniHSvJPYgdVg7f6fTVjLDXXGtBO2gvRF1y9NER6zlUmYEwDfgTp-uIjKPujckqSOjH3pgdEfNyYHkZ08_CB4Xvs480udb3x0Ud4BvNZXqZMMs0QibUaKR8h1kQ876EnuVwmhZUtEojOdV2DvakW18npM4uCj7BA66guURCUSKn4hO7N0fbJahixbXeP9yXUQm3ZMHncNuree_xcqPoxiI6ho0Ec5wknluyMTXsHBdVfMLPrdkxJYlFC9lY7NUV5g54OFsnE7Z-LiIz3JC4We47nHMB4Svlp2lQ_JdV4FlCbxZmr1NG2MxIac5081YtBlEeJs0_X3qRBZio174iuYe9ePVyoQfjarA3qt1KHpHl6Odd8jXDfJfbMp7_KtGv5hmUu5wT_9vXg_60s2EHlkZjU8hqtsimR3RV5gp01PVrnOQtOsWE1miEGSZOwquv4bkvayRjwjFabssc6kYcWjyPHeDRORvpRIOBE8GLiKSq7aONVld4weLRo9s8nBJ0Z24DrxmsP5BEzX13H4nYm8IG58RAzaXowL4TkZrt-TmWJTrvxmGdZeMFhtXtLT5r7noMGsyLTBYE0Dctu9RHdlL9EeFhPjTP5G_2dLSmsI14ZCxvozi1TapaahBD0L63SfLBSE5AUtVazynXIRSvvL_F");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://didactic-capybara-97qwj6wx7jwc7vj-3001.app.github.dev/api/randomUsers/50", requestOptions)
					.then((response) => response.text())
					.then((result) => setStore({ fiftyRandomUsers: result}))
					.catch((error) => console.error(error));

			},

			getHundredRandomUsers: () => {

				const myHeaders = new Headers();
				myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPkRTS-R8sLCmBkn9GDI2KeEV9B7fY7LFIXFNtR2g3VjVE2gGn9C4OWVbQJxv9M9ZPjRefbTa_okZW-0eyskCp0LUQzQUngx6ZOE_sJamFJbgHNCo8MBErjbnVRc_8Nz0zq4NitW8AavBbMOIhtPmvde6_-HuC-_Ys5oMubeHFigPx5e2IvlcaNRCeEvp70RxwSaGzQak8dcY55JAUmSNdf2rowAZr4nDbBYtHWWZL2WCgFyEPOvQ2SI6XFkpJNBJZ2-2W1fz7nXUb_AA1u4aDvcTePzC-r65GkgtBkkinWKYnJPeuwiHQkmnbgTy5SjDniHSvJPYgdVg7f6fTVjLDXXGtBO2gvRF1y9NER6zlUmYEwDfgTp-uIjKPujckqSOjH3pgdEfNyYHkZ08_CB4Xvs480udb3x0Ud4BvNZXqZMMs0QibUaKR8h1kQ876EnuVwmhZUtEojOdV2DvakW18npM4uCj7BA66guURCUSKn4hO7N0fbJahixbXeP9yXUQm3ZMHncNuree_xcqPoxiI6ho0Ec5wknluyMTXsHBdVfMLPrdkxJYlFC9lY7NUV5g54OFsnE7Z-LiIz3JC4We47nHMB4Svlp2lQ_JdV4FlCbxZmr1NG2MxIac5081YtBlEeJs0_X3qRBZio174iuYe9ePVyoQfjarA3qt1KHpHl6Odd8jXDfJfbMp7_KtGv5hmUu5wT_9vXg_60s2EHlkZjU8hqtsimR3RV5gp01PVrnOQtOsWE1miEGSZOwquv4bkvayRjwjFabssc6kYcWjyPHeDRORvpRIOBE8GLiKSq7aONVld4weLRo9s8nBJ0Z24DrxmsP5BEzX13H4nYm8IG58RAzaXowL4TkZrt-TmWJTrvxmGdZeMFhtXtLT5r7noMGsyLTBYE0Dctu9RHdlL9EeFhPjTP5G_2dLSmsI14ZCxvozi1TapaahBD0L63SfLBSE5AUtVazynXIRSvvL_F");

				const requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://didactic-capybara-97qwj6wx7jwc7vj-3001.app.github.dev/api/randomUsers/100", requestOptions)
					.then((response) => response.text())
					.then((result) => setStore({ hundredRandomUsers: result }))
					.catch((error) => console.error(error));

			},

			navigateTo: (path) => {
				window.location.href = `/${path}`;
			},
		}
	};
};

export default getState;
