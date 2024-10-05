# Crypto[2024-6]
## Quantum Complexity for Discrete Logarithms and Related Problems.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)**
### 作者
* Minki Hhan, KIAS, Seoul, South Korea
* Takashi Yamakawa, NTT Social Informatics Laboratories, Minato-ku, Japan
* Aaram Yun, Ewha Womans University, Seoul, South Korea
### 摘要
> 本文研究了离散对数（DL）和相关群论问题的量子计算复杂性，这是在“通用算法”的背景下进行的，即不利用编码的群的任何属性的算法。
> 
> 我们建立了量子通用群模型和混合经典量子通用群模型，作为它们经典对应物的量子和混合模型。该模型将底层循环群\(\mathcal {G}\)的群操作数作为复杂性度量。 Shor的离散对数问题的算法和相关算法可以在该模型中描述，并在基本形式下进行\(O(\log |\mathcal {G}|)\)的群操作。我们展示了这些模型中离散对数和相关问题的量子复杂性下界和（几乎）匹配算法。
> 
> 我们证明了在量子通用群模型中的任何量子DL算法必须进行\(\varOmega (\log |\mathcal G|)\)深度的群操作查询。这表明，Shor的算法进行\(O(\log |\mathcal G|)\)群操作，在通用量子算法中是渐进最佳的，甚至考虑并行算法。
> 
> 我们观察到一些（已知的）Shor算法的变种可以利用经典计算来减少量子群操作的数量和深度。我们证明这些变种在通用混合算法中是最佳的，直到乘法系数：任何总共（经典或量子）群操作Q的通用混合量子-经典DL算法必须进行\(\varOmega (\log |\mathcal G|/\log Q)\)深度\(\varOmega (\log \log |\mathcal G| - \log \log Q)\)的量子群操作。
> 
> 当量子内存只能存储t个群元素并使用r个群元素的量子随机访问经典内存（QRACM）时，任何通用混合量子-经典算法必须要么总共进行\(\varOmega (\sqrt{|\mathcal G|})\)群操作查询，要么进行\(\varOmega (\log |\mathcal G|/\log (tr))\)量子群操作查询。特别是，经典查询不能将量子查询数量减少到\(\varOmega (\log |\mathcal G|/\log (tr))\)以下。
> 
> 作为一个附带的贡献，我们展示了多个离散对数问题比逐个解决每个实例都有更好的算法，反驳了在密码认证密钥交换协议中提出的量子令人讨厌的特性的强形式。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_1](https://doi.org/10.1007/978-3-031-68391-6_1)
## Is ML-Based Cryptanalysis Inherently Limited? Simulating Cryptographic Adversaries via Gradient-Based Methods.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)**
### 作者
* Avital Shafran, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Eran Malach, Kempner Institute for the Study of Natural and Artificial Intelligence, Harvard University, MA, USA
* Thomas Ristenpart, Department of Computer Science, Cornell Tech, New York, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### 摘要
> 鉴于机器学习（ML）领域的最新进展，密码学界已经开始探索将ML方法应用于新的密码分析方法设计的可能性。尽管目前的实证结果显示出一定的前景，但这些方法可能超越传统的密码分析方法的程度仍然不太清楚。
> 
> 在本研究中，我们开始探索基于ML的密码分析技术的理论，特别是在理解它们是否与传统方法相比存在根本限制方面提供了新的成果。而大多数传统的密码分析主要依赖于直接处理单个样本（例如明文-密文对），迄今为止，现代ML方法只通过基于梯度的计算与样本交互，这些计算会通过一个损失函数平均处理所有样本。因此，可以想象这种基于梯度的方法可能比传统方法弱。
> 
> 我们提出了一个统一的框架，用于捕捉既能直接访问单个样本的“基于样本”对手，也能仅通过发出基于梯度的查询并通过一个损失函数对所有给定样本进行平均的“基于梯度”对手。在我们的框架中，我们建立了一个一般的可行性结果，表明任何“基于样本”的对手都可以通过一个表面上较弱的“基于梯度”的模拟器来模拟。此外，该模拟展示了在梯度模拟器的运行时间方面几乎是最佳的开销。最后，我们扩展和完善我们的模拟技术，以构建一个完全可并行化的梯度模拟器，该模拟器对于避免可并行化的密码分析任务的不良开销至关重要，然后用于构建一个执行特定且非常有用的梯度下降方法的梯度模拟器。
> 
> 总之，尽管ML方法可能超越传统的密码分析方法的程度尚不十分清楚，但我们的结果表明，这些基于梯度的方法并不会受到似乎受限的获得样本的方式的根本限制。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_2](https://doi.org/10.1007/978-3-031-68391-6_2)
## Quantum Lattice Enumeration in Limited Depth.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)**
### 作者
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Marcel Tiepelt, KASTEL, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Fernando Virdia, NOVA LINCS, Univerisdade NOVA de Lisboa, Lisbon, Portugal
### 摘要
> 在2018年，Aono等人（ASIACRYPT 2018）建议使用量子回溯算法（Montanaro，TOC 2018；Ambainis and Kokainis，STOC 2017）来加速点格枚举。已经提出了量子格筛算法（Laarhoven等人，PQCRYPTO 2013），被证明能够在渐近速度上提供比经典算法更快的速度，但是如果考虑量子计算机架构的实际考虑因素，在与密码学相关的维度上失去了竞争力（Albrecht等人，ASIACRYPT 2020）。Aono等人的工作认为，量子漫步加速可以应用于格枚举，实现至少Grover搜索的二次渐近加速，同时不需要指数量级的量子可访问的经典存储器，如筛法所需。在这项工作中，我们探索如何下限Aono等人的技术在极端圆柱剪枝格枚举中的使用成本，假设存在限制量子计算能够在不退相干的情况下达到的最大深度，目的是更好地理解量子回溯在格密码分析中的实际适用性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_3](https://doi.org/10.1007/978-3-031-68391-6_3)
## Space-Efficient and Noise-Robust Quantum Factoring.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)**
### 作者
* Seyoon Ragavan, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### 摘要
> 我们对Regev的量子分解算法（arXiv: 2308.06572）进行了两项改进，针对其空间效率和抗噪声性能进行了优化。
> 
> 我们的第一项贡献是在保持电路大小不变的情况下提高Regev算法的量子空间效率。我们的主要结果构建了一个量子分解电路，使用\(O(n \log n)\)个量子比特和\(O(n^{3/2} \log n)\)个门。我们兼具Shor和Regev的优点（空间复杂度对数因子相同）：一方面，Regev的电路需要\(O(n^{3/2})\)个量子比特和\(O(n^{3/2} \log n)\)个门，而Shor的电路需要\(O(n^2 \log n)\)个门但只需要·O（n）个量子比特。和Regev一样，为了对n位整数N进行分解，我们独立运行我们的电路\(\approx \sqrt{n}\)次，并应用Regev的经典后处理过程。
> 
> 我们的优化通过在指数中实现斐波那契数进行有效和可逆的指数运算而实现，而不是通常的2的幂，这是对Kaliski的工作的改编（arXiv:1711.02491），从经典可逆设置到量子设置。这种技术还允许我们执行既在空间又在大小上高效的量子模指数运算，并且不需要重要的预计算，这可能对其他量子算法有用。我们指数实现的关键部分是一种类似原位量子-量子模乘法的高效电路。该实现仅使用黑盒访问任何超出位置的模乘法量子电路即可工作，这是我们认为可能具有更广泛兴趣的另一个结果。
> 
> 我们的第二项贡献是展示Regev的经典后处理过程可以修改以容忍量子电路运行的恶意错误占比。相比之下，Regev对其经典后处理过程的分析要求所有的\(\approx \sqrt{n}\)次运行都成功。简而言之，我们通过格约减技术检测并过滤出受损样本来实现这一点。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_4](https://doi.org/10.1007/978-3-031-68391-6_4)
## CryptAttackTester: high-assurance attack analysis.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)**
### 作者
* Daniel J. Bernstein, University of Illinois at Chicago, Chicago, USA
* Daniel J. Bernstein, Ruhr University Bochum, Bochum, Germany
* Daniel J. Bernstein, Academia Sinica, Taipei, Taiwan
* Tung Chou, Academia Sinica, Taipei, Taiwan
### 摘要
> 密码攻击算法成本的定量分析在比较加密系统、指导改进攻击和决定加密系统标准方面发挥着核心作用。不幸的是，这些分析往往被证明是错误的。有时错误直到数年后才被发现。
> 
> 本文介绍了CryptAttackTester（CAT），一种高可信度攻击效果定量化软件框架。CAT将攻击算法的完整定义从计算模型一直执行到成本度量，并对小规模输入系统地测试概率预测和成本预测的定义进行强制执行。
> 
> 例如，CAT对于“AES-128密钥暴力搜索的中位成本小于\(2^{141.89}\)比特操作”的语句提供了完整的定义，同时提供了清晰的可审核的原因来证明该语句是正确的。这并不能排除所有可能的分析错误，但使用CAT后，漏洞不再可能隐藏在不明确或未经测试的安全级别声明中。本文提供了许多已在文献中发现的错误示例，这些错误在典型的非正式测试实践中存活下来，如果CAT强制执行的链接存在，这些错误将会被捕获。
> 
> 作为一个重要的案例研究，当前CAT发布的大部分内容都是信息集解码（ISD）算法的完整定义，以及每个算法的成本/概率预测。 ISD是对McEliece加密系统的顶级攻击策略。预测涵盖了以下交互部分：（1）来自Prange、Lee-Brickell、Leon、Stern、Dumer、May-Meurer-Thomae和Becker-Joux-May-Meurer的高级搜索策略；（2）来自Omura、Canteaut-Chabaud、Canteaut-Sendrier和Bernstein-Lange-Peters的随机漫步；以及（3）核心子例程（例如线性代数和排序）的加速。预测还考虑了先前分析中忽略的各种攻击开销。这些差距加起来大约是10比特，具体取决于参数。CAT的测试比这小得多。
> 
> CAT选择的成本指标具有非常简单的定义，是非量子专用硬件的价格性能比的下界（尽管该界限对于受长距离通信瓶颈限制的攻击来说是宽松的），并且允许许多优化努力与加密电路的设计共享。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_5](https://doi.org/10.1007/978-3-031-68391-6_5)
## Not Just Regular Decoding: Asymptotics and Improvements of Regular Syndrome Decoding Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### 摘要
> 加密构造通常基于结构化问题变体的安全性，以增强效率或实现高级功能。这导致了正则综合译码（RSD）问题的引入，它保证了对综合译码（SD）问题的解遵循特定的分块结构。尽管最近攻击利用了该结构（Briaud和Øygarden，Eurocrypt '23）以及Carozza、Couteau和Joux（CCJ，Eurocrypt '23），但关于正则结构对问题难度影响的许多问题仍然存在。在这项工作中，我们从渐近性出发，开始系统研究RSD问题的难度。我们对不同的参数范围进行分类，揭示了大范围，使得RSD实例能够在多项式时间内解决，另一方面是导致非常困难实例的范围。与先前观念相反，我们表明仅基于解的唯一性进行分类并不足以隔离最坏情况的参数。此外，我们在可化简性和计算复杂性方面提供了SD和RSD之间的深入比较，确定了RSD实例实际上更难解决的参数范围。我们首次对CCJ提出的算法进行了渐近分析，确定它们的最坏情况解码复杂度分别为\(2^{0.141n}\)和\(2^{0.135n}\)。然后，我们通过展示如何将先进的信息集译码（ISD）技术的整个机制从攻击SD转移到RSD设置，介绍了正则-ISD算法。最快的正则-ISD算法将最坏情况解码复杂度显著提高到\(2^{0.112n}\)。最后，我们还表明，就建议的参数而言，正则-ISD在大多数情况下优于先前的方法，将安全级别降低了多达30位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_6](https://doi.org/10.1007/978-3-031-68391-6_6)
## Quantum One-Wayness of the Single-Round Sponge with Invertible Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)**
### 作者
* Joseph Carolan, University of Maryland College Park, College Park, USA
* Alexander Poremba, Massachusetts Institute of Technology, Cambridge, USA
### 摘要
> 海绵哈希是一类广泛使用的加密哈希算法，是当前国际哈希函数标准SHA-3的基础。简而言之，海绵函数以任意长度的比特流作为输入，并通过一个简单的迭代过程处理它：它反复将输入的每个块馈送到所谓的块函数中，然后通过再次迭代块函数在最终输出比特上产生摘要。尽管关于当块函数被建模为随机函数或单向置换时的海绵构造的后量子安全性已知很多，但至今，在允许逆查询的排列情况下，这更贴近于SHA-3底层构造的情况仍然是一个基本的未解问题。
> 
> 在这项工作中，我们取得了突破，并展示了几个结果。首先，我们证明了Unruh提出的“双面零搜索”猜想，并表明在随机2n比特置换中查找零对至少需要 \(\varOmega (2^{n/2})\) 查询—这是由于Grover算法的紧密性。我们证明的核心是一种新颖的“对称化论证”，它利用了来自年轻子群理论的见解。其次，我们考虑双侧搜索问题的更一般变体，并为它们显示类似的查询下限。作为一个应用，我们证明了在量子随机置换模型中具有可逆置换的单轮海绵的量子单向性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_7](https://doi.org/10.1007/978-3-031-68391-6_7)
## FuLeakage: Breaking FuLeeca by Learning Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)**
### 作者
* Felicitas Hörmann, Institute of Communications and Navigation, German Aerospace Center (DLR), Oberpfaffenhofen–Wessling, Germany
* Felicitas Hörmann, School of Computer Science, University of St. Gallen, St. Gallen, Switzerland
* Wessel van Woerden, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
### 摘要
> FuLeeca是一个签名方案，提交给了最近的NIST对于额外签名的要求。它是一个基于李度量下拟循环码的高效哈希和签名方案，类似于基于格的Falcom签名方案。FuLeeca提出了所谓的集中步骤以避免从签名中泄漏秘密密钥信息。然而，FuLeeca仍然容易受到学习攻击的影响，这是格基签名方案最初观察到的情况。我们通过利用基于码的FuLeeca方案与基于格原语的相似性来展示三个完整的密钥恢复攻击。
> 
> 更准确地说，我们使用一些签名从给定长度为n的码中提取一个n/2维的循环子格，仍包含极短的秘密密钥向量。这显著降低了经典攻击成本，并且还导致量子多项式时间内的完整密钥恢复。此外，我们利用集中过程的偏差，在不到一个小时内经典恢复任何安全级别的完整密钥，最多只需175,000个签名。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_8](https://doi.org/10.1007/978-3-031-68391-6_8)
## FRIDA: Data Availability Sampling from FRI.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)**
### 作者
* Mathias Hall-Andersen, ZkSecurity, Kolkata, India
* Mark Simkin, Ethereum Foundation, Zug, Switzerland
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> 随着以太坊等区块链的不断增长，资源有限的客户无法再存储整个区块链。轻节点想要使用区块链，但不验证整个区块链是否处于良好状态，可以仅下载区块头而不是相应的区块内容。由于这些轻节点最终可能需要一些区块内容，他们希望确保原则上这些内容是可用的。巴萨姆等人引入的数据可用性抽样是一种允许轻节点检查数据可用性而无需下载数据的过程。在最近的工作中，霍尔-安德森、西姆金和瓦格纳提出了正式定义并分析了几种构造。虽然他们的工作对数据可用性抽样做出了全面的形式基础，但这些构造要么成本过高，要么使用了可信设置，或者对轻客户的下载复杂度与数据大小的平方根成正比。在这项工作中，我们通过提出一种高效的数据可用性抽样方案而没有可信设置，仅有对数多项式的开销，迈出了重要的一步。为此，我们发现了与交互式 Oracle 接近证明（IOPP）的新颖联系。具体来说，我们证明了任何符合额外一致性准则的IOPP都可以转化为一种消除码承诺，然后利用霍尔-安德森、西姆金和瓦格纳的编译器，将其转化为数据可用性抽样方案。这种新的联系使得数据可用性能够受益于未来关于IOPP的结果。然后我们证明了广泛使用的FRI IOPP满足我们的一致性准则，并展示了由此产生的数据可用性抽样方案在多个参数上从渐近和具体的角度来说都优于现有技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_9](https://doi.org/10.1007/978-3-031-68391-6_9)
## Pseudorandom Error-Correcting Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)**
### 作者
* Miranda Christ, Columbia University, New York, USA
* Sam Gunn, UC Berkeley, Berkeley, USA
### 摘要
> 我们构建伪随机纠错码（或简称伪随机码），这些是具有属性的纠错码，即任意多个码字对于任何计算上受限的对手都是伪随机的。通过解码密钥可以高效地解码损坏的码字。我们构建了对替换和删除错误具有鲁棒性的伪随机码，其中伪随机性基于标准密码假设。具体而言，伪随机性基于LPN 的 \(2^{O(\sqrt{n})}\) 难度，或者基于 LPN 和低密度下植入 XOR 问题的多项式困难性。作为伪随机码的主要应用，我们提出了一种用于语言模型输出的无法检测的水印方案，该方案对裁剪、恒定速率的随机替换和删除具有鲁棒性。在某种意义上，水印是无法检测的，因为任何数量的水印文本样本在计算上无法与原始模型输出的文本区分开来。这是第一个能容忍恒定错误率的无法检测水印方案。我们的第二个应用是隐写术，在其中秘密消息被隐藏在看似无害的内容中。我们提出了一个具有恒定速率且对恒定速率替换具有鲁棒性的无状态隐写术方案。我们的方案是第一个具有可证明隐写安全性和对错误有任何鲁棒性的无状态隐写术方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_10](https://doi.org/10.1007/978-3-031-68391-6_10)
## Certifying Private Probabilistic Mechanisms.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)**
### 作者
* Zoë Ruha Bell, University of California, Berkeley, USA
* Shafi Goldwasser, University of California, Berkeley, USA
* Jean-Luc Watson, University of California, Berkeley, USA
* Michael P. Kim, Cornell University, Ithaca, New York, USA
### 摘要
> 近年来，出现了整个研究社区，致力于解决数据分析中的隐私和公平性问题。然而，目前公众必须相信机构会自愿重新实施算法，以解决这些社会问题。由于额外成本，如果缺乏有效的法律强制措施，普及率不太可能。对于执行的技术挑战是，所提出的方法通常是概率机制，其输出必须根据精确的、有时是保密的分布来绘制。差分隐私（DP）案例是有例可循的：如果作弊的策展人根据过度精确的机制回答查询，隐私侵犯可能会被忽视。这就提出了我们的核心问题：我们能否有效地认证由不受信任的一方实施的概率机制的输出？为此：
> 
> 1. 我们引入了两个新概念：认证概率机制（CPM）和随机变量承诺方案（RVCS）。一个CPM是一个交互式协议，强迫证明者实施给定的概率机制或被抓住；重要的是，交互不揭示机制的秘密参数。一个RVCS——构建CPMs的关键基本组件——是一个承诺方案，其中验证器被说服承诺是根据约定的分布采样的RV，但不了解其他任何东西。
> 
> 2. 我们为证明DP的特殊情况实例化了CPM的一般概念。我们建立了一个轻量级的、双重高效的交互证明系统，用于证明通过DP二项机制发布的任意谓词计数查询。该构造依赖于具有完美隐藏和加性同态属性的承诺方案，该方案可用于发布关于承诺数据库的广泛类查询，在Pedersen承诺的基础上构建。
> 
> 3. 最后，我们通过高效和可扩展的原型实现展示了认证DP的立即可行性，以回答任意谓词的计数查询。该机制由离线和在线阶段组成，在线阶段允许查询的非交互式认证。例如，我们表明，美国人口普查数据 （PUMS）（n=7000）的CDP查询只需1.6毫秒完成，而验证只需38微秒。我们的实施是在https://github.com/jlwatson/certified-dp上的开放源代码中提供的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_11](https://doi.org/10.1007/978-3-031-68391-6_11)
## Formal Security Proofs via Doeblin Coefficients: - Optimal Side-Channel Factorization from Noisy Leakage to Random Probing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)**
### 作者
* Julien Béguinot, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Sylvain Guilley, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Olivier Rioul, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, Secure-IC S.A.S., Paris, France
* Sylvain Guilley, Secure-IC S.A.S., Paris, France
### 摘要
> 掩码是侧信道攻击中最流行的对策之一，因为它可以提供可证明的安全性。然而，取决于对手的模型，有用的安全保证可能难以提供。最初，Ishai等人在Crypto'03中证明了掩码可以安全地防御t门限探针攻击，Duc等人在Eurocrypt'14中证明了更通用的随机探针模型的安全性。Prouff和Rivain在Eurocrypt'13中引入了嘈杂泄漏模型来捕捉更现实的泄漏情况。Duc等人在Eurocrypt'14中引入了从嘈杂泄漏到随机探针的约化，并在Crypto'19，Duc等人在Eurocrypt'15 / J. Cryptol'19，以及Masure和Standaert在Crypto'23中改进了两个模型的安全保证。不幸的是，事实证明，我们发现以前的证明在随机探针或嘈杂泄漏模型中都存在缺陷，而这些缺陷似乎不容易修复。在这项工作中，我们展示Doeblin系数可以克服这些缺陷。事实上，它提供了从嘈杂泄漏到随机探针的最佳约化，从而提供了一个正确且可用的指标来正确地建立安全证明。这显示了从嘈杂泄漏到随机探针模型的固有不可避免的成本。我们展示它也可以用于使用Prouff和Rivain的子序列分解来导出直接的形式安全证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_12](https://doi.org/10.1007/978-3-031-68391-6_12)
## Leakage Certification Made Simple.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#leakage-certification-made-simple) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)**
### 作者
* Aakash Chowdhury, University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
* Carlo Brunetta, Independent Researcher, Trieste, Italy
* Elisabeth Oswald, University of Birmingham, Birmingham, UK
* Arnab Roy, University of Innsbruck, Innsbruck, Austria
### 摘要
> 侧信道评估受益于对对手泄露模型的准确描述，这是攻击成功的决定因素。两个问题是值得关注的：我们能否定义和估计能够捕捉理想对手（拥有与攻击有关的分布信息的所有知识的对手）的数量，以及我们能否定义和估计能够捕捉具体对手（通过给定泄露模型表示的对手）的数量。现有的研究已经导致了一系列用于衡量这两种不同类型对手的自定义数量的出现，即使对于离散的侧信道，并且当侧信道跟踪中的维数增加时，甚至在理想情况下，数据密集也是如此。在本文中，我们展示了如何定义与所感兴趣的变量之间的相互信息以及如何实例化最近提出的相互信息估计器以进行实际估计。我们将我们的结果应用于实际数据集，并且是第一个利用高达30个数据点提供基于相互信息的理想和具体对手特征化的研究。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_13](https://doi.org/10.1007/978-3-031-68391-6_13)
## Improved Reductions from Noisy to Bounded and Probing Leakages via Hockey-Stick Divergences.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)**
### 作者
* Maciej Obresmki, National University of Singapore, Singapore, Singapore
* João Ribeiro, NOVA LINCS and NOVA School of Science and Technology, Caparica, Portugal
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* François-Xavier Standaert, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### 摘要
> 密码学理论与实践在泄漏存在下存在不匹配之处。在理论前沿上，有界泄漏模型，其中对手了解有关秘密组件的有限长度但无噪声信息，以及随机探针模型，其中对手以某些概率了解泄漏实现的某些内部值，是便于分析许多设计安全性的抽象。在实践前沿上，侧信道攻击产生长的记录，这些记录固有具有噪声但提供有关所有内部计算的信息，并且这种噪声通常使用类似相互信息或统计距离的关联指标进行评估。理想情况下，我们希望声称对有限泄漏或随机探针的弹性意味着根据这些指标评估的噪声泄漏的弹性。然而，以前的工作（Duc，Dziembowski和Faust，Eurocrypt 2014; Brian等人，Eurocrypt 2021）已经表明，证明此类带有有用参数的缩减是具有挑战性的。
> 
> 在这项工作中，我们研究了起源于曲棍球杆分岔的噪声泄漏模型，这些分岔推广了统计距离，也是差分隐私的基础。首先，我们表明对有界泄漏和随机探针的弹性意味着我们的新噪声泄漏模型对于基于统计距离或相互信息的模型而言具有改进的参数。其次，我们建立了我们模型的组合定理，表明这些连接扩展到从泄漏实现中获得多个泄漏的情况。我们用实际相关性讨论了我们的理论结果，并强调（i）降噪声水平的现实泄漏函数适用于有限泄漏，比Brian等人降低了几个数量级，（ii）随机探针的缩减有用地推广了Duc，Dziembowski和Faust的开创性工作，尽管当掩蔽操作的字段大小增长时（即，曲棍球杆分岔可以更好地隐藏噪声要求的字段大小依赖性，但不会消除它）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_14](https://doi.org/10.1007/978-3-031-68391-6_14)
## Quantum Complexity for Discrete Logarithms and Related Problems.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-complexity-for-discrete-logarithms-and-related-problems)**
### 作者
* Minki Hhan, KIAS, Seoul, South Korea
* Takashi Yamakawa, NTT Social Informatics Laboratories, Minato-ku, Japan
* Aaram Yun, Ewha Womans University, Seoul, South Korea
### 摘要
> 本文研究了离散对数（DL）和相关群论问题的量子计算复杂性，这是在“通用算法”的背景下进行的，即不利用编码的群的任何属性的算法。
> 
> 我们建立了量子通用群模型和混合经典量子通用群模型，作为它们经典对应物的量子和混合模型。该模型将底层循环群\(\mathcal {G}\)的群操作数作为复杂性度量。 Shor的离散对数问题的算法和相关算法可以在该模型中描述，并在基本形式下进行\(O(\log |\mathcal {G}|)\)的群操作。我们展示了这些模型中离散对数和相关问题的量子复杂性下界和（几乎）匹配算法。
> 
> 我们证明了在量子通用群模型中的任何量子DL算法必须进行\(\varOmega (\log |\mathcal G|)\)深度的群操作查询。这表明，Shor的算法进行\(O(\log |\mathcal G|)\)群操作，在通用量子算法中是渐进最佳的，甚至考虑并行算法。
> 
> 我们观察到一些（已知的）Shor算法的变种可以利用经典计算来减少量子群操作的数量和深度。我们证明这些变种在通用混合算法中是最佳的，直到乘法系数：任何总共（经典或量子）群操作Q的通用混合量子-经典DL算法必须进行\(\varOmega (\log |\mathcal G|/\log Q)\)深度\(\varOmega (\log \log |\mathcal G| - \log \log Q)\)的量子群操作。
> 
> 当量子内存只能存储t个群元素并使用r个群元素的量子随机访问经典内存（QRACM）时，任何通用混合量子-经典算法必须要么总共进行\(\varOmega (\sqrt{|\mathcal G|})\)群操作查询，要么进行\(\varOmega (\log |\mathcal G|/\log (tr))\)量子群操作查询。特别是，经典查询不能将量子查询数量减少到\(\varOmega (\log |\mathcal G|/\log (tr))\)以下。
> 
> 作为一个附带的贡献，我们展示了多个离散对数问题比逐个解决每个实例都有更好的算法，反驳了在密码认证密钥交换协议中提出的量子令人讨厌的特性的强形式。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_1](https://doi.org/10.1007/978-3-031-68391-6_1)
## Is ML-Based Cryptanalysis Inherently Limited? Simulating Cryptographic Adversaries via Gradient-Based Methods.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#is-ml-based-cryptanalysis-inherently-limited-simulating-cryptographic-adversaries-via-gradient-based-methods)**
### 作者
* Avital Shafran, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Gil Segev, School of Computer Science and Engineering, Hebrew University of Jerusalem, Jerusalem, 91904, Israel
* Eran Malach, Kempner Institute for the Study of Natural and Artificial Intelligence, Harvard University, MA, USA
* Thomas Ristenpart, Department of Computer Science, Cornell Tech, New York, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### 摘要
> 鉴于机器学习（ML）领域的最新进展，密码学界已经开始探索将ML方法应用于新的密码分析方法设计的可能性。尽管目前的实证结果显示出一定的前景，但这些方法可能超越传统的密码分析方法的程度仍然不太清楚。
> 
> 在本研究中，我们开始探索基于ML的密码分析技术的理论，特别是在理解它们是否与传统方法相比存在根本限制方面提供了新的成果。而大多数传统的密码分析主要依赖于直接处理单个样本（例如明文-密文对），迄今为止，现代ML方法只通过基于梯度的计算与样本交互，这些计算会通过一个损失函数平均处理所有样本。因此，可以想象这种基于梯度的方法可能比传统方法弱。
> 
> 我们提出了一个统一的框架，用于捕捉既能直接访问单个样本的“基于样本”对手，也能仅通过发出基于梯度的查询并通过一个损失函数对所有给定样本进行平均的“基于梯度”对手。在我们的框架中，我们建立了一个一般的可行性结果，表明任何“基于样本”的对手都可以通过一个表面上较弱的“基于梯度”的模拟器来模拟。此外，该模拟展示了在梯度模拟器的运行时间方面几乎是最佳的开销。最后，我们扩展和完善我们的模拟技术，以构建一个完全可并行化的梯度模拟器，该模拟器对于避免可并行化的密码分析任务的不良开销至关重要，然后用于构建一个执行特定且非常有用的梯度下降方法的梯度模拟器。
> 
> 总之，尽管ML方法可能超越传统的密码分析方法的程度尚不十分清楚，但我们的结果表明，这些基于梯度的方法并不会受到似乎受限的获得样本的方式的根本限制。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_2](https://doi.org/10.1007/978-3-031-68391-6_2)
## Quantum Lattice Enumeration in Limited Depth.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-lattice-enumeration-in-limited-depth)**
### 作者
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* Marcel Tiepelt, KASTEL, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Fernando Virdia, NOVA LINCS, Univerisdade NOVA de Lisboa, Lisbon, Portugal
### 摘要
> 在2018年，Aono等人（ASIACRYPT 2018）建议使用量子回溯算法（Montanaro，TOC 2018；Ambainis and Kokainis，STOC 2017）来加速点格枚举。已经提出了量子格筛算法（Laarhoven等人，PQCRYPTO 2013），被证明能够在渐近速度上提供比经典算法更快的速度，但是如果考虑量子计算机架构的实际考虑因素，在与密码学相关的维度上失去了竞争力（Albrecht等人，ASIACRYPT 2020）。Aono等人的工作认为，量子漫步加速可以应用于格枚举，实现至少Grover搜索的二次渐近加速，同时不需要指数量级的量子可访问的经典存储器，如筛法所需。在这项工作中，我们探索如何下限Aono等人的技术在极端圆柱剪枝格枚举中的使用成本，假设存在限制量子计算能够在不退相干的情况下达到的最大深度，目的是更好地理解量子回溯在格密码分析中的实际适用性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_3](https://doi.org/10.1007/978-3-031-68391-6_3)
## Space-Efficient and Noise-Robust Quantum Factoring.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#space-efficient-and-noise-robust-quantum-factoring)**
### 作者
* Seyoon Ragavan, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### 摘要
> 我们对Regev的量子分解算法（arXiv: 2308.06572）进行了两项改进，针对其空间效率和抗噪声性能进行了优化。
> 
> 我们的第一项贡献是在保持电路大小不变的情况下提高Regev算法的量子空间效率。我们的主要结果构建了一个量子分解电路，使用\(O(n \log n)\)个量子比特和\(O(n^{3/2} \log n)\)个门。我们兼具Shor和Regev的优点（空间复杂度对数因子相同）：一方面，Regev的电路需要\(O(n^{3/2})\)个量子比特和\(O(n^{3/2} \log n)\)个门，而Shor的电路需要\(O(n^2 \log n)\)个门但只需要·O（n）个量子比特。和Regev一样，为了对n位整数N进行分解，我们独立运行我们的电路\(\approx \sqrt{n}\)次，并应用Regev的经典后处理过程。
> 
> 我们的优化通过在指数中实现斐波那契数进行有效和可逆的指数运算而实现，而不是通常的2的幂，这是对Kaliski的工作的改编（arXiv:1711.02491），从经典可逆设置到量子设置。这种技术还允许我们执行既在空间又在大小上高效的量子模指数运算，并且不需要重要的预计算，这可能对其他量子算法有用。我们指数实现的关键部分是一种类似原位量子-量子模乘法的高效电路。该实现仅使用黑盒访问任何超出位置的模乘法量子电路即可工作，这是我们认为可能具有更广泛兴趣的另一个结果。
> 
> 我们的第二项贡献是展示Regev的经典后处理过程可以修改以容忍量子电路运行的恶意错误占比。相比之下，Regev对其经典后处理过程的分析要求所有的\(\approx \sqrt{n}\)次运行都成功。简而言之，我们通过格约减技术检测并过滤出受损样本来实现这一点。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_4](https://doi.org/10.1007/978-3-031-68391-6_4)
## CryptAttackTester: high-assurance attack analysis.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#cryptattacktester-high-assurance-attack-analysis)**
### 作者
* Daniel J. Bernstein, University of Illinois at Chicago, Chicago, USA
* Daniel J. Bernstein, Ruhr University Bochum, Bochum, Germany
* Daniel J. Bernstein, Academia Sinica, Taipei, Taiwan
* Tung Chou, Academia Sinica, Taipei, Taiwan
### 摘要
> 密码攻击算法成本的定量分析在比较加密系统、指导改进攻击和决定加密系统标准方面发挥着核心作用。不幸的是，这些分析往往被证明是错误的。有时错误直到数年后才被发现。
> 
> 本文介绍了CryptAttackTester（CAT），一种高可信度攻击效果定量化软件框架。CAT将攻击算法的完整定义从计算模型一直执行到成本度量，并对小规模输入系统地测试概率预测和成本预测的定义进行强制执行。
> 
> 例如，CAT对于“AES-128密钥暴力搜索的中位成本小于\(2^{141.89}\)比特操作”的语句提供了完整的定义，同时提供了清晰的可审核的原因来证明该语句是正确的。这并不能排除所有可能的分析错误，但使用CAT后，漏洞不再可能隐藏在不明确或未经测试的安全级别声明中。本文提供了许多已在文献中发现的错误示例，这些错误在典型的非正式测试实践中存活下来，如果CAT强制执行的链接存在，这些错误将会被捕获。
> 
> 作为一个重要的案例研究，当前CAT发布的大部分内容都是信息集解码（ISD）算法的完整定义，以及每个算法的成本/概率预测。 ISD是对McEliece加密系统的顶级攻击策略。预测涵盖了以下交互部分：（1）来自Prange、Lee-Brickell、Leon、Stern、Dumer、May-Meurer-Thomae和Becker-Joux-May-Meurer的高级搜索策略；（2）来自Omura、Canteaut-Chabaud、Canteaut-Sendrier和Bernstein-Lange-Peters的随机漫步；以及（3）核心子例程（例如线性代数和排序）的加速。预测还考虑了先前分析中忽略的各种攻击开销。这些差距加起来大约是10比特，具体取决于参数。CAT的测试比这小得多。
> 
> CAT选择的成本指标具有非常简单的定义，是非量子专用硬件的价格性能比的下界（尽管该界限对于受长距离通信瓶颈限制的攻击来说是宽松的），并且允许许多优化努力与加密电路的设计共享。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_5](https://doi.org/10.1007/978-3-031-68391-6_5)
## Not Just Regular Decoding: Asymptotics and Improvements of Regular Syndrome Decoding Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#not-just-regular-decoding-asymptotics-and-improvements-of-regular-syndrome-decoding-attacks)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Paolo Santini, Marche Polytechnic University, Ancona, Italy
### 摘要
> 加密构造通常基于结构化问题变体的安全性，以增强效率或实现高级功能。这导致了正则综合译码（RSD）问题的引入，它保证了对综合译码（SD）问题的解遵循特定的分块结构。尽管最近攻击利用了该结构（Briaud和Øygarden，Eurocrypt '23）以及Carozza、Couteau和Joux（CCJ，Eurocrypt '23），但关于正则结构对问题难度影响的许多问题仍然存在。在这项工作中，我们从渐近性出发，开始系统研究RSD问题的难度。我们对不同的参数范围进行分类，揭示了大范围，使得RSD实例能够在多项式时间内解决，另一方面是导致非常困难实例的范围。与先前观念相反，我们表明仅基于解的唯一性进行分类并不足以隔离最坏情况的参数。此外，我们在可化简性和计算复杂性方面提供了SD和RSD之间的深入比较，确定了RSD实例实际上更难解决的参数范围。我们首次对CCJ提出的算法进行了渐近分析，确定它们的最坏情况解码复杂度分别为\(2^{0.141n}\)和\(2^{0.135n}\)。然后，我们通过展示如何将先进的信息集译码（ISD）技术的整个机制从攻击SD转移到RSD设置，介绍了正则-ISD算法。最快的正则-ISD算法将最坏情况解码复杂度显著提高到\(2^{0.112n}\)。最后，我们还表明，就建议的参数而言，正则-ISD在大多数情况下优于先前的方法，将安全级别降低了多达30位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_6](https://doi.org/10.1007/978-3-031-68391-6_6)
## Quantum One-Wayness of the Single-Round Sponge with Invertible Permutations.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#quantum-one-wayness-of-the-single-round-sponge-with-invertible-permutations)**
### 作者
* Joseph Carolan, University of Maryland College Park, College Park, USA
* Alexander Poremba, Massachusetts Institute of Technology, Cambridge, USA
### 摘要
> 海绵哈希是一类广泛使用的加密哈希算法，是当前国际哈希函数标准SHA-3的基础。简而言之，海绵函数以任意长度的比特流作为输入，并通过一个简单的迭代过程处理它：它反复将输入的每个块馈送到所谓的块函数中，然后通过再次迭代块函数在最终输出比特上产生摘要。尽管关于当块函数被建模为随机函数或单向置换时的海绵构造的后量子安全性已知很多，但至今，在允许逆查询的排列情况下，这更贴近于SHA-3底层构造的情况仍然是一个基本的未解问题。
> 
> 在这项工作中，我们取得了突破，并展示了几个结果。首先，我们证明了Unruh提出的“双面零搜索”猜想，并表明在随机2n比特置换中查找零对至少需要 \(\varOmega (2^{n/2})\) 查询—这是由于Grover算法的紧密性。我们证明的核心是一种新颖的“对称化论证”，它利用了来自年轻子群理论的见解。其次，我们考虑双侧搜索问题的更一般变体，并为它们显示类似的查询下限。作为一个应用，我们证明了在量子随机置换模型中具有可逆置换的单轮海绵的量子单向性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_7](https://doi.org/10.1007/978-3-031-68391-6_7)
## FuLeakage: Breaking FuLeeca by Learning Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#fuleakage-breaking-fuleeca-by-learning-attacks)**
### 作者
* Felicitas Hörmann, Institute of Communications and Navigation, German Aerospace Center (DLR), Oberpfaffenhofen–Wessling, Germany
* Felicitas Hörmann, School of Computer Science, University of St. Gallen, St. Gallen, Switzerland
* Wessel van Woerden, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
### 摘要
> FuLeeca是一个签名方案，提交给了最近的NIST对于额外签名的要求。它是一个基于李度量下拟循环码的高效哈希和签名方案，类似于基于格的Falcom签名方案。FuLeeca提出了所谓的集中步骤以避免从签名中泄漏秘密密钥信息。然而，FuLeeca仍然容易受到学习攻击的影响，这是格基签名方案最初观察到的情况。我们通过利用基于码的FuLeeca方案与基于格原语的相似性来展示三个完整的密钥恢复攻击。
> 
> 更准确地说，我们使用一些签名从给定长度为n的码中提取一个n/2维的循环子格，仍包含极短的秘密密钥向量。这显著降低了经典攻击成本，并且还导致量子多项式时间内的完整密钥恢复。此外，我们利用集中过程的偏差，在不到一个小时内经典恢复任何安全级别的完整密钥，最多只需175,000个签名。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_8](https://doi.org/10.1007/978-3-031-68391-6_8)
## FRIDA: Data Availability Sampling from FRI.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#frida-data-availability-sampling-from-fri)**
### 作者
* Mathias Hall-Andersen, ZkSecurity, Kolkata, India
* Mark Simkin, Ethereum Foundation, Zug, Switzerland
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> 随着以太坊等区块链的不断增长，资源有限的客户无法再存储整个区块链。轻节点想要使用区块链，但不验证整个区块链是否处于良好状态，可以仅下载区块头而不是相应的区块内容。由于这些轻节点最终可能需要一些区块内容，他们希望确保原则上这些内容是可用的。巴萨姆等人引入的数据可用性抽样是一种允许轻节点检查数据可用性而无需下载数据的过程。在最近的工作中，霍尔-安德森、西姆金和瓦格纳提出了正式定义并分析了几种构造。虽然他们的工作对数据可用性抽样做出了全面的形式基础，但这些构造要么成本过高，要么使用了可信设置，或者对轻客户的下载复杂度与数据大小的平方根成正比。在这项工作中，我们通过提出一种高效的数据可用性抽样方案而没有可信设置，仅有对数多项式的开销，迈出了重要的一步。为此，我们发现了与交互式 Oracle 接近证明（IOPP）的新颖联系。具体来说，我们证明了任何符合额外一致性准则的IOPP都可以转化为一种消除码承诺，然后利用霍尔-安德森、西姆金和瓦格纳的编译器，将其转化为数据可用性抽样方案。这种新的联系使得数据可用性能够受益于未来关于IOPP的结果。然后我们证明了广泛使用的FRI IOPP满足我们的一致性准则，并展示了由此产生的数据可用性抽样方案在多个参数上从渐近和具体的角度来说都优于现有技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_9](https://doi.org/10.1007/978-3-031-68391-6_9)
## Pseudorandom Error-Correcting Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#pseudorandom-error-correcting-codes)**
### 作者
* Miranda Christ, Columbia University, New York, USA
* Sam Gunn, UC Berkeley, Berkeley, USA
### 摘要
> 我们构建伪随机纠错码（或简称伪随机码），这些是具有属性的纠错码，即任意多个码字对于任何计算上受限的对手都是伪随机的。通过解码密钥可以高效地解码损坏的码字。我们构建了对替换和删除错误具有鲁棒性的伪随机码，其中伪随机性基于标准密码假设。具体而言，伪随机性基于LPN 的 \(2^{O(\sqrt{n})}\) 难度，或者基于 LPN 和低密度下植入 XOR 问题的多项式困难性。作为伪随机码的主要应用，我们提出了一种用于语言模型输出的无法检测的水印方案，该方案对裁剪、恒定速率的随机替换和删除具有鲁棒性。在某种意义上，水印是无法检测的，因为任何数量的水印文本样本在计算上无法与原始模型输出的文本区分开来。这是第一个能容忍恒定错误率的无法检测水印方案。我们的第二个应用是隐写术，在其中秘密消息被隐藏在看似无害的内容中。我们提出了一个具有恒定速率且对恒定速率替换具有鲁棒性的无状态隐写术方案。我们的方案是第一个具有可证明隐写安全性和对错误有任何鲁棒性的无状态隐写术方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_10](https://doi.org/10.1007/978-3-031-68391-6_10)
## Certifying Private Probabilistic Mechanisms.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#certifying-private-probabilistic-mechanisms)**
### 作者
* Zoë Ruha Bell, University of California, Berkeley, USA
* Shafi Goldwasser, University of California, Berkeley, USA
* Jean-Luc Watson, University of California, Berkeley, USA
* Michael P. Kim, Cornell University, Ithaca, New York, USA
### 摘要
> 近年来，出现了整个研究社区，致力于解决数据分析中的隐私和公平性问题。然而，目前公众必须相信机构会自愿重新实施算法，以解决这些社会问题。由于额外成本，如果缺乏有效的法律强制措施，普及率不太可能。对于执行的技术挑战是，所提出的方法通常是概率机制，其输出必须根据精确的、有时是保密的分布来绘制。差分隐私（DP）案例是有例可循的：如果作弊的策展人根据过度精确的机制回答查询，隐私侵犯可能会被忽视。这就提出了我们的核心问题：我们能否有效地认证由不受信任的一方实施的概率机制的输出？为此：
> 
> 1. 我们引入了两个新概念：认证概率机制（CPM）和随机变量承诺方案（RVCS）。一个CPM是一个交互式协议，强迫证明者实施给定的概率机制或被抓住；重要的是，交互不揭示机制的秘密参数。一个RVCS——构建CPMs的关键基本组件——是一个承诺方案，其中验证器被说服承诺是根据约定的分布采样的RV，但不了解其他任何东西。
> 
> 2. 我们为证明DP的特殊情况实例化了CPM的一般概念。我们建立了一个轻量级的、双重高效的交互证明系统，用于证明通过DP二项机制发布的任意谓词计数查询。该构造依赖于具有完美隐藏和加性同态属性的承诺方案，该方案可用于发布关于承诺数据库的广泛类查询，在Pedersen承诺的基础上构建。
> 
> 3. 最后，我们通过高效和可扩展的原型实现展示了认证DP的立即可行性，以回答任意谓词的计数查询。该机制由离线和在线阶段组成，在线阶段允许查询的非交互式认证。例如，我们表明，美国人口普查数据 （PUMS）（n=7000）的CDP查询只需1.6毫秒完成，而验证只需38微秒。我们的实施是在https://github.com/jlwatson/certified-dp上的开放源代码中提供的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_11](https://doi.org/10.1007/978-3-031-68391-6_11)
## Formal Security Proofs via Doeblin Coefficients: - Optimal Side-Channel Factorization from Noisy Leakage to Random Probing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#formal-security-proofs-via-doeblin-coefficients-optimal-side-channel-factorization-from-noisy-leakage-to-random-probing)**
### 作者
* Julien Béguinot, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Sylvain Guilley, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Olivier Rioul, LTCI, Télécom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Wei Cheng, Secure-IC S.A.S., Paris, France
* Sylvain Guilley, Secure-IC S.A.S., Paris, France
### 摘要
> 掩码是侧信道攻击中最流行的对策之一，因为它可以提供可证明的安全性。然而，取决于对手的模型，有用的安全保证可能难以提供。最初，Ishai等人在Crypto'03中证明了掩码可以安全地防御t门限探针攻击，Duc等人在Eurocrypt'14中证明了更通用的随机探针模型的安全性。Prouff和Rivain在Eurocrypt'13中引入了嘈杂泄漏模型来捕捉更现实的泄漏情况。Duc等人在Eurocrypt'14中引入了从嘈杂泄漏到随机探针的约化，并在Crypto'19，Duc等人在Eurocrypt'15 / J. Cryptol'19，以及Masure和Standaert在Crypto'23中改进了两个模型的安全保证。不幸的是，事实证明，我们发现以前的证明在随机探针或嘈杂泄漏模型中都存在缺陷，而这些缺陷似乎不容易修复。在这项工作中，我们展示Doeblin系数可以克服这些缺陷。事实上，它提供了从嘈杂泄漏到随机探针的最佳约化，从而提供了一个正确且可用的指标来正确地建立安全证明。这显示了从嘈杂泄漏到随机探针模型的固有不可避免的成本。我们展示它也可以用于使用Prouff和Rivain的子序列分解来导出直接的形式安全证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_12](https://doi.org/10.1007/978-3-031-68391-6_12)
## Leakage Certification Made Simple.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#leakage-certification-made-simple) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#leakage-certification-made-simple)**
### 作者
* Aakash Chowdhury, University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
* Carlo Brunetta, Independent Researcher, Trieste, Italy
* Elisabeth Oswald, University of Birmingham, Birmingham, UK
* Arnab Roy, University of Innsbruck, Innsbruck, Austria
### 摘要
> 侧信道评估受益于对对手泄露模型的准确描述，这是攻击成功的决定因素。两个问题是值得关注的：我们能否定义和估计能够捕捉理想对手（拥有与攻击有关的分布信息的所有知识的对手）的数量，以及我们能否定义和估计能够捕捉具体对手（通过给定泄露模型表示的对手）的数量。现有的研究已经导致了一系列用于衡量这两种不同类型对手的自定义数量的出现，即使对于离散的侧信道，并且当侧信道跟踪中的维数增加时，甚至在理想情况下，数据密集也是如此。在本文中，我们展示了如何定义与所感兴趣的变量之间的相互信息以及如何实例化最近提出的相互信息估计器以进行实际估计。我们将我们的结果应用于实际数据集，并且是第一个利用高达30个数据点提供基于相互信息的理想和具体对手特征化的研究。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_13](https://doi.org/10.1007/978-3-031-68391-6_13)
## Improved Reductions from Noisy to Bounded and Probing Leakages via Hockey-Stick Divergences.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-6].md#improved-reductions-from-noisy-to-bounded-and-probing-leakages-via-hockey-stick-divergences)**
### 作者
* Maciej Obresmki, National University of Singapore, Singapore, Singapore
* João Ribeiro, NOVA LINCS and NOVA School of Science and Technology, Caparica, Portugal
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* François-Xavier Standaert, Université catholique de Louvain, Louvain-la-Neuve, Belgium
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### 摘要
> 密码学理论与实践在泄漏存在下存在不匹配之处。在理论前沿上，有界泄漏模型，其中对手了解有关秘密组件的有限长度但无噪声信息，以及随机探针模型，其中对手以某些概率了解泄漏实现的某些内部值，是便于分析许多设计安全性的抽象。在实践前沿上，侧信道攻击产生长的记录，这些记录固有具有噪声但提供有关所有内部计算的信息，并且这种噪声通常使用类似相互信息或统计距离的关联指标进行评估。理想情况下，我们希望声称对有限泄漏或随机探针的弹性意味着根据这些指标评估的噪声泄漏的弹性。然而，以前的工作（Duc，Dziembowski和Faust，Eurocrypt 2014; Brian等人，Eurocrypt 2021）已经表明，证明此类带有有用参数的缩减是具有挑战性的。
> 
> 在这项工作中，我们研究了起源于曲棍球杆分岔的噪声泄漏模型，这些分岔推广了统计距离，也是差分隐私的基础。首先，我们表明对有界泄漏和随机探针的弹性意味着我们的新噪声泄漏模型对于基于统计距离或相互信息的模型而言具有改进的参数。其次，我们建立了我们模型的组合定理，表明这些连接扩展到从泄漏实现中获得多个泄漏的情况。我们用实际相关性讨论了我们的理论结果，并强调（i）降噪声水平的现实泄漏函数适用于有限泄漏，比Brian等人降低了几个数量级，（ii）随机探针的缩减有用地推广了Duc，Dziembowski和Faust的开创性工作，尽管当掩蔽操作的字段大小增长时（即，曲棍球杆分岔可以更好地隐藏噪声要求的字段大小依赖性，但不会消除它）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68391-6_14](https://doi.org/10.1007/978-3-031-68391-6_14)
