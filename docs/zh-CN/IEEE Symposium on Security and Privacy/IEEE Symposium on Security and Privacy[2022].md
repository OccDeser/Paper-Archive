# IEEE Symposium on Security and Privacy[2022]
## PATA: Fuzzing with Path Aware Taint Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pata-fuzzing-with-path-aware-taint-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pata-fuzzing-with-path-aware-taint-analysis)**
### 作者
* Jie Liang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Mingzhe Wang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Chijin Zhou, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Zhiyong Wu, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Yu Jiang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Jianzhong Liu, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Zhe Liu, Computer Science and Technology, Nanjing University of Aeronautics and Astronautics, Nanjing, China
* Jiaguang Sun, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
### 摘要
> 污点分析通过推断影响输入字节来帮助模糊测试解决复杂的模糊约束。现实世界程序中的执行路径经常到达循环，这些循环中的约束可能被多次访问和记录。传统的污点分析技术在区分相同约束的多个出现时遇到困难。本文提出了一种名为PATA的模糊测试工具，它实现了基于执行路径信息对相同变量的多个出现进行区分的路径感知污点分析。PATA的实现步骤如下：首先，PATA识别约束中使用的变量并构建代表性变量序列(RVS)，其中包含所有代表性约束变量及其值的出现。接下来，PATA扰动输入，将其RVS与原始输入的RVS进行匹配，并查找值的变化以识别每个RVS条目的影响输入字节。最后，PATA突变相应的输入字节以解决给定路径中的约束。为了证明PATA在传统污点分析方法上的有效性，我们在Google的fuzzer-test-suite和LAVA-M基准测试上评估了其性能并与AFL、MOPT、TortoriseFuzz、VUzzer、Angora、Redqueen和Greyone进行比较。在Google的fuzzer-test-suite上，PATA在发现独特路径和覆盖基本块数量方面比这些最先进的模糊测试工具分别提高了29%-1830%和7%-87%。更重要的是，它比其他对比模糊测试工具发现了更多的漏洞，包括17个未列出的漏洞。在LAVA-M上，PATA在所有评估的模糊测试工具中表现最好，并找到了2602个漏洞。在开源项目中，PATA找到了40个以前未知的漏洞，其中有12个被确认为CVEs。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833594/](https://ieeexplore.ieee.org/document/9833594/)
## JIGSAW: Efficient and Scalable Path Constraints Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#jigsaw-efficient-and-scalable-path-constraints-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#jigsaw-efficient-and-scalable-path-constraints-fuzzing)**
### 作者
* Ju Chen, Computer Science and Engineering Department, University of California, Riverside
* Jinghan Wang, Computer Science and Engineering Department, University of California, Riverside
* Chengyu Song, Computer Science and Engineering Department, University of California, Riverside
* Heng Yin, Computer Science and Engineering Department, University of California, Riverside
### 摘要
> 覆盖率导向的测试已证实是发现漏洞的有效方法。如果我们将覆盖率导向的测试建模为一个搜索问题（即寻找可以覆盖更多分支的输入），那么其效率主要取决于两个因素：（1）搜索算法的准确性和（2）单位时间内可以评估的输入数量。因此，提高搜索吞吐量已被证明是改进覆盖率导向测试性能的有效方法。在这项工作中，我们提出了一种新颖的设计来提高搜索吞吐量：通过使用即时编译的路径约束评估新生成的输入。这种方法使我们能够显著提高单线程吞吐量，并且可扩展到多个核心。我们还开发了几种优化技术来消除此过程中的主要瓶颈。我们的原型JIGSAW的评估显示，我们的方法可以实现比现有模糊测试工具高三个数量级的搜索吞吐量，并且可扩展到多个核心。我们还发现，通过如此高的吞吐量，一个简单的梯度导向搜索启发式方法可以更快地解决来自大量实际程序的路径约束，而比具有更复杂搜索启发式方法的SMT求解器更快。综合覆盖率导向测试的评估还显示，我们基于JIGSAW的混合模糊测试工具可以胜过最先进的测试工具。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833796/](https://ieeexplore.ieee.org/document/9833796/)
## BEACON: Directed Grey-Box Fuzzing with Provable Path Pruning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#beacon-directed-grey-box-fuzzing-with-provable-path-pruning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#beacon-directed-grey-box-fuzzing-with-provable-path-pruning)**
### 作者
* Heqing Huang, The Hong Kong University of Science and Technology, China
* Yiyuan Guo, The Hong Kong University of Science and Technology, China
* Qingkai Shi, The Hong Kong University of Science and Technology, China
* Peisen Yao, The Hong Kong University of Science and Technology, China
* Rongxin Wu, Xiamen University, China
* Charles Zhang, The Hong Kong University of Science and Technology, China
### 摘要
> 与覆盖率模糊测试关注代码的每个部分不同，定向模糊测试旨在将模糊器定向到特定目标，例如具有潜在漏洞的代码。尽管取得了很大进展，但我们观察到现有的定向模糊测试工具仍然不够高效，因为它们经常在符号或具体执行无法达到目标代码的许多程序路径上。因此，它们浪费了大量计算资源。本文介绍了BEACON，可以以可证明的方式在路径的海洋中有效地指导灰盒模糊测试器。也就是说，在运行时通过轻量级静态分析计算出达到目标的抽象前提条件，我们可以剪枝82.94%的执行路径，几乎不会增加分析开销(<5小时)，但可以保证被剪枝的路径必定与目标无关。我们已经实现了我们的方法BEACON，并将其与五种最先进的（定向）模糊测试工具在漏洞重现的应用场景中进行了比较。评估结果表明，BEACON的平均速度比现有的定向灰盒模糊测试工具快11.50倍，还可以提高传统的覆盖率引导模糊测试工具AFL、AFL++和Mopt的速度，分别提高了6.31倍、11.86倍和10.92倍来重现特定的错误。更有趣的是，当用于测试漏洞修补程序时，BEACON发现了14个现有CVE标识的漏洞修复不完整，并找到了8个新的错误，其中10个是可利用的，分配了新的CVE标识。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833751/](https://ieeexplore.ieee.org/document/9833751/)
## Automated Attack Synthesis by Extracting Finite State Machines from Protocol Specification Documents.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#automated-attack-synthesis-by-extracting-finite-state-machines-from-protocol-specification-documents) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#automated-attack-synthesis-by-extracting-finite-state-machines-from-protocol-specification-documents)**
### 作者
* Maria Leonor Pacheco, Purdue University, West Lafeyette, IN, USA
* Max von Hippel, Northeastern University, Boston, MA, USA
* Ben Weintraub, Northeastern University, Boston, MA, USA
* Dan Goldwasser, Purdue University, West Lafeyette, IN, USA
* Cristina Nita-Rotaru, Northeastern University, Boston, MA, USA
### 摘要
> 自动化攻击发现技术，如攻击者合成或基于模型的模糊测试，为确保网络协议正确安全地运行提供了强大的方式。这些技术通常需要协议的形式化表示，通常以有限状态机（FSM）的形式存在。不幸的是，许多协议仅用英语散文描述，并将简单的网络协议实现为FSM耗时且容易出现细微的逻辑错误。从文档中自动提取协议FSM可以显著促进这些技术的使用，并实现更加健壮和安全的协议实现。在这项工作中，我们将重点放在攻击者合成作为协议安全的代表性技术上，并以RFC作为协议散文描述的代表性格式。与依赖基于规则的方法或直接使用现成NLP工具的其他工作不同，我们提出了一种从RFC文档中提取FSM的数据驱动方法。具体而言，我们采用三个关键步骤的混合方法：（1）用于技术语言的大规模词表示学习，（2）用于将协议文本映射到协议独立信息语言的有针对性零样本学习，以及（3）从协议独立信息到特定协议FSM的基于规则的映射。我们使用RFC文档展示了我们FSM提取的泛化能力，涉及六种不同协议：BGPv4、DCCP、LTP、PPTP、SCTP和TCP。我们演示了如何将从RFC中自动提取的FSM应用于攻击合成，以TCP和DCCP为案例研究。我们的方法表明，通过使用RFC等文本规范，可以自动化地针对协议进行攻击合成。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833673/](https://ieeexplore.ieee.org/document/9833673/)
## ProVerif with Lemmas, Induction, Fast Subsumption, and Much More.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#proverif-with-lemmas-induction-fast-subsumption-and-much-more) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#proverif-with-lemmas-induction-fast-subsumption-and-much-more)**
### 作者
* Bruno Blanchet, Inria Paris, Paris, France
* Vincent Cheval, Inria Paris, Paris, France
* Véronique Cortier, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### 摘要
> 该论文介绍了一种广泛使用的符号安全协议验证器ProVerif的重大改进。我们提供了两个主要贡献。首先，我们使用引理、公理、归纳证明、自然数和时态查询扩展了ProVerif。这些功能不仅扩展了ProVerif的范围，还可以用于改进其精度（也就是避免虚假攻击）并使其更频繁终止。其次，我们重新设计和优化了ProVerif中使用的许多算法（子句生成、决议、包含关系等），从而在大型示例中实现了令人瞩目的加速。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833653/](https://ieeexplore.ieee.org/document/9833653/)
## Four Attacks and a Proof for Telegram.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#four-attacks-and-a-proof-for-telegram) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#four-attacks-and-a-proof-for-telegram)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London
* Lenka Mareková, Information Security Group, Royal Holloway, University of London
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich
* Igors Stepanovs, Applied Cryptography Group, ETH Zurich
### 摘要
> 我们研究了对称密码在MTProto 2.0协议中的使用，这是Telegram的等效TLS记录协议。我们提供了正面和负面的结果。一方面，我们正式且详细地建模了Telegram的“记录协议”的一个微小变体，并证明它在适当的双向安全通道模型中具有安全性，尽管在未研究的假设下；这个模型本身推进了安全通道的最新技术。另一方面，我们首先通过给出两种攻击（一种实际攻击，一种理论攻击）来论证我们对MTProto的建模偏差，而没有使用我们的修改版本。然后，我们还提供了第三种攻击，利用三个官方Telegram客户端中的各种程度的时序侧信道。单凭这种攻击本身是被Telegram的密钥交换协议建立的salt和id字段的保密性所阻止的。为了恢复这些字段，我们将第三种攻击与对Telegram服务器上密钥交换协议实现的第四种攻击相连接。总而言之，我们的研究全面探讨了MTProto对对称密码的使用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833666/](https://ieeexplore.ieee.org/document/9833666/)
## Noise*: A Library of Verified High-Performance Secure Channel Protocol Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-a-library-of-verified-high-performance-secure-channel-protocol-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-a-library-of-verified-high-performance-secure-channel-protocol-implementations)**
### 作者
* Son Ho, Inria Paris
* Jonathan Protzenko, Microsoft Research
* Abhishek Bichhawat, IIT Gandhinagar
* Karthikeyan Bhargavan, Inria Paris
### 摘要
> 噪声协议框架定义了一种简洁的符号表示和执行框架，用于大量的59+安全通道协议，其中一些协议被用于流行应用如WhatsApp和WireGuard。我们提供了一个经过验证的噪声协议编译器实现，该编译器可以接收任意噪声协议，并生成经过优化的C语言实现，具有广泛的正确性和安全性保证。为此，我们在F*中形式化完整的噪声堆栈，从底层的加密库到高级API。我们也使用F*语言编写了我们的编译器，并证明它符合我们的正式规范，并通过一种称为混合嵌入的新技术根据需要为任何给定的噪声协议进行特化。我们因此建立起每个噪声协议生成的C代码的功能正确性、内存安全性和一种侧信道抵抗形式的保证。我们将这些保证传播到高级API中，使用防御性的动态检查来防止协议的不正确使用。最后，我们使用F*语言中的密码学符号模型来正式陈述和证明我们噪声代码的安全性，并将高级API中以安全级别为目标的安全性要求与低级别的加密保证形式上进行了关联。我们的验证结果是针对目标为C代码的协议编译器的首个全面性验证结果，也是任何噪声协议的首个经过验证的实现。我们通过生成所有59个噪声协议的实现，并将我们验证过的代码的大小、性能和安全性与其他（未经验证的）实现和以前噪声的安全性分析进行比较来评估我们的框架。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833621/](https://ieeexplore.ieee.org/document/9833621/)
## A Logic and an Interactive Prover for the Computational Post-Quantum Security of Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-logic-and-an-interactive-prover-for-the-computational-post-quantum-security-of-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-logic-and-an-interactive-prover-for-the-computational-post-quantum-security-of-protocols)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security, Germany
* Caroline Fontaine, Université Paris-Saclay, CNRS, ENS Paris-Saclay, Laboratoire Méthodes Formelles, Gif-sur-Yvette, France
* Charlie Jacomme, CISPA Helmholtz Center for Information Security, Germany
### 摘要
> 我们提供了第一批机械化后量子声音安全协议证明。我们通过开发PQ-BC，一种对量子攻击者有声音属性的计算一阶逻辑，以及PQ-SQUIRREL证明器的相应机械化支持来实现这一目标。我们的工作基于经典的BC逻辑[7]及其在SQUIRREL[5]证明器中的机械化。我们开发PQ-BC需要使BC逻辑对单个交互式量子攻击者有声音属性。我们通过修改SQUIRREL实现PQ-SQuiRREL证明器，依赖于PQ-BC的声音结果，并强制执行一组句法条件；此外，我们为逻辑提供了扩展工具范围的新策略。使用PQ-SQUIRREL，我们进行了几个案例研究，从而首次提供了对它们的计算后量子安全性的机械化证明。这包括两个基于KEM的密钥交换的通用构造，IKEv1和IKEv2中的两个子协议，以及Signal的X3DH协议的后量子变体。此外，我们使用PQ-SQuiRREL证明几个经典的SQUIRREL案例研究已经具有后量子声音。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833800/](https://ieeexplore.ieee.org/document/9833800/)
## IronMask: Versatile Verification of Masking Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#ironmask-versatile-verification-of-masking-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#ironmask-versatile-verification-of-masking-security)**
### 作者
* Sonia Belaïd, CryptoExperts, France
* Darius Mercadier, CryptoExperts, France
* Matthieu Rivain, CryptoExperts, France
* Abdul Rahman Taleb, CryptoExperts, France; Sorbonne Université, CNRS, LIP6, Paris, France
### 摘要
> 本文介绍了一个名为lronMask的新型多功能掩蔽安全验证工具。lronMask是首个在探查模型中提供标准基于模拟的安全概念验证以及最近的组合和可扩展性概念验证的工具。它支持具有线性随机性的任何掩蔽设备（例如加法、复制和刷新设备），以及可能包含非线性随机性的二次设备（例如乘法设备，通过刷新它们的输入）。同时，针对这两种类型的设备，提供完整的验证结果。我们通过引入一种新的代数特征来实现这种完整的可验证性，并展示一种完整的方法来确定一组必要和充分的输入共享，以执行任何一组探针的完美模拟。我们报告了各种基准测试结果，表明lronMask在探查模型（maskVerif、scVerif、SILVEH、matverif）中与最先进的验证工具竞争力相当。与以往唯一能验证随机探测组合和可扩展性的工具VHAPS以及现有唯一提供具有非线性随机性的二次设备的完整验证的工具SILVEH相比，lronMask的速度快了几个数量级。由于具备了这种完整性和提高的性能，我们可以得到对最先进的随机探测安全编译器容忍泄漏概率的更好限制。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833600/](https://ieeexplore.ieee.org/document/9833600/)
## SAILFISH: Vetting Smart Contract State-Inconsistency Bugs in Seconds.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sailfish-vetting-smart-contract-state-inconsistency-bugs-in-seconds) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sailfish-vetting-smart-contract-state-inconsistency-bugs-in-seconds)**
### 作者
* Priyanka Bose, University of California, Santa Barbara
* Dipanjan Das, University of California, Santa Barbara
* Yanju Chen, University of California, Santa Barbara
* Yu Feng, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 本论文介绍了SAILFISH，一种可扩展的系统，用于自动发现智能合约中的状态不一致性错误。为了使分析可行，我们引入了一种混合方法，包括（i）一种轻量级的探索阶段，大大减少了要分析的指令数量，和（ii）基于我们的新颖值摘要分析的符号执行引导的精确细化阶段，该分析生成额外的约束以过度约束整个程序执行的副作用，从而确保符号执行的精确性。我们开发了SAILFISH的原型，并评估了它在以太坊智能合约中检测两种状态不一致性漏洞的能力，即重入性和交易顺序依赖（TOD）。我们的实验证明了我们混合方法的效率以及值摘要分析的好处。特别是，我们表明SAILFISH在性能和精确性方面优于五个最先进的智能合约分析器（SECURIFY，MYTHRIL，OYENTE，SEREUM和VANDAL）。总体而言，SAILFISH在ETHERSCAN的89,853个智能合约中发现了47个之前未知的易受攻击的智能合约。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833721/](https://ieeexplore.ieee.org/document/9833721/)
## ZeeStar: Private Smart Contracts by Homomorphic Encryption and Zero-knowledge Proofs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#zeestar-private-smart-contracts-by-homomorphic-encryption-and-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#zeestar-private-smart-contracts-by-homomorphic-encryption-and-zero-knowledge-proofs)**
### 作者
* Samuel Steffen, ETH Zurich, Switzerland
* Benjamin Bichsel, ETH Zurich, Switzerland
* Roger Baumgartner, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### 摘要
> 数据隐私是处理敏感数据的智能合约的一个关键问题。现有的工作zkay通过允许没有密码学专业知识的开发人员强制实施数据隐私来解决这个问题。然而，虽然zkay避免了其他私有智能合约系统的基本限制，但它无法表达涉及外部数据操作的关键应用。我们提出了ZeeStar，一种语言和编译器，允许非专业人士实例化私有智能合约并支持对外部数据进行操作。ZeeStar语言允许开发人员使用zkay的隐私注释以符合人体工程学规范指定隐私约束。然后，ZeeStar编译器通过结合非交互式零知识证明和加性同态加密可证明地实现这些约束。我们在公共区块链以太坊上实现了ZeeStar。通过对12个示例合约进行编码，包括无意识传输和类似Zether的私有支付系统，我们展示了其表达能力。ZeeStar是实用的：它以最多54.7s预处理我们合约的交易，平均成本为339k gas。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833732/](https://ieeexplore.ieee.org/document/9833732/)
## Quantifying Blockchain Extractable Value: How dark is the forest?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#quantifying-blockchain-extractable-value-how-dark-is-the-forest) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#quantifying-blockchain-extractable-value-how-dark-is-the-forest)**
### 作者
* Kaihua Qin, Imperial College, London
* Liyi Zhou, Imperial College, London
* Arthur Gervais, Imperial College, London
### 摘要
> 无需许可的区块链（如比特币）在金融服务方面表现出色。然而，机会主义交易者通过所谓的区块链可提取价值（BEV）从分散金融（DeFi）智能合约的网络中提取货币价值。最近出现的中心化BEV转发器将BEV描绘为一种积极的额外收入来源。因为实验证明BEV会损害区块链的共识安全性，BEV转发器通过激励理性的矿工对链进行分叉，从而危及账本的安全。例如，如果BEV机会超过区块奖励的4倍，拥有10%哈希率的理性矿工将会分叉以太坊。然而，目前相关工作中缺少定量观察BEV提取的过去情况，以客观评估BEV的实际风险。在这项工作中，我们通过计算夹击攻击、清算和去中心化交易套利所提取的美元量来衡量BEV的危险性。我们估计，在32个月的时间里，BEV获得了5.4054亿美元的利润，分配给11,289个地址，并捕获了49,691种加密货币和60,830个链上市场。我们发现的最高BEV实例金额为410万美元，是以太坊区块奖励的616.6倍。此外，尽管从业者社区已经讨论过一般化交易机器人的存在，但据我们所知，我们是第一个提供具体算法的人。我们的算法可以替换未确认的交易，而无需理解受害者交易的基本逻辑，我们估计，在32个月的过去区块链数据中，该算法获得了57,037.32 ETH（35.37百万美元）的利润。最后，我们对新兴的BEV中继系统进行了形式化和分析，其中矿工接受来自中心化中继服务器而不是点对点（P2P）网络的BEV交易。我们发现，这种中继系统加剧了共识层攻击，因此进一步危及区块链的安全性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833734/](https://ieeexplore.ieee.org/document/9833734/)
## A Formal Security Analysis of the W3C Web Payment APIs: Attacks and Verification.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-formal-security-analysis-of-the-w3c-web-payment-apis-attacks-and-verification) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-formal-security-analysis-of-the-w3c-web-payment-apis-attacks-and-verification)**
### 作者
* Quoc Huy Do, University of Stuttgart, Stuttgart, Germany
* Pedram Hosseyni, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Guido Schmitz, University of Stuttgart, Stuttgart, Germany; Royal Holloway, University of London, Egham, Surrey, UK
* Nils Wenzler, University of Stuttgart, Stuttgart, Germany
* Tim Würtele, University of Stuttgart, Stuttgart, Germany
### 摘要
> 支付是电子商务的重要组成部分。商户通常依赖于第三方支付处理器，他们负责将客户的支付款项转移到商户方。支付处理器与客户和商户的互动方式各不相同。每个支付处理器通常都会发明自己的协议，必须将其集成到商户的应用程序中，并为用户提供一种新的、可能是未知和困惑的用户体验。在Apple、Google、万事达卡和Visa等主要公司的推动下，W3C目前正在开发一套新的标准，以统一在线结账过程并“简化用户的支付体验”。主要思想是将支付作为一种原生功能集成到网络浏览器中，即Web支付API。虽然这种新的结账过程从终端用户的角度确实简单方便，但从技术上来说，它需要对浏览器进行相当大的改变。目前，许多主要的浏览器，如Chrome、Firefox、Edge、Safari和Opera已经实现了这些新的标准，而许多支付处理器，如Google Pay、Apple Pay或Stripe，支持使用Web支付API进行支付。生态系统不断发展壮大，这意味着Web支付API可能会被全球数百万人使用。迄今为止，对这些新标准尚未进行深入的安全分析。在本论文中，我们提出了对Web支付API标准的首次严格形式分析。它基于迄今为止最全面的网络基础设施模型（WIM），我们在其中扩展了将新的支付功能集成到通用浏览器模型中。我们的分析揭示了两个新的关键漏洞，允许恶意商家向毫无防备的客户收取过高费用。我们使用Chrome实施验证了我们的攻击，并将这些问题报告给了W3C以及Chrome开发人员，他们已经承认了这些问题。此外，我们提出了对标准的修复措施，这些修复措施现在已经被W3C和Chrome采纳，并证明修复后的Web支付API确实满足强安全属性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833681/](https://ieeexplore.ieee.org/document/9833681/)
## Cats vs. Spectre: An Axiomatic Approach to Modeling Speculative Execution Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cats-vs-spectre-an-axiomatic-approach-to-modeling-speculative-execution-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cats-vs-spectre-an-axiomatic-approach-to-modeling-speculative-execution-attacks)**
### 作者
* Hernán Ponce-de-Leon, Research Institute CODE Bundeswehr University Munich
* Johannes Kinder, Research Institute CODE Bundeswehr University Munich
### 摘要
> SPECTRE系列的推测执行攻击需要重新思考安全的形式化方法。基于操作推测语义的方法已经开始在寻找易受攻击代码和验证防御方面取得初步进展。然而，随着每次新攻击的出现，需要将更多微架构细节整合到底层语义中。我们提出了一种替代性的、轻量级的公理化方法来指定推测语义，该方法依赖于并发内存模型的洞察力。我们使用CAT建模语言来内存一致性以指定捕获推测控制流、存储-加载转发、预测存储转发和内存排序机器清除的执行模型。我们提供了一个有界模型检查框架，该框架取决于我们的推测CAT模型的参数，并评估其与现有技术的实现。由于公理化方法，我们的模型可以快速扩展，以允许我们的框架检测新类型的攻击并验证针对这些攻击的防御措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833774/](https://ieeexplore.ieee.org/document/9833774/)
## TASHAROK: Using Mechanism Design for Enhancing Security Resource Allocation in Interdependent Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#tasharok-using-mechanism-design-for-enhancing-security-resource-allocation-in-interdependent-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#tasharok-using-mechanism-design-for-enhancing-security-resource-allocation-in-interdependent-systems)**
### 作者
* Mustafa Abdallah, Purdue University, West Lafayette, Indiana
* Daniel Woods, University of Innsbruck, Innsbruck, Austria
* Parinaz Naghizadeh, Ohio State University, Columbus, Ohio, USA
* Issa Khalil, Qatar Computing Research Institute, Doha, Qatar
* Timothy Cason, Purdue University, West Lafayette, Indiana
* Shreyas Sundaram, Purdue University, West Lafayette, Indiana
* Saurabh Bagchi, Purdue University, West Lafayette, Indiana
### 摘要
> 我们考虑由多个防御者管理的相互依赖系统，受到连环攻击的威胁。我们通过博弈论模型来建模这样的系统，并结合行为概率加权的影响，该影响被用来模拟人类决策中的偏见，该概念源自行为经济学领域。然后，我们将这两种基于税收的机制纳入我们的框架TASHAROK中，用于处理这种相互依赖的安全博弈，其中中央监管机构激励防御者在保护资产方面进行良好投资，以实现社会最优结果。我们首先展示了由于我们相互依赖的安全博弈的性质，没有可靠的基于税收的机制可以在保持弱平衡预算的同时激励社会最优的投资配置。然后，我们展示了行为概率加权偏见对防御者支付的税款金额的影响，并证明更高的偏见会使防御者在这两种机制下支付更多的税款。接下来，我们探讨了基于税收机制的自愿参与问题。为了评估我们的机制，我们使用了四个代表性的真实世界相互依赖系统，比较了在这两种机制下，博弈论的最优投资和社会最优投资的差异。我们证明了相对于理性决策者，这些机制对于行为决策者而言，能够更大程度地降低社会成本。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833591/](https://ieeexplore.ieee.org/document/9833591/)
## SoK: Authentication in Augmented and Virtual Reality.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-authentication-in-augmented-and-virtual-reality) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-authentication-in-augmented-and-virtual-reality)**
### 作者
* Sophie Stephenson, University of Wisconsin—Madison
* Bijeeta Pal, Cornell University
* Stephen Fan, University of Wisconsin—Madison
* Earlence Fernandes, University of Wisconsin—Madison
* Yuhang Zhao, University of Wisconsin—Madison
* Rahul Chatterjee, University of Wisconsin—Madison
### 摘要
> 增强现实（AR）和虚拟现实（VR）设备正在成为今天个人计算机的重要竞争对手。作为个人设备，用户将使用AR和VR来存储和访问他们的敏感数据，因此需要安全且可用的认证方式。本论文通过系统化研究工作和实际部署，评估AR/VR设备的认证机制的最新进展。通过研究用户在AR和VR上的认证体验，我们了解到这些设备上所需的重要属性。然后，我们使用这些属性对文献中提出的和实际使用的AR/VR认证机制进行全面评估。总的来说，我们综合了当前AR/VR设备认证机制的全貌。我们根据研究结果提供具体的研究方向和有关实施和评估未来认证方法的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833742/](https://ieeexplore.ieee.org/document/9833742/)
## Delay Wreaks Havoc on Your Smart Home: Delay-based Automation Interference Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#delay-wreaks-havoc-on-your-smart-home-delay-based-automation-interference-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#delay-wreaks-havoc-on-your-smart-home-delay-based-automation-interference-attacks)**
### 作者
* Haotian Chi, Department of Computer and Information Sciences, Temple University, Philadelphia, PA, USA
* Chenglong Fu, Department of Computer and Information Sciences, Temple University, Philadelphia, PA, USA
* Qiang Zeng, Department of Computer Science and Engineering, University of South Carolina, Columbia, SC, USA
* Xiaojiang Du, Department of Electrical and Computer Engineering, Stevens Institute of Technology, Hoboken, NJ, USA
### 摘要
> 随着物联网（IoT）设备和平台的普及，智能家居中与不同物联网平台关联的物联网设备共存成为一种趋势，展示了以下特点。首先，智能家居可能使用多个平台来支持其设备和自动化。其次，家庭的物联网设备可能通过不同的路径传输消息。通过选择性延迟物联网消息，我们的研究发现，两个问题，不一致性和混乱性，可以被攻击者显著加剧。然后，我们探讨了如何利用这些问题，并提出了七种类型的利用，统称为基于延迟的自动化干扰（DAI）攻击。DAI攻击导致家庭自动化产生不正确的交互结果，将物联网设备和智能家居置于不安全、不安全或意外状态中。值得强调的是，DAI攻击不依赖于任何物联网实施漏洞或泄露的密钥/令牌，并且它们不会触发物联网协议栈的任何层上的警报。为了演示和评估新的攻击，我们建立了两个真实世界的实验场，其中部署了商用物联网设备和应用程序。来自两个实验场的为期一周的实验表明，攻击者有足够的机会发动导致安全或安全问题的DAI攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833620/](https://ieeexplore.ieee.org/document/9833620/)
## Peekaboo: A Hub-Based Approach to Enable Transparency in Data Processing within Smart Homes.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#peekaboo-a-hub-based-approach-to-enable-transparency-in-data-processing-within-smart-homes) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#peekaboo-a-hub-based-approach-to-enable-transparency-in-data-processing-within-smart-homes)**
### 作者
* Haojian Jin, Carnegie Mellon University
* Gram Liu, Carnegie Mellon University
* David Hwang, Carnegie Mellon University
* Swarun Kumar, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Jason I. Hong, Carnegie Mellon University
### 摘要
> 我们提出了Peekaboo，这是一种新的对隐私敏感的智能家居架构，利用家庭中心预处理和最小化传出数据，以结构化和可执行的方式发送到外部云服务器。Peekaboo的关键创新点是(1)将常见的数据预处理功能抽象为一组小型和固定的可链式操作符，以及(2)要求开发者在应用清单中明确声明所需的数据收集行为(例如数据粒度、目标、条件)，该清单还规定了操作符如何链接在一起。根据清单，Peekaboo使用预加载在中心中的操作符组装并执行一个预处理管线。通过这样做，开发者可以按需收集智能家居数据；第三方审核人员可以验证数据收集行为；中心本身可以为用户提供许多集中的隐私功能，跨应用和设备，而无需额外的开发工作。我们介绍了Peekaboo的设计和实现，以及对智能家居场景的覆盖范围、系统性能、数据最小化和示例内置隐私功能的评估。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833629/](https://ieeexplore.ieee.org/document/9833629/)
## vSGX: Virtualizing SGX Enclaves on AMD SEV.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#vsgx-virtualizing-sgx-enclaves-on-amd-sev) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#vsgx-virtualizing-sgx-enclaves-on-amd-sev)**
### 作者
* Shixuan Zhao, Department of Computer Science and Engineering, The Ohio State University
* Mengyuan Li, Department of Computer Science and Engineering, The Ohio State University
* Yinqian Zhangyz, Research Institute of Trust-worthy Autonomous Systems, Southern University of Science and Technology; Department of Computer Science and Engineering, Southern University of Science and Technology
* Zhiqiang Lin, Department of Computer Science and Engineering, The Ohio State University
### 摘要
> 可信执行环境（TEE）的快速增长推动了硬件隔离区的发展。然而，当前的TEE及其应用程序与硬件实现紧密绑定，阻碍了它们在不同平台上的兼容性。本文介绍了vSGX，这是一个在AMD SEV上虚拟执行Intel SGX隔离区的新系统。其核心思想是透明地介入隔离区指令的执行，以支持SGX ISA扩展，并将分离的SEV虚拟机的加密虚拟内存整合到一个单一的虚拟化SGX类地址空间中，并通过基于SEV硬件的可信链条为TEE的真实性和隔离区软件的完整性提供证明。通过设计，vSGX在SEV上实现了与Intel SGX相当的安全保障水平。我们已经实现了vSGX，并展示了它对SGX隔离区执行的合理性能开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833694/](https://ieeexplore.ieee.org/document/9833694/)
## A Systematic Look at Ciphertext Side Channels on AMD SEV-SNP.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-systematic-look-at-ciphertext-side-channels-on-amd-sev-snp) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-systematic-look-at-ciphertext-side-channels-on-amd-sev-snp)**
### 作者
* Mengyuan Li, The Ohio State University
* Luca Wilke, University of Lübeck
* Jan Wichelmann, University of Lübeck
* Thomas Eisenbarth, University of Lübeck
* Radu Teodorescu, The Ohio State University
* Yinqian Zhang, Southern University of Science and Technology
### 摘要
> 硬件辅助的内存加密为Intel SGX和AMD SEV等受信任的执行环境提供了强大的机密性保证。然而，最近在USENIX Security Symposium 2021上由Li等人提出的一项研究展示了CipherLeaks攻击，该攻击监视特殊的VMSA页面中的密文更改。通过泄漏虚拟机在上下文切换期间保存的寄存器值，他们破解了包括OpenSSL中的RSA和ECDSA在内的最先进的恒定时间密码实现。在本文中，我们对密文侧信道进行了广泛的研究。我们的研究表明，尽管CipherLeaks攻击只针对VMSA页面，但通用的密文侧信道攻击可能利用任何内存页面的密文泄漏，包括用于内核数据结构、堆栈和堆的页面。因此，AMD针对CipherLeaks攻击的现有对策，即通过固件补丁在VMSA页面的密文中引入随机性，显然是不足够的。AMD SEV的内存加密泄漏的根本原因——使用无状态但未经身份验证的加密模式和对加密内存的密文的无限制读访问——仍未修复。鉴于AMD在硬件设计中消除漏洞所面临的挑战，我们提出了一组软件对抗密文侧信道的对策，包括对操作系统内核和密码库的补丁。我们正在与AMD密切合作，将这些变更合并到受影响的开源项目中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833768/](https://ieeexplore.ieee.org/document/9833768/)
## RT-TEE: Real-time System Availability for Cyber-physical Systems using ARM TrustZone.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#rt-tee-real-time-system-availability-for-cyber-physical-systems-using-arm-trustzone) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#rt-tee-real-time-system-availability-for-cyber-physical-systems-using-arm-trustzone)**
### 作者
* Jinwen Wang, Washington University in St. Louis, MO, USA
* Ao Li, Washington University in St. Louis, MO, USA
* Haoran Li, Washington University in St. Louis, MO, USA
* Chenyang Lu, Washington University in St. Louis, MO, USA
* Ning Zhang, Washington University in St. Louis, MO, USA
### 摘要
> 嵌入式设备在新兴的网络物理世界中的安全关键系统中变得越来越普遍。虽然值得信赖的执行环境（TEE），例如ARM TrustZone已经广泛部署在移动平台上，但对于实时网络物理系统的部署却没有受到足够的关注，这些系统与移动应用程序相比存在着不同的挑战。对于自主无人机或自动汽车等安全关键的网络物理系统，目前的TEE部署范式仅关注机密性和完整性是不够的。在这些系统中，计算还需要及时完成（例如，汽车撞到行人之前），因此对可用性的重视更加强烈。为了弥补这一差距，我们提出了RT-TEE，一个实时可信执行环境。这里存在三个关键研究挑战。首先，RT-TEE利用一组最小的硬件原语在普通嵌入式平台上引导可用性能力。其次，为了平衡实时性能和调度器复杂性，我们设计了一种基于策略的事件驱动分层调度器。第三，在减轻设备驱动程序在安全环境中存在风险方面，我们设计了一个I/O参考监视器，利用软件沙盒和驱动程序剪瘦来提供对外围设备的细粒度访问控制，同时最小化受信任计算基础（TCB）。我们在ARMv8-A和ARMv8-M平台上实现了原型系统。该系统在合成任务和现实生活中的网络物理系统应用程序上进行了测试。我们在模拟环境中评估了漫游车和飞机，同时还在模拟环境中和真实无人机上评估了四轴飞行器。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833604/](https://ieeexplore.ieee.org/document/9833604/)
## A Secret-Free Hypervisor: Rethinking Isolation in the Age of Speculative Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-secret-free-hypervisor-rethinking-isolation-in-the-age-of-speculative-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#a-secret-free-hypervisor-rethinking-isolation-in-the-age-of-speculative-vulnerabilities)**
### 作者
* Hongyan Xia, Microsoft
* David Zhang, Microsoft
* Wei Liu, Microsoft
* Istvan Haller, Microsoft
* Bruce Sherwin, Microsoft
* David Chisnall, Microsoft
### 摘要
> 近年来，投机性侧信道的流行大大增加了在虚拟化云环境中强制域隔离边界的难度。尽管存在一些缓解措施，但业界采取的方法既不是长期的解决方案，也不是可扩展的解决方案，因为我们针对每个漏洞都采取特定的缓解措施，这些措施会导致严重的性能损失。我们提出了一种不同的秘密隔离方法：保证超级监视器是无秘密的(SF)。无秘密设计将内存分割为秘密和非秘密，并重建超级监视器的隔离。它强制所有域对地址空间有一个最小且无秘密的视图。与最先进的技术相比，无秘密超级监视器不会识别要隐藏的秘密，而是识别可共享的非秘密，并只授予当前操作所需的访问权限，这是一种允许列表的方法。在现有硬件上，SF设计与未经缓解的基准相比，在生产负载下没有明显的性能损失，并且通过允许秘密不可见的投机执行而优于最先进的技术。我们在Xen（一种一类超级监视器）中实现了SF，以证明该设计适用于商用超级监视器。评估结果显示，其性能与基准相当，并且与Xen默认的缓解措施相比，在某些超级监视器路径上提高了最多37%。此外，我们还证明了无秘密是一种适用于各种系统的通用内核隔离基础设施，不限于一类超级监视器。我们在Hyper-V（一类），bhyve（二类）和FreeBSD（UNIX内核）中应用相同的模型来评估其适用性和有效性。在这些系统上的成功实现证明了无秘密的普遍性，并揭示了适应每种类型内核所需的具体适应和优化。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833726/](https://ieeexplore.ieee.org/document/9833726/)
## Smile: Secure Memory Introspection for Live Enclave.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#smile-secure-memory-introspection-for-live-enclave) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#smile-secure-memory-introspection-for-live-enclave)**
### 作者
* Lei Zhou, Department of Computer Science and Engineering, Research Institute of Trustworthy Autonomous Systems Southern University of Science and Technology
* Xuhua Ding, School of Computing and Information Systems, Singapore Management University
* Fengwei Zhang, Department of Computer Science and Engineering, Research Institute of Trustworthy Autonomous Systems Southern University of Science and Technology
### 摘要
> SGX隔离区阻止外部软件访问其内存。这一特性与对隔离区内存反射的合法需求存在冲突，例如，在受到逆向编程攻击的隔离区上进行运行时堆栈收集。我们提出了SMILE，用于隔离区所有者通过主机平台供应商安装的半可信代理插件来获取实时隔离区内容，并提供给系统管理中断处理程序。SMILE在不信任内核并且不依赖SGX认证设施的情况下对隔离区进行内省认证。SMILE在保持隔离区安全性方面做得很好，因为破坏SMILE不会损害隔离区安全性。它允许云服务器提供隔离区内省服务。我们已经实现了一个SMILE原型并运行了各种各样的实验来读取隔离区代码、堆、栈和SSA帧。内省一页的总成本小于300微秒。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833714/](https://ieeexplore.ieee.org/document/9833714/)
## Statistical Quantification of Differential Privacy: A Local Approach.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#statistical-quantification-of-differential-privacy-a-local-approach) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#statistical-quantification-of-differential-privacy-a-local-approach)**
### 作者
* Önder Askin, Ruhr-University Bochum
* Tim Kutta, Ruhr-University Bochum
* Holger Dette, Ruhr-University Bochum
### 摘要
> 在这项工作中，我们介绍了一种新的方法来统计量化黑盒设置中的差分隐私。我们提出了针对随机算法A的最佳隐私参数以及其他关键变量（如“数据中心隐私水平”）的估计器和置信区间。我们的估计器基于对隐私的局部表征，与相关文献相比，避免了“事件选择”过程-这是隐私验证的主要障碍。这使得我们的方法易于实施和用户友好。我们展示了估计器的快速收敛速度和置信区间的渐近有效性。对各种算法进行的实验研究证实了我们方法的功效。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833689/](https://ieeexplore.ieee.org/document/9833689/)
## Locally Differentially Private Sparse Vector Aggregation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#locally-differentially-private-sparse-vector-aggregation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#locally-differentially-private-sparse-vector-aggregation)**
### 作者
* Mingxun Zhou, Carnegie Mellon University
* Tianhao Wang, University of Virginia; CMU
* T-H. Hubert Chan, The University of Hong Kong
* Giulia Fanti, Carnegie Mellon University
* Elaine Shi, Carnegie Mellon University
### 摘要
> 向量均值估计是联邦分析中的一个核心原语。在向量均值估计中，每个用户$i\in[n]$持有一个实值向量$v_{i}\in[-1,1]^{d}$，而服务器希望估计所有n个向量的均值；我们还希望保护每个用户的隐私。本文考虑向量均值估计问题的k稀疏版本。也就是说，假设每个用户的向量在其d维向量中最多有k个非零坐标，并且$k \ll d$。在实践中，由于宇宙大小d可能非常大（例如，所有可能的URL空间），我们希望每个用户的通信精简，即与宇宙大小无关或（多项式）对数级别。在本文中，我们在本地差分隐私（LDP）下展示了k稀疏向量均值估计问题的匹配上下界。具体而言，我们构建了新的机制，既在用户级LDP或事件级LDP下实现了渐进最优的误差，又保持了简洁的通信方式。我们实施了算法并在合成和真实数据集上进行了评估。我们的实验表明，在典型参数选择下，与先前工作相比，我们通常可以实现一到两个数量级的误差降低，同时承担微不足道的通信成本。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833635/](https://ieeexplore.ieee.org/document/9833635/)
## Differentially Private Histograms in the Shuffle Model from Fake Users.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differentially-private-histograms-in-the-shuffle-model-from-fake-users) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differentially-private-histograms-in-the-shuffle-model-from-fake-users)**
### 作者
* Albert Cheu, Department of Computer Science, Georgetown University
* Maxim Zhilyaev, Meta Privacy
### 摘要
> 在差分隐私的洗牌模型中，近期有许多关于近似d-bin直方图的研究工作。虽然这些协议实现了很低的误差，但每个用户发送的消息数量（即消息复杂度）迄今为止与d或隐私参数成比例。消息复杂度是洗牌协议资源消耗的有用指标。我们提出了一个协议，当用户数量足够多时，其消息复杂度为2。该协议基本上将数据集中的每一行与一个虚假行配对，并对所有行进行简单的随机化。我们通过严格分析以及对实际数据的实验，证明了该协议引入的误差很小。我们还证明了腐败用户对我们协议的估计具有相对较低的影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833614/](https://ieeexplore.ieee.org/document/9833614/)
## Differential Privacy and Swapping: Examining De-Identification's Impact on Minority Representation and Privacy Preservation in the U.S. Census.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differential-privacy-and-swapping-examining-de-identifications-impact-on-minority-representation-and-privacy-preservation-in-the-u-s-census) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#differential-privacy-and-swapping-examining-de-identifications-impact-on-minority-representation-and-privacy-preservation-in-the-u-s-census)**
### 作者
* Miranda Christ, Department of Computer Science, Columbia University
* Sarah Radway, Department of Computer Science, Fletcher School of Law & Diplomacy, Tufts University
* Steven M. Bellovin, Department of Computer Science, Columbia University
### 摘要
> 关于美国人口普查中使用的去识别机制的准确性和隐私问题一直存在较大争议。我们从理论和实验两个方面分析了两种这样的机制，即交换和差分隐私，特别关注它们对民族少数群体的影响。我们首先证明，在人种分布与全局人种分布差异较大的亚群体中，交换人口统计数据的查询预期误差较大。我们还证明，随着亚群体规模增长，存在m个独特条目的概率将呈指数级缩小。这些性质表明，优先考虑独特条目的交换机制将对少数群体产生较差的准确性。然后，我们通过实证分析了交换和差分隐私对人口统计数据的准确性和隐私的影响。我们采用多种方法评估准确性，包括强调对少数群体影响的方法。我们通过计算在模拟链路攻击中重新确定的条目数量来评估隐私。最后，我们探讨了识别条目中少数群体的不成比例存在。我们的实证研究结果证实了我们的理论结果：对于少数群体的代表性，差分隐私的实用性与交换相当，同时提供更强的隐私保障。交换机制对少数群体施加了不成比例的隐私负担，而ε-差分隐私机制对所有子群体都是ε-差分隐私的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833668/](https://ieeexplore.ieee.org/document/9833668/)
## Are We There Yet? Timing and Floating-Point Attacks on Differential Privacy Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#are-we-there-yet-timing-and-floating-point-attacks-on-differential-privacy-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#are-we-there-yet-timing-and-floating-point-attacks-on-differential-privacy-systems)**
### 作者
* Jiankai Jin, School of Computing and Information Systems, The University of Melbourne
* Eleanor McMurtry, Department of Computer Science, ETH Zurich
* Benjamin I. P. Rubinstein, School of Computing and Information Systems, The University of Melbourne
* Olga Ohrimenko, School of Computing and Information Systems, The University of Melbourne
### 摘要
> 差分隐私是一种事实上的隐私框架，通过一些成熟的软件平台得到实际应用。差分隐私机制的实现必须小心谨慎，以确保端到端的安全保证。本文研究差分隐私系统中常用的噪声生成的两个实现缺陷。首先，我们研究高斯机制对浮点数表示攻击的敏感性。这种第一漏洞的前提类似于Mironov在2011年针对拉普拉斯机制进行的攻击。我们的实验表明，该攻击能够成功攻击差分隐私算法，包括使用差分隐私随机梯度下降训练的深度学习模型。在论文的第二部分，我们研究了拉普拉斯和高斯机制的离散对应，这些机制先前被提出来弥补实数浮点数表示的缺点。我们发现这样的实现不幸地受到另一种侧信道攻击的影响：一种新型的时间攻击。能够测量绘制（离散）拉普拉斯或高斯噪声所需的时间的观察者可以预测噪声幅度，然后用于恢复敏感属性。这种攻击使得实现这些机制的差分隐私系统的隐私保证无效。我们证明了几种常用的最先进的差分隐私实现都容易受到这些攻击的影响。对于对DP-SGD的浮点攻击，我们报告了高达92.56%的成功率；对于使用离散拉普拉斯保护的端到端时间攻击，我们报告了高达99.65%的成功率。最后，我们评估并提出了部分缓解措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833672/](https://ieeexplore.ieee.org/document/9833672/)
## SHADEWATCHER: Recommendation-guided Cyber Threat Analysis using System Audit Records.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shadewatcher-recommendation-guided-cyber-threat-analysis-using-system-audit-records) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shadewatcher-recommendation-guided-cyber-threat-analysis-using-system-audit-records)**
### 作者
* Jun Zengy, National University of Singapore
* Xiang Wang, University of Science and Technology of China
* Jiahao Liu, National University of Singapore
* Yinfang Chen, UIUC
* Zhenkai Liang, National University of Singapore
* Tat-Seng Chua, National University of Singapore
* Zheng Leong Chua, Independent Researcher
### 摘要
> 系统审计通过监控系统实体之间的交互，为我们提供了对网络威胁的低层次视角。针对先进的网络攻击，一种广泛采用的解决方案是对审计记录应用数据来源分析，以寻找异常行为或已知攻击规范。然而，现有方法存在以下几个局限性：1) 产生大量的误报，2) 依赖专家知识，3) 生成粗粒度的检测信号。在本文中，我们认识到网络安全威胁检测与信息检索中的推荐存在结构上的相似性。通过将系统实体交互的安全概念映射到用户-项目交互的推荐概念，我们通过预测系统实体对其交互实体的偏好来识别网络威胁。此外，受到推荐中基于项目辅助信息建模高阶连接性的最新进展的启发，我们将这一观点转化到网络威胁分析中，并定制了一个自动化的检测系统，名为SHADEWATCHER。SHADEWATCHER利用图神经网络利用审计记录中的高阶信息来提高检测效果。此外，我们对SHADEWATCHER进行了动态更新，以更好地适应误报问题。在对现实生活和模拟的网络攻击场景的评估中，SHADEWATCHER显示出在准确率和召回率方面识别威胁的优势。此外，SHADEWATCHER能够在几秒钟内确定近百万系统实体间的威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833669/](https://ieeexplore.ieee.org/document/9833669/)
## SIRAJ: A Unified Framework for Aggregation of Malicious Entity Detectors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#siraj-a-unified-framework-for-aggregation-of-malicious-entity-detectors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#siraj-a-unified-framework-for-aggregation-of-malicious-entity-detectors)**
### 作者
* Saravanan Thirumuruganathan, Qatar Computing Research Institute
* Mohamed Nabeel, Qatar Computing Research Institute
* Euijin Choo, Qatar Computing Research Institute
* Issa Khalil, Qatar Computing Research Institute
* Ting Yu, Qatar Computing Research Institute
### 摘要
> 高质量的互联网威胁情报（如恶意软件文件、恶意域名、钓鱼网址和恶意IP地址）对于安全从业人员和研究界都是重要的。鉴于攻击者的灵活性、互联网的规模和威胁的快速演变，单一信息源（如反恶意软件引擎或IP黑名单）无法获得准确、实时和全面的威胁分析。因此，我们需要整合多个信息源的分析结果。然而，有效地进行此类整合并非易事。常见做法是在一定阈值以上的多个信息源标记为恶意指标（如恶意软件、域名、网址等）。但这往往导致次优性能，因为它假设所有源的质量/专业知识相似、独立且时间稳定，而实践中往往不是这样。一种自然的替代方法是训练一个监督式机器学习模型。然而，这种方法需要大量手工标注的真实数据，这在收集上十分耗时，并需频繁更新，带来相当大的重复成本。在本文中，我们提出了一种名为SIRAJ的新颖框架，用于整合来自多个情报源（如反恶意软件引擎）的检测输出。SIRAJ基于预训练和微调范式。具体而言，我们使用基于自监督学习的方法来学习一个预训练嵌入模型，将多源输入转换为高维嵌入。通过三个精心设计的预设任务，学习到的嵌入赋予了它们关于扫描程序之间的依赖性和时间动态的知识。学习到的嵌入可以用于多样化的下游机器学习任务。SIRAJ的设计是通用的，可用于URL、恶意软件和IP等多个领域。此外，即使只有少量或没有标注数据可用，SIRAJ也能良好地工作。通过大量实验证明，我们学习到的表示可以产生与监督方法相媲美的结果，而只需100个标注样本即可。重要的是，结果表明，SIRAJ可以比基线算法更早准确地检测到威胁指标，这对于类似钓鱼网址这样存在时间短暂的指标来说至关重要。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833725/](https://ieeexplore.ieee.org/document/9833725/)
## DEEPCASE: Semi-Supervised Contextual Analysis of Security Events.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcase-semi-supervised-contextual-analysis-of-security-events) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcase-semi-supervised-contextual-analysis-of-security-events)**
### 作者
* Thijs van Ede, University of Twente; Santa Barbara, University of California
* Hojjat Aghakhani, Santa Barbara, University of California
* Noah Spahn, Santa Barbara, University of California
* Riccardo Bortolameotti, ReaQta
* Marco Cova, VMware, Inc.
* Andrea Continella, University of Twente
* Maarten van Steen, University of Twente
* Andreas Peter, University of Twente
* Christopher Kruegel, Santa Barbara, University of California
* Giovanni Vigna, Santa Barbara, University of California
### 摘要
> 安全监控系统可以通过寻找已知的特征或异常行为来检测IT基础设施中的潜在恶意活动。安全操作员负责调查这些事件，确定它们是否对组织构成威胁。在许多情况下，单个事件可能不足以确定某个活动是否确实恶意。因此，安全操作员经常需要关联多个事件，以确定它们是否构成真正的威胁。然而，需要关联的事件数量通常过多，导致安全操作员负担过重，迫使他们忽略一些事件，从而可能错过攻击。本研究探讨了如何自动关联安全事件，从而自动化部分安全操作员的工作负荷。我们设计和评估了DEEPCASE系统，该系统利用事件周围的上下文来确定哪些事件需要进一步检查。这种方法减少了需要检查的事件数量。此外，上下文为我们解释某些事件被归类为恶意提供了有价值的见解。我们表明，我们的方法可以自动过滤掉86.72%的事件，并将安全操作员的手工工作负荷减少了90.53%，同时在少于0.001%的情况下低估了潜在威胁的风险。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833671/](https://ieeexplore.ieee.org/document/9833671/)
## DEPCOMM: Graph Summarization on System Audit Logs for Attack Investigation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#depcomm-graph-summarization-on-system-audit-logs-for-attack-investigation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#depcomm-graph-summarization-on-system-audit-logs-for-attack-investigation)**
### 作者
* Zhiqiang Xu, Chinese Academy of Sciences, Institute of Information Engineering, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Pengcheng Fang, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Changlin Liu, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Xusheng Xiao, Department of Computer and Data Sciences, Case Western Reserve University, USA
* Yu Wen, Chinese Academy of Sciences, Institute of Information Engineering, China
* Dan Meng, Chinese Academy of Sciences, Institute of Information Engineering, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 因果关系分析通过系统审计日志生成一个依赖图，该方法已经成为攻击调查的重要解决方案。在依赖图中，结点表示系统实体(例如，进程和文件)，边表示实体之间的依赖关系(例如，一个进程对一个文件的写入)。尽管早期结果令人鼓舞，因果关系分析通常会产生一个庞大的图(> 100,000条边)，对于安全分析师来说，检查这样一个庞大的图进行攻击调查是一项艰巨的任务。为了应对攻击调查中的挑战，我们提出了DEPCOMM，这是一种图摘要方法，它通过将大图划分为以进程为中心的社区，并为每个社区生成摘要图来生成摘要图。具体而言，每个社区由一组共同完成某些系统活动(例如文件压缩)的亲密进程和这些进程访问的资源(例如文件)组成。在社区内部，DEPCOMM进一步识别由于较不重要和重复的系统活动而引起的冗余边，并对这些边进行压缩。最后，DEPCOMM使用表示社区间信息流的InfoPaths生成每个社区的摘要。这些InfoPaths更有可能捕获一组攻击相关的进程，这些进程共同努力实现某些恶意目标。我们对真实攻击($\sim 150$万个事件)的评估表明，DEPCOMM平均为依赖图生成18.4个社区，比原始图小$\sim 70 \times$。我们的压缩进一步将每个社区中的边缩减到平均32.1条。与9种最先进的社区检测算法相比，DEPCOMM在检测社区方面的F <inf>1</inf>分数平均比这些算法高出$2.29\times$。通过与自动技术HOLMES的合作，DEPCOMM能够以96.2%的召回率识别与攻击相关的社区。我们对真实攻击的案例研究也证明了DEPCOMM在促进攻击调查方面的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833632/](https://ieeexplore.ieee.org/document/9833632/)
## Measuring and Mitigating the Risk of IP Reuse on Public Clouds.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#measuring-and-mitigating-the-risk-of-ip-reuse-on-public-clouds) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#measuring-and-mitigating-the-risk-of-ip-reuse-on-public-clouds)**
### 作者
* Eric Pauley, Computer Science & Engineering, The Pennsylvania State University
* Ryan Sheatsley, Computer Science & Engineering, The Pennsylvania State University
* Blaine Hoak, Computer Science & Engineering, The Pennsylvania State University
* Quinn Burke, Computer Science & Engineering, The Pennsylvania State University
* Yohan Beugin, Computer Science & Engineering, The Pennsylvania State University
* Patrick McDaniel, Computer Science & Engineering, The Pennsylvania State University
### 摘要
> 公共云通过资源共享提供可扩展和成本高效的计算。然而，从传统的本地服务管理转向云端引入了新的挑战；未能正确预配、维护或取消弹性服务可能导致功能故障和易受攻击的脆弱性。在本文中，我们探讨了一类被称为云劫持的云攻击。在云劫持攻击中，对手在云中分配资源（例如IP地址），然后利用潜在的配置来利用之前的租户。为了衡量和分类云劫持，我们在Amazon Web Services us-east-1区域部署了一个自定义的互联网望远镜。使用这个设备，我们在2021年3月开始的101天内部署了超过300万个服务器，接收了150万个唯一的IP地址（约占可用地址池的56%）。我们确定了4类云服务，7类第三方服务以及作为可利用潜在配置的DNS。我们发现可利用的配置既常见又在许多情况下极其危险；我们收到了超过500万条云消息，其中许多包含敏感数据，例如金融交易、GPS位置和PII。在7类第三方服务中，我们确定了数十个可利用的软件系统，涵盖了数百个服务器（例如数据库、缓存、移动应用和Web服务）。最后，我们确定了5446个可利用的域，涵盖了231个顶级域名，其中包括10000个最受欢迎的域中的105个和1000个最受欢迎的域中的23个。通过租户披露，我们确定了几个根本原因，包括（a）缺乏组织控制，（b）差劲的服务卫生状况和（c）未遵循最佳实践。我们最后讨论了可能的缓解措施，并描述了亚马逊将根据这项研究采取的缓解措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833784/](https://ieeexplore.ieee.org/document/9833784/)
## SecFloat: Accurate Floating-Point meets Secure 2-Party Computation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#secfloat-accurate-floating-point-meets-secure-2-party-computation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#secfloat-accurate-floating-point-meets-secure-2-party-computation)**
### 作者
* Deevashwer Rathee, UC Berkeley
* Anwesh Bhattacharya, Microsoft Research
* Rahul Sharma, Microsoft Research
* Divya Gupta, Microsoft Research
* Nishanth Chandran, Microsoft Research
* Aseem Rastogi, Microsoft Research
### 摘要
> 我们构建了一个名为SecFloat的库，用于安全的两方计算（2PC）32位单精度浮点数操作和数学函数。现有的用于密码学工作的功能是不精确的，而标准库中使用的精确功能不符合密码学的友好性，即它们使用在CPU上廉价但在2PC中成本昂贵的操作。SecFloat通过其新颖的密码学友好的精确功能弥补了这个差距。与先前的密码库相比，SecFloat的精度提高了多达六个数量级，效率提高了多达两个数量级。此外，与精确的2PC基线相比，SecFloat的效率提高了三个数量级。SecFloat的高精度导致了安全推理的第一个准确实现。以前关于深度神经网络安全推理的所有工作都依赖于临时的浮点到定点转换器。我们评估了在隐私保护机器学习中使用的定点近似完全失败且需要浮点的模型。因此，强调了像SecFloat这样的库的需求。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833697/](https://ieeexplore.ieee.org/document/9833697/)
## Multi-Server Verifiable Computation of Low-Degree Polynomials.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#multi-server-verifiable-computation-of-low-degree-polynomials) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#multi-server-verifiable-computation-of-low-degree-polynomials)**
### 作者
* Liang Feng Zhang, ShanghaiTech University
* Huaxiong Wang, Nanyang Technological University
### 摘要
> 单服务器非交互可验证计算（NIVC）中输入隐私和效率之间的冲突使得考虑NIVC的多服务器模型变得有趣。虽然现有的多服务器NIVC方案提供了有意义的改进，但它们要么需要服务器进行通信，要么会导致客户端的数据不受保护。设计具有输入隐私和非通信服务器的多服务器NIVC一直是一个未解决的问题。在本文中，我们定义了一个多服务器可验证计算（MSVC）模型，其中客户端将其输入x秘密共享给非通信服务器，每个服务器在本地计算一个函数F以获得部分结果，最终客户端从所有部分结果中重构F（x）。我们构建了五个用于外包低次多项式的MSVC方案，从而回答了该多项式的未解决问题。我们的方案是t-私密的，即任何t个服务器不能获得关于x的任何信息。我们的方案是t-安全的，即任何t个服务器不能说服客户端输出错误结果。隐私和安全性可以是信息理论的或者是计算的。与现有方案相比，我们的服务器至少可以快两个数量级。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833792/](https://ieeexplore.ieee.org/document/9833792/)
## Why Crypto-detectors Fail: A Systematic Evaluation of Cryptographic Misuse Detection Techniques.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#why-crypto-detectors-fail-a-systematic-evaluation-of-cryptographic-misuse-detection-techniques) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#why-crypto-detectors-fail-a-systematic-evaluation-of-cryptographic-misuse-detection-techniques)**
### 作者
* Amit Seal Ami, William & Mary, Williamsburg, VA, USA
* Nathan Cooper, William & Mary, Williamsburg, VA, USA
* Kaushal Kafle, William & Mary, Williamsburg, VA, USA
* Kevin Moran, George Mason University, Fairfax, VA, USA
* Denys Poshyvanyk, William & Mary, Williamsburg, VA, USA
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### 摘要
> 密码学的正确使用对于确保现代软件系统的数据安全至关重要。因此，已经开发了几种学术和商业的静态分析工具，用于检测和减轻密码API的错误使用。虽然开发人员在软件开发周期中乐观地采用这些密码API错误使用检测器（或密码检测器），但这种势头必须伴随对它们在实际中发现密码API误用的有效性的严格理解。本文介绍了MASC框架，它使用突变测试实现了对密码检测器的系统和数据驱动的评估。我们通过对现有密码API误用问题空间进行全面的数据驱动分类，其中包含了105个误用案例，分为九个语义簇。我们开发了12个通用的基于使用的突变操作符和三个突变范围，可以构建出数千个可编译的误用案例的变体，以彻底评估密码检测器。使用MASC，我们评估了九个主要的密码检测器，并发现了19个独特的、未经记录的缺陷，严重影响了密码检测器发现实际中误用的能力。最后，我们讨论了影响密码检测器设计的多样化观点，并展望了未来构建以安全为重点的密码检测器的方向。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833582/](https://ieeexplore.ieee.org/document/9833582/)
## "They're not that hard to mitigate": What Cryptographic Library Developers Think About Timing Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#theyre-not-that-hard-to-mitigate-what-cryptographic-library-developers-think-about-timing-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#theyre-not-that-hard-to-mitigate-what-cryptographic-library-developers-think-about-timing-attacks)**
### 作者
* Jan Jancar, Masaryk University, Brno, Czech Republic
* Marcel Fourné, MPI-SP, Bochum, Germany
* Daniel De Almeida Braga, Rennes University, CNRS, IRISA, Rennes, France
* Mohamed Sabt, Rennes University, CNRS, IRISA, Rennes, France
* Peter Schwabe, MPI-SP, Bochum, Germany; Radboud University, Nijmegen, The Netherlands
* Gilles Barthe, MPI-SP, Bochum, Germany; IMDEA Software Institute, Madrid, Spain
* Pierre-Alain Fouque, Rennes University, CNRS, IRISA, Rennes, France
* Yasemin Acar, The George Washington University, Washington, D.C., USA; MPI-SP, Bochum, Germany
### 摘要
> 时间攻击是最具破坏性的边信道攻击之一，允许远程攻击者相对容易地检索机密材料，包括加密密钥。原则上，“这些攻击并不难以减轻基本的直觉，通过常量时间准则捕捉到，就是控制流和内存访问应该独立于机密。此外，有一系列工具可以自动检查对这种直觉的遵循。然而，尽管发现这些攻击已有25年之久，但这些攻击仍然困扰着流行的加密库，反映出学术研究与密码工程之间的危险差距。这种差距可能会潜在地损害向高可信度、正式验证的加密库的转变。然而，这种差距的原因仍未被调查。为了了解这种差距的原因，我们对27个知名开源加密库的44名开发人员进行了一项调查。调查的目标是分析开发人员是否以及如何确保他们的代码以恒定的时间执行。我们的主要发现是，开发人员了解时间攻击及其潜在的严重后果，但通常优先考虑其他问题，而不是目前需要巨大的时间和资源投入来使其代码对时间攻击具有抵抗力。根据这项调查，我们发现了现有常量时间分析工具的几个缺点，并提出了一些建议，可以使编写常量时间库变得更容易。我们的建议可以为未来的分析工具、安全意识编译器和加密库的发展提供参考，不仅适用于常量时间性，还适用于更广泛的边信道攻击背景，特别是针对微架构边信道攻击，这是一项较新的研究课题，与本次调查的重点不同。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833713/](https://ieeexplore.ieee.org/document/9833713/)
## Annotating, Tracking, and Protecting Cryptographic Secrets with CryptoMPK.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#annotating-tracking-and-protecting-cryptographic-secrets-with-cryptompk) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#annotating-tracking-and-protecting-cryptographic-secrets-with-cryptompk)**
### 作者
* Xuancheng Jin, Shanghai Jiao Tong University
* Xuangan Xiao, Shanghai Jiao Tong University
* Songlin Jia, Shanghai Jiao Tong University
* Wang Gao, Shanghai Jiao Tong University
* Dawu Gu, Shanghai Jiao Tong University
* Hang Zhang, UC Riverside
* Siqi Ma, The University of Queensland
* Zhiyun Qian, UC Riverside
* Juanru Li, Shanghai Jiao Tong University
### 摘要
> 保护机密数据免受内存泄露攻击对许多关键应用程序至关重要，特别是涉及加密操作的应用程序。然而，很难在程序中识别涉及的加密机密数据，也很难实施细粒度且高效的保护。现有的防御技术存在许多缺点，例如粗粒度的保护或过高的开销。因此，实际上很少有真实世界的加密应用程序应用这种保护方式。为了使加密机密数据的保护变得实用，我们设计并实现了CRYPTOMPK，一个源代码分析和转换系统，用于实现基于域的内存隔离。CRYPTOMPK首先通过上下文敏感、加密感知的信息流分析自动跟踪和标记源代码中的所有敏感内存缓冲区和操作。然后，它使用上下文依赖的特权切换插装将源代码分为加密域和非加密域。通过进一步利用英特尔内存保护密钥（MPK），CRYPTOMPK生成具有高效领域切换的可执行文件，保护它们免受诸如任意内存读取等典型内存泄露漏洞的攻击。特别是，通过使用CRYPTOMPK，之前被忽略的大量中间内存缓冲区得到了良好的保护，从而显著降低了安全风险。我们利用CRYPTOMPK保护了广泛使用的加密库（如OpenSSL、LibSodium）的常见应用程序，例如Apache和Nginx。CRYPTOMPK仅需几分钟即可分析这些复杂加密程序，并且对受保护的程序最多造成9.53%的性能开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833650/](https://ieeexplore.ieee.org/document/9833650/)
## SoK: Practical Foundations for Software Spectre Defenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-practical-foundations-for-software-spectre-defenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-practical-foundations-for-software-spectre-defenses)**
### 作者
* Sunjay Cauligi, UC San Diego MPI Security & Privacy
* Craig Disselkoen, UC San Diego
* Daniel Moghimi, UC San Diego
* Gilles Barthe, MPI Security & Privacy IMDEA Software Institute
* Deian Stefan, UC San Diego
### 摘要
> Spectre漏洞违反了我们对架构抽象的基本假设，尽管之前采用了最先进的对策措施，攻击者仍然能够窃取敏感数据。为了对抗Spectre，验证工具和基于编译器的缓解措施的开发人员被迫考虑微架构细节，如推测执行。为了以原则性的方式帮助开发人员进行这些攻击，研究界一直在寻求关于推测执行的形式基础，从而重新建立可证明的安全保障。本文系统化地总结了社区对Spectre软件验证和缓解的当前知识。我们研究了最先进的软件防御方式，包括有关的形式化模型和无关的形式化模型，并使用一个统一的框架来比较每种防御所提供的安全属性。我们探讨了形式化框架的表达能力、防御工具的复杂性和由此产生的安全保证之间的各种权衡。通过我们的分析，我们建议分析和缓解工具的开发人员进行实际选择，并确定了该领域的一些未解决问题，以指导未来关于基础软件防御的工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833707/](https://ieeexplore.ieee.org/document/9833707/)
## SpecHammer: Combining Spectre and Rowhammer for New Speculative Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spechammer-combining-spectre-and-rowhammer-for-new-speculative-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spechammer-combining-spectre-and-rowhammer-for-new-speculative-attacks)**
### 作者
* Youssef Tobah, University of Michigan
* Andrew Kwong, University of Michigan
* Ingab Kang, University of Michigan
* Daniel Genkin, Georgia Tech
* Kang G. Shin, University of Michigan
### 摘要
> 最近的Spectre攻击揭示了分支预测所带来的性能提升却损害了安全性。 Spectre Variant 1（v1）显示了攻击者可控变量传递到猜测执行的代码行中，可以将秘密信息泄露给攻击者。此后，已提出许多防御措施来防止Spectre攻击，每个防御措施都试图阻止所有或部分Spectre变种。特别是，声称使用污点追踪作为唯一防止所有Spectre v1形式的方法。然而，我们发现迄今为止提出的防御措施可以通过将Spectre与众所周知的Rowhammer漏洞相结合来绕过。通过使用Rowhammer来修改受害者值，我们放宽了攻击者与受害者需要共享变量的要求。因此，依赖于此要求的防御措施（如污点追踪）不再有效。此外，没有了这个关键要求，可能被用来发动Spectre攻击的摆布物数量显著增加，例如在Linux内核版本5.6中增加了约20,000个通过Rowhammer位翻转的摆布物，而原先只有约100个。攻击者可以利用这些摆布物窃取敏感信息，如堆栈 cookie 或 canaries，或使用新的三重摆布物读取内存中的任何地址。我们展示了在用户空间和内核空间中对示例受害者进行的两个版本的合并攻击，展示了攻击泄露敏感数据的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833802/](https://ieeexplore.ieee.org/document/9833802/)
## Spook.js: Attacking Chrome Strict Site Isolation via Speculative Execution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spook-js-attacking-chrome-strict-site-isolation-via-speculative-execution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spook-js-attacking-chrome-strict-site-isolation-via-speculative-execution)**
### 作者
* Ayush Agarwal, University of Michigan
* Sioli O’Connell, University of Adelaide
* Jason Kim, Georgia Institute of Technology
* Shaked Yehezkel, Tel Aviv University
* Daniel Genkin, Georgia Institute of Technology
* Eyal Ronen, Tel Aviv University
* Yuval Yarom, University of Adelaide
### 摘要
> 2018年Spectre攻击的发现震动了计算机行业，影响了处理器供应商、操作系统提供商、编程语言开发者等等。由于Web浏览器在执行不受信任的代码的同时有可能访问敏感信息，它们被认为是攻击的主要目标，并进行了重大的变革，以保护用户免受推测执行攻击。特别是，谷歌Chrome浏览器采用了严格的网站隔离策略，通过确保来自不同域的内容不共享在同一地址空间中，防止信息泄露。Spectre对Web浏览器所构成的风险程度与攻击演示的极度匮乏形成鲜明对比。在2021年3月之前，没有公开的概念验证证明了攻击者无法访问的信息泄露。此外，谷歌的leaky.page是目前唯一可以读取此类信息的概念验证，但严重受限于仅适用于地址空间的子集，并且不能进行跨网站访问。在本文中，我们证明了缺乏公开攻击并不意味着风险得到了缓解。我们提出了基于JavaScript的Spectre攻击Spook.js，可以从攻击页面的整个地址空间中读取。我们进一步研究了Chrome中严格的网站隔离的实现，并展示了导致Spook.js能够从其他网页中读取敏感信息的限制。我们还展示了Spectre对Chrome扩展的安全模型产生不利影响，演示了从LastPass密码管理器中泄露的用户名和密码。最后，我们展示了这个问题也影响其他基于Chromium的浏览器，如Microsoft Edge和Brave。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833711/](https://ieeexplore.ieee.org/document/9833711/)
## BLACKSMITH: Scalable Rowhammering in the Frequency Domain.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#blacksmith-scalable-rowhammering-in-the-frequency-domain) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#blacksmith-scalable-rowhammering-in-the-frequency-domain)**
### 作者
* Patrick Jattke, ETH Zurich
* Victor Van Der Veen, Qualcomm Technologies Inc.
* Pietro Frigo, VU Amsterdam
* Stijn Gunter, ETH Zurich
* Kaveh Razavi, ETH Zurich
### 摘要
> 我们提出了一种新型的非均匀行锤击访问模式，可以在生产环境中绕过未记录和专有的行刷新目标（TRR）技术。我们展示了这些模式如何触发我们测试池中所有40个DDR4 DRAM设备的位翻转。我们观察到，所有已发布的行锤击访问模式都会均匀地攻击“侵略者”行。虽然均匀访问可以最大限度地激活侵略者，但我们发现，在DRAM的TRR技术中，这种行为被用来捕捉侵略者行并在它们故障之前刷新相邻的“受害者”行。然而，并没有理由将行锤击攻击限制在均匀访问模式上：更小的技术节点使底层DRAM技术更易受攻击，并且现在触发位翻转所需的访问次数明显减少，因此研究不可预测的访问模式变得更有意义。然而，非均匀访问模式的搜索空间非常庞大。我们设计了实验来探索这个空间，并考虑到已部署的缓解措施，突出表现了非均匀访问模式中访问侵略者行的顺序、规律性和强度的重要性。我们展示了如何在频域中随机化参数以捕捉这些特征，并利用这一洞见设计了Blacksmith，一个可扩展的行锤击模糊测试器，可以生成不同相位、频率和振幅的访问模式来攻击侵略者行。Blacksmith发现了复杂的模式，触发了我们最近购买的40个DDR4 DIMM的所有位翻转，比现有技术高出$2.6$倍，并且平均生成了$87$倍的位翻转。我们还展示了这些模式对低功耗DDR4X设备的有效性。通过对Blacksmith的广泛分析，我们对当前已部署的TRR缓解措施的属性提供了新的见解。最后，我们得出结论：经过近十年的研究和部署的内存行锤击缓解措施，并没有使我们比发现行锤击问题时情况更好。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833772/](https://ieeexplore.ieee.org/document/9833772/)
## ProTRR: Principled yet Optimal In-DRAM Target Row Refresh.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#protrr-principled-yet-optimal-in-dram-target-row-refresh) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#protrr-principled-yet-optimal-in-dram-target-row-refresh)**
### 作者
* Michele Marazzi, Computer Security Group, ETH Zürich
* Patrick Jattke, Computer Security Group, ETH Zürich
* Flavien Solt, Computer Security Group, ETH Zürich
* Kaveh Razavi, Computer Security Group, ETH Zürich
### 摘要
> DRAM基板在我们转向更小的技术节点时越来越容易受到Rowhammer攻击的威胁。我们引入了ProTRR，这是第一个有形安全保证且开销较低的基于DRAM的目标行刷新缓解方案。与需要更改内存控制器的现有提议不同，ProTRR的基于DRAM的性质使其能够无缝集成。然而，这意味着ProTRR必须遵守DRAM协议的同步性质，这限制了任意给定时间内可以保护的DRAM行数。为了克服这个挑战，ProTRR会主动刷新未来最有可能出现位翻转的每一行。虽然这种策略能够捕捉到受到最多攻击的行，但仍然可能有其他行逃脱监测。我们利用这一观察结果构建了Feinting，这是一种新的Rowhammer攻击，在此设置中我们证明了其达到了最优。然后，我们对ProTRR进行了配置，使其对抗Feinting攻击。为了实现这一点，ProTRR需要跟踪对每行的访问情况，然而在硬件上实现这一点是代价高昂的。相反，ProTRR使用一种新的频繁项计数方案，利用Feinting提供了一个可以被证明是最优的、灵活的DRAM容忍性、计数器数量和额外刷新数量之间的折中方案。我们使用ProTRR的ASIC实现和周期精确模拟进行了广泛评估，结果显示ProTRR可以为当前和未来的DRAM技术提供有原则的保护，并且对性能、功耗和面积影响可以忽略不计。ProTRR完全兼容DDR4和DDR5中的新刷新管理（RFM）扩展。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833664/](https://ieeexplore.ieee.org/document/9833664/)
## Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions)**
### 作者
* Hammond Pearce, Department of ECE, New York University, Brooklyn, NY, USA
* Baleegh Ahmad, Department of ECE, New York University, Brooklyn, NY, USA
* Benjamin Tan, Department of ESE, University of Calgary, Calgary, CA, Alberta
* Brendan Dolan-Gavitt, Department of CSE, New York University, Brooklyn, NY, USA
* Ramesh Karri, Department of ECE, New York University, Brooklyn, NY, USA
### 摘要
> 对于帮助人类设计计算系统的基于人工智能的系统，包括自动生成计算机代码的工具，日益引起关注。其中最引人注目的是首个自称为“AI编程伙伴”的GitHub Copilot，它是在开源GitHub代码上训练的语言模型。然而，代码通常存在漏洞，考虑到Copilot已处理大量未经审查的代码，可以肯定语言模型已经从具有可利用性的有漏洞的代码中学习到东西。这引起了对Copilot代码贡献安全性的担忧。在本研究中，我们系统地调查了导致GitHub Copilot推荐不安全代码的普遍性和可能导致此类情况的条件。为了进行这项分析，我们引导Copilot在与高风险网络安全弱点相关的场景中生成代码，例如MITRE的“Top 25”常见弱点枚举（CWE）列表中的弱点。我们研究了Copilot在三个不同的代码生成方面的表现，分别是对弱点多样性的表现，提示的多样性以及领域的多样性。总共，我们为Copilot提供了89个不同的场景来完成，生成了1,689个程序。其中，我们发现大约40％存在漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833571/](https://ieeexplore.ieee.org/document/9833571/)
## Spinning Language Models: Risks of Propaganda-As-A-Service and Countermeasures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spinning-language-models-risks-of-propaganda-as-a-service-and-countermeasures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spinning-language-models-risks-of-propaganda-as-a-service-and-countermeasures)**
### 作者
* Eugene Bagdasaryan, Cornell Tech
* Vitaly Shmatikov, Cornell Tech
### 摘要
> 我们调查了一种对神经序列到序列(seq2seq)模型的新威胁：训练时攻击使模型"旋转"其输出，以支持攻击者选择的情感或观点，但仅当输入包含攻击者选择的触发词时才起作用。例如，一个“旋转”摘要模型会对任何提到某个个人或组织名称的文本输出积极的摘要。模型旋转在模型中引入了一个“元后门”。传统的后门会导致模型在触发词的输入上产生错误的输出，而旋转模型的输出保留上下文并保持标准准确度度量，同时满足攻击者选择的元任务。模型旋转实现了作为服务的宣传，其中宣传被定义为带有偏见的言论。攻击者可以创建定制的语言模型，为选择的触发词生成所需的旋转，然后部署这些模型用于生成虚假信息（一个平台攻击），或者将它们注入到机器学习训练流程中（一个供应链攻击），将恶意功能传递给受害者训练的下游模型。为了证明模型旋转的可行性，我们开发了一种新的后门技术。它将一个对抗性的元任务（例如情感分析）堆叠到seq2seq模型上，将期望的元任务输出（例如积极情感）反向传播到我们称之为“伪单词”的词嵌入空间的各个点上，并使用伪单词来改变seq2seq模型的整个输出分布。我们评估了这种攻击在语言生成、摘要和翻译模型上的效果，使用不同的触发器和元任务，如情感、毒性和蕴涵。旋转模型在很大程度上保持了准确性指标（ROUGE和BLEU），同时改变了输出以满足攻击者的元任务。同时，我们还展示了在供应链攻击的情况下，旋转功能会传递到下游模型。最后，我们提出了一种基于黑盒的、与元任务无关的防御方法，该方法可以检测到对任何候选触发词选择性应用旋转的模型。我们使用“spinned”而不是“spun”，以匹配它在公共关系中的使用方式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833572/](https://ieeexplore.ieee.org/document/9833572/)
## SoK: How Robust is Image Classification Deep Neural Network Watermarking?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-how-robust-is-image-classification-deep-neural-network-watermarking) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-how-robust-is-image-classification-deep-neural-network-watermarking)**
### 作者
* Nils Lukas, University of Waterloo, Waterloo, Canada
* Edward Jiang, University of Waterloo, Waterloo, Canada
* Xinda Li, University of Waterloo, Waterloo, Canada
* Florian Kerschbaum, University of Waterloo, Waterloo, Canada
### 摘要
> 深度神经网络（DNN）水印技术是一种用于验证DNN模型来源的方法。水印技术应该能够抵御水印去除攻击，这些攻击会生成一个回避来源验证的替代模型。目前已经提出了许多声称具有鲁棒性的水印技术，但它们的鲁棒性只是在相对较小的一组攻击下得到了验证。对于这些声称具有鲁棒性的技术，还没有以系统化、实证的方式来评估其对一组常见、综合的去除攻击的鲁棒性。对水印技术的鲁棒性存在的不确定性给其在实践中的部署带来了困难。本文评估了最近提出的声称具有鲁棒性的水印技术是否能够抵御一组较大规模的去除攻击。我们调查了文献中的方法，其中包括（i）已知的去除攻击，（ii）生成替代模型但尚未被评估为去除攻击的方法，以及（iii）新颖的去除攻击。权重转移和平滑重新训练是本文中针对DNN水印技术进行调查的新颖的去除攻击。我们提出了水印技术和去除攻击的分类法。我们的实证评估包括对图像分类数据集CIFAR-10和ImageNet上每种攻击和水印技术的参数集进行消融研究。令人惊讶的是，我们的研究表明，没有一种调查的水印技术在实践中是鲁棒的。我们发现这些技术无法抵御自适应攻击和已知的生成替代模型的方法，即使这些方法尚未被评估为去除攻击。这表明目前对鲁棒性的评估存在本质缺陷。我们的评估还包括对每种攻击运行时间的讨论，以支撑其实际的相关性。虽然没有一种技术能够对抗所有攻击，但也没有一种攻击能够去除所有的水印。我们证明了攻击可以组合使用，并找到了去除所有水印的组合攻击。我们还展示了水印技术需要根据更广泛的去除攻击和更逼真的对手模型进行评估。我们的源代码和完整的评估结果数据集已公开发布，可以对我们的结论进行独立验证。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833693/](https://ieeexplore.ieee.org/document/9833693/)
## Transcending TRANSCEND: Revisiting Malware Classification in the Presence of Concept Drift.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transcending-transcend-revisiting-malware-classification-in-the-presence-of-concept-drift) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transcending-transcend-revisiting-malware-classification-in-the-presence-of-concept-drift)**
### 作者
* Federico Barbero, King’s College London; Royal Holloway, University of London; University of Cambridge
* Feargus Pendlebury, King’s College London; Royal Holloway, University of London; The Alan Turing Institute; University of Cambridge
* Fabio Pierazzi, King’s College London
* Lorenzo Cavallaro, University College London
### 摘要
> 机器学习用于恶意软件分类的研究结果令人鼓舞，但实际部署在恶意软件作者适应检测技术的同时也遭受性能下降的问题。这种现象被称为概念漂移，即新的恶意软件样本逐渐演变，与原始训练样本越来越不相似。一种应对概念漂移的有希望的方法是采用拒绝分类，即将可能被错误分类的样本隔离，直到经过专家分析。
> 
> 我们提出TRANSCENDENT，一种基于最近提出的Transcend策略的拒绝框架，该策略基于一致性预测理论。具体而言，我们对Transcend进行了形式化处理，使我们能够对其底层统计引擎进行改进，并更好地理解其有效性的理论原因。在此过程中，我们开发了两个额外的一致性评估器，其性能与原始评估器相匹配甚至超过，并显著减少了计算开销。我们在跨越5年的恶意软件数据集上评估了TRANSCENDENT，在去除了原始评估中的实验偏差的情况下。TRANSCENDENT在不同的恶意软件领域和分类器中具有较state-of-the-art方法更优秀的性能和泛化能力。
> 
> 为了进一步帮助从业者，我们展示了TRANSCENDENT部署的最佳运行设置，并展示了它如何应用于许多流行的学习算法。这些洞察力支持旧的和新的实证研究结果，使Transcend成为一个可靠和实用的解决方案。为此，我们作为开源发布TRANSCENDENT，以促进安全社区对拒绝策略的采用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833659/](https://ieeexplore.ieee.org/document/9833659/)
## Copy, Right? A Testing Framework for Copyright Protection of Deep Learning Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#copy-right-a-testing-framework-for-copyright-protection-of-deep-learning-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#copy-right-a-testing-framework-for-copyright-protection-of-deep-learning-models)**
### 作者
* Jialuo Chen, Zhejiang University
* Jingyi Wang, Zhejiang University
* Tinglan Peng, Zhejiang University
* Youcheng Sun, University of Manchester
* Peng Cheng, Zhejiang University
* Shouling Ji, Zhejiang University
* Xingjun Ma, Fudan University
* Bo Li, UIUC
* Dawn Song, UC Berkeley
### 摘要
> 深度学习模型，特别是大规模和高性能的模型，训练成本非常高，需要大量的数据和计算资源。因此，深度学习模型已成为现代人工智能中最有价值的资产之一。未经授权的深度学习模型的复制或复制行为可能导致侵犯版权，并给模型所有者造成巨大的经济损失，因此需要有效的版权保护技术。现有的保护技术主要基于数字水印，将所有者指定的水印嵌入模型中。虽然能够提供确切的所有权验证，但这些技术存在以下问题：1）侵入性，即需要干预训练过程，可能影响模型的实用性或引入新的安全风险；2）容易受到自适应攻击的影响，这些攻击试图移除/替换水印或对检索水印进行对抗性阻挡；3）对新型模型提取攻击不具备鲁棒性。最新的针对深度学习模型的指纹技术在面对多样化和不断增长的攻击场景时也存在不足之处。本文中，我们提出了一种用于深度学习版权保护的新型测试框架：DEEPJUDGE。DEEPJUDGE定量地测试了两个深度学习模型之间的相似性：一个受害模型和一个嫌疑模型。它利用多样化的测试指标和高效的测试用例生成算法，生成一系列支持证据，帮助确定嫌疑模型是否是受害模型的副本。DEEPJUDGE的优势包括：1）非侵入性，它直接在模型上工作，不干预训练过程；2）高效性，只需要一小组种子测试用例和对两个模型的快速扫描；3）灵活性，即可以轻松地纳入新的测试指标或测试用例生成方法，以获得更加确信和鲁棒的判断；4）对模型提取攻击和自适应攻击具有相当的鲁棒性。我们通过在图像分类和语音识别数据集上使用各种模型架构进行大量实验，验证了DEEPJUDGE在三种典型的版权侵犯场景下的有效性，包括模型微调、修剪和提取。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833747/](https://ieeexplore.ieee.org/document/9833747/)
## Phishing in Organizations: Findings from a Large-Scale and Long-Term Study.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#phishing-in-organizations-findings-from-a-large-scale-and-long-term-study) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#phishing-in-organizations-findings-from-a-large-scale-and-long-term-study)**
### 作者
* Daniele Lain, Department of Computer Science, ETH Zurich, Switzerland
* Kari Kostiainen, Department of Computer Science, ETH Zurich, Switzerland
* Srdjan Čapkun, Department of Computer Science, ETH Zurich, Switzerland
### 摘要
> 在这篇论文中，我们介绍了一项与合作伙伴公司合作进行的大规模和长期钓鱼实验的研究结果。我们的实验持续了15个月，期间公司的14000多名研究参与者（员工）在正常工作环境中接收到不同类型的模拟钓鱼电子邮件。我们还在公司的电子邮件客户端上部署了一个报告按钮，参与者可以利用该按钮报告他们收到的可疑邮件。我们测量了钓鱼邮件的点击率、提交凭据等危险行为以及报告的可疑邮件。我们的实验结果有三个方面的贡献。首先，我们的一些研究结果支持之前的文献，具有更好的生态效度。其中一个例子是警告电子邮件的有效性。其次，我们的一些结果与之前的文献和常见行业实践相矛盾。令人惊讶的是，我们发现在模拟钓鱼训练过程中嵌入培训，如今在业界常见的做法，并不能使员工对钓鱼攻击更加抵御，相反，它可能产生意想不到的负面效应，使员工更容易受到钓鱼攻击。第三，我们报告了一些新的发现。特别是，我们首次证明在大型组织中使用员工作为集体钓鱼检测机制是可行的。我们的结果表明，这种众包方法可以快速检测到新的钓鱼活动，对组织的操作负担可接受，并且员工在长时间内保持活跃。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833766/](https://ieeexplore.ieee.org/document/9833766/)
## 27 Years and 81 Million Opportunities Later: Investigating the Use of Email Encryption for an Entire University.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#27-years-and-81-million-opportunities-later-investigating-the-use-of-email-encryption-for-an-entire-university) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#27-years-and-81-million-opportunities-later-investigating-the-use-of-email-encryption-for-an-entire-university)**
### 作者
* Christian Stransky, Leibniz University, Hannover
* Oliver Wiese, Freie Universität, Berlin
* Volker Roth, Freie Universität, Berlin
* Yasemin Acar, Max Planck Institute for Security and Privacy
* Sascha Fahl, Leibniz University, Hannover; CISPA Helmholtz-Center for Information Security
### 摘要
> 电子邮件是主要的通信工具之一，并在过去几十年中得到广泛的应用。然而，默认情况下，电子邮件以明文形式发送，攻击者可以轻易地访问。用户可以使用S/MIME或PGP等工具对电子邮件进行端到端加密以保护它们。尽管PGP在1991年已经引入，但普遍认为电子邮件加密仍然是一种小众工具，迄今为止并未得到广泛应用。以往的用户研究发现，电子邮件加密存在许多可用性问题，例如密钥管理和用户界面挑战，这可能导致电子邮件加密的成功受限。然而，迄今为止，关于基于长期领域数据的真实情况在文献中尚缺失。为了填补这一空白，我们使用大学37,089名用户27年的数据来衡量电子邮件加密的使用情况。在关注伦理和数据隐私问题的同时，我们能够分析81,612,595封电子邮件中S/MIME和PGP的使用情况。我们发现，仅有5.46%的用户曾经使用过S/MIME或PGP。其中只有0.06%的电子邮件被加密，2.8%被签名。用户更倾向于使用S/MIME而不是PGP，比例相差六倍。我们发现使用多个电子邮件客户端对签名和加密电子邮件产生了负面影响，并且仅有3.36%的S/MIME用户之间先前进行过证书交换的电子邮件平均加密。我们的结果表明，电子邮件加密的采用率实际上非常低，密钥管理问题对于之前设置了S/MIME或PGP的用户甚至也产生了负面影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833755/](https://ieeexplore.ieee.org/document/9833755/)
## Investigating Influencer VPN Ads on YouTube.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#investigating-influencer-vpn-ads-on-youtube) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#investigating-influencer-vpn-ads-on-youtube)**
### 作者
* Omer Akgul, University of Maryland
* Richard Roberts, University of Maryland
* Moses Namara, Clemson University
* Dave Levin, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 一个广泛但常常被忽视的安全信息来源是YouTube上的推广者营销广告，其中包括VPN（虚拟专用网络）等安全和隐私产品。本文研究了这些广告的普及程度、在YouTube上的分布位置以及它们所传递的信息类型。从YouTube的随机样本中选取1.4%，我们确定了243个包含VPN广告的视频，总观看次数达到6300万次。通过定性分析，我们发现这些广告常常讨论广泛的安全保证和具体的技术特点，频繁关注互联网威胁，并有时强调访问其他无法获取内容的能力。不同的VPN公司倾向于在不同类别的频道上进行广告宣传，并强调不同的信息。我们发现了一些可能具有误导性的宣传，包括夸大和夸大其词可能对观众的互联网安全心理模型产生负面影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833633/](https://ieeexplore.ieee.org/document/9833633/)
## How Does Usable Security (Not) End Up in Software Products? Results From a Qualitative Interview Study.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-does-usable-security-not-end-up-in-software-products-results-from-a-qualitative-interview-study) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-does-usable-security-not-end-up-in-software-products-results-from-a-qualitative-interview-study)**
### 作者
* Marco Gutfleisch, Ruhr University Bochum, Germany
* Jan H. Klemmer, Leibniz University Hannover, Germany
* Niklas Busch, Leibniz University Hannover, Germany
* Yasemin Acar, Max Planck Institute for Security and Privacy, Germany
* M. Angela Sasse, Ruhr University Bochum, Germany
* Sascha Fahl, Leibniz University Hannover, Germany; CISPA Helmholtz Center for Information Security, Germany
### 摘要
> 为了使软件在实践中更安全，用户需要愿意并能够适当地使用安全功能。这些功能通常由软件专业人士在软件开发过程中实施（SDP），他们可能无法考虑这些机制的可用性。虽然研究在支持开发人员创建安全软件产品方面取得了进展，但在安全功能的可用性方面几乎没有得到关注。在一项对25名软件专业人员（软件开发人员、设计师、架构师）进行的半结构化访谈研究中，我们探讨了他们和其他决策者在公司的软件开发过程中如何遇到和处理安全性和可用性问题。我们基于37小时的访谈记录进行了定性分析和对23个不同的开发背景进行了详细调查。除了个人意识和直接影响实施阶段的因素外，我们还确定了上下文因素的高度影响，例如利益相关者压力、专业知识的存在和协作文化，以及SDP在软件产品的可用性方面的具体实施。我们通过强调研究和改进有助于可用安全性的上下文因素以及讨论潜在的现状改进来总结我们的工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833756/](https://ieeexplore.ieee.org/document/9833756/)
## Private Approximate Nearest Neighbor Search with Sublinear Communication.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#private-approximate-nearest-neighbor-search-with-sublinear-communication) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#private-approximate-nearest-neighbor-search-with-sublinear-communication)**
### 作者
* Sacha Servan-Schreiber, MIT CSAIL
* Simon Langowski, MIT CSAIL
* Srinivas Devadas, MIT CSAIL
### 摘要
> 最近邻搜索是一种广泛应用的基础构件。用于最近邻搜索的隐私保护协议涉及一组客户端向远程数据库发送查询。每个客户端从数据库中检索到与其查询最接近的邻居(s)，同时不泄露任何关于查询的信息。为了确保数据库的隐私，客户端必须在行为恶意并偏离协议的情况下，尽可能少地了解查询答案之外的信息。现有的私密最近邻搜索协议需要使用密集的加密工具，导致计算和带宽开销较高。在本文中，我们提出了第一个轻量级的私密最近邻搜索协议。我们的协议使用两个不合谋的服务器进行实例化，每个服务器都持有数据库的副本。我们的设计支持任意数量的客户端同时通过这两个服务器查询数据库。每个查询由客户端和两个服务器之间的一次通信组成。服务器之间不需要通信来回答查询。如果至少有一个服务器不合谋，我们确保：(1)不泄露关于客户端查询的任何信息，(2)客户端和服务器之间的总通信量在数据库大小的次线性，(3)即使客户端是恶意的，每个查询答案只泄露了数据库的一小部分和有界的信息。我们实现了我们的协议并报告了其在实际数据上的性能。我们的构建要求在10M特征向量的大型数据库上进行10到20秒的查询延迟。每个查询的客户端开销保持在每个查询的处理时间小于10毫秒和通信量小于10MB的范围内。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833702/](https://ieeexplore.ieee.org/document/9833702/)
## SNARKBlock: Federated Anonymous Blocklisting from Hidden Common Input Aggregate Proofs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#snarkblock-federated-anonymous-blocklisting-from-hidden-common-input-aggregate-proofs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#snarkblock-federated-anonymous-blocklisting-from-hidden-common-input-aggregate-proofs)**
### 作者
* Michael Rosenberg, Department of Computer Science, University of Maryland
* Mary Maller, Ethereum Foundation
* Ian Miers, Department of Computer Science, University of Maryland
### 摘要
> 零知识封锁名单允许用户在不同平台之间进行屏蔽，但与直觉相反，不会将用户身份在平台内部或跨平台进行关联，也不会与被封锁的事实进行关联。不幸的是，现有方法（Tsang et al. '10）要求服务器在验证非成员证明时对封锁名单的大小进行线性工作。我们设计并实施了SNARKBLOCK，这是一种新的具有服务器端验证的零知识封锁名单协议，其验证过程在封锁名单的大小上是对数级的。SNARKBLOCK也是第一种支持特定应用和联邦封锁名单的方法：网站可以从其他封锁名单中混合和匹配自己的封锁名单，并动态选择他们信任的身份提供者。
> 
> 我们的核心技术提升是HICIAP零知识证明系统，它解决了隐私保护协议中的一个常见问题：在重复但不相关的交互中使用零知识证明。通过重新随机化Groth16证明，可以在不必为每个交互重新计算证明的情况下实现不可链接性。但是，这种技术不适用于每个交互包含对共同隐藏输入（例如，用户身份）的多个Groth16证明的应用程序。在这种情况下，已知的最佳方法是对隐藏输入进行承诺，并将其输入到每个证明中，但这会创建一个持久标识符，强迫重新计算。HICIAP通过将n个Groth16证明聚合成一个大小为$O(\log n)$并且时间复杂度为$O(\log n)$的证明来解决这个问题，同时还显示了输入证明共享一个隐藏输入。由于HICIAP具有零知识性质，即使底层的Groth16证明从不被重新计算，重复展示相同的聚合或更新的聚合也是不可链接的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833656/](https://ieeexplore.ieee.org/document/9833656/)
## How to Attack and Generate Honeywords.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-to-attack-and-generate-honeywords) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-to-attack-and-generate-honeywords)**
### 作者
* Ding Wang, Nankai University
* Yunkai Zou, Nankai University
* Qiying Dong, Nankai University
* Yuanming Song, Peking University
* Xinyi Huang, Fujian Normal University
### 摘要
> 蜜语密码是与每个用户账户关联的诱饵密码，以及时检测密码泄漏。关键问题在于如何生成难以与真实密码区分的蜜语密码。这种安全机制最初由Juels和Rivest在CCS'13引入，并被数百家媒体报道，并在数十个研究领域中得到采用。现有研究主要以临时方法处理蜜语密码，并且很难开发一种安全的蜜语密码生成方法并对其进行评估（攻击）。在这项工作中，我们以原则性方法解决了这个问题。我们首先提出了四种理论模型来描述攻击者$\mathcal{A}$最佳区分策略，每个模型基于$\mathcal{A}$可获得的不同信息组合（例如，公共数据集，受害者的个人信息和注册顺序）。这些理论指导我们设计使用真实世界密码数据集进行有效实验以评估给定蜜语密码生成方法的好坏（平坦性）。借助这四个最佳攻击理论，我们针对每种类型的攻击者开发了相应的蜜语密码生成方法，使用各种代表性的概率性密码猜测模型。通过一系列探索性研究，我们展示了这些密码模型的使用并不简单，而是需要有创造性和重大努力。经验实验证明，我们的方法在先前的研究中表现显著。此外，我们成功解决了在实际部署蜜语密码方法中出现的几个以前未被探索的挑战。我们相信这项工作将蜜语密码研究推向统计严谨性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833598/](https://ieeexplore.ieee.org/document/9833598/)
## WIGHT: Wired Ghost Touch Attack on Capacitive Touchscreens.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wight-wired-ghost-touch-attack-on-capacitive-touchscreens) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wight-wired-ghost-touch-attack-on-capacitive-touchscreens)**
### 作者
* Yan Jiang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kai Wang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Richard Mitev, System Security Lab, Technical University of Darmstadt
* Ahmad-Reza Sadeghi, System Security Lab, Technical University of Darmstadt
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### 摘要
> 电容触摸屏的安全性至关重要，因为它们已成为智能设备上的主要人机界面。据我们所知，本文介绍了WIGHT，第一个通过充电线缆在电容触摸屏上创建幽灵触控的有线攻击，并且可以通过不希望的后果来操控受害设备，例如允许恶意蓝牙连接，接受带有病毒的文件等。我们的研究呼吁对触摸屏的一种新威胁向量予以关注，这种威胁只需要连接到恶意充电端口，这可以是公共充电站，并且在各种电源适配器甚至USB数据阻塞器上都有效。尽管智能手机采用了丰富的降噪和电压管理技术，但我们成功地注入了精心设计的信号，可以在选定范围内引发幽灵触控。底层原理是通过电源线注入共模噪声，避免被有效滤波，但影响触摸测量机制，并将恶意噪声与屏幕测量扫描周期同步，以将幽灵触控放置在目标位置。我们实现了三种类型的攻击：注入攻击可以在用户触摸屏幕之前创建幽灵触控，改变检测到的合法触摸位置的篡改攻击，以及阻止设备识别合法触摸的拒绝服务攻击。我们对6部智能手机、1台平板电脑、2个独立触摸屏面板、6个电源适配器和13根充电线进行评估，证明了所有三种类型攻击的可行性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833740/](https://ieeexplore.ieee.org/document/9833740/)
## Time-Print: Authenticating USB Flash Drives with Novel Timing Fingerprints.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#time-print-authenticating-usb-flash-drives-with-novel-timing-fingerprints) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#time-print-authenticating-usb-flash-drives-with-novel-timing-fingerprints)**
### 作者
* Patrick Cronin, University of Delaware
* Xing Gao, University of Delaware
* Haining Wang, Virginia Tech
* Chase Cotton, University of Delaware
### 摘要
> 通用串行总线（USB）端口是计算机系统中一种无处不在的特性，它提供了一种廉价高效的方式，在主机和外围设备之间提供电力和数据连接。尽管随着云计算和离线计算的兴起，USB已经在设备之间的数据传输中发挥了重要作用，但最近的研究表明，USB的安全性远不如过去人们所认为的那样，各种攻击显示，在USB大容量存储设备上修改固件可以危害主机系统。虽然已经提出了许多防御措施，但它们需要用户交互、先进的硬件支持(与传统设备不兼容)，或者利用被攻击者篡改的设备标识符。在本文中，我们提出了一种新颖的基于时间的指纹识别方法Time-Print，用于识别USB大容量存储设备。我们通过在驱动器的不同位置进行一系列的读取操作来计时，因为时间变化足够独特，可以识别出每个USB设备。Time-Print开销低，完全基于软件实现，不需要任何额外或专门的硬件。为了验证Time-Print的有效性，我们检查了40多个USB闪存驱动器，并在多种身份验证场景中进行了实验证明。实验结果显示，Time-Print能够（1）以超过99.5%的准确率识别已知/未知的品牌/型号USB设备，（2）以95%的准确率识别见过/没见过的同品牌/型号设备，以及（3）以平均准确率达到98.7%的水平对USB设备进行分类。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833595/](https://ieeexplore.ieee.org/document/9833595/)
## Device Fingerprinting with Peripheral Timestamps.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#device-fingerprinting-with-peripheral-timestamps) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#device-fingerprinting-with-peripheral-timestamps)**
### 作者
* John V. Monaco, Naval Postgraduate School, Monterey, CA
### 摘要
> 感知和处理外设输入是个人计算机的一种普遍功能。在桌面和移动设备上，文本输入主要通过物理和虚拟键盘、鼠标移动和触摸屏手势来与浏览器上的网站进行交互。外设输入事件必须通过硬件和软件处理流程才能到达网络浏览器。这个处理流程是设备相关的，通常包含低频轮询组件，例如USB轮询和进程调度，这些组件会影响网页中的事件时序。我们展示了外设输入事件的时序形成了一个相对唯一的设备指纹。在网络浏览器中，注册键盘、鼠标和触摸事件的回调函数不需要特殊权限，而且这种技术在桌面和移动设备上都可以使用。我们提出了一个双时钟模型，其中快参考时钟和慢主体时钟通过一个单一的时间源进行比较。利用这个模型，测量主体时钟的瞬时相位并用于构建相位图像。该相位图像然后通过FPNET嵌入到低维特征空间中，FPNET是一种卷积神经网络，用于从瞬时相位中提取设备指纹。我们使用一个包含从野外观察的228k个设备中收集的300M个键盘事件的数据集来评估性能。大约两分钟的输入后，形成了一个设备指纹，使得在100k个设备群体中可以实现87.35%的验证准确率。结合测量用户行为和设备行为的特征，验证准确率提高到97.36%。所描述的方法具有作为第二身份验证因素的潜力，但也可以用于追踪互联网用户。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833612/](https://ieeexplore.ieee.org/document/9833612/)
## PCR-Auth: Solving Authentication Puzzle Challenge with Encoded Palm Contact Response.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pcr-auth-solving-authentication-puzzle-challenge-with-encoded-palm-contact-response) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pcr-auth-solving-authentication-puzzle-challenge-with-encoded-palm-contact-response)**
### 作者
* Long Huang, Department of Computer Science, Louisiana State University, Baton Rouge, LA, USA
* Chen Wang, Department of Computer Science, Louisiana State University, Baton Rouge, LA, USA
### 摘要
> 生物特征已广泛应用于用户身份认证作为个人可识别数据。然而，现有的生物特征认证容易受到生物特征欺骗攻击的影响。一个原因是它们容易被观察到并容易受到物理伪造的攻击，例如人体表面模式的指纹和面部特征。更重要的问题是现有的认证方法完全建立在生物特征上，这些特征几乎永远不会改变，并且可以被对手（例如人声）获取或学习。为了解决生物特征认证的这个固有安全问题，我们提出了一种新颖的声学提取的手握生物特征，它与每个用户的手部几何形状、体脂比和握力相关；它是隐含的，并且无论何时用户握持一个手持设备都可用。此外，我们在生物特征采集过程中整合了编码技术，将静态生物特征编码为动态生物特征，以防止数据重复使用。此外，这种低成本的方法可以部署在任何配备扬声器和麦克风的手持设备上。尤其值得注意的是，我们开发了一个挑战-响应生物特征认证系统，由一对生物特征编码器和解码器组成。我们根据挑战序列对超声信号进行编码，并提取一个独特的生物特征代码作为每个会话的响应。然后，我们通过基于卷积神经网络的算法解码生物特征代码，该算法不仅检查编码正确性，还验证每个生物特征数字所呈现的生物特征。此外，我们对我们的系统进行了各种声学攻击的研究，分别假设攻击者能够提供正确的代码、生成相似的生物特征或成功伪造两者。在移动设备上进行了大量实验证明，我们的系统能够以97%的准确率区分用户，并以6位代码拒绝100%的重放和合成攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833564/](https://ieeexplore.ieee.org/document/9833564/)
## Mitigating Information Leakage Vulnerabilities with Type-based Data Isolation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mitigating-information-leakage-vulnerabilities-with-type-based-data-isolation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mitigating-information-leakage-vulnerabilities-with-type-based-data-isolation)**
### 作者
* Alyssa Milburn, Intel; Vrije Universiteit Amsterdam, The Netherlands
* Erik Van Der Kouwe, Vrije Universiteit Amsterdam, The Netherlands
* Cristiano Giuffrida, Vrije Universiteit Amsterdam, The Netherlands
### 摘要
> 信息泄漏漏洞（或简称信息泄漏）诸如在架构或推测领域的越界/未初始化读取等漏洞构成了重大安全威胁，允许攻击者泄露诸如加密密钥之类的敏感数据。与此同时，这类漏洞很难高效地进行缓解，因为每个（即使是推测性的）内存加载操作都需要潜在地进行未经授权的读取仪表化。现有的基于数据隔离标签的保密性解决方案使用静态指针分析将内存对象标记为不同的颜色（例如，敏感与非敏感），相应地使用颜色加载操作，并对其进行仪表化以在运行时强制执行颜色匹配不变式。不幸的是，依赖保守指针分析会引入对安全性有害的过度近似（或进一步降低性能）。在本文中，我们提出了基于类型的数据隔离（TDI），这是数据隔离领域中新的实用设计观点，用于减轻信息泄漏。TDI将不同颜色的内存对象隔离在单独的内存区域中，并使用高效的编译器仪表化来通过结构限制加载到预期颜色的区域。TDI的基于区域的设计将仪表化从加载操作移动到指针算术操作，使得可以进行新的积极推测感知性能优化，并消除了对指针分析的需求。此外，TDI的颜色管理是灵活的。TDI可以支持像之前的工作（例如，2种颜色）一样的少色方案，其中包含敏感数据注释，也可以基于基本类型分析的多色方案（即每个对象类型一个颜色）。后一种方法提供了细粒度的数据隔离，消除了注释的需求，并强制执行等同于理想的（上下文敏感）基于类型的指针分析的强大的颜色匹配不变式。我们的结果显示，TDI可以高效地支持这种强大的安全不变式，在SPEC CPU2006和nginx的平均性能开销低于10%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833675/](https://ieeexplore.ieee.org/document/9833675/)
## SYMBEXCEL: Automated Analysis and Understanding of Malicious Excel 4.0 Macros.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#symbexcel-automated-analysis-and-understanding-of-malicious-excel-4-0-macros) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#symbexcel-automated-analysis-and-understanding-of-malicious-excel-4-0-macros)**
### 作者
* Nicola Ruaro, University of California, Santa Barbara
* Fabio Pagani, University of California, Santa Barbara
* Stefano Ortolani, VMware
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 恶意软件（恶意软件）对我们的网络和用户的安全构成了重大威胁。在不断发展的恶意软件环境中，Excel 4.0 Office宏（XL4）最近成为一个重要的攻击向量。这些宏经常隐藏在表面上看起来合法的文档中，并且有几层混淆。因此，使用静态分析技术分析它们是困难的。此外，在动态分析环境（沙盒）中进行分析也是具有挑战性的，因为宏只在特定的环境条件下正确执行，而这些环境条件并不总是容易创建的。本文提出了SYMBEXCEL，这是一种利用符号执行来自动去混淆和分析Excel 4.0宏的新解决方案。我们的方法分为三个阶段：（1）恶意文档被解析并加载到内存中；（2）我们的符号执行引擎执行XL4公式；（3）我们的引擎在符号探索过程中将遇到的任何符号值具体化，从而评估每个宏在广泛的（有意义的）环境配置下的执行。SYMBEXCEL在解混淆工具方面显著优于现有工具，使我们能够可靠提取威胁指标（IoCs）和其他关键取证信息。我们的实验证明了我们的方法的有效性，特别是在解混淆重度使用环境变量并且通常不被商业防病毒软件识别的新型恶意文档方面。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833765/](https://ieeexplore.ieee.org/document/9833765/)
## HEAPSTER: Analyzing the Security of Dynamic Allocators for Monolithic Firmware Images.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#heapster-analyzing-the-security-of-dynamic-allocators-for-monolithic-firmware-images) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#heapster-analyzing-the-security-of-dynamic-allocators-for-monolithic-firmware-images)**
### 作者
* Fabio Gritti, University of California, Santa Barbara
* Fabio Pagani, University of California, Santa Barbara
* Ilya Grishchenko, University of California, Santa Barbara
* Lukas Dresel, University of California, Santa Barbara
* Nilo Redini, Qualcomm Technologies Inc.
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 动态内存分配器是现代系统的关键组件，开发人员努力寻找其性能和安全性之间的平衡。不幸的是，易受攻击的分配器通常被滥用为复杂利用链中的构建块。关于内存分配器的大部分研究集中在流行和标准的堆库上，这些库通常被高端设备如台式系统和服务器使用。然而，动态内存分配器也广泛用于嵌入式系统，但它们未受到安全社区的大量关注。在嵌入式系统中，原始固件映像通常是唯一可用的信息，并且寻找堆漏洞是一项繁琐的手动工作。首先，识别成千上万个已剥离固件函数中的内存分配器库很快变成了一项艰巨的任务。此外，模拟固件函数以测试堆漏洞也带来了一系列挑战，与重新托管问题有关。为了填补这一空白，在本文中，我们介绍HEAPSTER，这是一个能够自动识别单体固件映像中使用的堆库，并使用符号执行和有界模型检查测试其安全性的系统。我们在一个由20个合成单体固件映像组成的数据集上评估了HEAPSTER，这些映像被用作我们分析的基础事实，并且还在一个由799个野外收集的实际设备使用的单体固件映像数据集上进行了评估。在这些数据集中，我们的工具识别出了11个不同的堆管理库（HML）家族，总共包含48个不同的变体。HEAPSTER进行的安全性测试发现所有已识别的变体都存在至少一种关键的堆漏洞。本文中呈现的结果显示了一个明显的低安全标准模式，并对物联网设备所使用的动态内存分配器的安全性提出了一些担忧。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833610/](https://ieeexplore.ieee.org/document/9833610/)
## SoK: Demystifying Binary Lifters Through the Lens of Downstream Applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-demystifying-binary-lifters-through-the-lens-of-downstream-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-demystifying-binary-lifters-through-the-lens-of-downstream-applications)**
### 作者
* Zhibo Liu, The Hong Kong University of Science and Technology
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
* Yuyan Bao, University of Waterloo
### 摘要
> 二进制解析器将可执行文件转换为编译器框架的中间表示（IR）。恢复的IR代码通常被认为是“友好于分析的”，能够将低级别的代码分析与成熟的编译器基础设施相结合。经过多年的发展，二进制解析器在各种安全、系统和软件（重新）工程应用中越来越受欢迎。最近的研究还报道了非常有希望的结果，表明二进制解析器可以针对复杂情况生成具有正确功能的LLVM IR代码。本文从正交和高度苛求的视角对二进制解析器进行了深入研究。我们揭开了二进制解析器的“表现力之谜”，并揭示了被解析的LLVM IR代码对安全分析场景中关键下游应用的支持情况。为此，我们通过编译C/C++程序或将相应的可执行文件解析，生成了两个LLVM IR代码片段。然后，我们将这两个LLVM IR代码片段输入三个基石下游应用程序（指针分析、可区分性分析和反编译），并确定是否生成了不一致的分析结果。我们从各种编译器和优化以及不同架构生成的252,063个可执行文件中，研究了由行业或学术界开发的四种流行静态和动态LLVM IR解析器。我们的研究结果表明，现代二进制解析器提供了非常适用于可区分性分析和反编译的IR代码，并且表明这些二进制解析器可以应用于常见的基于相似性或代码理解的安全分析（例如二进制差分）。然而，被解析的IR代码似乎不适合进行严格的静态分析（例如指针分析）。为了更全面地了解二进制解析器的实用性，我们还将使用解析器的方法与仅用于二进制的工具在三个安全任务中的性能进行了比较，即消毒、二进制差分和C反编译。我们总结了研究结果，并提出了对二进制解析器正确使用和进一步增强的建议。我们还探索了使用解析出的IR代码增强指针分析准确性的实用方法，使用和增强Debin工具来预测调试信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833799/](https://ieeexplore.ieee.org/document/9833799/)
## Property Inference from Poisoning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#property-inference-from-poisoning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#property-inference-from-poisoning)**
### 作者
* Saeed Mahloujifar, Princeton University
* Esha Ghosh, Microsoft Research
* Melissa Chase, Microsoft Research
### 摘要
> 财产推理攻击考虑对手可以访问经过训练的机器学习模型并尝试提取训练数据的一些全局统计信息。在本研究中，我们研究了在对手可以恶意控制部分训练数据（污染数据）的情况下的财产推理。以增加泄漏的目标。之前的污染攻击研究主要集中在尝试降低模型的准确性。在这里，我们首次研究了对手的目标是增加模型信息泄漏的污染攻击。我们证明了污染攻击可以显著增加信息泄漏，并且在一些敏感应用中，应该将其视为更强大的威胁模型，其中一些数据源可能是恶意的。我们在理论上证明，只要使用的学习算法具有良好的泛化特性，我们的攻击总是可以成功的。然后，我们在不同的数据集（调查数据集、Enron邮件数据集、MNIST和CelebA）、属性（作为特征存在的属性、作为特征不存在的属性，以及与其余训练数据或分类任务不相关的属性）和模型架构（包括Resnet-18和Resnet-50）上进行了实验评估。我们能够以相对较低的污染率实现高攻击准确性，即在我们的大多数实验中，污染率为2-3%。我们还对使用差分隐私进行训练的模型进行了评估，并且我们证明即使$\epsilon$的值非常小，攻击仍然非常成功[1]。[1] 代码可在https://github.com/smahloujifar/PropertyInferenceFromPoisoning.git找到。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833623/](https://ieeexplore.ieee.org/document/9833623/)
## Reconstructing Training Data with Informed Adversaries.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#reconstructing-training-data-with-informed-adversaries) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#reconstructing-training-data-with-informed-adversaries)**
### 作者
* Borja Balle, DeepMind
* Giovanni Cherubin, Microsoft Research
* Jamie Hayes, DeepMind
### 摘要
> 鉴于对机器学习模型的访问权限，一个对手能否重构出模型的训练数据？本研究从一个知情强大的对手的角度来探讨这个问题，该对手除了一个数据点之外，知道所有的训练数据点。通过具体的攻击实例，我们展示了在这种严格的威胁模型下，重构剩余数据点是可行的。对于凸模型（例如逻辑回归），重构攻击是简单的，并且可以使用闭式形式推导出来。对于更一般的模型（例如神经网络），我们提出了一种基于训练一个重构器网络的攻击策略，该网络接收受攻击模型的权重作为输入，并输出目标数据点。我们展示了我们的攻击在训练于MNIST和CIFAR-10上的图像分类器上的有效性，并系统地研究了标准机器学习流程中的哪些因素影响了重构成功率。最后，我们在理论上调查了差分隐私的何种程度足以减轻受知情对手的重构攻击。我们的工作提供了一个有效的重构攻击方法，模型开发者可以用来评估一般设置中个别数据点的记忆情况，而不仅仅是以前的研究中考虑的生成语言模型或训练梯度的访问；它证明了标准模型具有足够存储信息以实现高保真度重构训练数据点的能力；并且它证明了在保持实用性降低最小的参数范围内，差分隐私可以成功地减轻此类攻击的影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833677/](https://ieeexplore.ieee.org/document/9833677/)
## DeepSteal: Advanced Model Extractions Leveraging Efficient Weight Stealing in Memories.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepsteal-advanced-model-extractions-leveraging-efficient-weight-stealing-in-memories) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepsteal-advanced-model-extractions-leveraging-efficient-weight-stealing-in-memories)**
### 作者
* Adnan Siraj Rakin, School of Electrical, Computer, and Energy Engineering, Arizona State University, Tempe, AZ
* Md Hafizul Islam Chowdhuryy, Department of Electrical and Computer Engineering, University of Central Florida, Orlando, FL
* Fan Yao, Department of Electrical and Computer Engineering, University of Central Florida, Orlando, FL
* Deliang Fan, School of Electrical, Computer, and Energy Engineering, Arizona State University, Tempe, AZ
### 摘要
> 深度神经网络（DNN）的最新进展使其能够广泛应用于多个安全敏感领域。对于资源密集型训练的需求以及宝贵的特定领域训练数据的使用使这些模型成为模型所有者的顶级知识产权（IP）。
> 
> 对DNN隐私的主要威胁之一是模型提取攻击，即对DNN模型中的敏感信息进行窃取的攻击。在这项工作中，我们提出了一个先进的模型提取框架DeepSteal，利用内存侧信道攻击首次实现了远程窃取DNN权重。我们提出的DeepSteal包括两个关键阶段。首先，我们采用基于行锤的故障技术作为信息泄漏向量，开发了一种新的权重位信息提取方法，称为HammerLeak。HammerLeak利用几种专为DNN应用定制的新型系统级技术，实现了快速高效的权重窃取。其次，我们提出了一种新颖的替代模型训练算法，采用平均聚类权重惩罚，充分利用部分泄漏的位信息，生成目标受害模型的替代原型。
> 
> 我们在三个热门图像数据集（如CIFAR-10/100/GTSRB）和四个DNN架构（如ResNet-18/34/Wide-ResNetNGG-11）上评估了提出的模型提取框架。在CIFAR-10数据集上，提取的替代模型在深度残差网络上成功实现了超过90%的测试准确率。此外，我们提取的替代模型还能生成有效的对抗输入样本来欺骗受害模型。值得注意的是，它在攻击下的表现与白盒对抗输入攻击（如PGD/Trades）相似，即测试准确率约为1-2%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833743/](https://ieeexplore.ieee.org/document/9833743/)
## Model Stealing Attacks Against Inductive Graph Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-stealing-attacks-against-inductive-graph-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-stealing-attacks-against-inductive-graph-neural-networks)**
### 作者
* Yun Shen, Norton Research Group
* Xinlei He, CISPA Helmholtz Center for Information Security
* Yufei Han, INRIA
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 许多真实世界的数据以图的形式出现。图神经网络（GNNs）是一类新的机器学习（ML）模型，被提出来充分利用图数据构建强大的应用程序。特别地，归纳式GNNs可以推广到未见过的数据，成为该方向上的主流。机器学习模型在各种任务中表现出巨大潜力，并在许多真实世界场景中得到部署。为了训练一个好的模型，需要大量的数据和计算资源，这导致了有价值的知识产权。之前的研究表明，ML模型容易受到模型窃取攻击，目的是窃取目标模型的功能。然而，其中大部分研究集中在使用图像和文本进行训练的模型上。另一方面，对于使用图数据（即GNNs）进行训练的模型，关注较少。在本文中，我们通过提出针对归纳GNNs的首个模型窃取攻击来填补这一空白。我们系统地定义了威胁模型，并基于对手的背景知识和目标模型的响应提出了六种攻击。我们对六个基准数据集进行评估，结果显示，对GNNs的提出的模型窃取攻击取得了令人期待的性能。<sup>1</sup>

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833607/](https://ieeexplore.ieee.org/document/9833607/)
## Noise-SDR: Arbitrary Modulation of Electromagnetic Noise from Unprivileged Software and Its Impact on Emission Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-sdr-arbitrary-modulation-of-electromagnetic-noise-from-unprivileged-software-and-its-impact-on-emission-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#noise-sdr-arbitrary-modulation-of-electromagnetic-noise-from-unprivileged-software-and-its-impact-on-emission-security)**
### 作者
* Giovanni Camurati, Software and System Security Group, EURECOM, Sophia-Antipolis, France
* Aurélien Francillon, Software and System Security Group, EURECOM, Sophia-Antipolis, France
### 摘要
> 电子设备会生成电磁噪声，也被称为电磁泄漏，当噪声泄露信息时。许多最近的研究论文利用了软件活动可以利用这种泄漏来生成无线电信号的事实。这个过程打破了简单非特权代码和无线电频谱之间的隔离，使攻击者可以在没有任何无线电接口的情况下产生物理无线电信号。以前的工作已经发现了许多泄漏源和隐蔽通信渠道，通常使用简单的调制方案。然而，一个基本的研究问题尚未被探索：攻击者能够将电磁泄漏塑造成他们选择的信号的哪个程度？这个问题的答案对安全影响重大，超出了特定攻击或平台。实际上，任意信号调制是一种有用的基本操作。这将使攻击者能够使用高级调制方案，并更好地利用通道（泄漏）容量，例如建立高级通信渠道或将恶意信号注入受害者接收器。从初步分析来看，任意调制似乎是不可能的：软件对泄漏的控制有限，因此现有的攻击只受限于开关键控或频移键控。在本文中，我们证明了不特权软件可以将任意信号从电磁噪声中塑造出来。为此，我们利用全数字无线电技术，并将我们的方法称为Noise-SDR，因为它类似于软件定义无线电，可以传输在软件中合成的通用信号。我们通过在ARMv7-A、ARMv8-A、x86-64和MIPS32上使用DRAM访问来演示我们的方法。我们在不同类型的设备上进行了评估，包括智能手机、笔记本电脑、台式机和基于Linux的物联网设备。尽管功率、频率和带宽受到泄漏特性的限制，但我们提供了几个案例研究，包括使用高级协议的传输、设备跟踪和信号注入。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833767/](https://ieeexplore.ieee.org/document/9833767/)
## mmSpy: Spying Phone Calls using mmWave Radars.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mmspy-spying-phone-calls-using-mmwave-radars) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mmspy-spying-phone-calls-using-mmwave-radars)**
### 作者
* Suryoday Basak, The Pennsylvania State University, University Park, PA
* Mahanth Gowda, The Pennsylvania State University, University Park, PA
### 摘要
> 本论文介绍了一种名为mmSpy的系统，展示了远程监听电话呼叫的可行性。为此，mmSpy使用一种在毫米波谱（77GHz和60GHz）上运行的现成雷达设备对耳机的振动进行感知。鉴于毫米波雷达在自动驾驶、远程感测和其他物联网应用中越来越受欢迎，我们认为这是一个关键的隐私问题。与早期工作不同，早期工作展示了检测幅度较大的扬声器振动的可行性，mmSpy利用毫米波雷达信号的较小波长来检测电话呼叫中使用的耳机设备中的微小振动。为了设计这种攻击，mmSpy解决了与大规模雷达数据集不可用、各种噪声源的系统校正以及在收集训练数据中的领域适应问题相关的一系列挑战。基于广泛的基于测量的验证，在1-6英尺范围内实现了83-44％的端到端准确度，从而危及了在信用卡信息交换等应用中的隐私。此外，mmSpy显示了使用雷达数据重建音频信号的可行性，通过这种方法，可以潜在地泄露更敏感的信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833568/](https://ieeexplore.ieee.org/document/9833568/)
## Attacks on Wireless Coexistence: Exploiting Cross-Technology Performance Features for Inter-Chip Privilege Escalation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#attacks-on-wireless-coexistence-exploiting-cross-technology-performance-features-for-inter-chip-privilege-escalation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#attacks-on-wireless-coexistence-exploiting-cross-technology-performance-features-for-inter-chip-privilege-escalation)**
### 作者
* Jiska Classen, Technical University of Darmstadt, Secure Mobile Networking Lab
* Francesco Gringoli, University of Brescia, CNIT
* Michael Hermann, Technical University of Darmstadt, Secure Mobile Networking Lab
* Matthias Hollick, Technical University of Darmstadt, Secure Mobile Networking Lab
### 摘要
> 现代移动设备配备了多种无线技术，如蓝牙、Wi-Fi和LTE。其中每种技术都在独立的无线芯片内实现，有时以组合芯片的形式封装。然而，这些芯片共享组件和资源，例如同一个天线或无线频谱。无线共存接口使它们能够在共享资源的情况下安排数据包，从而实现网络性能的最大化是至关重要的。但是，现今的有线共存接口难以建立清晰的安全边界和芯片与芯片组件之间的分离。本文展示了针对部署在数十亿设备上的Broadcom、Cypress和Silicon Labs芯片的实际共存攻击。例如，我们展示了蓝牙芯片可以直接提取网络密码并操纵Wi-Fi芯片的数据流量。共存攻击能够在芯片边界之间实现一种新型的横向权限升级。我们已将这些漏洞负责任地披露给了供应商。然而，对于现有的硬件只发布了部分修复程序，因为要防止共存攻击的实施，无线芯片需要从零开始重新设计。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833639/](https://ieeexplore.ieee.org/document/9833639/)
## Invisible Finger: Practical Electromagnetic Interference Attack on Touchscreen-based Electronic Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#invisible-finger-practical-electromagnetic-interference-attack-on-touchscreen-based-electronic-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#invisible-finger-practical-electromagnetic-interference-attack-on-touchscreen-based-electronic-devices)**
### 作者
* Haoqi Shan, University of Florida
* Boyi Zhang, University of Florida
* Zihao Zhan, University of Florida
* Dean Sullivan, University of New Hampshire
* Shuo Wang, University of Florida
* Yier Jin, University of Florida
### 摘要
> 触摸屏为基础的电子设备，如智能手机和平板电脑，广泛应用于我们的日常生活。尽管电子设备的安全性最近受到了广泛研究，但对触摸屏抵御各种攻击的适应性尚未进行彻底的调查。在本文中，我们首次展示了触摸屏为基础的电子设备如何易受有意的电磁干扰（IEMI）攻击，并以实际方式展示了如何进行此类攻击。我们的贡献不仅在于展示攻击，而且详细分析和量化了触摸屏上新型IEMI攻击的潜在机制。我们展示了如何计算诱发触摸屏幽灵触摸所需的最小电场和信号频率。我们进一步分析了我们对不同幅度、频率、持续时间和多点触控模式的实际触摸屏进行的IEMI攻击。还详细阐述了使用IEMI信号控制触摸屏设备的机制。我们设计和评估了一个隐蔽的触摸屏定位器和触摸注入反馈机制，以帮助实施实际的IEMI攻击。我们的攻击直接作用于触摸屏电路，无论触摸屏扫描机制或操作系统如何。我们的攻击可以在距离大于常见桌面的平均厚度的范围内准确注入短按、长按和全向手势。与最先进的触摸屏攻击相比，我们的攻击可以准确注入不同类型的触摸事件，无需感应信号同步，这使得我们的攻击更加稳健和实用。此外，我们不仅展示了一个简单的概念验证攻击，还提供并演示了第一个可用的基于IEMI的触摸屏攻击向量，具有端到端的攻击场景。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833718/](https://ieeexplore.ieee.org/document/9833718/)
## Using Throughput-Centric Byzantine Broadcast to Tolerate Malicious Majority in Blockchains.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#using-throughput-centric-byzantine-broadcast-to-tolerate-malicious-majority-in-blockchains) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#using-throughput-centric-byzantine-broadcast-to-tolerate-malicious-majority-in-blockchains)**
### 作者
* Ruomu Hou, National University of Singapore
* Haifeng Yu, National University of Singapore
* Prateek Saxena, National University of Singapore
### 摘要
> 区块链的容错性通常通过系统所能容忍的“对抗性能量”的部分f来描述。尽管近年来区块链设计取得了快速进展，现有的区块链系统仍然只能容忍f小于0.5的情况。实际可用的区块链能否容忍恶意多数，即f大于0.5呢？本研究对这个问题给出了积极的答案。我们首先指出，著名的拜占庭一致性对于f大于0.5并不适用于区块链。为了容忍f大于0.5，我们使用了拜占庭广播而不是拜占庭一致性作为区块链的核心。然而，这样做的一个主要障碍是所得到的区块链可能具有极低的吞吐量。为了克服这个核心技术挑战，我们提出了一种新颖的拜占庭广播协议OverlayBB，它能够容忍f大于0.5，同时实现良好的吞吐量。以OverlayBB作为核心，我们提出了一种名为BCube的新型权益证明区块链的设计、实现和评估。在我们对10000个节点、f=0.7的实验中，BCube可以容忍恶意多数，同时实现实际可用的交易吞吐量和确认延迟。据我们所知，BCube是第一个能够实现这种属性的区块链。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833617/](https://ieeexplore.ieee.org/document/9833617/)
## MatRiCT+: More Efficient Post-Quantum Private Blockchain Payments.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#matrict-more-efficient-post-quantum-private-blockchain-payments) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#matrict-more-efficient-post-quantum-private-blockchain-payments)**
### 作者
* Muhammed F. Esgin, Monash University and CSIRO’s Data61, Australia
* Ron Steinfeld, Monash University, Australia
* Raymond K. Zhao, Monash University, Australia
### 摘要
> 我们介绍了一种基于“post-quantum”格假设的实用私有区块链支付协议MatRiCT <sup>+</sup>。MatRiCT <sup>+</sup> 基于Esgin等人的MatRiCT（ACM CCS'19）构建，并且一般上遵循了Monero中使用的环机密交易（RingCT）方法，后者是最大的隐私保护加密货币。在实际方面，与MatRiCT相比，MatRiCT <sup>+</sup>的证明长度较短（根据输入账户数量M）2-18倍，并且运行速度（对于典型交易）快3-11倍。MatRiCT <sup>+</sup>的一个显著优势是证明长度对M的依赖非常小（仅为O(logM)），而MatRiCT的证明长度与M成线性关系。为了支持其效率，我们在MatRiCT <sup>+</sup>的设计中采用了几种新颖的技术，实现了紧凑的基于格的零知识证明系统，并利用了在实用的基于格密码中常用的2的幂次环的代数性质。在这个过程中，我们设计了一系列“最优”挑战空间，使用了我们称之为“partition-and-sample”的技术，具有最小的$\ell_{1}$-norm和可逆的挑战差异（在极大概率下），同时支持高度分裂的2的幂次环。我们相信所有这些结果具有广泛的适用性和独立的研究价值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833655/](https://ieeexplore.ieee.org/document/9833655/)
## Universal Atomic Swaps: Secure Exchange of Coins Across All Blockchains.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-atomic-swaps-secure-exchange-of-coins-across-all-blockchains) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-atomic-swaps-secure-exchange-of-coins-across-all-blockchains)**
### 作者
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University
* Giulio Malavolta, Max Planck Institute for Security and Privacy
* Pedro Moreno-Sanchez, IMDEA Software Institute
### 摘要
> 交易商品是现代经济的基础，最近加密货币的出现为交易去中心化（数字）资产打开了大门：加密货币的价值很大程度上来自于货币间的交换和交易，这被认为是去中心化货币应用最成功的方面。中心化的、托管的加密货币交易所存在安全问题，这促使设计原子交换协议，即任意两个用户之间的货币交换协议。然而，令人惊讶的是，目前还不存在同时满足以下简单但期望的属性的原子交换协议：（i）非托管，即不依赖第三方信任机构在交换过程中持有用户的货币；（ii）通用性，即与所有（现有和未来的）加密货币兼容；（iii）多资产，即支持在单次原子交换中交换多种货币。从理论上讲，本研究展示了一种通用协议，可以安全地交换任意（可能是多个）货币的n个硬币，换取任意另外$\tilde{n}$个货币的硬币，其中n和$\tilde{n}$可以是任意值。我们不需要任何自定义脚本语言，只需要能够验证交易上的签名所需的最低限度能力。对于区块链使用ECDSA或Schnorr签名的特殊情况，我们基于适配器签名和时间锁谜题设计了一个实际高效的协议。作为我们方法的副产品，原子交换交易不再包含自定义脚本，而与标准的一对一交易相同。我们还展示了我们的协议自然地推广到任何用户循环，即具有超过两个参与者的原子交换。为了证明我们方法的实用性，我们评估了Schnorr/ECDSA签名的协议样机实现，并观察到在一般计算机上，原子交换只需要不到一秒钟的时间。即使在具有高级智能合约支持（例如以太坊）的区块链上，我们的方法在链上成本方面也减少了交易大小和燃气费用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833731/](https://ieeexplore.ieee.org/document/9833731/)
## Foundations of Dynamic BFT.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#foundations-of-dynamic-bft) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#foundations-of-dynamic-bft)**
### 作者
* Sisi Duan, Tsinghua University; Institute for Advanced Study and BNRist
* Haibin Zhang, Beijing Institute of Technology
### 摘要
> 本论文研究动态BFT，其中复制品能够动态地加入和离开系统，这是当今日益需要的基础原语。我们为动态BFT协议提供了形式化的处理，赋予它们灵活的语法和各种安全定义。我们展示了将静态BFT扩展到动态BFT的挑战。然后，我们设计和实现了Dyno，一种在部分同步模型下极其高效的动态BFT协议。我们展示了Dyno能够无缝处理成员变更而不会导致性能下降。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833787/](https://ieeexplore.ieee.org/document/9833787/)
## COBRA: Dynamic Proactive Secret Sharing for Confidential BFT Services.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cobra-dynamic-proactive-secret-sharing-for-confidential-bft-services) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#cobra-dynamic-proactive-secret-sharing-for-confidential-bft-services)**
### 作者
* Robin Vassantlal, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
* Eduardo Alchieri, Universidade de Brasilia, Brazil
* Bernardo Ferreira, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
* Alysson Bessani, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Portugal
### 摘要
> 拜占庭容错（BFT）状态机复制（SMR）是一种实现可信服务的经典范式，随着区块链和分散式基础设施的出现，它再次引起人们的关注。BFT SMR的一个基本局限是，尽管一部分副本受到活动对手的控制，但它仍能提供完整性和可用性，但没有提供任何保密保护。以前的研究通过将秘密共享与基于一致性的BFT SMR框架集成来解决了这个问题，但没有提供实际系统所需的所有功能，包括副本恢复、组重配置以及在处理大量密钥时具有可接受的性能。我们提出了COBRA，这是一种新的协议堆栈，用于实现实际BFT SMR系统中的机动秘密共享。COBRA具有最佳的渐近通信复杂性和最佳的存储开销，能够在十个副本组中比当前技术水平快5倍更新10万个共享。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833658/](https://ieeexplore.ieee.org/document/9833658/)
## Back to the Drawing Board: A Critical Evaluation of Poisoning Attacks on Production Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#back-to-the-drawing-board-a-critical-evaluation-of-poisoning-attacks-on-production-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#back-to-the-drawing-board-a-critical-evaluation-of-poisoning-attacks-on-production-federated-learning)**
### 作者
* Virat Shejwalkar, University of Massachusetts, Amherst
* Amir Houmansadr, University of Massachusetts, Amherst
* Peter Kairouz, Google Research
* Daniel Ramage, Google Research
### 摘要
> 最近的研究表明，联邦学习（FL）可能会受到被入侵客户端的污染攻击的影响，但这对生产级FL系统的实际影响还不完全了解。本研究旨在通过列举所有可能的威胁模型、污染的变体和对手能力，对FL上的污染攻击进行全面的系统化研究。我们特别关注非定向性污染攻击，并认为它们对于生产级FL部署非常重要。我们通过仔细地描述现实威胁模型和对手能力的集合，对非定向性污染攻击在实际生产FL环境下进行了关键分析。我们的发现令人惊讶：与已有的观点相反，我们证明了即使在使用简单的、低成本的防御措施时，FL在实践中也非常强大。我们进一步提出了新颖的、最先进的数据和模型污染攻击，并通过在三个基准数据集上进行了大量实验，展示了在简单的防御机制存在的情况下污染攻击的（无）效果。我们旨在纠正先前的误解，并提供具体的指导方针，以进行更准确（和更现实）的研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833647/](https://ieeexplore.ieee.org/document/9833647/)
## Model Orthogonalization: Class Distance Hardening in Neural Networks for Better Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-orthogonalization-class-distance-hardening-in-neural-networks-for-better-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#model-orthogonalization-class-distance-hardening-in-neural-networks-for-better-security)**
### 作者
* Guanhong Tao, Department of Computer Science, Purdue University
* Yingqi Liu, Department of Computer Science, Purdue University
* Guangyu Shen, Department of Computer Science, Purdue University
* Qiuling Xu, Department of Computer Science, Purdue University
* Shengwei An, Department of Computer Science, Purdue University
* Zhuo Zhang, Department of Computer Science, Purdue University
* Xiangyu Zhang, Department of Computer Science, Purdue University
### 摘要
> 深度学习分类器中两个类之间的距离可以通过将一个类的所有（或大多数）样本翻转为另一个类的难度水平来衡量。野外许多预训练模型的类距离非常小，并且与人类的直觉不符（例如，类别"海龟"和"鸟"的距离小于类别"猫"和"狗"），使得这些模型容易受到后门攻击的影响，后门攻击旨在通过给输入加上特定模式来引起错误分类。我们提出了一种新颖的模型强化技术，称为模型正交化，它是对预训练模型（包括干净模型、被注入后门的模型和对抗训练模型）的一个额外训练步骤。它可以在合理的训练成本和不显著的准确率下降的情况下，显著增加类距离。我们对5个数据集和22种模型结构进行评估表明，我们的技术平均可以将类距离增加177.63%，准确率损失不到1%，优于现有的模型强化技术，如对抗训练、通用对抗扰动和直接使用生成的后门。它可以降低80%的误报率，因为扩大的类距离可以使扫描程序很容易区分干净模型和被注入后门的模型，并且在去除注入后门方面显著优于现有的三种技术。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833688/](https://ieeexplore.ieee.org/document/9833688/)
## Universal 3-Dimensional Perturbations for Black-Box Attacks on Video Recognition Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-3-dimensional-perturbations-for-black-box-attacks-on-video-recognition-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#universal-3-dimensional-perturbations-for-black-box-attacks-on-video-recognition-systems)**
### 作者
* Shangyu Xie, Illinois Institute of Technology, Chicago, IL
* Han Wang, Illinois Institute of Technology, Chicago, IL
* Yu Kong, Rochester Institute of Technology, Rochester, NY
* Yuan Hong, Illinois Institute of Technology, Chicago, IL
### 摘要
> 广泛部署的深度神经网络（DNN）模型在许多应用中（例如图像、音频和文本分类）已被证明容易受到对抗性扰动的威胁。到目前为止，只有少数几种对抗性扰动被提出用于在视频识别系统中偏离DNN模型，而这些攻击仅仅是将2D扰动注入到视频帧中。然而，这种攻击可能会过度扰动视频，而没有学习跨时间帧提取的时空特征，这是DNN模型常用于视频识别的特征。根据我们的最佳了解，我们提出了第一个黑盒攻击框架，它生成了通用的三维（U3D）扰动来破坏各种视频识别系统。U3D具有许多优点，例如（1）作为基于转移的攻击，U3D可以对多个DNN模型进行通用攻击，无需访问目标DNN模型；（2）U3D的高可转移性使得这种通用黑盒攻击易于展开，而在必要时可以通过与目标模型的查询进一步增强；（3）U3D保证了人类无感知性；（4）U3D可以绕过现有的最先进的防御方案；（5）可以使用少量预先学习的参数高效生成U3D，然后立即注入到实时的基于DNN的视频识别系统中进行攻击。我们已经进行了广泛的实验来评估U3D在多个DNN模型和三个大规模视频数据集上的性能。实验结果表明了其优越性和实用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833776/](https://ieeexplore.ieee.org/document/9833776/)
## "Adversarial Examples" for Proof-of-Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-examples-for-proof-of-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-examples-for-proof-of-learning)**
### 作者
* Rui Zhang, Zhejiang University
* Jian Liu, Zhejiang University
* Yuan Ding, Zhejiang University
* Zhibo Wang, Zhejiang University
* Qingbiao Wu, Zhejiang University
* Kui Ren, Zhejiang University
### 摘要
> 在S&P 21中，贾等人提出了一个名为学习证明（Proof-of-Learning，简称PoL）的新概念/机制，它允许证明者通过证明训练过程的完整性来证明对一个机器学习模型的拥有权。该机制确保了在构建证明时，对手无法以比证明者更低的成本（计算和存储）进行有效的证明构建。一个PoL证明包括在训练过程中记录的一组中间模型，以及用于获得每个记录模型的相应数据点。贾等人声称，如果仅仅知道最终模型和训练数据集，对手无法高效地找到一组具有正确数据点的中间模型。然而，在本文中，我们展示了PoL对“对抗性样本”是脆弱的！具体而言，通过类似于优化对抗性样本的方式，我们可以使任意选择的数据点“生成”一个给定的模型，从而高效地生成具有正确数据点的中间模型。我们从理论和实证两方面证明，我们能够以显著较低的成本生成一个有效的证明，而不是由证明者生成证明。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833596/](https://ieeexplore.ieee.org/document/9833596/)
## Transfer Attacks Revisited: A Large-Scale Empirical Study in Real Computer Vision Settings.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transfer-attacks-revisited-a-large-scale-empirical-study-in-real-computer-vision-settings) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#transfer-attacks-revisited-a-large-scale-empirical-study-in-real-computer-vision-settings)**
### 作者
* Yuhao Mao, Zhejiang University; ETH Zürich
* Chong Fu, Zhejiang University
* Saizhuo Wang, Zhejiang University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University; Zhejiang University NGICS Platform
* Zhenguang Liu, Zhejiang Gongshang University
* Jun Zhou, Ant Group
* Alex X. Liu, Ant Group
* Raheem Beyah, Georgia Institute of Technology
* Ting Wang, Pennsylvania State University
### 摘要
> 对抗攻击中一个引人注目的特性是它们的"可转移性"——针对一个深度神经网络（DNN）模型制作的对抗样本通常对其他DNN也有效。在简化的控制条件下已经进行了大量关于这一现象的研究。然而，到目前为止，在真实环境中基于可转移性的攻击（"转移攻击"）方面仍然缺乏全面的理解。为弥补这一关键差距，我们对主要的基于云的MLaaS平台进行了第一次大规模的系统实证研究，将真实的转移攻击的组成部分考虑在内。研究得出了一些有趣的发现，与现有的发现不一致，包括：(i)简单的替代模型不一定能改善真实的转移攻击。(ii)在真实的转移攻击中没有发现占主导地位的替代模型结构。(iii)增加转移性的是后验分布（softmax层的输出）之间的差距，而不是对数几率（所谓的κ值）之间的差距。此外，通过与之前的研究进行比较，我们证明了在真实环境中转移攻击具有许多以前未知的特性，例如：(i)模型相似性不是一个明确定义的概念。(ii)扰动的L <inf>2</inf>范数可以产生高度的转移性，而无需使用梯度，并且比L <inf>∞</inf>范数更强大。我们相信这项工作揭示了流行的MLaaS平台的漏洞，并指出了一些有希望的研究方向。<sup>1</sup>

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833783/](https://ieeexplore.ieee.org/document/9833783/)
## Graphics Peeping Unit: Exploiting EM Side-Channel Information of GPUs to Eavesdrop on Your Neighbors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#graphics-peeping-unit-exploiting-em-side-channel-information-of-gpus-to-eavesdrop-on-your-neighbors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#graphics-peeping-unit-exploiting-em-side-channel-information-of-gpus-to-eavesdrop-on-your-neighbors)**
### 作者
* Zihao Zhan, University of Florida; Vanderbilt University
* Zhenkai Zhang, Clemson University
* Sisheng Liang, Clemson University
* Fan Yao, University of Central Florida
* Xenofon Koutsoukos, Vanderbilt University
### 摘要
> 随着近年来图形处理单元（GPU）的普及迅速增长，研究和了解由其带来的安全影响变得非常关键。在本文中，我们展示了现代GPU可以通过空中“广播”敏感信息，从而使许多攻击变得可行。具体来说，我们发现了NVIDIA和AMD的许多GPU中存在一种新的电磁（EM）侧信道漏洞。我们通过两个案例研究，即网站指纹识别和按键时间推测攻击，展示了如何利用这个漏洞进行实际攻击。我们的调查认识到GPU中常用的动态电压和频率调节（DVFS）功能是该漏洞的根本原因。然而，我们还表明，仅仅禁用DVFS可能不是一个有效的对策，因为它会引入另一个易受利用的电磁侧信道漏洞。据我们所知，这是第一项研究非共享GPU的实际物理侧信道攻击的工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833773/](https://ieeexplore.ieee.org/document/9833773/)
## Adversarial Prefetch: New Cross-Core Cache Side Channel Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-prefetch-new-cross-core-cache-side-channel-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#adversarial-prefetch-new-cross-core-cache-side-channel-attacks)**
### 作者
* Yanan Guo, Electrical and Computer Engineering Department, University of Pittsburgh
* Andrew Zigerelli, Electrical and Computer Engineering Department, University of Pittsburgh
* Youtao Zhang, Department of Computer Science, University of Pittsburgh
* Jun Yang, Electrical and Computer Engineering Department, University of Pittsburgh
### 摘要
> 现代x86处理器具有许多预取指令，可供程序员用于提高性能。然而，这些指令也可能引起安全问题。特别是，在Intel处理器上，我们发现PREFETCHW的实现存在两个安全漏洞，这是一条用于加速未来写入的指令。首先，该指令可以在只读权限下执行数据。其次，该指令的执行时间会泄露目标数据的当前一致性状态。基于这两个设计问题，我们构建了两种跨核私有缓存攻击，可以与包含和非包含型LLC一起使用，分别命名为Prefetch+Reload和Prefetch+Prefetch。我们展示了我们的攻击在不同场景中的重要性。首先，在隐蔽信道情况下，使用只有一个共享缓存行的情况下，Prefetch+Reload和Prefetch+Prefetch的信道容量分别达到782 KB/s和822 KB/s，是CPU缓存隐蔽信道至今最大的单行容量。此外，在边信道情况下，我们的攻击可以监视在同一处理器上受害者的访问模式，几乎没有错误率。我们展示了它们可以用于泄露像加密密钥之类的现实应用的私人信息。最后，我们的攻击可以用于瞬态执行攻击，以泄露比以前的工作更多的秘密信息。根据实验结果，我们的攻击允许泄露大约两倍于广泛用于瞬态执行攻击的Flush+Reload的秘密字节。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833692/](https://ieeexplore.ieee.org/document/9833692/)
## Finding and Exploiting CPU Features using MSR Templating.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-and-exploiting-cpu-features-using-msr-templating) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-and-exploiting-cpu-features-using-msr-templating)**
### 作者
* Andreas Kogler, Graz University of Technology
* Daniel Weber, CISPA Helmholtz Center for Information Security
* Martin Haubenwallner, Graz University of Technology
* Moritz Lipp, Amazon Web Services
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> 为了在向CPU添加新功能的同时确保向后兼容性，CPU供应商通过所谓的特定于型号的寄存器(Model-Specific Registers, MSRs)启用了有限的CPU配置。这些MSRs已用于各种功能，如调试、性能监测或安全性。虽然许多MSRs已有文档记录，但在现代CPU中仍存在大量未记录或文档记录不详的MSRs。此外，凭借数百个MSRs，每个MSR提供最多64个配置位，查找特定配置选项是非常繁琐的。在本文中，我们展示了在Intel和AMD CPU上可以自动检测MSRs及其配置位。我们引入了名为MSRevelio的框架，以自动检测影响指令行为的位，并半自动地找到由BIOS设置控制的位。我们展示了先前忽视的位可以增强系统对诸如Medusa、CrossTalk和软件预取攻击等微体系结构攻击的防御能力。此外，我们展示了一个未记录的锁定位在运行时允许禁用AES-NI，迫使mbedTLS退回到易受缓存攻击的AES实现。在SGX飞地内利用这个回退，我们完全恢复了飞地使用的AES密钥。通过我们的检测方法，我们展示了使用微码更新进行修改的安全功能可以很容易地被发现，甚至在底层漏洞的公开文档之前。在我们对Xen虚拟化监控器的分析中，我们展示了Xen对MSRs的处理长期存在问题，允许虚拟机访问未记录和未处理的MSRs，并指纹识别特定的Xen版本。通过 documented 和未记录的MSRs之间的自动关联分析，我们发现了一个以前未记录的MSR与CPU的时间戳计数器相关。这个MSR也可以从Xen虚拟机访问，我们演示了当所有其他定时器不可用或人为恶化时的Foreshadow攻击。我们的结果突显了透明度对于与CPU内部紧密交互的功能至关重要。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833599/](https://ieeexplore.ieee.org/document/9833599/)
## Augury: Using Data Memory-Dependent Prefetchers to Leak Data at Rest.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#augury-using-data-memory-dependent-prefetchers-to-leak-data-at-rest) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#augury-using-data-memory-dependent-prefetchers-to-leak-data-at-rest)**
### 作者
* Jose Rodrigo Sanchez Vicarte, University of Illinois Urbana-Champaign
* Michael Flanders, University of Illinois Urbana-Champaign; University of Washington
* Riccardo Paccagnella, University of Illinois Urbana-Champaign
* Grant Garrett-Grossman, University of Illinois Urbana-Champaign
* Adam Morrison, Tel Aviv University
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* David Kohlbrenner, University of Washington
### 摘要
> 微体系结构侧信道攻击正享受爆炸性增长的时期，主要由于新型瞬态执行漏洞的推动。只要对手能够使用瞬态指令将数据读入处理器内核，这些攻击就能够泄露任意数据。在本文中，我们提出了第一种微体系结构攻击，该攻击在存储系统中泄露静止数据，即不通过推测性或非推测性直接读取到内核。这种技术是通过一种以前未报告的预取器类别实现的：数据内存依赖预取器（DMP）。这些预取器的设计旨在允许预取不规则地址模式，如指针追踪。因此，DMP会直接检查和使用内存内容来确定要预取的地址。我们的实验证明了最新的苹果处理器上存在指针追踪型DMP，包括A14和M1。然后，我们对这种DMP进行逆向工程，以确定使用它的攻击者的机会和限制。最后，我们展示了几种基本的攻击原语，能够使用DMP泄露指针值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833570/](https://ieeexplore.ieee.org/document/9833570/)
## MeshUp: Stateless Cache Side-channel Attack on CPU Mesh.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#meshup-stateless-cache-side-channel-attack-on-cpu-mesh) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#meshup-stateless-cache-side-channel-attack-on-cpu-mesh)**
### 作者
* Junpeng Wan, Fudan University
* Yanxiang Bi, Fudan University
* Zhe Zhou, Fudan University
* Zhou Li, University of California, Irvine
### 摘要
> 缓存侧信道攻击对于CPU在共享环境中（例如云计算）存在严重的安全威胁。大多数攻击依赖于感知受害者造成的微架构状态变化，但这种假设可以通过结合空间（例如Intel CAT）和时间隔离而无效。在这项研究中，我们通过展示针对服务器级CPU的无状态缓存侧信道攻击来推进缓存侧信道攻击的状态。这种攻击可以绕过空间和时间隔离。与依赖于缓存命中或未命中之间时间差异的有状态缓存侧信道攻击不同，我们的攻击利用了互连拥塞引起的时间差异。具体而言，为了完成缓存事务，在使用非包含和网状互连的Intel服务器CPU上，缓存行会通过CPU网状和UPI互连在核之间传输。然而，互连是所有核心共享的，并且缓存隔离不会分隔流量。攻击者可以生成流量与受害者在一个连接上竞争，测量额外的延迟，推断出受害者程序的内存访问模式，并推断其敏感数据。基于这个想法，我们实现了MESHUP，一种针对网状互连的无状态缓存侧信道攻击，并对JDK的现有RSA实现进行了跨核攻击和应用指纹识别进行了测试。我们发现受害进程使用的RSA私钥可以被部分恢复，并且共存应用程序可以以高准确性进行推断。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833794/](https://ieeexplore.ieee.org/document/9833794/)
## Timing-Based Browsing Privacy Vulnerabilities Via Site Isolation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#timing-based-browsing-privacy-vulnerabilities-via-site-isolation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#timing-based-browsing-privacy-vulnerabilities-via-site-isolation)**
### 作者
* Zihao Jin, Microsoft Research Asia, Beijing, China; Tsinghua University, Beijing, China
* Ziqiao Kong, Microsoft Research Asia, Beijing, China
* Shuo Chen, Microsoft Research Asia, Beijing, China
* Haixin Duan, Tsinghua University, Beijing, China
### 摘要
> 铬的站点隔离确保不同的站点由不同的进程渲染，这是学术研究人员十多年前提出的一个愿景。从学术原型到商业可用性的转变代表了对现代浏览器安全架构的全面重新思考。在本文中，我们强调站点隔离下的时间问题需要进行深入研究。具体而言，我们展示了站点隔离使得实际的时间攻击成为可能，攻击者可以确定加载到浏览器中的给定目标站点集中的哪些网站，以及用户当前正在与哪个网站进行交互。通过这些漏洞，用户的站点访问行为会被泄露给攻击者。我们使用Alexa前3000个网站进行评估，得到了非常高的漏洞百分比-我们的三个关键漏洞度量指标分别为99%、99%和95%。此外，这种攻击非常稳健，无需任何特殊假设，在实际部署时也能产生效果。我们工作的主要挑战是进程的稀缺性与在不同进程中隔离跨站点帧之间的关系。我们正在与Google Chrome团队和Microsoft Edge团队合作，提出和评估缓解选项。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833710/](https://ieeexplore.ieee.org/document/9833710/)
## WTAGRAPH: Web Tracking and Advertising Detection using Graph Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wtagraph-web-tracking-and-advertising-detection-using-graph-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wtagraph-web-tracking-and-advertising-detection-using-graph-neural-networks)**
### 作者
* Zhiju Yang, Colorado School of Mines
* Weiping Pei, Colorado School of Mines
* Monchu Chen, Appen
* Chuan Yue, Colorado School of Mines
### 摘要
> 现如今，网络追踪和广告（WTA）普遍在网络上进行，不断侵犯用户隐私。现有的防御解决方案，如基于过滤器列表的广泛部署阻止工具和先前研究中提出的基于替代机器学习的解决方案，准确性和有效性方面存在局限性。在这项工作中，我们提出了一种基于图神经网络（GNN）的网络追踪和广告检测框架WTAGRAPH。我们首先构建了一个表示HTTP网络流量的属性同质多图（AHMG），并将网络追踪和广告检测形式化为GNN基于边表示学习和AHMG分类任务。然后，我们设计了WTAGRAPH中的四个组件，使其能够（1）收集HTTP网络流量、DOM和JavaScript数据，（2）构建AHMG并提取相应的边和节点特征，（3）在传导学习设置中构建GNN模型进行边表示学习和WTA检测，（4）在归纳学习设置中使用预训练的GNN模型进行WTA检测。我们在从Alexa前1万个网站收集的数据集上评估了WTAGRAPH，并展示了在传导学习和归纳学习设置中，WTAGRAPH能够有效地检测到WTA请求。手动验证结果表明，WTAGRAPH能够检测到过滤器列表错过的新的WTA请求，并识别被过滤器列表错误标记的非WTA请求。我们的消融分析、逃避评估和实时评估结果表明，WTAGRAPH在实践中具有竞争性能，并具有灵活的部署选项。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833670/](https://ieeexplore.ieee.org/document/9833670/)
## Surakav: Generating Realistic Traces for a Strong Website Fingerprinting Defense.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#surakav-generating-realistic-traces-for-a-strong-website-fingerprinting-defense) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#surakav-generating-realistic-traces-for-a-strong-website-fingerprinting-defense)**
### 作者
* Jiajun Gong, The Hong Kong University of Science and Technology
* Wuqi Zhang, The Hong Kong University of Science and Technology
* Charles Zhang, The Hong Kong University of Science and Technology
* Tao Wang, Simon Fraser University
### 摘要
> 网站指纹识别（WF）攻击利用加密网络流量的大小和时序信息推测用户的浏览活动，对Tor等增强隐私技术构成巨大威胁；然而，由于现有的防御措施不足以证明其有效性，Tor尚未采用任何防御措施。一些防御措施已被新型攻击所克服，其他防御措施从未在真实开放环境中实施和测试。本文提出了一种名为Surakav的可调节和实用的防御措施，有效抵御WF攻击，并具有合理的开销。Surakav利用生成对抗网络（GAN）生成真实的发送模式，根据样本模式控制缓冲数据。我们实现了Surakav，并在实时Tor网络上进行了评估实验。实验证明，Surakav能够将攻击者的真阳性率降低57%，数据开销为55%，时间开销为16%，相比FRONT节省了42%的数据开销。在重量级设置中，Surakav优于已知最强的防御措施Tamaraw，仅需50%的数据和时间开销就能将攻击者的真阳性率降至仅有8%。我们还表明，现有的防御措施Walkie-Talkie和TrafficSliver可以通过我们基于GAN的跟踪生成器加强防护。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833722/](https://ieeexplore.ieee.org/document/9833722/)
## Wobfuscator: Obfuscating JavaScript Malware via Opportunistic Translation to WebAssembly.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wobfuscator-obfuscating-javascript-malware-via-opportunistic-translation-to-webassembly) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#wobfuscator-obfuscating-javascript-malware-via-opportunistic-translation-to-webassembly)**
### 作者
* Alan Romano, University at Buffalo, SUNY Buffalo, United States
* Daniel Lehmann, University of Stuttgart, Stuttgart, Germany
* Michael Pradel, University of Stuttgart, Stuttgart, Germany
* Weihang Wang, University at Buffalo, SUNY Buffalo, United States
### 摘要
> 为了保护网络用户免受恶意JavaScript代码的侵害，提出了各种恶意软件检测器，这些检测器分析和分类代码是否为恶意或善意。目前最先进的检测器只关注JavaScript作为唯一的目标语言。然而，WebAssembly为攻击者提供了一种新的、未经探索的逃避恶意软件检测器的机会。本文介绍了Wobfuscator，这是一种通过将计算的部分移入WebAssembly来逃避静态JavaScript恶意软件检测的技术。该技术的核心是一组代码转换，将JavaScript中实现的精心选择的行为的部分转换成WebAssembly。这种方法是机会主义的，它在恶意软件检测中使用WebAssembly是有益的，而不会损害代码的正确性。通过对包含43,499个恶意JavaScript文件和149,677个善意JavaScript文件以及六个常用JavaScript库的数据集进行评估，我们的方法有效地避开了最先进的、基于学习的静态恶意软件检测器；混淆是语义保持的；我们的方法开销小，使其适用于实际应用程序。通过指出当前恶意软件检测器的局限性，我们的工作激励了对网络中多语言恶意软件检测的未来努力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833626/](https://ieeexplore.ieee.org/document/9833626/)
## The State of the SameSite: Studying the Usage, Effectiveness, and Adequacy of SameSite Cookies.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#the-state-of-the-samesite-studying-the-usage-effectiveness-and-adequacy-of-samesite-cookies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#the-state-of-the-samesite-studying-the-usage-effectiveness-and-adequacy-of-samesite-cookies)**
### 作者
* Soheil Khodayari, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 基于Chromium的浏览器现在通过更改cookies的默认策略将其范围限制在同一站点上下文中，从而要求开发人员调整他们的网站。目前还没有研究关于SameSite策略的采用和有效性的情况，本文对SameSite cookie策略的现状进行了首次评估。我们进行了一系列大规模、长期、自动化和手动测量，涵盖了Alexa排名前1K、10K、100K和500K的网站，涵盖了SameSite的使用情况以及新的默认策略引起的跨站点功能中断。此外，我们还对新的默认Lax策略的有效性进行了广泛评估，研究了Lax策略提供的覆盖范围的适当性以及网站开发人员错误引起的绕过问题。研究结果显示，采用SameSite策略的网站增长在执行日期后大大放缓。然后，新的默认Lax策略影响了约19%没有明确SameSite策略的跨站请求实现的功能，其中大部分是在线广告。第三，我们的研究观察到Lax覆盖的请求上下文与实际被网站使用的请求上下文之间存在显著不匹配，这使得在Tumblr、Twitch、SoundCloud、Mailchimp和Pixiv等流行网站上也可以进行XS攻击。即使使用Lax或Strict策略，它们的大部分有效性仍取决于开发人员对SameSite策略影响的认识，他们可能引入漏洞或不一致的策略，从而导致SameSite策略绕过。例如，我们发现了IMDB、Paypal和Meetup的绕过情况。此外，我们还发现了广泛的SSO IdP滥用行为，攻击者可以利用这种滥用来攻击目标网站，即使使用更严格的SameSite策略也无法阻止。最后，在本文中，我们还研究了流行浏览器中的SameSite实现以及Web框架的默认配置。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833637/](https://ieeexplore.ieee.org/document/9833637/)
## IRQDebloat: Reducing Driver Attack Surface in Embedded Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irqdebloat-reducing-driver-attack-surface-in-embedded-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irqdebloat-reducing-driver-attack-surface-in-embedded-devices)**
### 作者
* Zhenghao Hu, New York University
* Brendan Dolan-Gavitt, New York University
### 摘要
> 嵌入式和物联网设备通常配备了各种硬件功能，但特定的终端用户可能只使用其中的一小部分。然而，即使未使用的硬件功能也伴随着潜在存在漏洞的驱动程序代码，这增加了设备的攻击面。本文介绍了 IRQDebloat，它是一种通过自动化固件重写来禁用不需要的硬件功能的系统。基于外部输入通常通过中断请求 (IRQs) 传送到系统的洞察力，IRQDebloat 系统地探索目标固件中的中断处理代码，确定每个外设的处理函数，并最终重写目标固件以禁用对应于不需要的硬件功能的处理函数。在我们的实验中，我们通过在四种不同的操作系统 (Linux、FreeBSD、VxWorks 和 RiscOS) 和七个不同的嵌入式平台上识别 IRQ 处理程序，并在真实硬件 (树莓派和 Valve Steam Link) 上禁用所选外设，证明了 IRQDebloat 的有效性和通用性。在 Steam Link 上，我们调查了攻击面，并发现禁用所选的外设可以堵塞过去五年内在 Linux 内核中发现的高达 44 个 CVE。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833695/](https://ieeexplore.ieee.org/document/9833695/)
## Finding SMM Privilege-Escalation Vulnerabilities in UEFI Firmware with Protocol-Centric Static Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-smm-privilege-escalation-vulnerabilities-in-uefi-firmware-with-protocol-centric-static-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#finding-smm-privilege-escalation-vulnerabilities-in-uefi-firmware-with-protocol-centric-static-analysis)**
### 作者
* Jiawei Yin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Menghao Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Wei Wu, Huawei Technologies
* Dandan Sun, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Jianhua Zhou, UNSW Sydney; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Wei Huo, UNSW Sydney; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Jingling Xue, UNSW Sydney
### 摘要
> 统一可扩展固件接口（UEFI）提供了操作系统（OS）与底层平台固件之间软件接口的规范。其中提供的运行时服务似乎安全，因为它们位于系统管理模式（SMM）的ring-2级别，比ring 0级别的OS内核具有更高的特权。然而，已知它们的软件漏洞可被利用以进行ring 0到ring-2特权升级，即SMM特权升级攻击。在本文中，我们介绍了一种用于检测UEFI固件中SMM特权升级漏洞的有效静态分析框架。我们对这类漏洞进行了系统研究，并确定了它们的根本原因是两种可以逃离SMRAM的引用类型，即遗留引用和无意引用。现有的静态分析方法无法有效检测剥离了商用UEFI固件镜像中的这些漏洞，这些固件是基于自定义回调机制开发的，该机制根据GUID标识将可调用函数组织到协议中。通过利用这种基于回调的编程范式，我们引入了SPENDER，这是第一个静态检测框架，它基于一种新颖的协议中心分析方法，能够高效准确地发现UEFI固件中潜在的SMM特权升级漏洞。我们从八家供应商收集了1148个UEFI二进制文件，在这些文件中，SPENDER成功发现了36个SMM特权升级漏洞（包括两个已知的一天漏洞和34个零天漏洞），这些漏洞可能导致任意代码执行和任意地址写入（从而允许攻击者将启动装入到闪存驱动器中）。我们已向供应商报告了这36个漏洞，其中两个已知的一天漏洞已被确认为之前已知，而34个零天漏洞被确认为新漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833723/](https://ieeexplore.ieee.org/document/9833723/)
## Mind the Gap: Studying the Insecurity of Provably Secure Embedded Trusted Execution Architectures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mind-the-gap-studying-the-insecurity-of-provably-secure-embedded-trusted-execution-architectures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#mind-the-gap-studying-the-insecurity-of-provably-secure-embedded-trusted-execution-architectures)**
### 作者
* Marton Bognar, imec-DistriNet, KU Leuven, Leuven, Belgium
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Frank Piessens, imec-DistriNet, KU Leuven, Leuven, Belgium
### 摘要
> 一个系统的安全性声明可以通过不同种类的证据来支持或者驳斥。一方面，攻击研究使用经验证据，实验数据和归纳方法来驳斥安全性声明。如果有积极和有能力的攻击者无法成功突破特定的安全性质，这提供了一些支持（但不能确定证明）系统是安全的。另一方面，形式化方法使用数学推导的方法来证明系统模型的安全性。构建证明的过程可以发现可以修复的漏洞。形式化方法的使用非常强大，而且令人信服，因为它似乎提供了确凿的安全证据。然而，这些证据仅适用于数学模型，而不适用于任何实际系统，因此，了解模型和实际系统之间的差距非常重要。
> 
> 在本文中，我们提出了一个案例研究，以检验两个使用形式化方法来证明安全性质的嵌入式安全架构之间的差距。尽管安全性有强有力的形式化证据，但我们发现了很多攻击其实现的攻击，而这些攻击都是对确证的安全性质的反证。这些攻击从利用简单的编程错误到一种新型的基于DMA的侧信道攻击不等。简单的攻击证明了系统和证明的构建容易出错，而一些更复杂的攻击则作为示例，表明形式化方法本身不能保证真实世界系统的安全性。
> 
> 从我们的案例研究中，我们还总结出了关于如何为系统提供更强的安全证据的可操作指南。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833735/](https://ieeexplore.ieee.org/document/9833735/)
## How Not to Protect Your IP - An Industry-Wide Break of IEEE 1735 Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-not-to-protect-your-ip-an-industry-wide-break-of-ieee-1735-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#how-not-to-protect-your-ip-an-industry-wide-break-of-ieee-1735-implementations)**
### 作者
* Julian Speith, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Florian Schweins, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Maik Ender, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Marc Fyrbiak, Max Planck Institute for Security and Privacy, Bochum, Germany
* Alexander May, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany; Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
### 摘要
> 现代硬件系统由各种第三方知识产权（IP）核心组成，以实现其整体功能。由于硬件设计是一个涉及各种（不可信）利益相关者的全球化过程，为了保护IP免受未经授权的访问和修改，必然需要对作者和用户之间的有价值的IP进行安全管理。为此，广泛采用IEEE标准1735-2014来确保机密性和完整性。本文概述了IEEE 1735中存在的结构弱点，由于当代硬件设计过程的限制，无法通过加密解决方案进行修复，从而使得该标准本质上不安全。我们通过从主要的电子设计自动化（EDA）工具供应商，即Intel、Xilinx、Cadence、Siemens、Microsemi和Lattice中恢复IEEE 1735实现的私钥来实际演示了这些弱点，而第七个案例研究的结果被保留。因此，我们可以解密、修改和重新加密为各个工具设计的所有据称受保护的IP核心，从而导致整个行业的破裂。作为这一分析的一部分，我们首次公开披露了三个基于RSA的白盒方案，这些方案在实际产品中被使用，并为所有这些方案提出了密码分析攻击，最终导致密钥恢复。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833605/](https://ieeexplore.ieee.org/document/9833605/)
## Hardening Circuit-Design IP Against Reverse-Engineering Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardening-circuit-design-ip-against-reverse-engineering-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardening-circuit-design-ip-against-reverse-engineering-attacks)**
### 作者
* Animesh Chhotaray, University of Florida
* Thomas Shrimpton, University of Florida
### 摘要
> 隐藏设计技术是学术界和工业界努力保护电子电路免受反向工程的中心任务。然而，这些技术缺乏一个原则性的基础来指导它们的设计和安全评估，导致了一系列失效的方案。在本文中，我们开始建立这个缺失的基础。我们为设计隐藏（DH）方案建立了正式的语法，这是一个加密原语，包括所有已知的在电路交付给（可能具有敌对意图的）晶圆厂进行制造之前的设计阶段中隐藏电路的方法。我们为此原语提供了两个安全概念：功能恢复（FR）和密钥恢复（KR）。前者是设计隐藏方法的明显目标，即防止对电路功能进行逆向工程，但大部分先前的研究都集中在后者上。然后，我们提出了第一个经过证明的（FR，KR）安全的DH方案，${OneChaff}_{hd}$。我们的安全证明的一个附带好处是一个用于分析一类广泛的新DH方案的框架。最后，我们详细解释了我们的主要安全结果，以提供参数设置指导。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833634/](https://ieeexplore.ieee.org/document/9833634/)
## Evaluating Physical-Layer BLE Location Tracking Attacks on Mobile Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#evaluating-physical-layer-ble-location-tracking-attacks-on-mobile-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#evaluating-physical-layer-ble-location-tracking-attacks-on-mobile-devices)**
### 作者
* Hadi Givehchian, UC San Diego
* Nishant Bhaskar, UC San Diego
* Eliana Rodriguez Herrera, UC San Diego
* Héctor Rodrigo López Soto, UC San Diego
* Christian Dameff, UC San Diego
* Dinesh Bharadia, UC San Diego
* Aaron Schulman, UC San Diego
### 摘要
> 移动设备越来越多地充当无线跟踪信标。使用蓝牙低功耗（BLE）协议，如智能手机和智能手表等移动设备持续发射信标，以将设备位置信息传达给被动侦听者，用于应用程序，如COVID-19数字接触追踪，甚至寻找丢失的设备。这些应用程序使用了加密匿名技术，限制了对手敌人利用这些信标跟踪用户的能力。然而，攻击者可以通过对特定设备传输中独特的物理层瑕疵进行指纹识别来绕过这些防御措施。我们凭经验证明，有几个关键挑战可能限制攻击者找到稳定的物理层标识符以唯一识别使用BLE的移动设备，包括BLE芯片组的硬件设计变化，传输功率水平的差异，热环境条件的不同以及可以广泛部署以捕获原始物理层信号的廉价无线电的局限性。我们通过对数百个无控制的BLE设备进行大规模实地研究，了解了每个因素在指纹识别中的限制程度，揭示了物理层识别是攻击者追踪移动设备的一种可行但有时不可靠的方式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833758/](https://ieeexplore.ieee.org/document/9833758/)
## IRShield: A Countermeasure Against Adversarial Physical-Layer Wireless Sensing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irshield-a-countermeasure-against-adversarial-physical-layer-wireless-sensing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#irshield-a-countermeasure-against-adversarial-physical-layer-wireless-sensing)**
### 作者
* Paul Staat, Max Planck Institute for Security and Privacy, Bochum, Germany
* Simon Mulzer, Ruhr University Bochum, Bochum, Germany
* Stefan Roth, Ruhr University Bochum, Bochum, Germany
* Veelasha Moonsamy, Ruhr University Bochum, Bochum, Germany
* Markus Heinrichs, TH Köln – University of Applied Sciences, Cologne, Germany
* Rainer Kronberger, TH Köln – University of Applied Sciences, Cologne, Germany
* Aydin Sezgin, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 无线电信道被认为含有关于周围传播环境的信息，这些信息可以通过已建立的无线感知方法提取出来。因此，现今普及的无线设备成为被动窃听者发起侦察攻击的有吸引力的目标。特别是通过窃听标准通信信号，窃听者可以获得关于无线信道的估计，这可以泄露有关室内环境的敏感信息。例如，通过应用简单的统计方法，对手可以从无线信道观测中推断出人体运动，从而远程监视受害者的场所。在这项工作中，基于智能反射表面（IRS）的发展，我们提出了IRShield作为对抗敌对无线感知的一种新型对策。IRShield被设计为一种即插即用的保护隐私扩展，可以与现有的无线网络兼容。在IRShield的核心部分，我们设计了一种IRS配置算法来混淆无线信道。我们通过大量的实验评估来验证其有效性。在使用现成的Wi-Fi设备进行最先进的人体运动检测攻击中，IRShield将检测率降低到5%或更低。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833676/](https://ieeexplore.ieee.org/document/9833676/)
## Anti-Tamper Radio: System-Level Tamper Detection for Computing Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#anti-tamper-radio-system-level-tamper-detection-for-computing-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#anti-tamper-radio-system-level-tamper-detection-for-computing-systems)**
### 作者
* Paul Staat, Max Planck Institute for Security and Privacy, Bochum, Germany
* Johannes Tobisch, Max Planck Institute for Security and Privacy, Bochum, Germany
* Christian Zenger, PHYSEC GmbH, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 当对处理或包含敏感数据的计算系统进行物理访问时，敌对势力能够实施一系列攻击。例如，侧信道分析、总线探测、设备克隆或植入硬件木马等。要防御此类攻击被认为是一个具有挑战性的尝试，需要使用反篡改解决方案来监测系统的物理环境。现有的解决方案从简单的开关（用于检测机箱是否被打开）到提供更细粒度完整性违规检测的导电材料网格等。然而，这些解决方案在物理安全性和可靠性、成本以及制造难度之间存在复杂的权衡。在这项工作中，我们证明封闭复杂几何系统中的无线电波传播对抗敌对物理操作非常敏感。我们提出了一种名为反篡改无线电（ATR）的解决方案作为篡改检测的方法，该方法结合了高检测灵敏度和可靠性以及易于使用的特点。ATR不断监测金属机箱边界内无线信号传播行为。篡改尝试（如插入外部物体）将改变观察到的无线电信号响应，并随后引发警报。ATR原则适用于需要物理安全性的许多计算系统，例如服务器、自动取款机（ATM）和智能电表。作为案例研究，我们使用了19英寸服务器并对ATR的能力和局限性进行了详细研究。使用自制的自动探测站，我们模拟插入针筒进行探测攻击，以高精度插入受保护环境中。我们的实验结果表明，在理想条件下，我们的ATR实现可以检测到直径为0.1mm的16mm插入针筒。在运行中的19英寸服务器的更实际的环境中，我们展示了对直径为1mm的40mm插入针筒进行连续10天可靠检测的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833631/](https://ieeexplore.ieee.org/document/9833631/)
## Practical EMV Relay Protection.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-emv-relay-protection) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-emv-relay-protection)**
### 作者
* Andreea-Ina Radu, University of Birmingham, UK
* Tom Chothia, University of Birmingham, UK
* Christopher J.P. Newton, University of Surrey, UK
* Ioana Boureanu, University of Surrey, UK
* Liqun Chen, University of Surrey, UK
### 摘要
> 中继攻击者可以在非接触式EMV银行卡和商店读卡器之间转发消息，从而实现无线扒窃资金。为了防止这种情况发生，Apple Pay要求用户使用指纹或面容ID进行支付授权，而Mastercard和Visa提出了协议来阻止此类中继攻击。我们调查了交通支付模式，并发现我们可以利用中继来绕过Apple Pay的锁屏功能，通过锁定的iPhone向任意EMV读卡器支付任意金额，而无需用户授权。我们展示了绕过Visa提出的中继对策的方法，该方法使用了Rooted智能手机。我们分析了Mastercard的中继保护，并表明其时序边界可以更可靠地在ISO 14443协议级别上施加，而不是在EMV协议级别上。基于这些认识，我们提出了一种新的EMV中继抵抗协议（L1RP）。我们使用Tamarin证明器来建模具有和不具有用户认证以及不同支付模式的手机支付，并正式验证了由Apple和Visa提出的我们攻击的解决方案，并且验证了我们提出的协议提供了免受中继攻击的保护。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833642/](https://ieeexplore.ieee.org/document/9833642/)
## AccEar: Accelerometer Acoustic Eavesdropping with Unconstrained Vocabulary.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#accear-accelerometer-acoustic-eavesdropping-with-unconstrained-vocabulary) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#accear-accelerometer-acoustic-eavesdropping-with-unconstrained-vocabulary)**
### 作者
* Pengfei Hu, Shandong University, China
* Hui Zhuang, Shandong University, China
* Panneer Selvam Santhalingam, George Mason University, USA
* Riccardo Spolaor, Shandong University, China
* Parth Pathak, George Mason University, USA
* Guoming Zhang, Shandong University, China
* Xiuzhen Cheng, Shandong University, China
### 摘要
> 随着语音应用的日益普及，声学窃听已经成为用户隐私的严重威胁。在智能手机上，对麦克风的访问需要明确的用户权限，但声学窃听攻击可以利用运动传感器（如加速度计和陀螺仪），其访问是无限制的。然而，先前的这类攻击只能识别有限的一组预训练的单词或短语。在本文中，我们提出了AccEar，一种基于加速度计的声学窃听攻击，可以重建任何在智能手机扬声器上播放的音频，词汇没有限制。我们展示了攻击者可以利用条件生成对抗网络（cGAN）从低频加速度计信号中重建高保真音频。所呈现的cGAN模型通过谱图增强学习从低频加速度计信号中重新创建用户语音的高频分量。我们使用来自16位公众人物的音频在一系列实验中评估了AccEar攻击的可行性和有效性。根据客观和主观评估的结果，AccEar成功地在包括不同采样率、音频音量、设备型号等不同场景中，从加速度计信号中重建用户的演讲。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833716/](https://ieeexplore.ieee.org/document/9833716/)
## Towards Automated Auditing for Account and Session Management Flaws in Single Sign-On Deployments.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#towards-automated-auditing-for-account-and-session-management-flaws-in-single-sign-on-deployments) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#towards-automated-auditing-for-account-and-session-management-flaws-in-single-sign-on-deployments)**
### 作者
* Mohammad Ghasemisharif, University of Illinois at Chicago
* Chris Kanich, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 单点登录（SSO）是现代网络上用户认证和授权的核心和关键组成部分，由于经常与基于凭证的身份验证一起提供给Web和移动应用程序，以促进帐户创建和登录过程，因此它经常由Web和移动应用程序提供。然而，本地帐户管理和后端SSO功能之间的相互作用会导致漏洞，从而使帐户劫持攻击成为可能或加剧。这些漏洞不是实际SSO协议的固有问题，而是由于支持分离但交织在一起的身份验证路径的复杂性而产生。因此，这些类型的漏洞无法通过之前提出的SSO协议或实现验证工具进行检测。在本文中，我们介绍了SAAT，这是一个完全自动化的模块化框架，评估使用Facebook作为IdP的依赖方（RPs）是否符合安全实践和指南，并揭示由SSO和本地功能的相互作用引起的帐户和会话管理中的漏洞。我们对Facebook的RPs进行了大规模的身份验证和会话实践探索，发现一个不稳定的生态系统，其中SSO支持可能会突然中断，并且17.6%的测试RPs展示了非功能性的SSO实现。这凸显了通过SAAT可能实现的对SSO生态系统进行持续和系统化测试的需要。更为重要的是，我们发现安全措施通常缺失，官方指南经常被忽视或配置错误，仅有0.8%的RPs完全启用重新认证功能，从而可以防止劫持身份提供者（IdP）的Cookie进行威胁。我们的研究还表明，不到2%的RPs正确地对SSO撤销做出了反应，67%的RPs即使在撤销后10天仍继续允许帐户访问。总的来说，我们将我们的框架视为一个工具，可以通过主要的SSO身份提供者广泛推动并指导修复工作，这在过去由于这个生态系统的庞大规模和固有的可变性而是不可行的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833753/](https://ieeexplore.ieee.org/document/9833753/)
## HARDLOG: Practical Tamper-Proof System Auditing Using a Novel Audit Device.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardlog-practical-tamper-proof-system-auditing-using-a-novel-audit-device) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hardlog-practical-tamper-proof-system-auditing-using-a-novel-audit-device)**
### 作者
* Adil Ahmad, Purdue University
* Sangho Lee, Microsoft Research
* Marcus Peinado, Microsoft Research
### 摘要
> 审计系统在企业机器上维护了安全相关事件的详细日志，以对潜在的事件进行取证分析。原则上，这些日志应该在生成后立即存储在安全位置（例如网络存储中），但这会导致被监视的机器严重减速。因此，现有的审计系统异步地保护批量日志（例如，在数十秒后），但这使攻击者可以篡改未受保护的日志。本文介绍了HARDLOG，一个实用且有效的系统，利用了一种新颖的审计设备，以最小的性能减速提供精细化的日志保护。HARDLOG实现了关键性意识的日志保护：它确保日志在发生罕见的安全关键事件之前在审计设备中同步保护，但在频繁的非关键事件中，日志则是异步保护以最小化性能开销。重要的是，即使在非关键事件中，HARDLOG也确保有界异步保护：它使用众所周知的实时技术在日志条目创建后的极小、有界延迟内将其发送到审计设备。为了展示HARDLOG的有效性，我们使用商品组件制作了一个审计设备原型，并为Linux实现了一个参考审计系统。我们的原型在非关键事件上实现了有界保护延迟的15毫秒，并且在关键事件上实现了无延迟的保护。我们还表明，对于不同的真实世界程序，HARDLOG仅引入了6.3%的平均性能减速，因此适用于许多真实世界的部署场景。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833745/](https://ieeexplore.ieee.org/document/9833745/)
## SWARMFLAWFINDER: Discovering and Exploiting Logic Flaws of Swarm Algorithms.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#swarmflawfinder-discovering-and-exploiting-logic-flaws-of-swarm-algorithms) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#swarmflawfinder-discovering-and-exploiting-logic-flaws-of-swarm-algorithms)**
### 作者
* Chijung Jung, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Ali Ahad, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Yuseok Jeon, Department of Computer Science and Engineering, UNIST, Ulsan, South Korea
* Yonghwi Kwon, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
### 摘要
> 灵感来自自然中的群集行为，群集机器人技术已经发展起来，用于执行各种具有挑战性的任务，例如环境监测、灾难恢复、物流甚至军事行动。尽管群集机器人对社会具有重要潜力的影响，但对抗群集机器人的敌对情景相对较少关注。本文探索了一种系统性的方法，以发现对手能够利用的群集机器人算法中的逻辑缺陷。具体而言，我们开发了一个自动化测试系统SWARMFLAWFINDER，用于测试群集算法。我们在理解和推理群集算法执行方面面临各种挑战，并克服了这些挑战。特别是，我们提出了一种新颖的机器人行为抽象，称之为因果贡献度（DCC），基于反事实因果关系的想法。然后，我们构建了一个反馈引导的灰盒模糊测试系统SWARMFLAWFINDER，利用DCC作为反馈指标。我们使用四个执行导航、搜索和救援任务的群集算法评估了SWARMFLAWFINDER。SWARMFLAWFINDER发现了42个逻辑缺陷（并且这些缺陷全部被开发者确认），这些缺陷揭示了群集算法存在关键的逻辑错误/漏洞或者受到不完整实现的影响，这些都可以被敌对势力利用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833685/](https://ieeexplore.ieee.org/document/9833685/)
## PGPatch: Policy-Guided Logic Bug Patching for Robotic Vehicles.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pgpatch-policy-guided-logic-bug-patching-for-robotic-vehicles) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#pgpatch-policy-guided-logic-bug-patching-for-robotic-vehicles)**
### 作者
* Hyungsub Kim, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 自动程序修复（APR）方法的目标是在尽量少的人工干预下，找出给定错误的补丁并应用。迄今为止，现有的APR方法主要集中在修复软件错误，比如内存安全错误。然而，我们对流行的机器人车辆（RV）控制软件的分析表明，大多数错误不是内存错误，而是逻辑错误。这些错误虽然不会导致软件崩溃，但会导致RV进入非预期的物理状态（例如撞击地面）。为了修复这些逻辑错误，我们引入了PGPatch，这是一个用于RV控制程序的策略引导程序修复框架，它能够针对给定的逻辑错误识别出正确的补丁，并在没有人工干预的情况下应用。PGPatch的输入是现有或新的逻辑公式，用于发现逻辑错误。然后，它利用这些公式进行专门的动态分析，将之前已知的逻辑错误分类为补丁类型。接下来，根据识别出的补丁类型和违反的公式，它使用一种定制的算法生成源代码补丁作为输出。最后，它创建可重复的测试来验证补丁的完整性，确保补丁正确且不会降低RV的性能。我们在三个流行的RV控制软件中选取了一些错误案例对PGPatch进行评估，结果发现它能够正确修复297个逻辑错误中的258个（86.9%）。此外，我们还招募了18名经验丰富的RV开发者和用户，并进行了用户研究，证明使用PGPatch可以大大加快修复RV软件中的错误，并降低错误率。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833567/](https://ieeexplore.ieee.org/document/9833567/)
## "Flawed, but like democracy we don't have a better system": The Experts' Insights on the Peer Review Process of Evaluating Security Papers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#flawed-but-like-democracy-we-dont-have-a-better-system-the-experts-insights-on-the-peer-review-process-of-evaluating-security-papers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#flawed-but-like-democracy-we-dont-have-a-better-system-the-experts-insights-on-the-peer-review-process-of-evaluating-security-papers)**
### 作者
* Ananta Soneji, Arizona State University, Corpus Christi
* Faris Bugra Kokulu, Arizona State University, Corpus Christi
* Carlos Rubio-Medrano, Texas A&M University, Corpus Christi
* Tiffany Bao, Arizona State University, Corpus Christi
* Ruoyu Wang, Arizona State University, Corpus Christi
* Yan Shoshitaishvili, Arizona State University, Corpus Christi
* Adam Doupé, Arizona State University, Corpus Christi
### 摘要
> 学术计算机安全领域一直将同行评审视为科学出版和传播的重要组成部分，该过程通过内部交流和直觉的有机生长和养分，而非可重复的实验和调查。最近，关键的学术界成员公开表达了他们对这一进程的一系列担忧。为了支持或否定其中一些担忧，本文首次提出了一项定性研究，以考察计算机安全领域的同行评审过程。通过对21位程序委员会成员进行半结构化访谈，我们系统地收集了审稿人对顶级安全会议上论文评估的见解，并调查了他们对当前安全同行评审系统的担忧。根据收集到的数据，我们确定了安全评审系统中的几个问题：其中一些问题之前已被学术界观察到（例如，审稿人决策的随机性），而其他问题（例如，审稿人对拒绝论文的评价指标有更多多样和具体的意见）是我们的研究中首次观察到的。最后，通过一系列建议，我们旨在鼓励共同建立社区规范，从而显著改善安全同行评审过程。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833581/](https://ieeexplore.ieee.org/document/9833581/)
## SoK: Social Cybersecurity.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-social-cybersecurity) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-social-cybersecurity)**
### 作者
* Yuxi Wu, Georgia Institute of Technology
* W. Keith Edwards, Georgia Institute of Technology
* Sauvik Das, Georgia Institute of Technology
### 摘要
> 我们分析了社会网络安全方面的先前工作，并根据其与四个与安全和隐私相关的社会行为的相关性进行了分类：（1）协商共享资源的权限，（2）共享和社会身份验证，（3）管理自我呈现，以及（4）影响他人的安全和隐私行为。我们进一步将这些领域分为四个不同的社会距离尺度-亲密、个人、社会和公共，并展示了在这些社会距离尺度上所需的访问控制策略、身份验证方法以及隐私和共享偏好的差异。我们通过Ackerman的社会技术鸿沟的社交计算系统镜头来评估当前的研究现状，发现虽然社会行为明显影响了安全和隐私的偏好和需求，但现有的安全和隐私系统在设计上对这些行为的理解很少。这种不匹配迫使用户在实施理想的安全和隐私政策与减少社会摩擦之间做出选择。为了解决这种不匹配，我们提出了一个研究议程，通过更好地对齐安全和隐私目标与社会需求、偏好和行为。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833757/](https://ieeexplore.ieee.org/document/9833757/)
## Committed to Trust: A Qualitative Study on Security & Trust in Open Source Software Projects.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#committed-to-trust-a-qualitative-study-on-security-trust-in-open-source-software-projects) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#committed-to-trust-a-qualitative-study-on-security-trust-in-open-source-software-projects)**
### 作者
* Dominik Wermke, CISPA Helmholtz Center for Information Security, Germany
* Noah Wöhler, CISPA Helmholtz Center for Information Security, Germany
* Jan H. Klemmer, Leibniz University Hannover, Germany
* Marcel Fourné, Max Planck Institute for Security and Privacy, Germany
* Yasemin Acar, George Washington University, United States
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Germany
### 摘要
> 开源软件在许多软件生态系统中扮演着重要角色。无论是在操作系统、网络堆栈还是底层系统驱动程序中，我们每天都会遇到充满开源项目代码贡献的软件。分散式开发和开放合作在开源项目中引入了独特的挑战：来自未知实体的代码提交、有限的人力进行提交或依赖项审核，并使新贡献者了解项目的最佳实践和流程。
> 
> 在27个深入的、半结构化的面试中，我们与来自各种不同开源项目的所有者、维护者和贡献者调查了他们的安全和信任做法。为此，我们探讨了项目的幕后过程、提供的指导方针和策略，以及事件处理和遇到的挑战。我们发现参与者的项目在部署的安全措施和信任流程方面都非常多样化，以及它们的基本动机。基于我们的发现，我们讨论了对开源软件生态系统的影响，以及研究界如何更好地支持开源项目的信任和安全考虑。总体而言，我们主张以考虑它们的个体优势和局限为重点来支持开源项目，特别是在贡献者数量较少、资源有限的小型项目的情况下。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833686/](https://ieeexplore.ieee.org/document/9833686/)
## Membership Inference Attacks From First Principles.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#membership-inference-attacks-from-first-principles) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#membership-inference-attacks-from-first-principles)**
### 作者
* Nicholas Carlini, Google Research
* Steve Chien, Google Research
* Milad Nasr, Google Research; University of Massachusetts, Amherst
* Shuang Song, Google Research
* Andreas Terzis, Google Research
* Florian Tramèr, Google Research
### 摘要
> 成员推断攻击允许对一个经过训练的机器学习模型进行查询，以预测某个特定示例是否包含在模型的训练数据集中。当前对这些攻击的评估使用的是平均情况下的“准确性”指标，未能表征攻击是否能够自信地识别出训练集中的任何成员。我们认为，攻击应该通过计算在低（例如≤0.1%）虚报率条件下的真阳性率来进行评估，并发现大多数先前的攻击在这种方式下表现不佳。为了解决这个问题，我们开发了一种称为“似然比攻击”（LiRA）的方法，该方法精心地结合了文献中的多种思想。我们的攻击在低虚报率条件下的性能是先前攻击的10倍，并且在现有指标下严格优于先前的攻击方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833649/](https://ieeexplore.ieee.org/document/9833649/)
## DeepCoFFEA: Improved Flow Correlation Attacks on Tor via Metric Learning and Amplification.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcoffea-improved-flow-correlation-attacks-on-tor-via-metric-learning-and-amplification) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deepcoffea-improved-flow-correlation-attacks-on-tor-via-metric-learning-and-amplification)**
### 作者
* Se Eun Oh, Ewha Womans University
* Taiji Yang, University of Minnesota
* Nate Mathews, Rochester Institute of Technology
* James K Holland, University of Minnesota
* Mohammad Saidur Rahman, Rochester Institute of Technology
* Nicholas Hopper, University of Minnesota
* Matthew Wright, Rochester Institute of Technology
### 摘要
> 端到端流量相关攻击是已知最古老的针对低延迟匿名网络的攻击之一，被视为Tor流量分析的核心原语。然而，尽管最近的研究表明个别流量可以高准确度地相关，但即使是最先进的攻击的影响也有疑问，因为存在一个中心缺点：它们是成对的，需要比对N个用户的N <sup>2</sup> 对流量。这导致计算需求的组合爆炸和指数级下降的基准率，导致高假阳性数量或成功相关的几率非常小。在本文中，我们介绍了一种新颖的流量相关攻击，DeepCoFFEA，它结合了两种思想来克服这些缺点。首先，DeepCoFFEA使用深度学习训练了一对特征嵌入网络，分别将Tor和出口流量映射到一个低维空间中，其中相关的流量是相似的；嵌入的流量对可以以比完整跟踪对更低的成本进行比较。其次，DeepCoFFEA使用放大技术，将流量分为短窗口，并通过这些窗口的投票显著减少了假阳性；可以使用相同的嵌入网络随着窗口数量的增加，独立地降低假阳性率。我们进行了全面的实验分析，结果显示DeepCoFFEA在Tor上明显优于最先进的流量相关攻击，例如，在高准确度调整时，真阳性率为93％，而至多为13％，并且比以前的工作快两个数量级。我们还考虑了几种潜在对策对DeepCoFFEA的影响，并发现现有的轻量级防御措施不足以保护匿名网络免受此威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833801/](https://ieeexplore.ieee.org/document/9833801/)
## ShorTor: Improving Tor Network Latency via Multi-hop Overlay Routing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shortor-improving-tor-network-latency-via-multi-hop-overlay-routing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#shortor-improving-tor-network-latency-via-multi-hop-overlay-routing)**
### 作者
* Kyle Hogan, MIT CSAIL
* Sacha Servan-Schreiber, MIT CSAIL
* Zachary Newman, MIT CSAIL
* Ben Weintraub, Northeastern University
* Cristina Nita-Rotaru, Northeastern University
* Srinivas Devadas, MIT CSAIL
### 摘要
> 我们提出了ShorTor，这是一种降低Tor网络延迟的协议。ShorTor利用多跳叠加路由技术，在互联网上影响Tor流量的路径选择。通过这种方式，ShorTor避免了慢速路径，通过减少连接的延迟提高了终端用户的体验，同时对带宽开销进行了最小化。ShorTor作为叠加层运行在洋葱路由之上，与Tor的现有路由协议独立，由Tor中继运行。因此，ShorTor在保留Tor现有安全属性的同时降低了延迟。具体来说，ShorTor的路径选择与Tor用户和目的地以及双方的地理位置无关。我们使用AnoA框架分析了ShorTor的安全性，证明了ShorTor保持了Tor的匿名性保证。我们通过实证分析来增强我们的理论结论。为评估ShorTor的性能，我们收集了超过40万个延迟测量数据的真实数据集，这些数据是在1000个最受欢迎的Tor中继之间进行的，这些中继共同承载了绝大部分的Tor流量。利用这些数据，我们确定了可以从ShorTor中受益的中继对：即，在两个中继之间引入额外的中间网络跳跃比直接路由之间的延迟更低。我们使用我们的测量数据集按照Tor的规范模拟对200万个Tor电路应用ShorTor的影响。ShorTor将Tor中继对的99 <sup>th</sup> 延迟降低了148毫秒。同样，ShorTor将Tor电路的99 <sup>th</sup> 延迟降低了122毫秒。实际上，这意味着ShorTor截断了Tor的尾延迟，直接影响了页面加载时间和Tor浏览器的用户体验。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833619/](https://ieeexplore.ieee.org/document/9833619/)
## Sabre: Sender-Anonymous Messaging with Fast Audits.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sabre-sender-anonymous-messaging-with-fast-audits) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sabre-sender-anonymous-messaging-with-fast-audits)**
### 作者
* Adithya Vadapalli, University of Waterloo
* Kyle Storrier, University of Calgary
* Ryan Henry, University of Calgary
### 摘要
> 我们提出了Sabre，这是一系列的发送者匿名通信协议，支持类似Twitter的匿名公告板和类似Secure Drop的邮箱。这两种变体都在保持强匿名性的同时，有潜力扩展到千万甚至更多的匿名集合。Sabre协议从Riposte和Express继承了基本结构，但是用新的对数成本审计协议替代了这些方案的线性成本审计协议。Sabre还结合了许多创新，可以在“理想”情况下将具体性能提高一个数量级或更多，同时在资源耗尽式DoS攻击情况下提供渐进性加速。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833601/](https://ieeexplore.ieee.org/document/9833601/)
## Security Foundations for Application-Based Covert Communication Channels.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-foundations-for-application-based-covert-communication-channels) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-foundations-for-application-based-covert-communication-channels)**
### 作者
* James K. Howes Iv, University of Florida, Gainesville, FL, USA
* Marios Georgiou, Galois, Inc., Portland, OR, USA
* Alex J. Malozemoff, Galois, Inc., Portland, OR, USA
* Thomas Shrimpton, University of Florida, Gainesville, FL, USA
### 摘要
> 我们引入了应用程序基础的隐蔽信道（Application-Based Covert Channel，ABCC）的概念，为描述通过现有协议隧道传递消息的隐蔽信道提供了正式的语法。我们的语法包含了许多最近的系统，包括DeltaShaper（PETS 2017）和Protozoa（CCS 2020）。我们还定义了ABCC在面对被动窃听者时安全的含义，并证明了现有审查规避系统的适当抽象满足我们的安全概念。在此过程中，我们定义了许多重要的非加密安全假设，这些假设通常在之前的研究中隐含地使用。我们相信我们的形式化方法对审查规避开发者来说可能有助于对其系统的安全性和所需的关联安全假设进行推理。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833752/](https://ieeexplore.ieee.org/document/9833752/)
## Bad Characters: Imperceptible NLP Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#bad-characters-imperceptible-nlp-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#bad-characters-imperceptible-nlp-attacks)**
### 作者
* Nicholas Boucher, University of Cambridgem, Computer Science & Technology
* Ilia Shumailov, University of Cambridge and Vector Institute
* Ross Anderson, University of Cambridge and University of Edinburgh
* Nicolas Papernot, University of Cambridge and Vector Institute
### 摘要
> 多年的研究表明，机器学习系统在理论和实践中都容易受到对抗性示例的攻击。迄今为止，这类攻击主要针对视觉模型，利用了人类和机器感知之间的差异。虽然文本模型也受到对抗性示例的攻击，但这些攻击很难保持语义意义和不可区分性。在本文中，我们探讨了一大类对抗性示例，可以在黑盒环境中攻击文本模型而不对输入进行任何可察觉的视觉修改。我们使用对人眼不可察觉的编码特定扰动，来操纵从神经机器翻译流水线到网络搜索引擎的各种自然语言处理（NLP）系统的输出。我们发现，通过单个不可察觉的编码注入（代表一个不可见字符、同形异义词、重新排序或删除），攻击者可以显著降低易受攻击模型的性能，并且通过三个注入，大多数模型可以被破坏。我们的攻击可以对当前部署的商业系统产生影响，包括微软和谷歌生产的系统，以及Facebook、IBM和HuggingFace发布的开源模型。这一系列新颖的攻击对许多语言处理系统构成了重大威胁：攻击者可以有针对性地影响系统，而不需要对底层模型做任何假设。我们得出结论，文本为基础的NLP系统需要像传统应用程序一样进行输入清理，鉴于这些系统正在迅速大规模部署，建筑师和运营商需要紧急关注。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833641/](https://ieeexplore.ieee.org/document/9833641/)
## LINKTELLER: Recovering Private Edges from Graph Neural Networks via Influence Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#linkteller-recovering-private-edges-from-graph-neural-networks-via-influence-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#linkteller-recovering-private-edges-from-graph-neural-networks-via-influence-analysis)**
### 作者
* Fan Wu, University of Illinois at Urbana-Champaign
* Yunhui Long, University of Illinois at Urbana-Champaign
* Ce Zhang, ETH Zürich
* Bo Li, University of Illinois at Urbana-Champaign
### 摘要
> 图结构化数据在推荐系统和交通预测等应用中取得了成功，由于具有丰富的节点特征和边信息。然而，这些高维特征和高阶邻接信息通常是异构的，并由不同的数据持有者在实践中持有。考虑到这种垂直数据分区（例如，一个数据持有者只拥有节点特征或边信息），不同的数据持有者必须制定有效的联合训练协议，并且不能直接将数据传输给对方，以防隐私泄露。本文关注边隐私，并考虑了一种训练场景：数据持有者Bob拥有节点特征，首先将训练节点特征发送给拥有邻接信息的Alice。然后，Alice将使用联合信息训练图神经网络（GNN），并为Bob提供一个推理API。在推理时，Bob能够提供测试节点特征并查询API以获得测试节点的预测结果。在这种设置下，我们首先提出了一种称为LINKTELLER的隐私攻击方法，通过影响分析推断Alice持有的私有边信息，通过为Bob设计对手查询。然后，我们通过实验证明LINKTELLER能够在不同设置下（包括归纳性和推理性）恢复大量私有边，显著优于现有基准方法。为了进一步评估边缘的隐私泄漏，我们调整了一种现有算法来进行差分隐私图卷积网络（DP GCN）的训练，并提出了一种基于Laplacian机制的新型DP GCN机制LAPGRAPH来评估LINKTELLER。我们通过实验证明，在轻微的隐私保证（ε > 5）下，这些DP GCN机制在抵御LINKTELLER攻击方面并不总是具有弹性。我们的研究将为未来设计更具弹性的隐私保护GCN模型提供启示，同时深入了解GCN模型在效用和抵御潜在隐私攻击之间的权衡。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833806/](https://ieeexplore.ieee.org/document/9833806/)
## Piccolo: Exposing Complex Backdoors in NLP Transformer Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#piccolo-exposing-complex-backdoors-in-nlp-transformer-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#piccolo-exposing-complex-backdoors-in-nlp-transformer-models)**
### 作者
* Yingqi Liu, Purdue University
* Guangyu Shen, Purdue University
* Guanhong Tao, Purdue University
* Shengwei An, Purdue University
* Shiqing Ma, Rutgers University
* Xiangyu Zhang, Purdue University
### 摘要
> 通过注入后门，可以使NLP模型在输入样本中出现触发词或句子时表现异常。仅仅依靠一个主模型和少量良性样本来检测此类后门非常具有挑战性，因为NLP应用具有其独特性，比如流水线的不连续性和巨大的搜索空间。现有技术对于具有简单触发器（如单个字符/单词触发器）的后门效果良好，但在触发器和模型变得复杂（例如，变压器模型）时效果较差。我们提出了一种新的后门扫描技术。它将主模型转化为一个等效但可微分的形式。然后，它使用优化来反转表示触发器中单词出现可能性的分布。它利用一种新颖的词判别性分析来确定主模型是否对可能的触发词的存在具有特别的判别性。我们在来自TrojAI竞赛和7种最先进的复杂结构（如BERT和GPT）以及17种不同的攻击类型（包括两种最新的动态攻击）的3839个NLP模型上进行了评估，结果表明我们的技术非常有效，在大多数情况下达到了超过0.9的检测准确率，并且在性能上明显优于两种最先进的扫描器。我们在TrojAI排行榜上提交的结果在NLP后门扫描的三轮中有两轮取得了最佳表现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833579/](https://ieeexplore.ieee.org/document/9833579/)
## BadEncoder: Backdoor Attacks to Pre-trained Encoders in Self-Supervised Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#badencoder-backdoor-attacks-to-pre-trained-encoders-in-self-supervised-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#badencoder-backdoor-attacks-to-pre-trained-encoders-in-self-supervised-learning)**
### 作者
* Jinyuan Jia, Duke University
* Yupei Liu, Duke University
* Neil Zhenqiang Gong, Duke University
### 摘要
> 自我监督学习在计算机视觉中旨在使用大量无标签图像或（图像、文本）对预训练图像编码器。预训练的图像编码器可以作为特征提取器，用于使用少量或没有标记的训练数据构建许多下游任务的下游分类器。在这项工作中，我们提出了BadEncoder，这是第一个针对自我监督学习的后门攻击。具体而言，我们的BadEncoder将后门注入到预训练的图像编码器中，使得基于带有后门的图像编码器构建的不同下游任务的下游分类器同时继承后门行为。我们将BadEncoder形式化为一个优化问题，并提出了一种基于梯度下降的方法来解决它，该方法从干净的图像编码器生成带有后门的图像编码器。我们在多个数据集上进行了广泛的实证评估，结果显示我们的BadEncoder在保持下游分类器准确性的同时实现了较高的攻击成功率。我们还使用两个公开可用的实际图像编码器，即Google的在ImageNet上预训练的图像编码器和OpenAI的在从互联网收集的4亿（图像、文本）对上预训练的对比语言-图像预训练（CLIP）图像编码器展示了BadEncoder的有效性。此外，我们还考虑了包括神经净化和MNTD（经验防御）以及PatchGuard（可证明防御）在内的防御措施。我们的结果表明，这些防御措施不足以防御BadEncoder，凸显了对我们的BadEncoder的新防御措施的需求。我们的代码公开可用于：https://github.com/jjy1994/BadEncoder。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833644/](https://ieeexplore.ieee.org/document/9833644/)
## Repairing DoS Vulnerability of Real-World Regexes.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#repairing-dos-vulnerability-of-real-world-regexes) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#repairing-dos-vulnerability-of-real-world-regexes)**
### 作者
* Nariyoshi Chida, NTT Corporation / Waseda University
* Tachio Terauchi, Waseda University
### 摘要
> 在从示例中综合和修复正则表达式（简称为regex）方面已经进行了大量的工作。这些编程通过示例（PBE）方法帮助用户编写正则表达式，使其能够通过示例来反映自己的意图。然而，现有方法可能会生成匹配时间超线性且易受正则表达式拒绝服务（ReDoS）攻击的正则表达式。本文提出了第一个保证仅生成无法攻击的正则表达式的PBE修复方法。重要的是，我们的方法可以处理包含前后环视和反向引用的现实世界正则表达式。由于这些扩展，现有的仅考虑纯正则表达式的ReDoS漏洞形式定义是不充分的。因此，我们首先给出了一种新颖的形式语义和回溯匹配算法的复杂性，用于现实世界中的正则表达式，并以此为基础给出了现实世界中ReDoS漏洞的第一个形式定义。然后，我们提出了一种称为现实世界强1-不确定性的新颖条件，该条件足以保证现实世界中正则表达式的无法被攻击性，并形式化了相应的PBE修复问题。最后，我们提出了一个解决修复问题的算法。该算法在前一PBE方法的基础上进行了扩展以处理现实世界的扩展，并使用约束条件来强制实现现实世界强1-不确定性条件。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833597/](https://ieeexplore.ieee.org/document/9833597/)
## GREBE: Unveiling Exploitation Potential for Linux Kernel Bugs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#grebe-unveiling-exploitation-potential-for-linux-kernel-bugs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#grebe-unveiling-exploitation-potential-for-linux-kernel-bugs)**
### 作者
* Zhenpeng Lin, The Pennsylvania State University
* Yueqi Chen, The Pennsylvania State University
* Yuhang Wu, The Pennsylvania State University
* Dongliang Mu, School of Cyber Science and Engineering, HUST
* Chensheng Yu, George Washington University
* Xinyu Xing, Northwestern University
* Kang Li, Baidu, USA
### 摘要
> 现如今，动态测试工具在发现Linux内核中的bug方面起到了极大的加速作用。在揭示内核bug时，它们会自动生成报告，指明Linux遇到的错误。报告中的错误暗示了对应内核bug的可能被利用性。因此，许多安全分析师使用报告中的错误来推测bug的被利用性，从而优先考虑其漏洞利用的开发工作。然而，使用报告中的错误，安全研究人员可能会低估bug的被利用性。报告中展示的错误可能取决于触发bug的方式。通过不同的路径或不同的上下文，一个bug可能表现出各种错误行为，暗示着非常不同的利用潜力。本研究提出了一种新的内核fuzzing技术，以探索内核bug可能带来的所有可能的错误行为。与集中于内核代码覆盖率的传统内核fuzzing技术不同，我们的fuzzing技术更加专注于有错误的代码片段。它引入了一种基于对象的内核fuzzing技术，以探索触发报告的bug的各种上下文和路径，使bug表现出各种错误行为。通过新展示的错误，安全研究人员可以更好地推断bug的可能被利用性。为了评估我们提出的技术的有效性、效率和影响力，我们将我们的fuzzing技术实现为一个名为GREBE的工具，并将其应用于60个真实的Linux内核bug。平均而言，GREBE可以为每个内核bug展示2个以上的额外错误行为。对于26个内核bug，GREBE发现了更高的利用潜力。我们向内核供应商报告了其中一些错误 - 这些错误的被利用性被错误评估，并且对应补丁尚未被仔细应用 - 结果导致它们迅速采纳了我们的补丁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833683/](https://ieeexplore.ieee.org/document/9833683/)
## Goshawk: Hunting Memory Corruptions via Structure-Aware and Object-Centric Memory Operation Synopsis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#goshawk-hunting-memory-corruptions-via-structure-aware-and-object-centric-memory-operation-synopsis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#goshawk-hunting-memory-corruptions-via-structure-aware-and-object-centric-memory-operation-synopsis)**
### 作者
* Yunlong Lyu, University of Science and Technology of China
* Yi Fang, Feiyu Security
* Yiwei Zhang, G.O.S.S.I.P, Shanghai Jiao Tong University
* Qibin Sun, University of Science and Technology of China
* Siqi Ma, The University of New South Wales
* Elisa Bertino, Purdue University
* Kangjie Lu, University of Minnesota
* Juanru Li, Feiyu Security; Shanghai Qi Zhi Institute; G.O.S.S.I.P, Shanghai Jiao Tong University
### 摘要
> 现有的用于自动检测内存破坏性错误的工具在实践中效果不佳。它们通常只能识别标准的内存管理（MM）API（例如malloc和free），并假设一个简单的成对使用模型——分配器后面会跟着一个具体的释放器。然而，我们观察到程序员经常设计自己的MM函数，而这些函数往往具有两个主要特征：（1）自定义的分配器函数执行多对象或嵌套分配，因此需要结构感知的释放器函数。（2）自定义的分配器和释放器遵循不成对使用模型。因此，更有效的检测需要适应这些特点，并捕获与非标准MM行为相关的内存错误。在本文中，我们通过引入结构感知和以对象为中心的内存操作概要（MOS）的概念，提出了一种对MM函数感知的内存错误检测技术。MOS抽象地描述了给定MM函数的内存对象，它们如何被函数管理以及它们的结构关系。通过利用MOS，bug检测可以探索更少的代码，但仍能处理多对象或嵌套分配，并且不依赖于成对使用模型。此外，为了广泛找到MM函数并自动生成适用于它们的MOS，我们提出了一种结合自然语言处理（NLP）和数据流分析的新识别方法，它能够高效且全面地识别MM函数，即使在非常庞大的代码库中也能做到。我们实现了一个增强型MOS的内存错误检测系统Goshawk，用于发现由复杂和自定义的MM行为引起的内存错误。我们将Goshawk应用于经过充分测试且广泛使用的开源项目，包括操作系统内核、服务器应用程序和物联网SDK。Goshawk在分析速度和准确识别的MM函数数量方面，比现有的以数据流分析驱动的bug检测工具快上一个数量级，并以基于MOS的描述向开发人员报告发现的bug，并成功检测到了92个新的双重释放和使用后释放错误。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833613/](https://ieeexplore.ieee.org/document/9833613/)
## FSAFlow: Lightweight and Fast Dynamic Path Tracking and Control for Privacy Protection on Android Using Hybrid Analysis with State-Reduction Strategy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fsaflow-lightweight-and-fast-dynamic-path-tracking-and-control-for-privacy-protection-on-android-using-hybrid-analysis-with-state-reduction-strategy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fsaflow-lightweight-and-fast-dynamic-path-tracking-and-control-for-privacy-protection-on-android-using-hybrid-analysis-with-state-reduction-strategy)**
### 作者
* Zhi Yang, PLA Information Engineering University, Zhengzhou, China
* Zhanhui Yuan, PLA Information Engineering University, Zhengzhou, China
* Shuyuan Jin, Sun Yat-sen University, Guangzhou, China
* Xingyuan Chen, PLA Information Engineering University, Zhengzhou, China
* Lei Sun, PLA Information Engineering University, Zhengzhou, China
* Xuehui Du, PLA Information Engineering University, Zhengzhou, China
* Wenfa Li, University of Science and Technology Beijing, Beijing, China
* Hongqi Zhang, PLA Information Engineering University, Zhengzhou, China
### 摘要
> 尽管动态污点分析（DTA）在各种安全应用中已经证明了其有效性，但现有的DTA原型的性能较差，使它们难以在生产系统中被广泛采用，特别是计算和存储资源有限的Android系统。为了克服DTA的开销瓶颈，最近的研究工作旨在将污点跟踪逻辑与程序执行分离。在这一研究线上，本文提出了FSAFlow，一种新型的混合污点跟踪与控制系统，可以显著降低DTA的开销，并确保Android隐私保护的有效性。FSAFlow进一步将路径跟踪逻辑与相应的污点跟踪逻辑和信息流路径的控制优化分离。具体而言，首先修改了经典的静态分析算法以搜索目标路径及其关键分支信息。然后选择违反用户预定义的隐私保护策略的潜在路径，并使用有限状态自动机（FSA）进行编码。少量基于FSA的状态管理代码插入程序的相应位置。最后，它监视程序的路径执行状态，并在运行时防止信息泄漏。通过理论分析证明了FSAFlow的效率和正确性。实验结果显示，与几种典型的DTA优化方法相比，FSAFlow的开销较低，对于热门应用为2.06%，对于CaffeineMark 3.0为5.41%。与Android DTA平台TaintDroid相比，FSAFlow在隐式流跟踪方面有较少的错误负面影响，并且通过验证从未发生的路径并在循环体运行的完整执行阶段跟踪，实现了比静态分析工具FlowDroid更高的精度。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833764/](https://ieeexplore.ieee.org/document/9833764/)
## Domains Do Change Their Spots: Quantifying Potential Abuse of Residual Trust.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#domains-do-change-their-spots-quantifying-potential-abuse-of-residual-trust) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#domains-do-change-their-spots-quantifying-potential-abuse-of-residual-trust)**
### 作者
* Johnny So, Stony Brook University
* Najmeh Miramirkhani, Stony Brook University
* Michael Ferdman, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 当域名过期并重新释放给公众时，对手可以重新注册这些域名，希望利用客户对所有权变更的无知而进行残余信任的利用。由于域名解析是网络的重要组成部分，可能的客户涵盖了从浏览网页的人类到自动和定期的进程，比如系统更新。对于对手来说，这简单地提供了一条攻击渠道，可以影响多样化的系统和设备。我们认为，一些经历了残余信任并从安全角度具有价值的域名，在抢注角度上并不具有价值，因此对手可以在过期域名的激烈竞争拍卖中重新注册这些域名。在本文中，我们通过自上而下的机会主义方法对这种攻击渠道进行调查，而不是采用以前的针对特定系统和基础架构的自下而上方法。在一个月的重新注册期间，我们使用被动DNS解析的阈值识别出有潜在价值的被丢弃的域名，重新注册并部署它们以提供基本的诱饵服务。然后，我们分析这些域名的流量，以找到可以利用的残余信任实例。在四个月的时间里，我们的诱饵服务记录了来自22,744个不同自治系统中的5,540,379个唯一IP地址发出的650,737,621个请求，针对201个重新注册的域名。尽管其中大多数域名可能不会带来重大的安全风险，但我们最关注且重点讨论的是那些流量数量级更高、流量类型与其他域名显著不同的异常域名。其中包括以前作为种子追踪器功能的域名，用于许多大学的计算机实验室使用统计服务的API，作为常见Android触觉库的联系点的API，安全公司的DNS陷阱服务器，互联网广播和音乐电台，用于恶意软件和潜在不需要的程序的指挥与控制服务器，以及电子邮件追踪器。我们的调查结果表明，过期域名对互联网生态系统的安全构成了真正的威胁，并且具有适度预算的对手可以通过仅仅注册之前受欢迎但被遗弃的域名来攻击各种系统和服务。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833609/](https://ieeexplore.ieee.org/document/9833609/)
## Scraping Sticky Leftovers: App User Information Left on Servers After Account Deletion.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#scraping-sticky-leftovers-app-user-information-left-on-servers-after-account-deletion) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#scraping-sticky-leftovers-app-user-information-left-on-servers-after-account-deletion)**
### 作者
* Preethi Santhanam, Wichita State University
* Hoang Dang, Wichita State University
* Zhiyong Shan, Wichita State University
* Iulian Neamtiu, New Jersey Institute of Technology
### 摘要
> 65%的移动应用需要用户账户以提供完整的功能。账户信息包括私人数据，例如地址、电话号码和信用卡。我们关注的是在账户被删除后仍然存储在服务器上的“剩余”账户数据，这可能导致重大的隐私侵犯。具体而言，我们分析了来自Google Play的1,435个流行应用（以及771个关联网站），其中678个应用有自己的注册流程，以回答以下问题：账户是否可以被删除？在删除账户后，用户数据是否会保留在应用的服务器上？如果是这样，会保留多长时间？应用是否遵守删除数据的承诺？回答这些问题，以及更广泛地理解和解决剩余账户问题都具有挑战性。一个基本的障碍是剩余数据是在应用的后端服务器的私有空间中进行操作和保留的；我们设计了一种新颖的逆向工程方法，从应用-服务器通信中推导出剩余数据。另一个障碍是这些数据的分布性：需要对应用和其网站进行程序分析和信息检索。我们已经开发了一个端到端的解决方案（静态分析、动态分析、自然语言处理）来解决剩余账户问题。首先，我们的工具链检查应用或其网站是否支持账户删除；接下来，它检查应用/网站是否有数据保留策略，以及在删除后或指定的保留期过后，账户是否仍然保留在服务器上；最后，它会自动清理剩余账户。我们发现64.45%的应用没有提供任何方法供用户删除账户；2.5%的应用在用户删除账户后仍然将账户数据保留在应用服务器上。只有5%的应用规定了保留期；其中一些应用在期限结束后仍然保留数据，违反了自己的政策。实验证明我们的方法是有效的，F-measure值大于88%，并且高效，每个应用/网站的典型分析时间为279秒。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833720/](https://ieeexplore.ieee.org/document/9833720/)
## TrollMagnifier: Detecting State-Sponsored Troll Accounts on Reddit.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#trollmagnifier-detecting-state-sponsored-troll-accounts-on-reddit) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#trollmagnifier-detecting-state-sponsored-troll-accounts-on-reddit)**
### 作者
* Mohammad Hammas Saeed, Boston University
* Shiza Ali, Boston University
* Jeremy Blackburn, Binghamton University
* Emiliano De Cristofaro, University College London
* Savvas Zannettou, TU Delft; Max Planck Institute for Informatics
* Gianluca Stringhini, Boston University
### 摘要
> 越来越多的证据表明社交媒体上存在定期出现的影响力活动，通常由国家行为者赞助，旨在操纵敏感政治话题上的公众舆论。通常，这些活动是通过机制化账户进行的，即众所周知的喷子账户；然而，尽管这些账户很显眼，但鲜有工作来检测这些账户在网络环境中的存在。在本文中，我们提出了一种名为"TROLLMAGNIFIER"的喷子账户检测系统。我们基于Reddit确认的已知俄罗斯赞助的喷子账户的分析，得出的关键观察结果是，这些账户表现出松散的协调性，经常互相交互以进一步推动特定的叙述。因此，由同一行为者控制的喷子账户通常会显示出可以用于检测的相似性。TROLLMAGNIFIER学习已知喷子账户的典型行为，并识别出更多表现相似的账户。我们对一组335个已知喷子账户进行了TROLLMAGNIFIER的训练，并在Reddit账户的大型数据集上运行它。我们的系统识别出了1,248个潜在的喷子账户；然后我们提供了多方面的分析来验证我们分类的正确性。特别地，被检测到的账户中有66%显示出被恶意行为者机制化（例如，它们与已知喷子账户的创建日期完全相同，它们后来被Reddit暂停等）。它们还讨论与已知喷子账户类似的话题，并在活动中展现时间上的同步性。总的来说，我们展示了使用TROLLMAGNIFIER可以将Reddit提供的潜在喷子账户的初始知识扩展超过300%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833706/](https://ieeexplore.ieee.org/document/9833706/)
## Analyzing Ground-Truth Data of Mobile Gambling Scams.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#analyzing-ground-truth-data-of-mobile-gambling-scams) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#analyzing-ground-truth-data-of-mobile-gambling-scams)**
### 作者
* Geng Hong, Fudan University
* Zhemin Yang, Fudan University
* Sen Yang, Fudan University
* Xiaojing Liaoy, Indiana University Bloomington
* Xiaolin Du, Fudan University
* Min Yang, Fudan University
* Haixin Duan, Tsinghua University
### 摘要
> 随着移动计算技术的发展，移动赌博诈骗在最近一段时间内呈现激增趋势。在移动赌博诈骗中，恶意分子通过手机即时通讯发送诈骗信息，通过手机应用程序进行赌博诈骗，并采用移动支付渠道。尽管每天估计欺诈损失超过522,262美元，但迄今为止，对这种新兴网络犯罪行为运作方式的定量了解甚少。本文基于真实数据对移动赌博诈骗进行了第一次实证研究，包括1,461起诈骗事件报告和1,487个赌博诈骗应用程序，时间跨度为2020年1月1日至2020年12月31日。对这些真实数据进行的定性和定量分析使我们能够对移动赌博诈骗的操作流程和完整的欺诈杀伤链进行刻画。特别是，我们研究了骗子使用的社交工程诡计，并揭示了它们的有效性。我们的工作对1,068个确认的Android和419个iOS诈骗应用程序进行了系统分析，包括它们的开发框架、声明的权限、兼容性和后端网络基础设施。出人意料的是，我们的研究揭示了公开的在线应用程序生成器被滥用来开发赌博诈骗应用程序。我们的分析揭示了赌博诈骗应用程序滥用的几种支付渠道，并发现了一种新型的基于货币搬运工的支付渠道，平均每天赌博存款额为400,000美元。我们的研究结果有助于更好地理解移动赌博诈骗生态系统，并提出了干扰这些诈骗活动的潜在途径。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833665/](https://ieeexplore.ieee.org/document/9833665/)
## Effective Seed Scheduling for Fuzzing with Graph Centrality Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#effective-seed-scheduling-for-fuzzing-with-graph-centrality-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#effective-seed-scheduling-for-fuzzing-with-graph-centrality-analysis)**
### 作者
* Dongdong She, Columbia University
* Abhishek Shah, Columbia University
* Suman Jana, Columbia University
### 摘要
> 种子调度，即选择种子的顺序，可以极大地影响模糊测试工具的性能。现有的方法根据种子的历史变异数据来进行调度，但忽略了底层控制流图（CFG）的结构。通过检查CFG，可以帮助种子调度，揭示通过变异种子可能获得的潜在边缘覆盖增益。理想的策略应该根据通过变异种子所到达的所有可达和可行边缘的计数来进行调度，但计算所有边缘的可行性代价太高。因此，种子调度策略必须近似计算这个计数。我们观察到，近似计数应该具备 3 个特性 -（i）如果有更多边缘能够从一个种子到达，计数应该增加；（ii）如果变异历史信息表明某个边缘难以到达或位于当前访问边缘的远处，计数应该减少；（iii）在大型 CFG 上计算效率高。我们观察到，通过图分析得出的中心性度量自然地提供这三个特性，因此可以高效地近似计算通过变异种子到达未访问边缘的可能性。因此，我们建立了一个称为边缘地平线图的图，将种子连接到它们最近的未访问节点，并计算种子节点的中心性，以衡量通过变异种子可能获得的边缘覆盖增益。我们在 K-Scheduler 中实现了我们的方法，并与许多流行的种子调度策略进行了比较。我们发现，与 Entropic 相比，K-Scheduler 在 12 个 Google FuzzBench 程序的算术平均中将特征覆盖率提高了 25.89%，边缘覆盖率比下一个最佳的 AFL 种子调度程序增加了 4.21%。它还找到了比下一个最佳的 AFL 种子调度程序多 3 个之前未知的漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833761/](https://ieeexplore.ieee.org/document/9833761/)
## FuzzUSB: Hybrid Stateful Fuzzing of USB Gadget Stacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fuzzusb-hybrid-stateful-fuzzing-of-usb-gadget-stacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#fuzzusb-hybrid-stateful-fuzzing-of-usb-gadget-stacks)**
### 作者
* Kyungtae Kim, Purdue University
* Taegyu Kim, The Pennsylvania State University
* Ertza Warraich, Purdue University
* Byoungyoung Lee, Seoul National University
* Kevin R. B. Butler, University of Florida
* Antonio Bianchi, Purdue University
* Dave Jing Tian, Purdue University
### 摘要
> 通用串行总线（USB）是外围设备和移动设备（如USB闪存驱动器和智能手机）支持的事实标准协议。对于许多设备来说，USB Type-C端口是主要的接口，用于充电、文件传输、音频、视频等。相应地，攻击者利用USB协议栈中的不同漏洞，通过BadUSB攻击或通过USB连接越狱iPhone来破坏主机设备。尽管已经存在针对USB漏洞发现的模糊测试框架，但它们都集中在USB主机协议栈上，并忽视了USB外设协议栈，后者使现代外围设备和智能设备的所有功能得以实现。本文提出了FuzzUSB，这是首个专为商品化操作系统内核中的USB外设协议栈而设计的模糊测试框架，利用了静态分析、符号执行和有状态的模糊测试。FuzzUSB结合了静态分析和符号执行，从USB外设驱动程序中提取内部状态机，并利用它们通过多通道输入实现了状态引导模糊测试。我们已经在内核模糊测试工具syzkaller上实现了FuzzUSB，并将其应用于最新的主流Linux、Android和FreeBSD内核。结果发现，在Linux和Android内核中发现了34个以前未知的错误，并公开了8个CVE编号。此外，与基准相比，FuzzUSB还展现了不同的改进，包括Linux USB外设协议栈$ 3\times$ 更高的代码覆盖率，$ 50\times$ 提高的错误发现效率，FreeBSD USB外设协议栈$ 2\times$ 更高的代码覆盖率，以及能够复制基准模糊测试框架无法检测到的已知漏洞。我们相信FuzzUSB为开发人员提供了一个强大的工具，以防范现代设备中与USB相关的漏洞，并完成当前USB模糊测试的范围。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833593/](https://ieeexplore.ieee.org/document/9833593/)
## Exploit the Last Straw That Breaks Android Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exploit-the-last-straw-that-breaks-android-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exploit-the-last-straw-that-breaks-android-systems)**
### 作者
* Lei Zhang, Fudan University
* Keke Lian, Fudan University
* Haoyu Xiao, Fudan University
* Zhibo Zhang, Fudan University
* Peng Liu, The Pennsylvania State University
* Yuan Zhang, Fudan University
* Min Yang, Fudan University
* Haixin Duan, Tsinghua University
### 摘要
> 安卓系统服务通常在运行多个重要任务和提供流畅用户体验方面发挥关键作用，例如方便地存储用户数据。本文对安卓系统服务中的数据存储过程进行了首次系统安全研究，并因此发现了一类新的设计缺陷（名为Straw），可能导致严重的拒绝服务（DoS）攻击，例如永久性崩溃整个受害安卓设备。然后，我们提出了一种新的基于定向模糊测试的方法，称为StrawFuzzer，以自动对所有系统服务进行对策评估以防范利用Straw漏洞。StrawFuzzer平衡了路径探索和漏洞利用之间的权衡。通过将StrawFuzzer应用于三个安卓系统的最新安全更新，我们识别出35个独特的Straw漏洞，影响了77个系统服务中的474个接口，并成功生成了相应的攻击利用，可用于进行各种永久/临时的DoS攻击。我们已向相关供应商报告了我们的发现并提出了修复漏洞的建议。到目前为止，Google已将我们的漏洞评级为高危。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833563/](https://ieeexplore.ieee.org/document/9833563/)
## CirC: Compiler infrastructure for proof systems, software verification, and more.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#circ-compiler-infrastructure-for-proof-systems-software-verification-and-more) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#circ-compiler-infrastructure-for-proof-systems-software-verification-and-more)**
### 作者
* Alex Ozdemir, Stanford University
* Fraser Brown, Stanford University; Carnegie Mellon University
* Riad S. Wahby, Stanford University; Carnegie Mellon University
### 摘要
> 密码工具，如证明系统、多方计算和完全同态加密，通常应用于以算术约束系统表示的计算。在实际应用中，这意味着这些应用依赖于从高级编程语言（如C）到此类约束的编译器。这个编译任务是具有挑战性的，但并非完全新颖：软件验证界在将程序编译为逻辑约束（如SAT或SMT）方面有丰富的文献。在这项工作中，我们展示了共享编译器基础设施构建用于约束表示的可能性，因为这些表示共享一个共同的抽象：无状态的、非均匀的、非确定性的计算，我们称之为存在量化电路（EQCs）。此外，我们还展示了这个共享基础设施的有用性，因为它允许证明系统编译器从软件验证的约束编译技术几十年的研究成果中受益。为了让我们的方法更具体，我们创建了CirC，一个用于构建EQC编译器基础设施的工具。CirC使编译到新的EQC变得容易：我们在其中构建了对三种EQC的支持，即R1CS（用于证明系统）、SMT（用于验证和错误查找）和ILP（用于优化），代码量约为2000行。同时，扩展CirC以支持新的源语言也很容易：我们在一周内构建了一个功能完整的密码语言编译器，代码量约为900行，而同一语言的参考编译器编写多年，代码量约为24000行，且产生的输出性能比我们的编译器差。最后，CirC使多个EQC结合的新型应用成为可能。例如，我们构建了第一个（1）自动识别程序中的错误，然后（2）自动构建错误存在的密码证明的流水线。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833782/](https://ieeexplore.ieee.org/document/9833782/)
## HAMRAZ: Resilient Partitioning and Replication.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hamraz-resilient-partitioning-and-replication) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hamraz-resilient-partitioning-and-replication)**
### 作者
* Xiao Li, University of California, Riverside
* Farzin Houshmand, University of California, Riverside
* Mohsen Lesani, University of California, Riverside
### 摘要
> 在医疗、金融和军事领域中，存在着需要子系统相互合作但信任度不完全的跨组织系统。面对恶意的拜占庭攻击，最终目标是确保端到端的机密性、完整性和可用性方面的策略。与机密性和完整性不同，可用性的提供和验证常被忽视。本文保证了端到端的机密性、完整性和可用性方面的策略。它提出了一种安全化的基于对象的语言、分区转换、操作语义和信息流类型推断系统，用于分区和复制类。类型系统能够证明良好类型的方法对这三个属性的干扰性很小，并且它们的类型可以量化对拜占庭攻击的韧性。给定一个类和其端到端策略的规范，HAMRAZ工具会应用类型推断自动将类的字段和方法放置在拜占庭仲裁系统上并进行复制，从而综合出可信及构造的分布式系统。实验证明了所得系统的弹性；它们能够优雅地容忍与指定策略一样强的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833661/](https://ieeexplore.ieee.org/document/9833661/)
## Formal Model-Driven Discovery of Bluetooth Protocol Design Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#formal-model-driven-discovery-of-bluetooth-protocol-design-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#formal-model-driven-discovery-of-bluetooth-protocol-design-vulnerabilities)**
### 作者
* Jianliang Wu, Purdue University
* Ruoyu Wu, Purdue University
* Dongyan Xu, Purdue University
* Dave Jing Tian, Purdue University
* Antonio Bianchi, Purdue University
### 摘要
> 蓝牙协议套件（包括蓝牙经典、低功耗蓝牙和蓝牙网状网络）已成为短距离无线通信的事实上标准。尽管已经将形式方法应用于蓝牙安全，但现有的工作要么仅关注一个协议的一个配置，要么仅关注套件中的一个协议，而没有考虑其他配置或协议之间的交互。因此，在蓝牙规范的安全研究中，手动分析仍然占主导地位。为了实现带有形式化保证的自动蓝牙安全分析，我们提出了一个全面的蓝牙协议套件的形式化模型，涵盖密钥共享阶段和数据传输阶段，在三个蓝牙协议中自动检测其设计缺陷。我们的形式化模型使用了ProVerif编写，通过将协议中的每个步骤抽象成一个接口，并在每个步骤中使用不同的方法作为模块来实现接口，从而可以检查协议的所有可能配置。我们进一步将不同的蓝牙协议抽象为模块，使其能够建模它们之间的交互，并放宽威胁模型以允许对半受损设备进行推理。我们使用该模型对418个安全属性进行形式验证，并发现82个违规行为，其中包括捕获到5个已知漏洞和发现到2个新安全问题的攻击示例。蓝牙SIG确认了我们对这2个新问题的独立发现，其中一个问题被分配了CVE，另一个问题在一份安全通知中被确认。我们的模型为形式验证的蓝牙安全迈出了一步。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833777/](https://ieeexplore.ieee.org/document/9833777/)
## "Desperate Times Call for Desperate Measures": User Concerns with Mobile Loan Apps in Kenya.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#desperate-times-call-for-desperate-measures-user-concerns-with-mobile-loan-apps-in-kenya) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#desperate-times-call-for-desperate-measures-user-concerns-with-mobile-loan-apps-in-kenya)**
### 作者
* Collins W. Munyendo, The George Washington University
* Yasemin Acar, The George Washington University
* Adam J. Aviv, The George Washington University
### 摘要
> 在发展中国家，移动贷款应用的使用已经大量增加。这是由于相对于传统金融机构（如只向现有客户关系或提供担保的银行）提供类似贷款的便利度和速度。由于移动贷款应用是一个相对较新的行业，这些应用大多没有监管，因此往往收取极高的利率。此外，在确认客户身份和确保贷款还款过程中，它们通过移动设备权限系统收集并有时滥用敏感用户数据，如用户的联系人和短信通信。然而，有关发展中国家特别是肯尼亚移动贷款应用的使用原因和隐私问题尚未得到充分探讨。为了调查移动贷款应用，我们在肯尼亚对20名贷款应用用户进行了半结构化访谈，我们发现大多数用户普遍关注隐私问题，特别是访问他们手机联系人的问题。然而，他们常常忽视这些问题，因为这超过了他们获得贷款的需求。与此同时，我们发现用户难以理解这些移动贷款应用（以及移动应用一般）的权限使用，从而证实了之前关于理解Android权限的研究。我们的研究结果突出了发展中国家新兴移动贷款应用市场中的隐私风险、关注点和行为，并提供了保护用户安全和隐私的建议，包括这些应用如何收集、使用和保护用户数据的透明沟通的需求。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833779/](https://ieeexplore.ieee.org/document/9833779/)
## SoK: The Dual Nature of Technology in Sexual Abuse.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-the-dual-nature-of-technology-in-sexual-abuse) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-the-dual-nature-of-technology-in-sexual-abuse)**
### 作者
* Borke Obada-Obieh, University of British Columbia
* Yue Huang, University of British Columbia
* Lucrezia Spagnolo, Vesta Social Innovation Technologies
* Konstantin Beznosov, University of British Columbia
### 摘要
> 本文系统化并将现有的知识关于技术在性虐待方面的双重性质进行了情境化处理：既是其促成者，又是其预防、举报和限制的辅助者。通过研究并回顾224篇研究论文，我们确定了技术促成性虐待的10个特征：隐蔽性、公开性、匿名性、进化性、无边界性、可复制性、可接触性、不可或缺性、可塑性和深不可测性。我们还分析了技术如何帮助受害者和其他利益相关方应对和回应性虐待。我们的研究问题还探讨了利用技术解决性虐待问题的挑战。例如，受害者的使用可能会导致再次受害。为了解决技术面临的挑战，我们提出建议并提出了新的研究方向。这些关于技术双重性质的发现可以为支持性虐待受害者的研究和开发提供指导。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833663/](https://ieeexplore.ieee.org/document/9833663/)
## SoK: A Framework for Unifying At-Risk User Research.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-a-framework-for-unifying-at-risk-user-research) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sok-a-framework-for-unifying-at-risk-user-research)**
### 作者
* Noel Warford, University of Maryland
* Tara Matthews, Google
* Kaitlyn Yang, University of Maryland
* Omer Akgul, University of Maryland
* Sunny Consolvo, Google
* Patrick Gage Kelley, Google
* Nathan Malkin, University of Maryland
* Michelle L. Mazurek, University of Maryland
* Manya Sleeper, Google
* Kurt Thomas, Google
### 摘要
> 处境危险用户是指面临风险因素的人，这些风险因素增加了其在数字攻击中遭受攻击或遭受不成比例伤害的机会。在这项系统化工作中，我们根据对95篇论文的广泛元分析，提出了一种关于处境危险用户的推理框架。我们对不同人群（如儿童、活动人士、残疾人）进行了研究，确定了10个统一的上下文风险因素，如边缘化和敏感资源的获取，这些因素增加或放大了数字安全风险及其导致的伤害。我们还确定了危险用户采取的技术和非技术实践，以试图保护自己免受数字安全风险的侵害。我们使用这个框架来讨论限制处境危险用户采取保护行动能力或意愿的障碍。我们相信，研究人员和技术创造者可以利用我们的框架来确定和塑造研究投资，以造福处境危险用户，并指导技术设计以更好地支持这些用户。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833643/](https://ieeexplore.ieee.org/document/9833643/)
## Deployment of Source Address Validation by Network Operators: A Randomized Control Trial.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deployment-of-source-address-validation-by-network-operators-a-randomized-control-trial) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#deployment-of-source-address-validation-by-network-operators-a-randomized-control-trial)**
### 作者
* Qasim Lone, Delft University of Technology, The Netherlands
* Alisa Frik, ICSI, UC Berkeley, USA
* Matthew Luckie, University of Waikato, New Zealand
* Maciej Korczyński, Univ. Grenoble Alpes, CNRS, Grenoble INP, LIG, France
* Michel van Eeten, Delft University of Technology, The Netherlands
* Carlos Gañán, Delft University of Technology, The Netherlands
### 摘要
> IP欺骗是发送带有虚假源IP地址的IP数据包，仍然是大规模拒绝服务攻击的主要攻击向量。为了对抗欺骗，已经尝试了各种干预措施来增加网络运营商对源地址验证（SAV）的采用率。如何增加SAV的部署？在这项工作中，我们进行了第一次随机对照试验，以衡量各种通知机制对SAV部署的效果。我们使用了以前在通知实验中未经测试的努力和渠道作为新的处理方式。我们的设计揭示了与先前的观察研究形成鲜明对比的令人痛苦的现实：与对照组相比，没有任何通知处理显著改善SAV部署。我们探讨了这些发现的原因，并报告了对运营商的调查，以确定未来的发展方向。部分运营商表示他们计划部署SAV，并要求更好的通知机制、培训和SAV实施支持材料。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833701/](https://ieeexplore.ieee.org/document/9833701/)
## Exposed Infrastructures: Discovery, Attacks and Remediation of Insecure ICS Remote Management Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exposed-infrastructures-discovery-attacks-and-remediation-of-insecure-ics-remote-management-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#exposed-infrastructures-discovery-attacks-and-remediation-of-insecure-ics-remote-management-devices)**
### 作者
* Takayuki Sasaki, Yokohama National University
* Akira Fujita, Yokohama National University; National Institute of Information and Communications Technology
* Carlos H. Gañán, TU Delft; Yokohama National University
* Michel van Eeten, TU Delft; Yokohama National University
* Katsunari Yoshioka, Yokohama National University
* Tsutomu Matsumoto, Yokohama National University
### 摘要
> 地理分布的基础设施，如建筑物、大坝和太阳能电厂，通常通过互联网连接的远程管理设备进行维护。之前对于检测和保护工业控制系统（ICS）的研究忽视了这些远程管理设备，因为它们不会暴露出诸如Modbus和BACnet等ICS特定服务，因此在针对此类服务的全球扫描中不会显示出来。在本文中，我们实施和验证了一种通过Web用户界面（WebUI）发现这些设备的方法，并仅在日本就发现了890个设备。我们还表明，许多这些设备存在严重的安全漏洞。许多设备允许未经适当身份验证即可访问工业系统的状态甚至控制权。通过仔细研究三种常见的远程管理设备，我们发现了13个0-day漏洞，其中几个被评为中等或高等级的严重漏洞。我们已经负责地向制造商进行了披露。通过使用模拟这些系统的蜜罐，我们发现随着时间的推移，只有少数攻击者进入了这些系统，但是有些攻击者确实改变了关键参数。当WebUI上显示更多设施信息时，攻击者似乎与系统进行更多的互动。最后，我们通过电子邮件和电话通知了317个有漏洞的远程管理设备的运营商。我们联系了212名负责设备的人，并确认了我们的方法正确识别了设备。50％的负责设备的人表示他们已经或将会解决问题。我们通过随后的扫描确认了他们的行动，并发现在我们联系到设备负责人时，58％的设备采取了措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833730/](https://ieeexplore.ieee.org/document/9833730/)
## Robbery on DevOps: Understanding and Mitigating Illicit Cryptomining on Continuous Integration Service Platforms.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#robbery-on-devops-understanding-and-mitigating-illicit-cryptomining-on-continuous-integration-service-platforms) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#robbery-on-devops-understanding-and-mitigating-illicit-cryptomining-on-continuous-integration-service-platforms)**
### 作者
* Zhi Li, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech, China; School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
* Weijie Liu, Indiana University Bloomington, USA
* Hongbo Chen, Indiana University Bloomington, USA
* XiaoFeng Wang, Indiana University Bloomington, USA
* Xiaojing Liao, Indiana University Bloomington, USA
* Luyi Xing, Indiana University Bloomington, USA
* Mingming Zha, Indiana University Bloomington, USA
* Hai Jin, School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
* Deqing Zou, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech, China; National Engineering Research Center for Big Data Tech. and Sys., Cluster and Grid Computing Lab, Services Computing Tech. and Sys. Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech, China
### 摘要
> 近期浏览器中的加密货币挖矿热潮逐渐减弱，这是因为主流加密货币的新更新要求挖矿资源超出了浏览器的承受能力。作为替代，资源丰富、保护较弱的免费互联网服务，如持续集成（CI）平台，成为了吸引人的目标。本文报告了对公共CI平台上真实非法加密货币挖矿的系统性研究（称为Cijacking）。与浏览器中的加密货币挖矿不同，Cijacks伪装成CI作业，因此更难以检测，因为合法的CI工作流程（如容器映像构建和测试）也需要大量计算。在我们的研究中，我们利用对手必须指定的关键挖掘信息，如钱包地址和挖矿池域名，从GitHub存储库和CI平台上的日志文件中恢复攻击轨迹，发现了1,974个Cijacking实例、30个针对11个主流CI平台上12种不同加密货币的攻击活动。此外，我们的研究还揭示了攻击策略的演变，针对平台所实施的保护措施、挖矿作业的持续时间（长达33个月）以及它们的生命周期。我们还发现了每个月超过2万美元的攻击收入。由于加密货币挖矿的可靠检测被认为很困难，我们开发了一种新技术，称为Cijitter，通过在CI工作流执行中有策略地注入延迟，对需要在一系列任务下工作的挖矿作业进行不成比例的惩罚。我们在基准和常见CI作业上进行的分析和评估表明，我们的方法显著降低了挖矿者的收入，使其无利可图，但对CI作业的性能和开发者的生产力只有小幅影响（94.3%的CI作业延迟不到10%）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833803/](https://ieeexplore.ieee.org/document/9833803/)
## Privacy-from-Birth: Protecting Sensed Data from Malicious Sensors with VERSA.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#privacy-from-birth-protecting-sensed-data-from-malicious-sensors-with-versa) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#privacy-from-birth-protecting-sensed-data-from-malicious-sensors-with-versa)**
### 作者
* Ivan De Oliveira Nunes, Rochester Institute of Technology
* Seoyeon Hwang, UC Irvine
* Sashidhar Jakkamsetti, UC Irvine
* Gene Tsudik, UC Irvine
### 摘要
> 随着物联网（IoT）的日益普及，许多专用设备被部署在全球范围内的许多日常环境中，包括家庭、办公室、车辆、公共空间和工厂。这些设备通常用于感知和/或执行。其中许多设备处理敏感和个人数据。如果不加保护，环境感知（例如温度、运动、音频或视频）可能会泄漏非常私密的信息。同时，一些物联网设备使用低端计算平台，缺乏（或没有）安全功能。目前有许多众所周知的技术可以保护感知数据，例如通过对通信终端进行身份验证、在传输前对数据进行加密以及模糊化流量模式。这些技术保护了感知数据免受外部对手的攻击，同时假设感知设备本身是安全的。与此同时，物联网相关的攻击规模和频率正在增长。这引发了一个自然的问题：即使设备上的所有软件都被攻破，如何保护感知数据？理想情况下，为了实现这个目标，感知数据必须从其诞生时开始受到保护，即从物理模拟量被转换为数字模拟量并对软件可访问时开始。我们将这个属性称为PfB：从出生到隐私。在这项工作中，我们形式化了PfB，并设计了验证的远程感知授权（VERSA）-一个经过证明安全并经过正式验证的体系结构，确保只有预期和明确授权的软件的正确执行可以访问和操作感知界面，具体地说，通用输入/输出（GPIO），这是物联网设备上模拟和数字世界之间的常用边界。这种保证是通过使用最少的硬件支持获得的，即使所有设备软件都被攻破，也能够保持。VERSA确保恶意软件既不能访问GPIO映射内的感知数据，也不能获得任何迹象。VERSA经过正式验证并且其开源实现针对资源受限的物联网边缘设备，这些设备常用于感知。实验结果表明，对于这类设备来说，PfB既可实现又可负担得起。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833737/](https://ieeexplore.ieee.org/document/9833737/)
## Publicly Accountable Robust Multi-Party Computation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#publicly-accountable-robust-multi-party-computation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#publicly-accountable-robust-multi-party-computation)**
### 作者
* Marc Rivinius, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Pascal Reisert, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, Institute of Information Security University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, Institute of Information Security University of Stuttgart, Stuttgart, Germany
### 摘要
> 近年来，基于格的安全多方计算（MPC）越来越受欢迎，并在大规模应用中被广泛使用，例如隐私保护的云计算、电子投票或拍卖。许多这些应用都具有高安全要求，即计算结果应该是公开可验证的，每个人都能够识别出恶意方并追究其责任，恶意方不应能够破坏计算、强制协议重新启动，或阻止诚实方或提供私密输入的诚实第三方（客户端）接收到正确结果。即使所有协议方都是恶意的，协议也应该能够确保可验证性和可追究性。虽然一些协议解决了其中一项或两项安全特性，我们提出了首个具有公开可验证、可追究，以及（达到阈值的）鲁棒的无重新启动的SPDZ式MPC协议。我们针对在线、离线和设置计算提出了追究和鲁棒的协议。我们改进并部分扩展了基于格的Baum等人的承诺方案（SCN 2018），以及其他原语如零知识证明。对于底层的承诺方案和底层的BGV加密方案，我们确定了理想参数。我们对我们的协议进行了性能评估，并将其与具有和不具有我们目标安全特性的最先进协议进行了比较：公开可追究性、公开可验证性和鲁棒性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833608/](https://ieeexplore.ieee.org/document/9833608/)
## Waldo: A Private Time-Series Database from Function Secret Sharing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#waldo-a-private-time-series-database-from-function-secret-sharing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#waldo-a-private-time-series-database-from-function-secret-sharing)**
### 作者
* Emma Dauterman, University of California, Berkeley
* Mayank Rathee, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
* Ion Stoica, University of California, Berkeley
### 摘要
> 如今的应用程序依赖于云数据库来存储和查询时间序列数据。虽然外包存储很方便，但这些数据往往是敏感的，因此数据泄露是一个严重的问题。我们提出了Waldo，一个具有丰富功能和强大安全性的时间序列数据库：Waldo支持多谓词过滤，保护数据内容以及查询过滤器值和搜索访问模式，并在3方诚实多数设置中提供恶意安全性。相比之下，之前的系统如Timecrypt和Zeph功能和安全性有限：(1) 这些系统只能按时间进行过滤，(2) 它们会向服务器透露查询的时间间隔。遗忘性RAM（ORAM）和通用多方计算（MPC）是消除先前工作泄漏的自然选择，但这两者在我们的环境中都过于昂贵，因为涉及到往返次数和带宽开销。为了最小化这两个问题，Waldo基于函数秘密共享技术进行开发，使得Waldo可以非交互地评估谓词。我们开发了应用函数秘密共享到加密数据库环境中的新技术，其中存在恶意服务器、秘密输入和链式谓词。使用32核机器，Waldo可以在3.03秒内运行包含8个范围谓词的查询，比MPC基线的12.88秒和ORAM基线的16.56秒更快。与Waldo相比，MPC基线在服务器之间的带宽使用率要高出$9-82 \times$倍（适用于不同数量的记录），而ORAM基线在客户端和服务器之间的带宽使用率要高出$20-152 \times$倍（适用于不同数量的谓词）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833611/](https://ieeexplore.ieee.org/document/9833611/)
## Hark: A Deep Learning System for Navigating Privacy Feedback at Scale.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hark-a-deep-learning-system-for-navigating-privacy-feedback-at-scale) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#hark-a-deep-learning-system-for-navigating-privacy-feedback-at-scale)**
### 作者
* Hamza Harkous, Google
* Sai Teja Peddinti, Google
* Rishabh Khandelwal, University of Wisconsin-Madison
* Animesh Srivastava, Google
* Nina Taft, Google
### 摘要
> 整合用户反馈是构建成功产品的支柱之一。然而，这些反馈通常以非结构化的自由文本形式收集，很难在大规模上理解。这在隐私领域尤其具有挑战性，因为与概念相关的细微差别以及现有解决方案的有限性。在这项工作中，我们介绍了Hark，一种用于发现并总结大规模隐私相关反馈的系统。Hark自动化了整个隐私反馈总结过程，从非结构化文本开始，生成高层次隐私主题以及每个主题内的细粒度问题的层次结构，并提供每个问题的代表性评论。Hark的核心是一组在不同任务上训练的新型深度学习模型，例如隐私反馈分类、隐私问题生成和高层主题创建。我们展示了Hark在一个由626M Google Play评论组成的文集上的有效性。在这个文集中，我们的隐私反馈分类器提取了600万个与隐私相关的评论（AUC-ROC为0.92）。通过三项注释研究，我们展示了Hark生成的问题具有高准确性和覆盖性，并且主题标题质量高。我们通过展示从130万个安卓应用中得出的高层次见解来说明Hark的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833729/](https://ieeexplore.ieee.org/document/9833729/)
## Sphinx: Enabling Privacy-Preserving Online Learning over the Cloud.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sphinx-enabling-privacy-preserving-online-learning-over-the-cloud) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#sphinx-enabling-privacy-preserving-online-learning-over-the-cloud)**
### 作者
* Han Tian, Hong Kong University of Science and Technology
* Chaoliang Zeng, Hong Kong University of Science and Technology
* Zhenghang Ren, Hong Kong University of Science and Technology
* Di Chai, Hong Kong University of Science and Technology; Clustar
* Junxue Zhang, Hong Kong University of Science and Technology; Clustar
* Kai Chen, Hong Kong University of Science and Technology
* Qiang Yang, Hong Kong University of Science and Technology
### 摘要
> 随着深度学习应用的日益复杂，用户已开始将其数据和模型委托给云端。其中，涉及训练和推断过程的在线学习服务得到了广泛应用。为了确保在公共云上的隐私保障，研究人员提出了许多使用不同技术的隐私保护深度学习算法，从混淆机制到密码工具不等。然而，这些算法都不适用于在线学习服务。它们要么只关注推断或训练过程中的一个而忽视另一个，要么需要非勾结的或可信的第三方。在本文中，我们提出了Sphinx，一个高效且无需可信第三方的保持隐私的在线深度学习系统。Sphinx在私有推断和训练协议上进行系统优化，以在模型性能、计算效率和隐私保护之间取得平衡。在其核心，Sphinx通过相互结合同态加密和差分隐私来维护模型，将大部分参数保持为明文，从而实现快速的训练和推断协议设计。同时，通过改进同态操作行为，Sphinx避免了大部分沉重的同态操作，并最小化了通信成本。结果显示，Sphinx能够大幅减少训练时间，同时实现实时推断，而不会暴露用户隐私。在我们的实验中，我们发现与纯同态加密解决方案相比，Sphinx在训练方面快了35倍，在推断方面快了4个数量级，提供实时推断响应（对于MNIST为0.05秒，对于CIFAR-10为0.08秒）。我们的实验还表明，在紧密的隐私预算（对于MNIST，$\epsilon=2, \delta=10^{-5}$）下，Sphinx实现了有前景的模型准确性（96%准确率），且无需可信数据聚合器，并且对实际重建攻击更加鲁棒。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833648/](https://ieeexplore.ieee.org/document/9833648/)
## Spurt: Scalable Distributed Randomness Beacon with Transparent Setup.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spurt-scalable-distributed-randomness-beacon-with-transparent-setup) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#spurt-scalable-distributed-randomness-beacon-with-transparent-setup)**
### 作者
* Sourav Das, University of Illinois at Urbana-Champaign
* Vinith Krishnan, University of Illinois at Urbana-Champaign
* Irene Miriam Isaac, University of Illinois at Urbana-Champaign
* Ling Ren, University of Illinois at Urbana-Champaign
### 摘要
> 在许多重要应用中，共享高质量的随机数是至关重要的。然而，现有的分布式随机信标构造仍然存在一些限制，比如不完善的安全性保证、强烈的设置或网络假设或高成本。在本文中，我们提出了Spurt，这是一种高效的分布式随机信标协议，不需要任何可信赖或昂贵的设置，并且对一个部分同步网络中控制多达三分之一节点的恶意对手具有安全性。我们在形式上证明了Spurt的每个输出都是不可预测的、抵抗偏见的，并且可以公开验证。Spurt每个信标输出的累计通信成本为$O(\lambda n^{2})$，其中$\lambda$为安全参数。在设计Spurt的同时，我们还设计了一个公开可验证的秘密共享（PVSS）方案，其安全性基于标准的决策性双线性Diffie-Hellman假设，不需要随机Oracle。我们实现了Spurt，并使用分布在地理分布式AWS实例中的最多128个节点的网络进行评估。我们的评估结果显示，Spurt在32个节点的网络中每分钟可以产生约84个信标输出，并且与具有更强假设或较弱安全性的系统相媲美。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833580/](https://ieeexplore.ieee.org/document/9833580/)
## Practical Asynchronous Distributed Key Generation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-asynchronous-distributed-key-generation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#practical-asynchronous-distributed-key-generation)**
### 作者
* Sourav Das, University of Illinois at Urbana-Champaign
* Thomas Yurek, University of Illinois at Urbana-Champaign
* Zhuolun Xiang, University of Illinois at Urbana-Champaign
* Andrew Miller, University of Illinois at Urbana-Champaign
* Lefteris Kokoris-Kogias, IST Austria
* Ling Ren, University of Illinois at Urbana-Champaign
### 摘要
> 分布式密钥生成（DKG）是一种在没有可信赖第三方的情况下引导门限加密系统的技术，是去中心化协议（如随机信标、门限签名和一般多方计算）的基础组件。直到最近，DKG协议一直假设同步模型，因此当其底层网络假设不成立时易受攻击。异步DKG协议的最新进展不足以满足要求，因为它们要么效率低下，要么功能有限，导致缺乏具体的实现。本文提出了一种简单且具体高效的异步DKG（ADKG）协议。在一个包含n个节点的网络中，我们的ADKG协议可以容忍多达$t\lt n/3$个恶意节点，并具有预期的通信成本$O(\kappa n^{3})$，其中$\kappa$是安全参数。我们的ADKG协议将产生一个域元素作为密钥，因此与现成的门限加密系统兼容。我们实现了ADKG协议，并在分布在AWS实例上的多达128个节点的网络上进行了评估。评估结果显示，我们的协议在32个和64个节点上的终止时间分别仅为3秒和9.5秒。此外，在这两个实验中，每个节点只发送了0.7兆字节和2.9兆字节的数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833584/](https://ieeexplore.ieee.org/document/9833584/)
## Security Analysis of the MLS Key Derivation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-analysis-of-the-mls-key-derivation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#security-analysis-of-the-mls-key-derivation)**
### 作者
* Chris Brzuska, Aalto University, Finland
* Eric Cornelissen, Aalto University, Finland
* Konrad Kohbrok, Aalto University, Finland
### 摘要
> 密码通信协议提供端到端通信的保密性、完整性和身份验证特性，可在强大的损坏攻击下实现通信。大多数协议设计用于一对一通信，而用于群组通信的协议较少，效率较低，并且通常提供较弱的安全保证。这是因为群组通信面临独特的挑战，如协调密钥更新、群组成员更改和复杂的后期妥协恢复程序。我们需要作为一个社区来解决这个复杂的挑战。因此，互联网工程任务组（IETF）成立了一个工作组，旨在为动态群组开发一个安全且保持高效的持续异步密钥交换协议的稳定标准。当前版本的消息层安全（MLS）安全协议已处于特性冻结状态，即为了提供稳定的基础供密码分析使用，不再进行更改。密钥调度和TreeKEM设计是特别关注的问题，因为它们对于分发和组合多个密钥以实现后期妥协安全至关重要。在这项工作中，我们研究了MLS连续群组密钥派生（CGKD），其中包括MLS密钥调度、TreeKEM及其组合，如MLS RFC的第11个草案中所规定的，抽象出了签名、消息流和身份验证保证。我们建立了MLS CGKD作为计算安全性质的唯一性和密钥不可辨别性特性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833678/](https://ieeexplore.ieee.org/document/9833678/)
## Low-Bandwidth Threshold ECDSA via Pseudorandom Correlation Generators.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#low-bandwidth-threshold-ecdsa-via-pseudorandom-correlation-generators) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#low-bandwidth-threshold-ecdsa-via-pseudorandom-correlation-generators)**
### 作者
* Damiano Abram, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Ariel Nof, Department of Computer Science, Technion, Haifa, Israel
* Claudio Orlandi, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Omer Shlomovits, ZenGo X, Tel Aviv, Israel
### 摘要
> 数字签名方案是安全分布式系统的基本组成部分，签名密钥的窃取可能带来巨大的现实世界影响，例如在加密货币等应用中。阈值签名方案通过在多个服务器上分发秘密密钥的份额，并要求足够多的服务器相互交互以能够计算签名来缓解这个问题。在本文中，我们提供了一个用于ECDSA的新型阈值协议，该协议在实践中是最相关的签名方案。我们的协议是第一个预处理阶段的通信复杂度仅对数于后续要产生的ECDSA签名数量的协议，并且它因此实现了所谓的静默预处理。我们的协议在面对任意数量的任意受损方时实现了主动安全性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9833559/](https://ieeexplore.ieee.org/document/9833559/)
## Journey to the Center of the Cookie Ecosystem: Unraveling Actors' Roles and Relationships.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#journey-to-the-center-of-the-cookie-ecosystem-unraveling-actors-roles-and-relationships) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2022].md#journey-to-the-center-of-the-cookie-ecosystem-unraveling-actors-roles-and-relationships)**
### 作者
* Iskander Sanchez-Rola, NortonLifeLock Research Group
* Matteo Dell'Amico, NortonLifeLock Research Group
* Davide Balzarotti, EURECOM
* Pierre-Antoine Vervier, NortonLifeLock Research Group
* Leyla Bilge, NortonLifeLock Research Group
### 摘要
> 网络页面的复杂性随着时间的推移逐渐增加，包括来自多个不同来源和组织的代码片段。虽然这可能是一个已知现象，但其对Cookie跟踪景象的影响直到现在才引起关注。我们的研究着眼于填补这一空白，通过对爬虫结果的大规模和细粒度分析，涵盖了从爬取超过600万个网页产生和共享约1.38亿个Cookie的全部事件。我们的分析让我们能够绘制出一个高度详细的Cookie生态系统图，发现了一个复杂的连接网络，其中各个参与方相互交换信息并在网页中包含对方的内容，而这些网页的所有者可能甚至不知情。我们发现，在大多数网页中，追踪Cookie是由一系列涉及多个中间人的复杂链条的末端组织设置和共享的。我们还研究了Cookie代写的影响，即一个实体以另一方或网页的名义创建Cookie的常见做法。我们对Cookie生态系统中与Cookie创建和共享相关的一系列角色进行了归属和定义。我们看到，组织可以并且确实遵循不同的模式，包括以往的研究无法揭示的行为：例如，许多Cookie代写者将他们创建的Cookie发送给自己，这使他们能够为已删除浏览器中的第三方Cookie的用户执行跨站点追踪。虽然一些组织将信息流集中在自己身上，但还有一些行为类似调度器，允许其他组织在包含其内容的页面上进行跟踪。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9796062/](https://ieeexplore.ieee.org/document/9796062/)
