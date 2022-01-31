import React from "react";
import "./Footer.css";

export const Footer = () => {
	return <div class="d-flex flex-column h-100">


		<footer class="w-100 py-4 flex-shrink-0">
			<div class="container py-4">
				<div class="row gy-4 gx-5">
					<div class="col-lg-4 col-md-6">
						<h2 class="h1 text-black">Jadoo.</h2>
						<p class="small text-muted">Book your trip in minute, get full Control for much longer.</p>

					</div>
					<div class="col-lg-2 col-md-6">
						<h5 class="text-black mb-3">Company</h5>
						<ul class="list-unstyled text-muted">
							<li><a href="#about">About</a></li>
							<li><a href="#career">Career</a></li>
							<li><a href="#mobile">Mobile</a></li>

						</ul>
					</div>
					<div class="col-lg-2 col-md-6">
						<h5 class="text-black mb-3">
							contact</h5>
						<ul class="list-unstyled text-muted">
							<li><a href="#help">Help/FAQ</a></li>
							<li><a href="#press">Press</a></li>
							<li><a href="#affiliates">Affiliates</a></li>

						</ul>
					</div>
					<div class="col-lg-2 col-md-6">
						<h5 class="text-black mb-3">
							More</h5>
						<ul class="list-unstyled text-muted">
							<li><a href="#airlinesfees">Airlinefees</a></li>
							<li><a href="#airline">Airline</a></li>
							<li><a href="#fair">Low Fair Tips</a></li>
						</ul>

					</div>
					<div class="col-lg-2 col-md-6" style={{ textAlign: "center" }}>

						<img height="20px" width="20px" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAgVBMVEU8Wpn39/f///83V5f29/okS5Jjeqv5+vz//vwyVJb9/PoqTpMtUZX6+vo2VpctUJTK0OFtga/s7vLP1eLe4uu1vtS9xdh8jbZXb6VGYp7n6vBedaicqcenss3Z3uiLmr6uuNCZpsVNaKGDk7qRn8FSbKR0h7LDytyGlbu5wdUdR5CtBmBUAAALD0lEQVR4nO3da3uiOhAAYFiIGwgBRS3ipVq12p7//wMPttuzawghk8ygx+182v3go28TksmVIHz8CG79AwaIb+NjxLfxMeLb+BjxbXyMGMYoZZryS6TyEr/+3fxnkG+nNl48Yfk83q231WT1uq8vsX9djU7b9e78XIYpJ6cSGhueXI43h1VQMJFlSZJHvyNPkiwTTASLanNeygZK90OIjI0vnm5OdYPLo8AUed5Qg8l6HJM5KYySy+lmJESWmHl/Shvoaj0NeUrwe9CNKS/Ph6gpPlvefxFlIqneS3wmrlHy+FwlIgH7/itPkU0aJm6lxTSmfPoWeQC/mEk1TTELE83YFOFuz3yBv5is3iAWJpJR8tlWFNZNTG9EGTs8YylRjJI/n7zrqBoJG01xlAjGRjhBqqTXkbPVGEPpbfwQwjsKu4jYCqEsfY18WZEJP5WTGb+pMQ1f0J9DNRK2Lf16Eh+j5OcgIxZ+KPOdVyrrYeTLCcPrLYwhVj4V1tko+c4hJ3WNXKzdi9LVmC5XYjDhJcTeuSgdjfxdDFeInxGxjWM34mSUYcUGFl5CTNwaWBcjn9VDNKftSIKpS311MPJ30l7fFJf6OoQxPd6inn4Fq+CzeFCjjCfDtqdqZAvwQwk0pss9de7WF0kwAyJhxnQW3epR/B15AWx5QEY+RRzqewR7AiEhRj6+ZWvzZ7AdBAkw8vO9EIFIe+M9ERskoKO0Nt4XEVSStsb7eRa/gs1tkZbGdHrbnl8X7GyJtDPKmf0S1HAhpnbJgJVRlsEdEoMoW1rlrnbGxa0TOH1EdWyDtDHy022Gi/2Rr2xqq4WRr++vvfmK4s2i3ek3pnfXa/wZNt1kr1GW9/ksfgV77n0ke418cfvRlCmi2rsc+bG4taInklNfbe0xptN7fhg/g733NK49xvguO38lkp5UwGzk1X03OJ+RjMy11Wi8727jdwhzB2Iux/9DTb2EKE211WTk23vN4dTIJ6aCNBjl83A1NcoTUYivuPyrSJqw7prZ2NC2Gox8NUzvnxRM7A/Hp/N4+hnj8/npfX7cvlWvwcce1/6IakNl7Tam70MUYy6Kajf70R3xcmrzpy4Mc1iGcqzJG5woE9XY4PuMn1b9V1bCjXxDnsSJehP3Cm2NybazIDuN5MONJN9YAK2NgZh1PZJdRv5C229E7PDTjmhrTKquguwylrRj/ySYWgqtjQHrKsgOI3ExFhObBxFo7CzIDmNMShSVvdDeGLCO8YfemG4ojeIFQrQ3djWteqOkTMaLLYhob+zqI7XG9J2wxUkmMCLEuNZmrVojX9EVY17b9hlwY0fWqjPKZ8JiZKbk1NMYiLMOqTPyN7ocR1gmN25G/ThSW1fpiFENJkKMgdB1HxqjJGxxWP8ww8uobXU0Rj4iGxvnIzgRZIxqTWXVGEu6sTGzz1LdjNrlj7Yx3ZENHKO9AxFmTF7albVtJKyq2Y7cGNU2RsqqChhtOBp1I6yWkTCPc2pxoEZNy9oy8urOqirQGK1aLWu7rlIJLzMuTsYfsJREtAYfqpF0ctwGFJez8XWcYQOEopWzqkbC0XFy6gWOt3XBmFAC+DWtkbJq5BO6x3HdIzzXDGHLWvSqNjqt5xEB0xGiJ1c9IJ3CK9QHUjFSDh17Ro4V1je3BpGKMZ3TrQAIYwaAtwW41UMqRr6lGzvmxkmOPdr0SmugrBrpdhxFexMRdY+MuRwJpwDyhcmIOS8vliajnNE1OdHKZMQc7IixNBnPhEZjRo65oJvtUoORcg3AaITl3T2hZjrXRspm1WiMMeuP2rAqRro5gB4jZrOqTlwpRsJ9DsMZA2Fqc1LCRYABjWxpMBLO5QxqvJ6AvDLK2WMYlQ7y2kh5qmpAY3G9M/naSJgCDGlUkoArY/pOuLdqSOPaYCQcPQ5pVBYEro2U2zmGNB4NxvWDGK9PYT2kMT/8BcbKYKTcJXcvxr+hHB/EaGxzHqXv2BqMOxRjpI3ENGcV/5PrP9WEg9HUP+LkOSNtrN5MxoX+Q5eA/wBjLveEkZNnBotD/ITXrWxjGHeMUYxOOxs6w2HcXswNRpRFZGSjw99dWbm6nutY3qHRYbwnpgZjeIfGI3zKV9k8r8w9YkyvIhsdjguLODQYMTZZIxsdFiYj4xwyxgYkZCP8cVS3ISlzyC8I6x24RoeuIzkYjRiTVrhGhylfdUOAsv6IMcGKa3xy6DrOpvUOlONyuMY5PJVTT0Kqex4QFq5wjQ7nMLJrU8t48m90cI3wH5QvzHtXMEbJuEZ499jaFKjuJUNodHCN8N9TvJv3koXlnZWjwyihdfi6tbfTf6MVqtFltNe3R5c7pPmURvhqYfvup9Zea/8lSFQjvA1UdyBp9uiW3tkcqhHePbYPeLTPPox8swBUI3jrt+Ysa/sMi3cPiWoEd4+aw+Uto/+8FaZRglsHddOjzhimvikrphE+eszilkhj9B0nYxrBaVeuudCibfSurFn5Ux8mTMcnwIsTupPlurO6vpU10UZhXtPRfwicdBVtj85ItAppPBmItTanTuV0GYk2lQ+y/qjMkHcaiXbqDmHUndTVG3GW6FrfP4BRWZQzGMMY5QuVGMS41HH0965Q7GEZwKjrHLuMcklQWQcwdtz/rL8HieLgNb0x77hrtuOuJ4JTyfRGpr09p/vuNfwju+TG/BV295rEv8+a3CieOu5g7bwLET0PoDZGe+hdiPhPJLVRnLuu0u2+m/SEXJDExkhd5bAwomfmxEamy8Z7jOi3WtMaTTdbG+4KLnErK61ReyFZvzHdodZWUmP2Yrig3HgH+wLzNCSlMWqt49gacfsPSqPxCnbz+wL4EbHZITT2vKbE/E4EucdrdwiNUffd5BZGxLSVzsi6ElUrY8hf0E7SkRm7L+22M4YS7ZISKmPU+2qnXiPatAeVsf8FV71/hPQJ6ZEkMor+l5b2v4uNb3EeSRpjYnwDi60xlDjvKiExWrylzM6I84ZLEmPR+bIHmDFMUYaSFEZzDgcxhinGpWEERsv3B1sZQ75BmFNCN4qj3Yt17YxNdu5dXdGNRV9+AzSG/M0XiW3MJnZvDrY3hrzy7CaRjcnI6r3BIGOYnvyQuMZkZf3DAcZQ+iFRjQ3RuhghxjD1uloT05iNpD0RZGwaHo8uBNEoJgAh0NgMmT3GeWhGptuEg2YM+c4ZiWZkprlUBGPIx5njKATJGLE5kAg2Ngl67bYvEseYJ1MoEW4MZTxyal5RjNmitM1ufIyuLQ+GkR0gfYaPsXkoc/hD6W/Mi3dwPXU2hmkJr6/exuJ15kR0NIayGVECJ0A8jdE/x9ShnnoYm/o6W8CK0s9Y1M9uhehjDGW6KSBPpY8xFy8ujY23sSnK5QRQYT2MYuVeiJ7G5qk819bjLWdjls+5eyH6GpsGVm4yy7TH0Ziwlxje7WMamwpbboWV0smYs8PSp5riGC+P5ZuN0sGYiGrmV02xjM1judyK3p0DYCOSEMd4UZbrRJh7EpgxKsR2iSLEMjbB5XzBTFUWYszZfhcjCRGNTRvLn7d5d2FaG3ORVVPu2Zb+GYjGS5WNnyZZB9POmBdiNC/RivAjUI3hpTDLecPUvMPJwpgIMdotMYvwI7CN4YUZn7c1KxRnjzEvWHB4Krnr4MIQBMbwUmn5cn7YC5H9hpqNSTWfcfQS/AwaY3gZlvC0HG+q10QUWZLnkfnNiCFFAf4KMuNHNFAZz86b42lRG+8m/UH5K2iNHyFlmvLGWkpDUP6AAYw3j2/jY8S38THi2/gY8W18jPgbjP8C0BPuIt1dePMAAAAASUVORK5CYII=' alt=' ' />
						<img height="20px" width="20px" src='data:image/jpeg;base64,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' alt=" " />
						<h6 style={{ textAlign: "left" }}>Discover our App</h6>
						<img height="40px" width="50px" src="data:image/png;base64,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" alt=" " />
						<img height="30px" width="50px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYQAAACCCAMAAABxTU9IAAAAkFBMVEUDAgL///8AAACRk5aNj5KGiIqUlplgYWNxcnXi4uKkpKQKCQn7+/vx8fHZ2dl0dHQ6Ojro6OjU1NRFRESTkpJ6enqqqqpLSkrIyMjt7e1bW1u8vLz19fWYmJhnZ2fX19cjIyPMzMwzMzMWFha4uLgqKSmBgYFUVFRAQECnp6ceHR18foEmJSVWV1nCwcGKioqHwMZYAAAUnElEQVR4nO2da2OivBKAZUC7KmpBwSvUC15q++L//3cnd5KAmLRae3aZL7uikDBPkplMJmnL0eVtNkvajTxIknwWllTeUj6t8uTD8zy3kYcJUu9HJ19dhTCPPzy306G/bOQh4hIFex+9biUEP2sjBN7LdPu5g0YeJLv99KXtIg7teFWG0MWUohP7bauRhwjV7vq/dsf12qEOYYbwRNtG/T8iSM1ThKGdqRCytuv+1xD4MQHop3hIkiEgBt6pYfCTAjD2eF8gEN4Qg22D4GcFYIsohBzCANmDccPgxwVOrnsYMAjvXuelGYueIPBfx0sohGHb/WgYPEMAos7HkEBAM4dTw+ApAnvXdTGELu4Iz67NvyrwB3eFlpN5jVV+msDW9WIE4cP1GovwLAFou3+cVuC5fxoGTxN46XzMWzOvc2wgPE1g3PHy1sZzm8ny8wR2rrds9Vx310B4mgB4bq91aezyUwU+3Eur7bYbBk8UPFNoNVO15wqkCILXaTzUZwr2UVtuM014qjQQfoH8DRC+kBpyj2yG+2Wk3BWCRbXkPJzvlnrs9V7sHgJJ/P7tYl/i9ztNce8HAWlze5iczR4E4ywm0rssvosBLo5jqVKYO84XCxWtBhLHuVOw514QUNUuOKvPMCIOL1Ly6+V7FODgOD1LCMFXIcBhMtmTW2Hy2yAARAOi0S9AcJzutyj8LAR05/QBENrfhwCwYa3acJTEEOL+er0+TQKVgqmRKH6nQCjdrl8gnyohlEuuqAt0NQjl59ur8i4QYL+ybNMYQo/ZZZxrkLBxVrbVyn+kC7pNlyDotr5k+/nnEgTtl1f8BvQJQXil1SAQbpRnJveAAGufDywzw+dgCO9ccTgRkDZQmC7RowYZHnVhtwwz8rajMDwQ5cdhvgb08e0VekiNwYTeJSAAuexsUm47YYR7qJ9P+edxFszDSRkC+2U34VzDcA8xMt+BbLBgn2Wouc2y5QIIhCkkaBSeJ6K8yxt6ShhZUrgDBPJKTCJ7COh+diPtFESI0jeO/4r/zdF74X8/V84QtTL08luWzLwhkDgEOPLGsKF0+hulXuRWLHMdghhOnRXhBT1UBts9kEn96FWqH3qYP32jH0Na3o5vONjYUbgHhLhwdPZfgNCCDBkIpk1nmJC9Eyl6y4j+Az7tKbAgwxb2SHPnrdcbclgMAmzRD1dZskTXl8AqFiSXCf7hmnQpXMU8C5xch5DjXpzEqFn7pBciCDMnTEjHSgsI202Iysh5T/A3zpDW40LaUEjK6/msfHMNfhsCnAo3JzaeqykQJmQcg/UKa5VaiQH650R+A1P85BcQlvDisJ9ltAkyCIA1iXsK7OfES4Nz1++SEXpD6eHxfIM/YxgyBDgi5U/xNzOsPyAQnBG+gJ6ZS+ORZhOQ8mk9hvhChH+L5DzAv7FR4fch5PYdQYMwIm+BlUmNAG5SKXlhOvwES4QX6zLYUQghaehb6ghwCOijT5wz3GUybsHxPwfSPLCqB2QFkQx7MoScD1hIf/4nhUA705GPNfynineUk+f3fdxTAYbO6kzKjCyaI9XGNyHAZ9ERLsZPqYSAmuEC+AWs1tgZ7DGROMLa3gXE7mMI1AT0A0qFQUhxO6cPHKBhv1U4KyMKYULZMCskt2+feQZkZDxSCAfyhPUANwSp4gqEA/3fikBY4/5MhXYNcx1+G8JEMFiamyMVwoFW/82Zf9K3OpOGiH90xBpK0Vvt8Oh0YBCiKghJ4enOqFIBFpM8HA7nFEIuHAfVMGOlhSCqElEIqQGEEf3fG4GA6jd4GxJxaCMw18Z3IQgPZGbhEqgQYocMN12iU3yhT7QCnwOk1hS/YYBUE9HXr4NwYKpcMktebI+MaU8bSZSKyuzFwI8LSb4IYezI8pMQAFb2/UB3UQdYraQnrOlb7WhPQCPRBukjxFOJDDXkAG5AmMg9AU5olBnGlyi9lHpCV+8Jm+/3BAQhPy6YWIV1vw+B+uarg5VrrECImAu64cEY3PrfqfMZoLdGU+sF6t9dOqJfhTAq2vMAeVdkfH+XbULC7WXJJiCTXtiExS0I42oIe2LDvzJn/jaEHUYweF/bFsvUjGThF9MENvPdsNkb8k6PK+dETN2RvfNVCFvh/BxJv8Q+1oLPF2I6z5i3yIWD5h3NGH7oI/Ox/2JPwN4R9c5gu/18cE/Qgiz5LF6clZiOUbEsdtQ/4n1zA3I/mmz52DPFOlrRJwZOl0wZkJrEK16DgFWZ4d+u57Q5z/D4hCkzm4B+T38w1ecJqKvMiXe5pKatBkJIn1GGQC6QaQhkPrdOhhq1hIDL2L5cogXXNtM7fvfRJEmSy8KEA4bgr5CQwYybAuxoZZdJ6AjnD0/Gc/aCLDp4DUKLWEY0Y419NokbkcddcmcuzcjncbJx5l0VAlbtqndJ8AQZb5apgYCnccOMxY5UCBgyKj/pslZlLHYQ8EQkZwGa4eRMWwS5vE4KTyQ83MSgrCf0RPwr1i4RPZKBae+IsWrCIaCJw5zN3ujEIeW3UwsObKP2ascgiOefZnrsaMhvpUNeAWGlRoaJtaexo0RAGDKPeDtgD2GtylSsIEgRNuqULtgAFGlHx/i3FstgnC+JZD1peRONHBtC8cix7GfhkIR9IA9DPpML36iC+stwiSGMhkOaQQhrHOTk0VU8VR7imGwfwvBCB+sUVdRfbqEXbpQK0p86frZlgdkwpEbinIeZ8i7wmnXnKxzTSvOc+RFxOGQFJvgpQ9ulQgsISEUDR5NBnE4PS/0qHjpurO6AJOrV3Q5kLPKoV1xTvlS+6p/VXyqFiA+lroqvnvvXy9BrrherPt/SzTGHAPBeoezrYpkAURSjvkPBo3ypBfoF/XahL+1Cq1w59c5SGeovS1euVd9IjCGAFKgzk/RrFP5BMYVAvDdLaXb/GIohBN0kG4lVOPdfFlMI49s618UukPEvixkEHFyzFD9tGJiKIYT0ttY1acyyuRhBkCaUpmIVO/lh+ZIv/0gxg/B6W+uqmOYfkaf/pE5IUev1dt3/RRzMIMS31a6KRewEpkcs05/QCNJ72hsGg8FqMA+yaP9LMJhAIHkeVmKRqQ6vbFWo/3CFAJx7c7maq+X0V2Awg2DbESwUKiYgD7ciAIdS7AuvbT+4WJOamUBYWDKwyPcocijDB2tDRLZV6RYj59eib/eomgkE29myzWh05Df5Vklr1nI17jLn3RZgkWIx3Gx0z7qZQKhsQjUysoBQhGYnj4Vw4eWEvcVxfJyIeCTPsCMrY47xPpd71s0Egm3szvw1SLoLk+CRAwFOZSKy+RRBf86f58H0u78ZwsYSgvmZhmwqTpvgI6OuZG3YwZld0oLRi0L/l0Mo/92LejHXJutktJk+MOoKQH3TXF0wYkPU+G+EYBw3gh3J35vRicj8ceMRzm4tNw8+AYr/HyDMLCEkxhAi8vuI+V+ppqLCY6xcvK36/krJzAmba2drsXJndP8fQ3Iqr7BWP724pn95qzp67R7hHWWGEID1MZJW7ijbMfDabjpCkpJl+d3xks2yw3QnLwNPI/R99Ek0eIp6szx52V95bzb867YfpmRP+wSgj54V0SHrQostKgnn4yGezeLD8awsQ+9I+WRzySJZLvlsk9xwiWf5ezTeGWEwgmAbOhqYQqAhC7y9hYRplU0mzGMMQI42BL1zYVhptfAOyhGP8uI9glWFs55QmouIFnvWXqFbmO9jLjy4wfJYPJ5tUcoAUtKFVjzjYrwUNwTvWwMMRhAmjqWYbimnDx4B/99BgdCl2oBU/jtMq5FINOkxCGvFZlUGInCiKpbeFZWUIPBJP+y1/IalyDJlseW42I5Iru7UccOfmOQjPiBsYbhvjrV/nBDN9vvIO5MEhIP2cLFhlUKY7rWIUNXWSZ487lxJDrwGoSLVas6NO4Pwzuf8dHPQqRTszCuyZrTSTSD09efelBupX+y5U1pJAG4d/FMJwrDcAiIVQumtK3arFAk7s2OVvbwyHMFipT+cbDGk91AIPT4UYgjwOi/fcHP3jFkUtaIq9RKaGCQ2ZaU5jdRln5QgBMQyzMM4C0UtKGIGgdILl/FGbKeuCIAUMSrn7fBadrT6l0v7Qlt9crhcLjQldc9U6m8OaXqYsd40YPuJKIQ3fHUwHHYDKJYg5++L4zFdXq+PNQR7H9XIS4UW0RpdSCAZv+ohF33RxFcRSY3c80Ai2yveE6XhFFLk4Yw4hvKaEsjehR/E0WuFU0kLFIhE99lsqfV+3dDPdFNSsd4YpGv07RZEqPO9T28YMya3ckKNIFhbZpMgHjM17I2YtzqtgDDfc2d8wdriVIUQcaX1mYmumHuD1pL8eUbQSr/QJ2u89yyLychSLp9DyPmcAPa0fjwhGFVoKL3jNyFs7SE4Nw94YG+0YBU+aOorIIh2xLaB8z3GHEIiSoIdGz8qbXPJ0/ZnKZS7HofAO8K8WKLiqx+5DKGYfLCOIB/EcLxaH7lqZtkWgWMv19xB/tD1QH5FNh4F4o0FBGlkE82ZbAdgEOT9A5xSVeAEefzlpJGgSI8qQVhTIyT3aTbFp+UzCKOijZAH+Hu5whRk/ZkfhnlH1iv9WN5qpwtMX5lodxvyeVGCIA/w3FueShDkLew8UFcZC0StflrOaha+SwkCnWUP5EUe6FPjnRYQCp2z2ZsSJGTU6mMIhhBOetXNpMYwcKWLkBqrbq7rZKPaT6qEiQRBscLcZboyJ0NyjLVsQt6TShBiBkl5Qi4gMwhFR2TN6gCyjImZGNaOCqZpkLb5Fo7yPlWPFMMPF2rV/LMGQT1ZjcWx4gKC+n58PLpWMC1q0ZMn2WHlegJvJap/yVzpWQGhKJ9RS0aRJAc6pt0Bwpf8o/pjf9gTY6nR0PE+0iCkVUrICwhaS6V7ym68NJa0WC+MqiHQHqNudmGQu5UQNtdVcRcIO/96AVelZl2BT2u6YSHU+ofa6DC92hJ7gof0/d6g5dEKwCc3EGxbqA6BflxUQZhXQIC6dZfaJCDjTSJfMM11B+LVWJl9LYRIh6DaPO7SGM3YxeL/ZyUE2ky0daApaY2BLYTaPxJiDGFvD6HOL6uBmqgQjo/pCeTHfEoc3bMnrAZl8e8Dwb4r1HkEdTOPrmonVQ+LmZJlAUE1PKyl6hCurHNxj3dSCYHqNK2CMKyxCSlUSa1yjTcOrm2jeHUrzfztfVXoxZMCQRtuqPWWvKNAiRSz4crXGOxI0nEphAMsDB5XQOBFad4ZnRTnNd6RfT6nxRZakT1lJnUBXB6EWZ6mspzCQiVCJ8OqecJBmicoq2XMhd1oEKZVVwsIl0oIlT1tUzSCEgSTiVmlOiz2MVslXdSeh8fXWF60PkvfYqA4K0oWE98y9ClBkJsq7Aala+QyfbA+MvMO+VIJgcZ9VvKBLbCl48GiEgLd2Kf6IwajkdWO/rGNm1rbKdnIGmhrTtyqKjqRuxT33clyLofgS3EFHkvWdjvwDqSFs0SOcL8SwrmYnevPh0oIFaYc+vjUlaQ+pmxztoXNgFR7PCtInVr9gg7DuQKhiMeK02XfZQgSJX487UovnbsVkTq2sXAc1SO0NHeM3SQF5OCVthJ6+pUOgSNSIopRCWSFPmwgmG/qr9/ywddLSycviKADyBDICaWkY/NWsFcgkIA++f7InIfSOwsPOxFjg/Q4NmNmEwMRteVzmaFYT9gHcvllCFuf14drjNWo/m8J2p3y0jcNIS3qC6UNupxxB2da54MKwcnJwnC6YR/ZwZrFylpADpI9cS+61BEkDztI6MoZ7CIe2OY+Mffzp2JljaUMz0fMZLFV/xiqIYjRasiPv7n4rML3g4DahpmfemNZTck+VL+hfS2UINArfncuLBI70YlBYGPGoFtYrArnWA5Brt6W2aZ4nFg0EqDesowOOOKm1bLXW/J35wnEFRCE8xL0JpNJxu5Y3ci3sDz5i8+F6uWGp8wX6irOgeHjUR8EhG1pWscGbQYhLc0iK1eT4HxtelisYBTJADzbYl+RPMFPlKqAUH2Dfyv3xPr4NbUvzJLjdj+OMiU7Z1Tf+XiWRVX+L0/sSCQIn1rqD2fHIIz0NIQrK3r6IjNXaeEByzaP5x3tS4txXRFrr4CAWJdumN/M/7E+iBB2Yk1kKE3QTyLvLLzJnSm6clMVm8UFBYRXsXxPCy0WsjgEZTuXf7UJIKNS3jiYKO24tdEgFA5Z+YZKCOWjWG6s8pJ7rE+DRO+SBc5gk2zlRXIk7Vm3u4lPt4PIbMJVabz5l8g4Cgj8VDZM+EUqU0CAXcxGSXzy2tXysW1XekPpsD5ke1lDlnJR6V+mIPImP74aQs0N1zXyhXNRq2NSJpEq+sN+3S/FYwoI5OI0vaRT5S4BgXy/TaNo0b9RPr5/eunFy2Xcm1Sl4pFL45fTVrG2qKOnh0N60m649sb42rjqhqvVussfNrITM1oyhMp7JAimzyx+eLMVVN50+/FfuuEZEMxEhVD1AxnC/7U0EH6BNBB+gTQQfoE0EH6BEAhe5xe+yb8EIUUQ2u7H73sTftTEdQjvfw2EPwRC+/e9CfQznBE2vLpMCm38/dsXj4P+TQIfrocgeBYTkZ+SWxMe6xnUrxVou71W4rr1Sz/PkVs6/msYgOfNWjPPfeyJT43UCZxdAqHzXwPhaQLjjhe2up5r+jd8G7m/oGnCh9NykHV+/ImYjVQLILvcQRBir/Mjh8M2UiFw6ng5ghC23eag/WcJRJ2PFYLgeG7n5w+8agQLbF0vdjAE1BXajVV4hgCaLrcDAsHpeJ0/zYD08wLINcIdgUAIkIVeNBR+XGDsut6KQXBmiMLvOEP9HxKAk+u2ScieQHCytuseGwo/KQBTxIDmVFEImELnj9nxhY3cQQD6fxADtqedQSAUvONfEZj8/YLT0Nodt81TAjkE5Kii+UL7v/VfEiL+rULUuzsiBJ4nEvYFBGfewxjc9st0Wxz80ci9ZT99aXsIQTsuUtwLCI7TjT881+10kOPUyKOE6vcjk/cyyBDwIbvuB/5hIw8TpN6PRNstoUIgxmGWJ+1GHiTJbFY+B+5/8KdvtM4ZwnMAAAAASUVORK5CYII=" alt=" " />

					</div>


				</div>
			</div>
			<p class="small text-muted mb-0" style={{ textAlign: 'center' }}>&copy; Copyrights. All rights reserved@jadoo.com</p>
		</footer>
	</div>;
};
