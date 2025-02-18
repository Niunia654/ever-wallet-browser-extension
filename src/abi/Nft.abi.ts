export const NftAbi = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "getJson",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"json","type":"string"}
			]
		},
		{
			"name": "getInfo",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"id","type":"uint256"},
				{"name":"owner","type":"address"},
				{"name":"manager","type":"address"},
				{"name":"collection","type":"address"}
			]
		},
        {
            "name": "supportsInterface",
            "inputs": [
                {"name":"answerId","type":"uint32"},
                {"name":"interfaceID","type":"uint32"}
            ],
            "outputs": [
                {"name":"value0","type":"bool"}
            ]
        },
	],
	"data": [],
	"events": [],
	"fields": []
} as const
