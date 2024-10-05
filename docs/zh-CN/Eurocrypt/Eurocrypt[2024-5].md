# Eurocrypt[2024-5]
## Efficient Arithmetic in Garbled Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#efficient-arithmetic-in-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#efficient-arithmetic-in-garbled-circuits)**
### 作者
* David Heath, University of Illinois Urbana-Champaign, Champaign, USA
### 摘要
> Garbled Circuit（GC）技术通常与布尔电路一起使用。尽管令人感兴趣，但仅在强假设（如LWE）下才知道GC的高效算术概括。我们从循环相关鲁棒哈希构建基于对称密钥的算术Garbled Circuits，这是著名的Free XOR garbling技术的假设基础。让\（\ lambda \）表示安全参数，并考虑整数\（\ mathbb {Z} _m \）的任何\（m \ ge 2\）。\（\ ell = \ lceil \ log_2 m \ rceil \）是\（\ mathbb {Z} _m \）值的位长度。我们在\（\ mathbb {Z} _m \）上加密算术电路，其中每个门的加密大小为\（O（\ ell \ cdot \ lambda））位。相比之下，基于布尔电路的算术需要\（O（\ ell ^ 2 \ cdot \ lambda））比特，使用技术算法需要\（O（\ ell ^ {1.585} \ cdot \ lambda））比特。我们的算术门与布尔操作和Garbled RAM兼容，允许加密算术值的复杂程序。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_1](https://doi.org/10.1007/978-3-031-58740-5_1)
## Can Alice and Bob Guarantee Output to Carol?
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#can-alice-and-bob-guarantee-output-to-carol) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#can-alice-and-bob-guarantee-output-to-carol)**
### 作者
* Bar Alon, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Eran Omri, Department of Computer Science, Ariel Cyber Innovation Center (ACIC), Ariel University, Ariel, Israel
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington, DC, USA
### 摘要
> 在孤立的输出计算中，只有一个指定的参与方得知应用于所有参与方的私有输入的某个函数的输出，保证除了输出之外不会泄需任何信息。孤立输出功能的环境是安全多方计算的特例，它允许一组彼此不信任的参与方计算他们的私有输入的某个函数。计算应确保某些安全性属性，如正确性、隐私、公平性和输出传递。完全的安全性包括所有这些属性。
> 
> 孤立输出计算是一个常见的环境，因为它与许多现实场景相关，如联合学习和集合的互不相交问题。在集合的互不相交问题中，拥有私人数据集的一组参与方希望向另一方传达他们是否有相同的输入。在这项工作中，我们研究了实现集合的互不相交的限制，这在各种应用中已经很重要，而在Halevi等人的工作中其（在非平凡条件下）是否可行一直未得到解决。
> 
> 为了解决这个问题，我们完全刻画了在面对两个恶意对手的情况下能够在三方环境中计算的布尔函数集合。作为推论，我们刻画了在这种环境中可以计算的集合的互不相交功能的家族，就这家族的结果提供了一些令人惊讶并解决了Halevi等人提出的未解问题。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_2](https://doi.org/10.1007/978-3-031-58740-5_2)
## SPRINT: High-Throughput Robust Distributed Schnorr Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#sprint-high-throughput-robust-distributed-schnorr-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#sprint-high-throughput-robust-distributed-schnorr-signatures)**
### 作者
* Fabrice Benhamouda, AWS, New York, NY, USA
* Shai Halevi, AWS, New York, NY, USA
* Hugo Krawczyk, AWS, New York, NY, USA
* Tal Rabin, AWS, New York, NY, USA
* Yiping Ma, University of Pennsylvania, Philadelphia, PA, USA
* Tal Rabin, University of Pennsylvania, Philadelphia, PA, USA
### 摘要
> 我们描述了鲁棒的高通量阈值协议，用于在异步设置中生成Schnorr签名，可能涉及数百个参与者。该协议运行单个消息独立的交互式短暂随机生成过程（即DKG），随后对多个消息进行非交互式签名生成，通信成本类似于以前的同步非鲁棒协议的一次执行（例如Gennaro等人），并且有大量的参与者（从几十个到数百个及以上）。我们的协议无缝扩展到动态/主动设置，其中协议的每次运行都使用一个带有刷新的秘密密钥份额的新委员会；特别是，它们支持定期从各方总体人口中抽样的大委员会，并将所需的秘密状态转移到所选的各方。协议在广播通道上工作，即使在异步网络上也是鲁棒的（提供保证的输出传递）。
> 
> 这些特性的组合使得我们的协议非常适合在有许多验证器的公共区块链上实现签名服务，其中保证的输出传递是绝对必要的。在该设置中，有一个系统范围的公钥，相应的秘密签名密钥分散在验证器之间。客户端可以提交消息（在适当的控制下，例如智能合约），并且经授权的消息相对于全局公钥进行签名。
> 
> 在渐近意义下，当使用n个团委员会时，我们的协议可以在一次运行中生成\(\varOmega (n^2)\)个签名，同时提供对\(\varOmega (n)\)个受损节点的恢复，并且仅广播\(O(n^2)\)个组元素和标量（因此每个签名的元素为O(1)） ）。
> 
> 我们通过将其减少到随机Oracle模型中的离散对数问题的难度来证明协议的安全性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_3](https://doi.org/10.1007/978-3-031-58740-5_3)
## Efficient and Generic Methods to Achieve Active Security in Private Information Retrieval and More Advanced Database Search.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#efficient-and-generic-methods-to-achieve-active-security-in-private-information-retrieval-and-more-advanced-database-search) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#efficient-and-generic-methods-to-achieve-active-security-in-private-information-retrieval-and-more-advanced-database-search)**
### 作者
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kaoru Kurosawa, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kaoru Kurosawa, Research and Development Initiative, Chuo University, Tokyo, Japan
* Koji Nuida, Institute of Mathematics for Industry, Kyushu University, Fukuoka, Japan
### 摘要
> 受安全数据库搜索的启发，我们提出了用于客户端-服务器设置中函数 f 的安全计算协议，其中客户端可以通过与持有函数 f 的多个服务器通信来获取私人输入 x 上的 f(x)。具体来说，我们提出了从被动安全协议（仅保持与遵循协议的服务器安全）到主动安全协议（确保甚至在存在恶意服务器时也能保证隐私和正确性）的通用编译器。我们的编译器适用于计算任何类函数的协议，并且在通信和计算复杂度方面的开销仅随服务器数量呈多项式增长，而与函数复杂度无关。然后，我们将我们的编译器应用于获得各种函数的具体主动安全协议，包括私人信息检索（PIR）、有界次数的多元多项式以及常深度电路。例如，我们的主动安全 PIR 协议在服务器数量方面的计算复杂性比当前已知的最佳协议显著提高。此外，我们针对多项式和常深度电路的协议减少了相较于先前的主动安全协议所需的服务器数量。特别地，我们基于稀疏的带噪声学习奇偶校验（LPN）假设实例化的协议是第一个针对多元多项式的最小服务器数的主动安全协议，而不需要完全同态加密。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_4](https://doi.org/10.1007/978-3-031-58740-5_4)
## Constant-Round Simulation-Secure Coin Tossing Extension with Guaranteed Output.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#constant-round-simulation-secure-coin-tossing-extension-with-guaranteed-output) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#constant-round-simulation-secure-coin-tossing-extension-with-guaranteed-output)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Jack Doerner, Technion, Haifa, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Jack Doerner, Brown University, Providence, USA
* Varun Narayanan, University of California, Los Angeles, USA
### 摘要
> 共同随机性是许多应用中必不可少的资源。然而，Cleve（STOC 86）排除了在存在不诚实多数的情况下从头开始抛硬币的可能性。第二种最佳选择是一个Coin Tossing Extension（CTE）协议，它使用一个“在线”Oracle产生一些共同的随机比特，以生成许多看起来像共同随机的比特。我们启动对完全安全的CTE的系统研究，这种协议可以在存在恶意行为的情况下保证输出。Hofheinz等人（Eurocrypt 06）暗示了一个具有黑盒模拟的完全安全的两方统计CTE协议，但其循环复杂度几乎与输出长度成正比。常数轮的CTE和超对数拉伸的问题仍然是开放的。我们证明了具有完全黑盒安全性和超对数拉伸的统计CTE必须具有超常数轮。在计算环境中，我们证明了在\(N\ge 2\)方参与且拉伸是多项式的情况下：在次指数LWE的情况下，CTE只需一轮即可，甚至可以抵御自适应腐败的普遍可组合安全性。一轮的CTE可以由DDH或类群中隐藏子群假设、一个短的可重复使用的均匀随机字符串以及DCR和QR隐含，可以使用可重复使用的结构化参考字符串。单向函数意味着具有O(N)轮的CTE，因此对于任意常数的参与方来说，常数轮的CTE是可能的。即使在具有独立静态安全性的两方设置中，这样的结果先前也是未知的。我们还将一轮的CTE扩展到可以从任何有效分布中抽样，采用了包括IO在内的强假设。我们的一轮CTE协议可以被解释为经典随机数提取器的变种，其中（短）种子和源实例可以在给定随机输出的情况下被有效地逆向抽样。这样的可解释提取器可能会引起独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_5](https://doi.org/10.1007/978-3-031-58740-5_5)
## Witness Semantic Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#witness-semantic-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#witness-semantic-security)**
### 作者
* Paul Lou, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
* Nathan Manohar, IBM T.J. Watson Research Center, Yorktown Heights, NY, USA
### 摘要
> 迄今为止，对于两轮公开可验证的NP密码学证明，可实现的最强安全概念是见证不可区分性（Dwork-Naor 2000，Groth-Ostrovsky-Sahai 2006）、见证隐藏性（Bitansky-Khurana-Paneth 2019，Kuykendall-Zhandry 2020）和超多项式模拟（Pass 2003，Khurana-Sahai 2017）。另一方面，零知识性甚至弱零知识性（Dwork-Naor-Reingold-Stockmeyer 1999）在两轮公开可验证设置中是不可能的（Goldreich-Oren 1994）。这导致我们对已知可实现安全性和两轮公开可验证的NP密码学证明的不可能结果之间存在巨大差距。
> 
> 为填补这一差距，我们提出了一个新的自然安全概念，称为见证语义安全，它捕捉了这样一个自然而强大的概念，即敌手不应该能够获取有关证明者见证的任何部分信息，除非仅凭语句x。我们的见证语义安全概念不仅包括见证不可区分性和见证隐藏性，而且具有易于理解的解释。
> 
> 此外，我们展示，在假设LWE的亚指数难度的情况下，存在一个两轮公开硬币公开可验证的见证语义安全论证。据我们所知，这是该设置中已知的最强形式的安全性。
> 
> 作为我们工作的一个关键应用，我们展示，在常规参考字符串（CRS）模型中，非交互式零知识（NIZK）论证可以在CRS恶意生成时保持见证语义安全。我们的工作给出了第一个从（亚指数）标准假设得出的构造，实现了一种比见证不可区分性更强的概念，用以对抗恶意CRS机构。
> 
> 为了实现我们的结果，我们首次构建了一个来自亚指数LWE的自适应声音ZAP。此外，我们提出了一个使用有关恶意CRS的非均匀建议的模拟概念，我们相信这也会引起独立兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_6](https://doi.org/10.1007/978-3-031-58740-5_6)
## Garbled Circuit Lookup Tables with Logarithmic Number of Ciphertexts.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#garbled-circuit-lookup-tables-with-logarithmic-number-of-ciphertexts) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#garbled-circuit-lookup-tables-with-logarithmic-number-of-ciphertexts)**
### 作者
* David Heath, University of Illinois Urbana-Champaign, Champaign, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, USA
* Lucien K. L. Ng, Georgia Institute of Technology, Atlanta, USA
### 摘要
> Garbled Circuit (GC)是一种实用的安全计算基本技术，用于处理布尔电路；传输编码门真值表的网络带宽消耗巨大，每个真值表的规模取决于计算安全参数\(\kappa\)。减少带宽消耗的GC优化非常有价值。将布尔两输入一输出门（由4行1列查找表（LUT）表示）推广至任意N行m列LUT是自然的。已知技术不可扩展，朴素的O(Nm\(\kappa\))加扰LUT是许多情况下最实用的方法。我们提出了一种新的加扰方案——\(\textsf{logrow}\)，它实现了GC LUT，同时只发送对数级的N个密文！具体而言，设\(n = \lceil\log_2 N\rceil\)。我们允许GC方对\((n-1)\kappa + nm\kappa + Nm\)比特的通信进行LUT评估。\(\textsf{logrow}\)与现代GC进展相兼容，如半门和免费XOR。我们的工作改进了许多有趣应用的最先进的GC处理，如隐私保护机器学习、浮点算术和DFA评估。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_7](https://doi.org/10.1007/978-3-031-58740-5_7)
## Publicly Verifiable Secret Sharing Over Class Groups and Applications to DKG and YOSO.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#publicly-verifiable-secret-sharing-over-class-groups-and-applications-to-dkg-and-yoso) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#publicly-verifiable-secret-sharing-over-class-groups-and-applications-to-dkg-and-yoso)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 公开可验证的秘密共享（PVSS）允许经销商发布秘密的加密份额，以便持有相应解密密钥的各方以后可以重构该秘密。处理和重建都是非交互式的，任何验证器都可以检查它们的有效性。在适当的公开可验证再分配（如在Yolo YOSO（Cascudo等人ASIACRYPT'22）中）的条件下，PVSS在随机信标、分布式密钥生成（DKG）和YOSO MPC中找到应用程序。
> 
> 我们介绍了一个PVSS方案，该方案基于类群，可实现与仅允许重构秘密的函数的最新方案类似的效率，而我们的方案允许重构原始秘密。我们的构建将Yolo YOSO的DDH基础方案推广到在类群上运行，这在适应必要的NIZK时面临技术挑战，因为未知群序和知识的高效NIZK在这种情况下构建不像简单。
> 
> 基于我们的PVSS方案恢复原始秘密的能力，我们针对离散对数密钥对提出了两个DKG协议：一种有偏1轮协议，它在以前的作品的具体通信/计算复杂性方面有所改进；另一种是2轮无偏协议，它在以前的作品的轮数上有所改进。我们还向我们的PVSS添加了向匿名委员会的公开可验证重共享，以便在YOSO设置中有效地在委员会之间传输状态。与基于类群的YOSO模型中的最近构建的MPC（Braun等人CRYPTO'23）一起，这将导致基于CDN框架的最有效的完整实现（即在不假设接收器匿名通道的情况下）的YOSO MPC。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_8](https://doi.org/10.1007/978-3-031-58740-5_8)
## Bulletproofs++: Next Generation Confidential Transactions via Reciprocal Set Membership Arguments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#bulletproofs-next-generation-confidential-transactions-via-reciprocal-set-membership-arguments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#bulletproofs-next-generation-confidential-transactions-via-reciprocal-set-membership-arguments)**
### 作者
* Liam Eagen, Blockstream Research, Victoria, Canada
* Sanket Kanjalkar, Blockstream Research, Victoria, Canada
* Tim Ruffing, Blockstream Research, Victoria, Canada
* Jonas Nick, Blockstream Research, Victoria, Canada
### 摘要
> 零知识证明是隐私保护技术的加密基石，如“机密交易”（CT），旨在隐藏加密货币交易中的金额。由于其渐近对数证明大小和透明设置，大多数最先进的CT协议使用Bulletproofs（BP）[8]零知识证明系统用于集合成员证明，如范围证明。然而，即使考虑到最近的效率改进，BP在具体证明大小、验证器运行时间方面都存在严重的开销，因此对CT及其扩展的实际部署造成了很大负担。
> 
> 在这项工作中，我们介绍了Bulletproofs++（BP++），这是BP的一种可替换版本，显著提高了其具体效率和紧凑性。与BP类似，BP++的安全性仅依赖于随机预言模型中离散对数问题的困难性，BP++保留了Bulletproofs的所有特性，包括透明设置和支持证明聚合、多方证明和批量验证。从渐近角度看，与BP和BP+相比，BP++的范围证明只需要\(O(n / \log n)\)组标量乘法操作，而不是O(n)。
> 
> 我们构建的核心是用于置换和集合成员的新技术，能够高效地证明编码为算术电路的陈述。具体来说，用于确立已承诺值位于64位范围内（CT通常需要的）的单个BP++范围证明仅在256位椭圆曲线上占用 416 字节，比等效的BP小38%，比BP+小27%。当在比特币中使用的secp256k1曲线上实例化时，我们的基准测试显示，证明比BP快约5倍，验证比BP+快约3倍。在聚合32个范围证明时，证明和验证分别快约9.5倍和5.5倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_9](https://doi.org/10.1007/978-3-031-58740-5_9)
## Perfect Asynchronous MPC with Linear Communication Overhead.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#perfect-asynchronous-mpc-with-linear-communication-overhead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#perfect-asynchronous-mpc-with-linear-communication-overhead)**
### 作者
* Ittai Abraham, Intel Labs, Hillsboro, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Shravani Patil, Indian Institute of Science, Bangalore, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, Bangalore, India
### 摘要
> 我们研究了具有完美安全性和最优弹性（少于四分之一的参与者是恶意的）的异步设置中的安全多方计算。已经证明，在这个模型中，每个函数都可以计算[Ben-OR，Canetti和Goldreich，STOC’1993]。尽管经过30年的研究，异步设置中的所有协议计算具有C个乘法门电路的话，需要 \(\varOmega (n^2C)\) 通信复杂度。相比之下，在同步设置中，近15年来已经知道如何实现 \({\mathcal {O}}(nC)\) 通信复杂度（Beerliova和Hirt；TCC 2008）。在异步设置中获得类似的结果的技巧并不足够。
> 
> 我们弥合了同步和异步安全计算之间的差距，并展示了第一个具有 \({\mathcal {O}}(nC)\) 通信复杂度的异步协议，用于具有C个乘法门电路的电路。线性开销形成了基于一般秘密分享的MPC协议的自然限制。我们的主要技术贡献是实现了一种异步弱绑定秘密共享，它实现了1速率通信（即，每个秘密的 \({\mathcal {O}}(1)\) 开销）。为了实现这个目标，我们开发了新的异步设置技术，包括使用三元多项式（而不是二元多项式）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_10](https://doi.org/10.1007/978-3-031-58740-5_10)
## Perfect (Parallel) Broadcast in Constant Expected Rounds via Statistical VSS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#perfect-parallel-broadcast-in-constant-expected-rounds-via-statistical-vss) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#perfect-parallel-broadcast-in-constant-expected-rounds-via-statistical-vss)**
### 作者
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Anirudh Chandramouli, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 我们研究了在最佳条件下的信息理论模型中的广播协议，其中损坏数量t最多为n的三分之一。虽然已知广播协议最坏情况下需要\(\varOmega (n)\)轮是不可能实现的，但自Feldman和Micali的开创性工作以来，已经证明了具有预期常数轮数的协议。这些协议的通信复杂性在多年来逐渐改善，对于广播大小为L比特的消息达到了O(nL)加上预期\(O(n^4\log n)\)。
> 
> 本文提出了一个完全安全的广播协议，预期常数轮和通信复杂性为O(nL)再加上预期\(O(n^3 \log ^2n)\)比特。此外，我们考虑了并行广播的问题，其中n个发送者每个都希望广播大小为L的消息。我们展示了一个并行广播协议，预期常数轮和通信复杂度为\(O(n^2L)\)再加上预期\(O(n^3 \log ^2n)\)比特。对于消息长度\(L \in \varOmega (n \log ^2 n)\)，我们的协议是最佳的（直到期望）。
> 
> 我们的主要贡献是提出了一个框架，从统计上安全的可验证秘密共享中获得了预期常数轮数的完全安全广播。此外，我们提供了一个新的统计上安全的可验证秘密共享，其中每个参与者的广播成本从\(O(n \log n)\)比特降低到了只有\(O(\textsf{poly}\log n)\)比特。我们所有的协议都是适应安全的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_11](https://doi.org/10.1007/978-3-031-58740-5_11)
## Fuzzy Private Set Intersection with Large Hyperballs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#fuzzy-private-set-intersection-with-large-hyperballs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#fuzzy-private-set-intersection-with-large-hyperballs)**
### 作者
* Aron van Baarsen, Cryptology Group, CWI, Amsterdam, The Netherlands
* Aron van Baarsen, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 传统的私有集交（PSI）涉及到一个接收者和一个发送者持有集合X和Y，接收者仅学习交集\(X\cap Y\)。我们将注意力转向它的模糊变体，其中接收者在度量空间中持有半径为\(\delta \)的\( |X| \)个超球形，而发送者则具有|Y|个点。通过它们的中心来表示超球，接收者学习了对于其中存在\(y\in Y\)，使得与某些距离度量相关的\(\textsf{dist}(x,y)\le \delta \)的点\(x\in X\)。以前的方法要么需要通用的多方计算（MPC）技术，如混淆电路或完全同态加密（FHE），要么泄露有关发送者精确输入的详细信息，仅支持有限的距离度量，或者与超球体积的比例不大。
> 
> 本篇论文提出了第一个黑盒构造来处理模糊PSI（包括其他变体，如PSI基数、标记PSI和电路PSI），可以在两个交互消息中处理具有多项式半径和维度（即，潜在指数级的体积），支持一般\(L_{\textsf{p}\in [1,\infty ]}\)距离，不依赖混淆电路或完全同态加密。与现有的工作相比，该协议在渐近效率和具体效率方面都表现出色。为了安全，我们仅依赖于决策性Diffie-Hellman（DDH）在随机预言机模型中成立的假设。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_12](https://doi.org/10.1007/978-3-031-58740-5_12)
## Fast Batched Asynchronous Distributed Key Generation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#fast-batched-asynchronous-distributed-key-generation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#fast-batched-asynchronous-distributed-key-generation)**
### 作者
* Jens Groth, Nexus, New York, USA
* Victor Shoup, Offchain Labs, New York, USA
### 摘要
> 我们提出了一种新的阈值Schnorr签名协议，适用于异步通信环境，提供了强大的鲁棒性和最优的弹性。这些协议在通信和计算复杂度方面提供了前所未有的性能。就通信复杂度而言，对于每个签名，单个参与者必须在网络上传输几十个群元素和标量（与签名委员会的大小无关）。从计算复杂度方面来看，对于一个参与者生成签名的摊销成本实际上比只运行标准的Schnorr签名或验证算法的成本要低（至少对于中等规模的签名委员会，例如最多100个人）。
> 
> 例如，我们估计，利用49个成员的签名委员会，其中最多有16人是腐败的，我们可以每秒生成50,000个Schnorr签名（假设每个参与者都可以将一个标准CPU核心和500 Mbs的网络带宽用于签名）。重要的是，这个估计包括一个离线预计算阶段（它只产生与消息无关的“预签名”）和一个在线签名生成阶段的成本。此外，在线签名阶段可以生成极低网络延迟的签名（只需要一到三轮，具体取决于吞吐量和延迟的平衡）。
> 
> 为了实现这个结果，我们提供了两个新创新。一个是一个新的秘密分享协议（再次异步，强大，最优的弹性），它允许交易员安全地分发大批量的瞬态秘密密钥的份额，并发布相应的瞬态公钥。为了实现更好的性能，我们的协议最小化了公钥操作，特别是基于一种不使用传统的“多项式承诺”技术的新技术。第二个创新是一种新的算法，用于有效地将不同方（其中一些可能是腐败的）提供的瞬态公钥组合成更少数量的安全瞬态公钥。这个新算法基于所谓的“超可逆矩阵”的新颖构造，以及相应的高效算法，用于将这个矩阵乘以一组群元素向量。
> 
> 由于可验证地共享带有关联公钥的秘密密钥的协议和超可逆矩阵技术在阈值密码和多方计算中都发挥着重要作用，我们的两个新创新应该在阈值Schnorr签名之外具有适用性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_13](https://doi.org/10.1007/978-3-031-58740-5_13)
## Toward Malicious Constant-Rate 2PC via Arithmetic Garbling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#toward-malicious-constant-rate-2pc-via-arithmetic-garbling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#toward-malicious-constant-rate-2pc-via-arithmetic-garbling)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yibin Yang, Georgia Institute of Technology, Atlanta, USA
### 摘要
> Ball，Li，Lin和Liu的最新著作[Eurocrypt’23]介绍了由Applebaum，Ishai和Kushilevitz [FOCS’11]提出的算术加密范例的新实例。特别是，Ball等人的加密方案是大型有界整数计算的第一个恒定速率的加密电路，推导出受半诚实敌手影响下的有界整数计算的第一个恒定轮数恒定速率安全两方计算（2PC）。
> 
> 将加密方案为基础的协议的安全性提升到恶意环境的主要困难在于证明基础加密方案的正确性。在这项工作中，我们分析了Ball等人方案在恶意攻击的情况下的安全性。
> 
> 我们展示了一种溢出攻击，在这种计算模型中是不可避免的，即使加密电路是完全正确的。我们的攻击是通过定义一个对手，腐败了加密者或评估者，选择坏输入并导致计算溢出，从而泄漏关于诚实方输入的信息。通过利用溢出攻击，我们证明了1位泄漏对于针对恶意加密者的安全性是必要的，排除了在这种模型中实现完全恶意安全性的可能性。我们进一步展示了针对恶意评估者的更广泛范围的溢出攻击，其中泄露了超过1位的信息。
> 
> 我们通过利用两种向量遗忘线性评估的变体（称为VOLEc和aVOLE）提高了Ball等人方案的安全级别。我们在{VOLEc，aVOLE}-混合模型中提出了首个在有恶意加密者和半诚实评估者存在下具有1位泄漏的有界整数计算的恒定轮数恒定速率的2PC协议，并且基于黑盒在基础群和环中。与半诚实变体相比，我们的协议既在计算也在通信方面只产生恒定的过头因子。恒定轮数和恒定速率的特性甚至在普通模型中也成立。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_14](https://doi.org/10.1007/978-3-031-58740-5_14)
## Closing the Efficiency Gap Between Synchronous and Network-Agnostic Consensus.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-5].md#closing-the-efficiency-gap-between-synchronous-and-network-agnostic-consensus) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-5].md#closing-the-efficiency-gap-between-synchronous-and-network-agnostic-consensus)**
### 作者
* Giovanni Deligios, ETH Zurich, Zürich, Switzerland
* Mose Mizrahi Erbes, ETH Zurich, Zürich, Switzerland
### 摘要
> 在共识问题中，n个参与方希望就一个共同的价值达成一致，即使其中一些参与方是腐败并且任意地不当行为。如果参与方有一个共同的输入m，那么他们必须就m达成一致。解决共识的协议要么假设同步通信网络，其中消息在已知时间内传递，要么是具有任意延迟的异步网络。异步协议只能容忍\(t_a < n/3\)腐败的参与方。同步协议则可以容忍\(t_s < n/2\)的腐败，在设置中，但是如果同步假设被违反，它们的安全性会完全瓦解。由Blum、Katz和Loss在[TCC’19]中介绍的与网络无关的共识协议，无论网络条件如何都是安全的，在同步情况下容忍\(t_s\)腐败，在异步情况下容忍\(t_a\)，在可证明的最优假设\(t_a \le t_s\)和\(2t_s + t_a < n\)下。尽管努力提高它们的效率，所有已知的与网络无关的协议都没有达到与最先进的纯同步协议的渐近复杂度的水平。在这项工作中，我们介绍了一种新的技术，将任何同步和异步共识协议编译成一个与网络无关的协议。这个过程只会带来很少的固定数目的额外轮数，以使编译后的协议与同步协议的最佳轮复杂度相匹配。我们的编译器还保留了各种假设下与最先进的同步和异步协议的渐近通信复杂度。因此，它弥合了同步和与网络无关的共识之间的当前效率差距。此外，我们的协议支持\(\ell \)位输入，并且可以在已知对于纯同步协议而言这是可能的假设下扩展到实现通信复杂度\(\mathcal {O}(n^2\kappa + \ell n)\)。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58740-5_15](https://doi.org/10.1007/978-3-031-58740-5_15)
