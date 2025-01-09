const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allUsers: [],
			tenRandomUsers: [],
			fiftyRandomUsers: [],
			hundredRandomUsers: [],
			dynamicUsers: [],

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

				fetch(`${process.env.BACKEND_URL}/api/users`, requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ allUsers: result }))
					.catch((error) => console.error(error));

			},

			getDynamicUsers: (count) => {
                const backendUrl = process.env.BACKEND_URL;

                fetch(`${backendUrl}/api/randomUsers/${count}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then((data) => setStore({ dynamicUsers: data }))
                    .catch((error) => console.error("Error fetching dynamic users:", error));
            },
				
			


			navigateTo: (path) => {
				window.location.href = `/${path}`;
			},
		}
	};
};

export default getState;
