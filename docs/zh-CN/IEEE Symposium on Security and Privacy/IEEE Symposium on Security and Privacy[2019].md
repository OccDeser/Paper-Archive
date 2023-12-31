# IEEE Symposium on Security and Privacy[2019]
## Spectre Attacks: Exploiting Speculative Execution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#spectre-attacks-exploiting-speculative-execution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#spectre-attacks-exploiting-speculative-execution)**
### 作者
* Paul Kocher, Independent
* Jann Horn, Google Project Zero
* Anders Fogh, G DATA Advanced Analytics
* Daniel Genkin, University of Pennsylvania and University of Maryland
* Daniel Gruss, Graz University of Technology
* Werner Haas, Cyberus Technology
* Mike Hamburg, Rambus, Cryptography Research Division
* Moritz Lipp, Graz University of Technology
* Stefan Mangard, Graz University of Technology
* Thomas Prescher, Cyberus Technology
* Michael Schwarz, Graz University of Technology
* Yuval Yarom, University of Adelaide and Data61
### 摘要
> 现代处理器使用分支预测和推测执行来最大化性能。例如，如果分支的目的地依赖于正在读取的内存值，CPU将尝试猜测目的地并尝试提前执行。当内存值最终到达时，CPU要么丢弃或者确认推测计算结果。推测逻辑在执行方式上是不忠实的，可以访问受攻击者的内存和寄存器，并且可以执行具有可测量副作用的操作。Spectre攻击涉及诱导受攻击者推测执行在正确程序执行期间不会发生的操作，并通过侧信道将受攻击者的机密信息泄漏给对手。本文描述了一种实用的攻击方法，结合了侧信道攻击、故障攻击和返回导向编程的方法，可以从受攻击者进程中读取任意内存。更广泛地说，本文表明推测执行实现违反了许多软件安全机制的安全假设，包括操作系统进程隔离、容器化、即时编译和缓存时间和侧信道攻击的对策。这些攻击对实际系统构成严重威胁，因为弱点推测执行功能存在于英特尔、AMD和ARM等微处理器中，这些处理器在数十亿设备中使用。虽然在某些情况下可以采取临时处理器特定的对策，但解决方案需要修复处理器设计以及更新指令集架构（ISA），以便硬件架构师和软件开发人员对CPU实现可以泄漏什么计算状态（和不允许泄漏）有一个共同的理解。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835233/](https://ieeexplore.ieee.org/document/8835233/)
## SoK: The Challenges, Pitfalls, and Perils of Using Hardware Performance Counters for Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-the-challenges-pitfalls-and-perils-of-using-hardware-performance-counters-for-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-the-challenges-pitfalls-and-perils-of-using-hardware-performance-counters-for-security)**
### 作者
* Sanjeev Das, University of North Carolina at Chapel Hill
* Jan Werner, University of North Carolina at Chapel Hill
* Manos Antonakakis, Georgia Institute of Technology
* Michalis Polychronakis, Stony Brook University
* Fabian Monrose, University of North Carolina at Chapel Hill
### 摘要
> 硬件性能计数器（HPCs）在处理器中已经存在了十多年。这些计数器可以用于监视和测量发生在CPU级别的事件。现代处理器提供了数百个可监视的硬件事件，并且每个新的处理器架构都会增加更多的事件。然而，目前在如何最好地利用性能计数器准确监测实际情况方面的系统研究还很少。特别是在使用HPCs进行安全应用时，测量精度或关于测量值的错误假设可能会削弱所提供的保护。为了阐明这个问题，我们进行了一年的努力，以研究使用性能计数器获得准确事件测量的最佳实践，了解在不同情境中使用HPCs所面临的挑战和风险，并探索在不同情境和架构中获得一致准确测量的方法。此外，我们还对广泛的论文中使用的HPCs技术进行了实证评估，以确定这些广泛使用的技术是否能够正确获取性能计数器数据。作为评估的一部分，我们扩展了Weaver和McKee在将近10年前关于HPCs中的非确定性的开创性工作，并应用我们的发现到了涵盖各种应用领域的56篇论文上。在这个跟进研究中，我们发现HPCs在安全应用中的接受程度与其他应用领域有着明显的对比，特别是在过去的五年中。鉴于此，我们还研究了从安全文献中选择的另外41篇依赖于HPCs的代表作品，以更好地阐明我们发现的复杂性如何影响他们的方法和结论的正确性和准确性。为了达到这个目标，我们从实证角度评估了不适应HPCs使用中的各种微妙之处如何削弱安全应用的有效性，尤其是在漏洞预防和恶意软件检测方面。最后，我们展示了一个攻击者如何利用HPCs来绕过某些安全防御。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835366/](https://ieeexplore.ieee.org/document/8835366/)
## Theory and Practice of Finding Eviction Sets.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#theory-and-practice-of-finding-eviction-sets) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#theory-and-practice-of-finding-eviction-sets)**
### 作者
* Pepe Vila, Technical University of Madrid (UPM)
* Boris Köpf, Microsoft Research
* José F. Morales, IMDEA Software Institute
### 摘要
> 许多微体系结构攻击依赖于攻击者能够有效地寻找小型淘汰集：一组虚拟地址映射到同一个缓存集。这种能力已经成为缓存侧信道、行锤击和推测执行攻击的决定性原始技术。尽管其重要性，但有关寻找小型淘汰集的算法尚未在文献中进行系统研究。在本文中，我们进行了这样一项系统研究。我们首先对问题进行形式化，并分析了一组随机虚拟地址是淘汰集的概率。然后，我们提出了一种基于阈值组测试思想的新算法，可以在线性时间内将随机淘汰集转化为它们的最小核心，从而改进了二次多项式的最新技术。我们通过严格的实证评估来补充我们算法的理论分析，我们在这个评估中识别和隔离了影响它们在实践中可靠性的因素，如自适应缓存替换策略和TLB抖动。我们的结果表明，我们的算法使得寻找小型淘汰集比以前更快，并且在以前被认为是不切实际的条件下也能实现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835261/](https://ieeexplore.ieee.org/document/8835261/)
## Exploiting Correcting Codes: On the Effectiveness of ECC Memory Against Rowhammer Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#exploiting-correcting-codes-on-the-effectiveness-of-ecc-memory-against-rowhammer-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#exploiting-correcting-codes-on-the-effectiveness-of-ecc-memory-against-rowhammer-attacks)**
### 作者
* Lucian Cojocar, Vrije Universiteit, Amsterdam
* Kaveh Razavi, Vrije Universiteit, Amsterdam
* Cristiano Giuffrida, Vrije Universiteit, Amsterdam
* Herbert Bos, Vrije Universiteit, Amsterdam
### 摘要
> 鉴于Rowhammer攻击的影响不断增长，且缺乏足够的其他硬件防御措施，安全领域的许多人寄希望于纠错码（ECC）内存作为对抗Rowhammer攻击的几项实际可行的防御策略之一。具体而言，人们期望ECC算法能够在现实世界的环境中纠正或检测到内存中被翻转的位。然而，由于两个主要挑战，ECC到底能够对抗Rowhammer的程度还是一个开放性的研究问题。首先，我们并不清楚商品化系统中ECC实现的详细信息。其次，现有的Rowhammer攻击技术在存在ECC内存的情况下无法产生可靠的攻击。在本文中，我们解决了这两个挑战，并提供了针对ECC内存对Rowhammer攻击易感性的具体证据。为了解决第一个挑战，我们描述了一种结合自制硬件探针、Rowhammer位翻转和冷启动攻击的新方法，以逆向工程商品化的AMD和Intel处理器上的ECC功能。为了解决第二个挑战，我们提出了ECCploit，一种基于可组合的、数据可控的位翻转和ECC内存控制器中的新的侧信道的Rowhammer攻击。我们展示了，虽然ECC内存确实减少了Rowhammer攻击的攻击面，但ECCploit仍然可以让攻击者在各种系统和配置上对易受攻击的ECC内存进行可靠的Rowhammer攻击。此外，我们还展示了尽管ECC对ECCploit施加了非常复杂的约束，但ECCploit在实践中仍然可以表现得非常强大，并模拟以前的Rowhammer攻击行为。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835222/](https://ieeexplore.ieee.org/document/8835222/)
## Self-Encrypting Deception: Weaknesses in the Encryption of Solid State Drives.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#self-encrypting-deception-weaknesses-in-the-encryption-of-solid-state-drives) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#self-encrypting-deception-weaknesses-in-the-encryption-of-solid-state-drives)**
### 作者
* Carlo Meijer, Institute for Computing and Information Sciences, Radboud University, Nijmegen
* Bernard van Gastel, Institute for Computing and Information Sciences, Radboud University, Nijmegen
### 摘要
> 我们通过逆向工程分析了几款固态硬盘（SSD）的硬件全盘加密。这些固态硬盘由2014年至2018年间三家制造商生产，包括使用SATA和NVMe接口的内置型号（M.2或2.5英寸传统尺寸），以及使用USB接口的外置型号。理论上，硬件加密所提供的安全保证与软件实现类似或更好。然而，在实际中，我们发现许多使用硬件加密的型号存在严重的安全漏洞，这些漏洞源于规范、设计和实施问题。对于许多型号来说，这些安全漏洞使得在不知道任何秘密信息（如密码）的情况下，完全恢复数据成为可能。如果固态硬盘宣传支持硬件全盘加密，那么Microsoft Windows内置的加密软件BitLocker将完全依赖于该功能。因此，对于这些固态硬盘，受BitLocker保护的数据也会受到泄露的风险。我们得出结论，考虑到目前市场上大约60%的情况，目前不能仅仅依赖于固态硬盘提供的硬件加密，用户应采取额外的措施来保护他们的数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835339/](https://ieeexplore.ieee.org/document/8835339/)
## RIDL: Rogue In-Flight Data Load.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#ridl-rogue-in-flight-data-load) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#ridl-rogue-in-flight-data-load)**
### 作者
* Stephan van Schaik, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Alyssa Milburn, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Sebastian Österlund, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Pietro Frigo, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Giorgi Maisuradze, CISPA Helmholtz Center for Information Security Saarland Informatics Campus
* Kaveh Razavi, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Herbert Bos, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
* Cristiano Giuffrida, Department of Computer Science, Vrije Universiteit Amsterdam, The Netherlands
### 摘要
> 我们介绍了Rogue In-flight Data Load（RIDL），这是一种新的推测未授权和受限攻击类别，可以跨地址空间和特权边界（例如，进程、内核、SGX甚至CPU内部操作）泄露任意数据。我们的逆向工程努力表明，此类漏洞源于广泛存在于通用（英特尔）处理器中的各种微观优化，导致CPU使用多余的CPU内部在飞数据（例如，线路填充缓冲区）推测性地服务负载。与其他先进的推测执行攻击（如Spectre、Meltdown和Foreshadow）不同，RIDL可以在对特权软件控制的缓存或翻译数据结构的状态没有任何假设的情况下泄漏此任意在飞数据。这具有令人担忧的影响。首先，RIDL攻击甚至可以在线性执行中实施，无需无效页故障，消除了异常抑制机制的需要，使得任意非特权代码（包括浏览器中的JavaScript）可以进行系统范围的攻击。为了示范这种攻击，我们构建了一些实际的利用程序，可以从受害进程、虚拟机、内核、SGX和CPU内部组件中泄露敏感信息。其次，更重要的是，RIDL绕过了软件中所有现有的“点”缓解措施（例如KPTI、PTE反转）和硬件（例如推测性存储器绕过禁用），即使通过更重型的防御措施（例如L1D刷新或禁用SMT）也很难得到缓解。RIDL对每种变体的点缓解策略的可持续性提出了质疑，并建议需要更基础的缓解措施来遏制不断出现的推测执行攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835281/](https://ieeexplore.ieee.org/document/8835281/)
## Perun: Virtual Payment Hubs over Cryptocurrencies.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#perun-virtual-payment-hubs-over-cryptocurrencies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#perun-virtual-payment-hubs-over-cryptocurrencies)**
### 作者
* Stefan Dziembowski, University of Warsaw
* Lisa Eckey, TU Darmstadt
* Sebastian Faust, TU Darmstadt
* Daniel Malinowski, University of Warsaw
### 摘要
> 支付通道最近出现，成为一种在加密货币中执行廉价微支付的高效方法。与传统的链上交易相比，支付通道的优势在于它们可以在不涉及区块链的情况下在各方之间进行几乎无限数量的交易。在本文中，我们介绍了Perun，一种离链通道系统，它提供了一种比现有的“通过多个通道进行路由交易”技术更高效的连接通道的新方法。为此，Perun引入了一种称为“虚拟支付通道”的技术，以避免每个单独支付涉及中介。在本文中，我们对一个中介的情况下进行了该技术的形式建模和安全性证明，该中介可以被视为与多个参与方有直接通道的“支付中心”。我们的方案适用于任何提供图灵完备智能合约的加密货币。作为概念验证，我们在以太坊上实现了Perun的智能合约。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835315/](https://ieeexplore.ieee.org/document/8835315/)
## Redactable Blockchain in the Permissionless Setting.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#redactable-blockchain-in-the-permissionless-setting) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#redactable-blockchain-in-the-permissionless-setting)**
### 作者
* Dominic Deuber, Friedrich-Alexander University, Erlangen-Nürnberg, Germany
* Bernardo Magri, Aarhus University, Denmark
* Sri Aravinda Krishnan Thyagarajan, Friedrich-Alexander University, Erlangen-Nürnberg, Germany
### 摘要
> 比特币是一种不可变的无权限区块链系统，许多应用程序广泛使用它作为公共公告板，并且严重依赖其不可变性。然而，比特币的不可变性并非没有缺点。国际刑警组织揭露了比特币区块链中存在有害和潜在非法的文件、图像和链接，此后对当前驻留在比特币区块链中的数据类型进行了多方面的定性和定量分析。尽管对区块链引起了很多关注，但奇怪的是，以前在无权限设置中提出的数据编辑解决方案远非可行，并且需要额外的信任假设。因此，有害数据问题仍然对国际刑警组织等执法机构构成了巨大挑战（Tziakouris，IEEE S&P'18）。我们提出了第一个适用于无权限设置的高效可编辑区块链，可以轻松集成到比特币中，而且不依赖于重型密码工具或信任假设。我们的协议采用基于共识的投票机制，并由策略参数化，该策略规定了编辑的要求和约束条件；如果编辑获得足够的投票，操作将在链上执行。作为额外的功能，我们的协议提供了编辑链的公共可验证性和问责性。此外，我们提供了正式的安全定义和证明，证明我们的协议对未经共识同意的编辑是安全的。此外，我们通过一个概念验证实现展示了我们方法的可行性，与不可变性的方案相比，在链验证中只有微小的开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835372/](https://ieeexplore.ieee.org/document/8835372/)
## Proof-of-Stake Sidechains.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#proof-of-stake-sidechains) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#proof-of-stake-sidechains)**
### 作者
* Peter Gaži, IOHK, Bratislava, Slovakia
* Aggelos Kiayias, IOHK, University of Edinburgh, Edinburgh, UK
* Dionysis Zindros, IOHK, University of Athens, Athens, Greece
### 摘要
> 侧链长期以来一直被认为是区块链可扩展性和互操作性的关键因素。然而，迄今为止还没有对该概念进行建模或证明安全性的构建尝试。我们提供了侧链系统的首个正式定义，以及如何安全地在侧链之间转移资产的方法。我们提出了一个安全定义，扩展了已知的交易账本的活跃性和安全性属性，使其适用于多个账本，并利用新的“防火墙”安全属性来保护每个区块链免受其侧链的影响，限制了灾难性侧链故障的影响。然后，我们提供了适用于权益证明（PoS）侧链系统的侧链构建方法。作为一个示例性的具体实例，我们提供了一个符合基于时间片的 PoS 系统的构建，与 Cardano 中使用的 Ouroboros（Crypto 2017）一致，Cardano 是市值最高的纯 PoS 系统之一，我们还评论了该构建如何适应其他协议，如 Ouroboros Praos（Eurocrypt 2018），Ouroboros Genesis（CCS 2018），Snow White 和 Algorand。我们构建的一个重要特性是合并质押，可以防止针对只承载少量质押的侧链的“金手指”攻击。我们在构建中使用的一个重要的链固定技术是跨链认证，这需要一个我们引入的新的密码原语，称为即兴阈值多签名（ATMS），可能具有独立的研究价值。我们展示了如何通过常规和聚合数字签名以及存储效率不同的知识简洁论据（如STARKs和bulletproofs）来安全实例化ATMS。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835275/](https://ieeexplore.ieee.org/document/8835275/)
## Ouroboros Crypsinous: Privacy-Preserving Proof-of-Stake.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#ouroboros-crypsinous-privacy-preserving-proof-of-stake) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#ouroboros-crypsinous-privacy-preserving-proof-of-stake)**
### 作者
* Thomas Kerber, The University of Edinburgh and IOHK
* Aggelos Kiayias, The University of Edinburgh and IOHK
* Markulf Kohlweiss, The University of Edinburgh and IOHK
* Vassilis Zikas, The University of Edinburgh and IOHK
### 摘要
> 我们提出了Ouroboros Crypsinous，这是第一个经过正式分析的隐私保护的权益证明区块链协议。为了模拟其安全性，我们对可能具有独立兴趣的(G)UC情境中的私有账本进行了彻底的处理。为了证明我们的协议对自适应攻击是安全的，我们引入了一种依赖于SNARKs和密钥私有正向安全加密的新的硬币演化技术。后一种原语和相关的构造可能具有独立的兴趣。我们强调，现有的对私有区块链的方法，如基于工作证明的Zerocash，仅针对静态腐败进行了分析。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835272/](https://ieeexplore.ieee.org/document/8835272/)
## Lay Down the Common Metrics: Evaluating Proof-of-Work Consensus Protocols' Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#lay-down-the-common-metrics-evaluating-proof-of-work-consensus-protocols-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#lay-down-the-common-metrics-evaluating-proof-of-work-consensus-protocols-security)**
### 作者
* Ren Zhang, Nervos and imec-COSIC, KU Leuven
* Bart Preneel, imec-COSIC, KU Leuven
### 摘要
> 根据比特币的纳卡莫托共识协议（NC），数百种加密货币利用工作量证明（PoW）来维护他们的账本。然而，研究表明，NC无法实现完美的链条质量，使恶意矿工能够修改公共账本以发动几种攻击，例如自私挖矿、双重支付和分叉攻击。一些后来的设计，如以太坊、比特币-NG、DECOR+、Byzcoin和Publish or Perish，旨在通过提高链条质量来解决这个问题；其他设计，如Fruitchains、DECOR+和Subchains，在没有完美链条质量的情况下声称成功抵御这些攻击。由于它们的有效性仍然是自我声称的，社区对于是否有可能实现安全的PoW协议存在分歧。为了解决这种不确定性并奠定共同知识的基础，本文引入了一个多维评估框架，以定量分析PoW协议的链条质量和抗攻击性能。随后，我们使用这个框架来通过马尔科夫决策过程评估这些改进设计的安全性。我们得出结论，迄今为止，没有任何PoW协议实现了理想的链条质量，也没有抵御了所有三种攻击。我们将现有PoW协议的链条质量不完美归因于其不现实的安全假设，将它们对抗攻击的不满意归因于“奖励坏人”和“惩罚好人”之间的困境。此外，我们的分析还揭示了一些针对特定协议的新攻击策略。基于我们的分析，我们提出了未来发展更安全的PoW协议的方向，并指出了几个PoW安全分析中的常见陷阱。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835227/](https://ieeexplore.ieee.org/document/8835227/)
## XCLAIM: Trustless, Interoperable, Cryptocurrency-Backed Assets.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#xclaim-trustless-interoperable-cryptocurrency-backed-assets) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#xclaim-trustless-interoperable-cryptocurrency-backed-assets)**
### 作者
* Alexei Zamyatin, SBA Research
* Dominik Harz, Imperial College, London
* Joshua Lind, Imperial College, London
* Panayiotis Panayiotou, Imperial College, London
* Arthur Gervais, Imperial College, London
* William Knottenbelt, Imperial College, London
### 摘要
> 构建无信任的跨区块链交易协议是具有挑战性的。因此，中心化交易所仍然是执行区块链间转移的首选途径。然而，这些服务需要信任，因此削弱了它们所操作的区块链的本质。为了克服这一问题，近来出现了几个去中心化交易所，它们提供对原子跨链交换（ACCS）的支持。ACCS可以在区块链之间进行无信任的加密货币交换，是目前已知的唯一机制。然而，ACCS存在重大限制，它们速度慢、效率低下、成本高昂，因此很少在实践中使用。我们提出XCLAIM：第一个通用框架，用于在现有的区块链上安全地实现无信任和高效的跨链交换，使用加密货币支持的资产（CbAs）。XCLAIM提供了发行、转移、交换和赎回CbAs的协议，可以在现有的区块链上以非交互方式进行。我们在比特币和以太坊之间实例化了XCLAIM，并评估了我们的实施；发行任意数量的比特币支持代币在以太坊上的成本低于0.50美元。我们展示了XCLAIM不仅更快，而且比原子跨链交换便宜得多。最后，XCLAIM与大多数现有的区块链兼容，可以实现多种新颖的加密货币应用，例如跨链支付通道和高效的多方交换。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835387/](https://ieeexplore.ieee.org/document/8835387/)
## Does Certificate Transparency Break the Web? Measuring Adoption and Error Rate.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#does-certificate-transparency-break-the-web-measuring-adoption-and-error-rate) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#does-certificate-transparency-break-the-web-measuring-adoption-and-error-rate)**
### 作者
* Emily Stark, Google
* Ryan Sleevi, Google
* Rijad Muminovic, University of Sarajevo
* Devon O'Brien, Google
* Eran Messeri, Google
* Adrienne Porter Felt, Google
* Brendan McMillion, Cloudflare
* Parisa Tabriz, Google
### 摘要
> 证书透明度（CT）是一种新兴的系统，用于快速发现恶意或错误颁发的证书。CT最初于2013年标准化，如今终于开始得到广泛支持。虽然CT提供了理想的安全益处，但由于可能造成大量网站故障的风险，Web浏览器不能立即要求所有网站都支持CT。我们讨论了部署的挑战，分析了CT在Web上的采用情况，并测量了使用Google Chrome Web浏览器的用户经历的错误率。我们发现，CT到目前为止已得到广泛采用，几乎没有出现故障和警告。安全研究人员常常在安全和用户困扰之间进行权衡：推出新的安全要求通常会导致故障。我们将CT视为实施生态系统范围变革并尽量减少最终用户影响的案例研究。我们讨论了CT的设计特性，这些特性使其成功成为可能，并从其风险和陷阱中汲取教训，以避免在未来大规模安全部署中出现类似情况。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835212/](https://ieeexplore.ieee.org/document/8835212/)
## EmPoWeb: Empowering Web Applications with Browser Extensions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#empoweb-empowering-web-applications-with-browser-extensions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#empoweb-empowering-web-applications-with-browser-extensions)**
### 作者
* Dolière Francis Somé, Université Côte d’Azur / Inria, France
### 摘要
> 浏览器扩展是第三方程序，与浏览器紧密集成，在提供额外功能的同时，以提升的权限执行。与Web应用不同，扩展不受同源策略（SOP）的限制，因此可以读取和写入任何Web应用上的用户数据。它们还可以访问敏感用户信息，包括浏览历史、书签、凭证（Cookie）和已安装扩展列表。它们可以访问永久存储空间，只要它们安装在用户的浏览器中，就可以将数据存储在其中。它们可以触发任意文件的下载并将其保存在用户设备上。出于安全原因，浏览器扩展和Web应用在不同的环境中执行。尽管如此，在所有主要浏览器中，扩展和Web应用可以通过交换消息进行交互。通过这些通信渠道，Web应用可以利用扩展的特权功能，从而访问和窃取敏感用户信息。在这项工作中，我们分析了Chrome、Firefox和Opera浏览器扩展向Web应用公开的通信接口。结果显示，有许多扩展可以被Web应用利用来访问特权功能。通过扩展的API，Web应用可以绕过同源策略，访问其他任何Web应用上的用户数据，访问用户的凭证（Cookie）、浏览历史、书签、已安装扩展的列表、扩展存储，以及在用户设备上下载和保存任意文件。我们的结果表明，浏览器扩展和Web应用之间的通信对浏览器、Web应用以及更重要的用户造成了严重的安全和隐私威胁。我们讨论了对策和建议，并认为我们的研究，特别是我们用于检测和利用这些威胁的工具，可以作为浏览器供应商在扩展审核过程中的一部分，帮助他们识别和修复上述问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835286/](https://ieeexplore.ieee.org/document/8835286/)
## "If HTTPS Were Secure, I Wouldn't Need 2FA" - End User and Administrator Mental Models of HTTPS.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#if-https-were-secure-i-wouldnt-need-2fa-end-user-and-administrator-mental-models-of-https) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#if-https-were-secure-i-wouldnt-need-2fa-end-user-and-administrator-mental-models-of-https)**
### 作者
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
* Karoline Busse, Bonn University
* Katharina Pfeffer, SBA Research
* Matthew Smith, Bonn University FhG FKIE
* Emanuel von Zezschwitz, Bonn University FhG FKIE
### 摘要
> HTTPS（超文本传输安全协议）是一种用于保护通信的最重要的协议之一，并且令人欣慰的是，它正变得越来越普遍。然而，尤其是长尾网站仍然没有足够的安全保护。HTTPS涉及不同类型的用户，例如，面对警告时被迫做出关键安全决策的终端用户，以及需要处理加密基础知识和关于兼容性的复杂决策的管理员。在这项工作中，我们首次对终端用户和管理员对HTTPS的心理模型进行了定性研究。我们对18名终端用户和12名管理员进行了访谈；我们的研究结果揭示了两组人群对安全效益和威胁模型存在误解。我们确定了干扰安全配置和使用行为的协议组件，并揭示了管理员和终端用户心理模型之间的差异。我们的研究结果表明，终端用户的心理模型更加概念化，而管理员的模型更加基于协议。我们还发现，终端用户经常混淆加密和身份验证，严重低估了HTTPS的安全效益，并忽视和不信任安全指示器，而管理员通常无法理解功能性协议组件之间的相互作用。根据不同的心理模型，我们讨论了对用户界面和协议未来设计的影响，并提供了可执行的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835228/](https://ieeexplore.ieee.org/document/8835228/)
## Fidelius: Protecting User Secrets from Compromised Browsers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#fidelius-protecting-user-secrets-from-compromised-browsers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#fidelius-protecting-user-secrets-from-compromised-browsers)**
### 作者
* Saba Eskandarian, Stanford University
* Jonathan Cogan, Stanford University
* Sawyer Birnbaum, Stanford University
* Peh Chang Wei Brandon, Stanford University
* Dillon Franke, Stanford University
* Forest Fraser, Stanford University
* Gaspar Garcia, Stanford University
* Eric Gong, Stanford University
* Hung T. Nguyen, Stanford University
* Taresh K. Sethi, Stanford University
* Vishal Subbiah, Stanford University
* Michael Backes, CISPA Helmholtz Center for Information Security
* Giancarlo Pellegrino, Stanford University
* Dan Boneh, Stanford University
### 摘要
> 用户经常在浏览器窗口中输入敏感数据，例如密码、信用卡号码或税务信息。虽然现代浏览器提供了强大的客户端隐私保护措施来保护这些数据，但这些防御措施无法阻止被恶意软件感染的浏览器窃取数据。在这项工作中，我们提出了Fidelius，这是一种新的架构，它使用集成到浏览器中的可信硬件隔离来保护用户在网络浏览会话期间的敏感信息，即使整个底层浏览器和操作系统都被恶意攻击者完全控制。Fidelius解决了在完全恶意环境中为浏览器提供保护所涉及的许多挑战，为表单数据、JavaScript执行、XMLHttpRequests和受保护的Web存储提供完整性和隐私支持，同时最大限度地减少了TCB。此外，隔离域和浏览器之间、键盘和显示器之间的交互都需要新的协议，每个协议都有自己的安全考虑。最后，Fidelius考虑了用户界面的考虑，以确保对开发人员和用户都具有一致且简单的界面。作为该项目的一部分，我们开发了第一个开源系统，它提供了一个信任路径，从输入和输出外设到硬件隔离域，而无需依赖额外的虚拟化安全假设。这些组件可能具有独立的兴趣，并对未来的项目有用。我们实施和评估了Fidelius以测量其性能开销，发现Fidelius对于安全页面的加载和用户交互 impose 可接受的开销，并且不会对不使用其增强安全功能的页面和页面组件产生影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835331/](https://ieeexplore.ieee.org/document/8835331/)
## Postcards from the Post-HTTP World: Amplification of HTTPS Vulnerabilities in the Web Ecosystem.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#postcards-from-the-post-http-world-amplification-of-https-vulnerabilities-in-the-web-ecosystem) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#postcards-from-the-post-http-world-amplification-of-https-vulnerabilities-in-the-web-ecosystem)**
### 作者
* Stefano Calzavara, Ca’ Foscari Univ.
* Riccardo Focardi, Ca’ Foscari Univ. & Cryptosense
* Matus Nemec, Ca’ Foscari Univ. & Masaryk Univ.
* Alvise Rabitti, Ca’ Foscari Univ.
* Marco Squarcina, TU Wien
### 摘要
> HTTPS旨在通过提供加密保护层来保护Web上的通信，确保通信的机密性和完整性，并实现客户机/服务器身份验证。然而，HTTPS是基于SSL/TLS协议套件的，而这些套件在过去的几年中已经显示出对各种攻击易受攻击的弱点。这导致了服务器和浏览器中的修复和缓解措施，产生了一种在现代Web上协议版本和实现的混合复杂情况，这使得目前对现代Web上哪些攻击仍然有效以及它们对Web应用程序安全的影响不清楚。在本文中，我们首次对由于密码漏洞引起的Web应用程序不安全性进行系统的定量评估。我们使用攻击树指定了针对TLS的攻击条件，并通过爬取Alexa排名前10000的网站来评估这些问题对页面完整性、身份验证凭据和Web跟踪的重要性。我们的结果表明，大量网站的安全性受到密码弱点的严重损害，而这在许多情况下都是由于外部或相关域主机引起的。这在实证上系统地证明了由Web生态系统的复杂性放大了相对较少的可利用HTTPS漏洞的数量。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835223/](https://ieeexplore.ieee.org/document/8835223/)
## Towards Practical Differentially Private Convex Optimization.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#towards-practical-differentially-private-convex-optimization) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#towards-practical-differentially-private-convex-optimization)**
### 作者
* Roger Iyengar, Carnegie Mellon University
* Joseph P. Near, University of California, Berkeley
* Dawn Song, University of California, Berkeley
* Om Thakkar, Boston University
* Abhradeep Thakurta, University of California, Santa Cruz
* Lun Wang, Peking University
### 摘要
> 构建有用的预测模型通常涉及从敏感数据中学习。使用差分隐私训练模型可以保证这些敏感数据的隐私。对于凸优化任务，已知有几种差分隐私算法，但尚未实际部署。在本研究中，我们对实际的差分隐私凸优化做出了两个重要贡献。首先，我们提出了一种名为近似最小扰动的算法，该算法可以利用任何现成的优化器。我们展示了它可以在不进行任何超参数调整的情况下使用，因此对于实际部署来说是一种有吸引力的技术。其次，我们对当前最先进的差分隐私凸优化算法进行了广泛的经验评估，使用了一系列公开可用的基准数据集和通过工业合作获得的真实世界数据集。我们发布了所有考虑到的差分隐私凸优化算法的开源实现，并在多达九个公开数据集上进行了基准测试，其中有四个是高维的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835258/](https://ieeexplore.ieee.org/document/8835258/)
## PrivKV: Key-Value Data Collection with Local Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#privkv-key-value-data-collection-with-local-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#privkv-key-value-data-collection-with-local-differential-privacy)**
### 作者
* Qingqing Ye, Department of Electronic and Information Engineering, Hong Kong Polytechnic University
* Haibo Hu, Department of Electronic and Information Engineering, Hong Kong Polytechnic University
* Xiaofeng Meng, School of Information, Renmin University of China
* Huadi Zheng, Department of Electronic and Information Engineering, Hong Kong Polytechnic University
### 摘要
> 本文研究了本地差分隐私（LDP）技术在键值数据上的频率和均值估计问题。LDP是一种新兴且有前景的隐私保护分布式数据收集技术，其中每个用户在将数据发送给不受信任的数据收集器之前会对其数据进行本地扰动。LDP的优势在于使收集器能够获取关于敏感用户数据（如位置和应用使用情况）的准确统计估计结果，而无需访问这些数据。然而，现有的LDP工作仅限于简单的数据类型，如分类、数值和集合值数据。据我们所知，目前尚无关于键值数据的LDP工作，而键值数据是一种极为流行的NoSQL数据模型，也是集合值和数值数据的广义形式。在本文中，我们首先设计了一个基准方法PrivKV，该方法与现有的LDP技术使用相同的“扰动-校准”范例。为了解决用户扰动带来的估计精度不佳的问题，我们随后提出了两种迭代解决方案PrivKVM和PrivKVM+，通过一系列迭代逐渐改善估计结果。还提出了一种优化策略，通过在收集器端引入虚拟迭代而无需用户参与，以减少网络延迟并提高估计精度。我们通过理论分析和大量实验结果验证了这些解决方案的正确性和有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835348/](https://ieeexplore.ieee.org/document/8835348/)
## Differentially Private Model Publishing for Deep Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#differentially-private-model-publishing-for-deep-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#differentially-private-model-publishing-for-deep-learning)**
### 作者
* Lei Yu, School of Computer Science, College of Computing, Georgia Institute of Technology
* Ling Liu, School of Computer Science, College of Computing, Georgia Institute of Technology
* Calton Pu, School of Computer Science, College of Computing, Georgia Institute of Technology
* Mehmet Emre Gursoy, School of Computer Science, College of Computing, Georgia Institute of Technology
* Stacey Truex, School of Computer Science, College of Computing, Georgia Institute of Technology
### 摘要
> 基于神经网络的深度学习技术在广泛的人工智能任务中取得了显著成功。大规模的训练数据集是它们成功的关键因素之一。然而，当训练数据集是由个体众包并包含敏感信息时，模型参数可能会编码私人信息，并带来隐私泄露的风险。最近共享和发布预训练模型的趋势进一步加剧了这种隐私风险。为了解决这个问题，我们提出了一种差分隐私方法来训练神经网络。我们的方法包括几种新技术，以优化隐私损失和模型准确性。我们采用了一种称为集中差分隐私（CDP）的差分隐私泛化方法，并对两种不同数据批处理方法的隐私损失进行了正式和精细的分析。我们实现了一个动态隐私预算分配器来提高模型准确性。广泛的实验表明，我们的方法在给定隐私预算下有效改善了隐私损失计算、训练效率和模型质量。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835283/](https://ieeexplore.ieee.org/document/8835283/)
## KHyperLogLog: Estimating Reidentifiability and Joinability of Large Data at Scale.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#khyperloglog-estimating-reidentifiability-and-joinability-of-large-data-at-scale) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#khyperloglog-estimating-reidentifiability-and-joinability-of-large-data-at-scale)**
### 作者
* Pern Hui Chia, Google
* Damien Desfontaines, ETH Zürich
* Irippuge Milinda Perera, Google
* Daniel Simmons-Marengo, Google
* Chao Li, Google
* Wei-Yen Day, Google
* Qiushi Wang, Google
* Miguel Guevara, Google
### 摘要
> 理解数据集的与隐私相关特征，如可重新识别性和可连接性，对于数据治理至关重要，但对于大型数据集来说可能很困难。虽然通过蛮力计算数据特征是直接的，但大型组织所收集的系统和数据规模要求高效的方法。我们提出了KHyperLogLog（KHLL）算法，该算法基于近似计数技术，可以使用线性运行时间和最小内存估计非常大型数据库的可重新识别性和可连接性风险。KHLL使得我们可以定量地度量数据的可重新识别性，而不是基于专家判断或手动审查。同时，使用KHLL进行可连接性分析有助于确保伪名化和已识别数据集的分开。我们描述了组织如何使用KHLL来提高用户隐私保护。KHLL的高效性使得我们能够安排定期分析，以便检测隐私预期风险随时间的任何偏差，作为回归测试。我们通过使用专有和公开可用的数据集进行实验证实了KHLL的性能和准确性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835393/](https://ieeexplore.ieee.org/document/8835393/)
## Characterizing Pixel Tracking through the Lens of Disposable Email Services.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#characterizing-pixel-tracking-through-the-lens-of-disposable-email-services) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#characterizing-pixel-tracking-through-the-lens-of-disposable-email-services)**
### 作者
* Hang Hu, Department of Computer Science, Virginia Tech
* Peng Peng, Department of Computer Science, Virginia Tech
* Gang Wang, Department of Computer Science, Virginia Tech
### 摘要
> 一次性电子邮件服务提供临时电子邮件地址，使人们能够在注册在线账户时不暴露真实电子邮件地址。在本文中，我们进行了对一次性电子邮件服务的首次测量研究，旨在实现两个主要目标。首先，我们旨在了解一次性电子邮件服务的用途以及常见用例中涉及的风险（如果有）。其次，我们使用一次性电子邮件服务作为公共通道，收集一个用于测量电子邮件追踪的大规模电子邮件数据集。在三个月内，我们从7个热门一次性电子邮件服务收集了一个数据集，其中包含210K个域发送的230万封电子邮件。我们展示了通过一次性电子邮件地址注册的在线账户很容易被劫持，导致信息泄露和财务损失的潜在风险。通过经验分析电子邮件追踪，我们发现第三方追踪非常普遍，尤其是在热门服务发送的电子邮件中。我们观察到追踪器使用各种方法来隐藏其追踪行为，例如虚假声明追踪图片的大小或将真实追踪器隐藏在重定向后面。少数顶级追踪器在追踪生态系统中显眼，但尚未主导市场。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835374/](https://ieeexplore.ieee.org/document/8835374/)
## Reasoning Analytically about Password-Cracking Software.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#reasoning-analytically-about-password-cracking-software) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#reasoning-analytically-about-password-cracking-software)**
### 作者
* Enze Liu, University of Chicago
* Amanda Nakanishi, University of Chicago
* Maximilian Golla, Ruhr University Bochum
* David Cash, University of Chicago
* Blase Ur, University of Chicago
### 摘要
> 一大批文献已提出了有效的技术，通过对密码破解算法建模来估计密码强度。不幸的是，这些先前的技术只适用于概率密码模型，而现实中的攻击者很少使用这种模型。在本文中，我们介绍了一种能够在John the Ripper和Hashcat等软件工具中对基于转换的密码破解进行分析的技术。我们定义了两种新操作，规则反转和猜测计数，通过这些操作我们可以分析这些工具，而无需枚举所有可能的猜测。我们实现了这些技术，并发现在估计密码强度所需的时间上有数量级的减少。我们还提出了四个应用示例，展示了我们的技术如何提高这些攻击配置的科学严谨性。特别地，我们展示了我们的技术如何利用已知密码数据来改进转换规则的排序，并识别攻击配置中可能缺失的规则和单词。因此，我们的工作首次引入了一些基于原则的机制，用于对实际中出现的猜测密码攻击类型进行科学推理。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835241/](https://ieeexplore.ieee.org/document/8835241/)
## True2F: Backdoor-Resistant Authentication Tokens.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#true2f-backdoor-resistant-authentication-tokens) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#true2f-backdoor-resistant-authentication-tokens)**
### 作者
* Emma Dauterman, Stanford and Google
* Henry Corrigan-Gibbs, Stanford
* David Mazières, Stanford
* Dan Boneh, Stanford
* Dominic Rizzo, Google
### 摘要
> 我们介绍了True2F，这是一个用于二次因素认证的系统，它在面对网络钓鱼和软件篡改时提供传统认证令牌的好处，同时还能提供强大的保护，防止令牌故障和后门攻击。为此，我们开发了新的轻量级的双方协议来生成密码学密钥和ECDSA签名，并实现了新的隐私防御措施，以防止跨域令牌指纹攻击。为了促进真实世界的部署，我们的系统与今天的支持U2F的网络服务兼容，并且在固件修改后可以在通用硬件令牌上运行。相较于未受保护的U2F，一个受到True2F保护的身份验证仅需要57ms在令牌上完成。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835225/](https://ieeexplore.ieee.org/document/8835225/)
## Beyond Credential Stuffing: Password Similarity Models Using Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#beyond-credential-stuffing-password-similarity-models-using-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#beyond-credential-stuffing-password-similarity-models-using-neural-networks)**
### 作者
* Bijeeta Pal, Cornell Tech
* Tal Daniel, Technion
* Rahul Chatterjee, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### 摘要
> 攻击者越来越多地使用从一个网站泄露的密码来入侵其他网站上的关联账户。这种针对性攻击之所以有效，是因为用户在不同的网站上重复使用或选择相似的密码。我们将针对性攻击的核心技术挑战之一重新定义为对人选择的密码相似性建模的任务。我们展示了如何利用14亿个泄露的电子邮件和密码对来学习良好的密码相似性模型。利用我们训练出的密码相似性模型，我们展示了迄今为止最具破坏力的针对性攻击。模拟结果表明，我们的攻击可以在不到一千次猜测中侵入超过16%的用户账户，前提是攻击者已知其中一个密码，并且即使使用了最先进的防御措施。我们通过一个涉及大学认证服务的案例研究证明了这些攻击在实践中也是有效的。我们还首次提出了针对此类针对性攻击的防御方法，即个性化密码强度评估器（PPSM）。这些密码强度评估器可以在用户选择容易受攻击的密码时进行警告，包括针对用户先前泄露密码的针对性攻击。我们设计并构建了一个可以压缩到小于3 MB的PPSM，使其易于部署，以准确评估密码对抗所有已知的猜测攻击的强度。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835247/](https://ieeexplore.ieee.org/document/8835247/)
## The 9 Lives of Bleichenbacher's CAT: New Cache ATtacks on TLS Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#the-9-lives-of-bleichenbachers-cat-new-cache-attacks-on-tls-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#the-9-lives-of-bleichenbachers-cat-new-cache-attacks-on-tls-implementations)**
### 作者
* Eyal Ronen, Tel Aviv University
* Robert Gillham, University of Adelaide
* Daniel Genkin, University of Michigan
* Adi Shamir, Weizmann Institute
* David Wong, NCC Group
* Yuval Yarom, University of Adelaide
### 摘要
> 在CRYPTO'98会议上，Bleichenbacher发表了他的开创性论文，描述了一种针对遵循PKCS #1 v1.5标准的RSA实现的填充预言攻击。在过去的二十年中，研究人员和实施者为了弥补所有潜在的Bleichenbacher泄漏的源头，付出了大量的努力来开发和部署许多缓解技术。然而，正如我们在本文中所展示的，大多数实现仍然容易受到基于各种微架构侧信道的几种新型攻击的影响：经过我们测试的九个流行的TLS实现中，我们能够通过可行的概念验证攻击来破解七个实现的安全性。我们展示了使用类似缓存的ATacks (CATs)来对任何存在漏洞的服务端的TLS连接进行降级攻击的可行性，使用类似BEAST的浏览器中的中间人攻击。我们面临的主要困难是如何在浏览器设定的超时时间之前（几乎所有浏览器的超时时间为30秒，只有Firefox可以被欺骗延长此时间），执行所需的成千上万个预言查询。由于它使用自适应选择密文查询，攻击似乎是固有的顺序的，但我们描述了一种通过利用共享相同公钥证书的TLS服务器的任何可用数量来并行化 Bleichenbacher-like填充攻击的新方法。通过这一改进，我们可以证明在不到30秒的时间内，从五个可用的TLS服务器中恢复出RSA明文的所有2048比特（包括足以建立安全连接的预主密钥值）。这种攻击的顺序到并行的转变可以独立地加快和简化对RSA实现的其他侧信道攻击，具有独立价值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835216/](https://ieeexplore.ieee.org/document/8835216/)
## An Extensive Formal Security Analysis of the OpenID Financial-Grade API.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#an-extensive-formal-security-analysis-of-the-openid-financial-grade-api) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#an-extensive-formal-security-analysis-of-the-openid-financial-grade-api)**
### 作者
* Daniel Fett, yes.com AG
* Pedram Hosseyni, University of Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Germany
### 摘要
> 受法规和产业需求的压力，全球银行正在努力通过基于网络的应用程序接口（API）向第三方服务开放其客户的在线银行账户。通过使用所谓的开放银行API，诸如金融科技公司等第三方公司能够读取有关其用户的银行账户的信息并发起付款。为了保护客户，对于这种对金融数据和资源的访问，需要满足特别高的安全要求。在这个领域中最有前景的一个标准是开放ID金融级API（FAPI），目前由开放ID基金会在一个开放的过程中开发，并得到了大型行业合作伙伴的支持。FAPI是OAuth 2.0的一个配置文件，专为高风险场景而设计，并旨在对抗非常强大的攻击者。为了实现这种安全级别，FAPI采用了一系列用于加固OAuth 2.0的机制，例如代码和令牌绑定（包括mTLS和OAUTB），JWS客户端断言以及代码交换的证明密钥。在本文中，我们对FAPI的安全性进行了严格、系统的形式分析，基于现有的全面网络基础设施模型 - Fett、Küsters和Schmitz提出的网络基础设施模型（WIM）。为此，我们首先在WIM中开发了FAPI的精确模型，包括只读和读写访问的不同配置文件、不同流程、不同类型的客户端以及安全特性的不同组合，捕捉了基于网络环境中的复杂交互。然后，我们使用我们对FAPI的模型来精确定义中心安全属性。为了证明这些属性，我们发现了部分严重的攻击，破坏了身份验证、授权和会话完整性属性。我们针对这些攻击制定了缓解措施，并最终能够正式证明修复版本的FAPI的安全性。虽然金融应用程序是高风险环境，但这项工作是首次对开放银行安全配置文件进行形式化分析和验证的工作。从独立的利益角度来看，我们还发现了加固OAuth 2.0的上述安全机制的弱点。我们说明了这些机制不一定能够实现它们设计的安全属性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835218/](https://ieeexplore.ieee.org/document/8835218/)
## Asm2Vec: Boosting Static Representation Robustness for Binary Clone Search against Code Obfuscation and Compiler Optimization.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#asm2vec-boosting-static-representation-robustness-for-binary-clone-search-against-code-obfuscation-and-compiler-optimization) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#asm2vec-boosting-static-representation-robustness-for-binary-clone-search-against-code-obfuscation-and-compiler-optimization)**
### 作者
* Steven H. H. Ding, Data Mining and Security Lab, School of Information Studies, McGill University, Montreal, Canada
* Benjamin C. M. Fung, Data Mining and Security Lab, School of Information Studies, McGill University, Montreal, Canada
* Philippe Charland, Mission Critical Cyber Security Section, Defence R&D Canada - Valcartier, Quebec, QC, Canada
### 摘要
> 逆向工程是一种手动密集但必要的技术，用于理解新的恶意软件的内部运作方式，发现现有系统中的漏洞，并检测已发布软件中的专利侵权行为。一个汇编克隆搜索引擎通过识别重复或已知部分来简化逆向工程师的工作。然而，设计一个强大的克隆搜索引擎是具有挑战性的，因为存在各种编译器优化选项和代码混淆技术，使得逻辑上相似的汇编函数看起来非常不同。一个实用的克隆搜索引擎依赖于一种鲁棒的汇编代码向量表示。然而，现有的克隆搜索方法依赖于手动特征工程过程来形成汇编函数的特征向量，未能考虑特征之间的关系，也未能识别那些能够在统计上区分汇编函数的独特模式。为了解决这个问题，我们提出了基于汇编代码的词汇语义关系和向量表示的联合学习模型。我们开发了一个汇编代码表示学习模型\emph{Asm2Vec}。它只需要汇编代码作为输入，不需要任何先前的知识，如汇编函数之间的正确映射关系。它可以找到和整合出现在汇编代码中的令牌之间的丰富语义关系。我们进行了大量实验证明了学习模型与最先进的静态和动态克隆搜索方法的性能。我们展示了所学习表示更加鲁棒，并且在面对混淆和优化引入的变化时明显优于现有方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835340/](https://ieeexplore.ieee.org/document/8835340/)
## Iodine: Fast Dynamic Taint Tracking Using Rollback-free Optimistic Hybrid Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#iodine-fast-dynamic-taint-tracking-using-rollback-free-optimistic-hybrid-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#iodine-fast-dynamic-taint-tracking-using-rollback-free-optimistic-hybrid-analysis)**
### 作者
* Subarno Banerjee, University of Michigan
* David Devecsery, Georgia Institute of Technology
* Peter M. Chen, University of Michigan
* Satish Narayanasamy, University of Michigan
### 摘要
> 动态信息流追踪（DIFT）对于执行安全策略非常有用，但在实际应用中很少使用，因为可能会使程序减慢十倍的速度。静态程序分析可以用于证明安全执行状态并省略不必要的DIFT监视器，但这些分析的性能改进受到维持严谨性的限制。本文提出了一种新颖的乐观混合分析（OHA），以显著减少DIFT开销，同时仍能保证准确结果。它包括一个基于预测的整体程序静态污点分析，通过假设从配置文件中收集的可能不变量，大大提高了精确度。优化的DIFT对于那些满足这些不变量的执行是可靠的，并且对于那些不满足这些不变量的执行则恢复到保守的DIFT。我们展示了如何解决使用OHA优化实时执行的主要问题，即无限回滚的可能性。通过将我们的预测静态分析定制为仅消除安全省略的空操作监视器，我们消除了恢复过程中的任何回滚需求。我们的工具Iodine将执行安全策略的DIFT开销降低到9％，比传统混合分析低4.4倍，同时仍能在实时系统上运行。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835304/](https://ieeexplore.ieee.org/document/8835304/)
## CaSym: Cache Aware Symbolic Execution for Side Channel Detection and Mitigation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#casym-cache-aware-symbolic-execution-for-side-channel-detection-and-mitigation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#casym-cache-aware-symbolic-execution-for-side-channel-detection-and-mitigation)**
### 作者
* Robert Brotzman, Department of Computer Science and Engineering, Pennsylvania State University, State College, PA
* Shen Liu, Department of Computer Science and Engineering, Pennsylvania State University, State College, PA
* Danfeng Zhang, Department of Computer Science and Engineering, Pennsylvania State University, State College, PA
* Gang Tan, Department of Computer Science and Engineering, Pennsylvania State University, State College, PA
* Mahmut Kandemir, Department of Computer Science and Engineering, Pennsylvania State University, State College, PA
### 摘要
> 基于缓存的侧信道正在成为一个重要的攻击向量，通过这种方式可以向恶意方泄露秘密信息。然而，基于缓存的侧信道检测以前的工作受到了代码覆盖问题的困扰，或者没有提供对应用缓解技术至关重要的诊断信息。我们提出了CaSym，一种缓存感知的符号执行方法，用于识别并报告输入程序中侧信道出现的精确信息。与现有工作相比，CaSym具有以下几个独特的特点：（1）CaSym可以针对各种攻击模型和缓存模型进行验证，（2）与许多用于程序漏洞发现的符号执行系统不同，CaSym以一种可靠的方式验证所有程序执行路径，（3）CaSym使用两种新颖的抽象缓存模型，在分析可扩展性和精确性之间取得良好的平衡，（4）CaSym提供了关于如何在识别出的侧信道中进行缓解的位置和方式的充分信息，包括预加载和固定等技术。在一组加密和数据库基准测试中的评估结果表明，CaSym在识别和缓解侧信道方面的效果良好，并且效率合理。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835249/](https://ieeexplore.ieee.org/document/8835249/)
## Towards Automated Safety Vetting of PLC Code in Real-World Plants.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#towards-automated-safety-vetting-of-plc-code-in-real-world-plants) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#towards-automated-safety-vetting-of-plc-code-in-real-world-plants)**
### 作者
* Mu Zhang, Department of Computer Science, Cornell University
* Chien-Ying Chen, Department of Computer Science, University of Illinois at Urbana-Champaign
* Bin-Chou Kao, Information Trust Institute, University of Illinois at Urbana-Champaign
* Yassine Qamsane, Department of Mechanical Engineering, University of Michigan
* Yuru Shao, Department of Electrical Engineering and Computer Science, University of Michigan
* Yikai Lin, Department of Computer Science, Cornell University
* Elaine Shi, Department of Computer Science, Cornell University
* Sibin Mohan, Department of Computer Science, Cornell University
* Kira Barton, Department of Computer Science, Cornell University
* James Moyne, Department of Computer Science, Cornell University
* Z. Morley Mao, Department of Electrical Engineering and Computer Science, University of Michigan
### 摘要
> 最近，由于PLC（可编程逻辑控制器）的故障或攻击引起的安全违规问题引起了广泛关注。然而，之前对PLC代码的审核努力存在许多缺点。静态分析和验证会产生大量的误报，并且无法揭示特定的运行时上下文。另一方面，动态分析和符号执行由于无法处理面向事件和时间敏感的真实世界PLC程序而失败。在本文中，我们提出了一种基于程序分析的临时情境感知方法VetPLC，以生成可用于自动安全审核的定时事件序列。为此，我们（a）进行静态程序分析，创建定时事件因果图，以了解PLC代码中事件之间的因果关系，并（b）从在工业控制系统（ICS）测试平台中收集的数据跟踪中挖掘时间不变量，以定量衡量受机器操作约束的时间依赖关系。我们的VetPLC原型已经实现了15K行代码。我们在两个不同的ICS设置中对10个实际场景进行评估。实验结果表明，VetPLC优于最先进的技术，并且能够生成可用于自动检测隐藏安全违规问题的事件序列。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835244/](https://ieeexplore.ieee.org/document/8835244/)
## Using Safety Properties to Generate Vulnerability Patches.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#using-safety-properties-to-generate-vulnerability-patches) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#using-safety-properties-to-generate-vulnerability-patches)**
### 作者
* Zhen Huang, University of Toronto
* David Lie, University of Toronto
* Gang Tan, Pennsylvania State University
* Trent Jaeger, University of Toronto
### 摘要
> 安全漏洞是现存最关键的软件缺陷之一。一旦发现，程序员致力于尽快生成可以防止漏洞的补丁，这就促使了自动程序修复（APR）方法自动生成补丁的需求。不幸的是，目前大多数APR方法都存在不足，因为它们使用示例来近似生成防止漏洞所需的属性。这种近似会导致补丁要么不能全面修复漏洞，要么甚至可能引入新的错误。相比之下，我们提出了面向属性的APR方法，它使用用户指定的、与程序无关并且针对漏洞的安全属性来生成源代码补丁。与通过观察测试用例执行而得到的近似属性不同，这些安全属性是精确而完备的。主要挑战在于将这些安全属性映射到能够实例化到现有程序中的源代码补丁中。为了解决这些挑战，我们提出了Senx，它给定一组安全属性和一个触发漏洞的单个输入，检测到与漏洞输入违反的安全属性，并生成相应的补丁以强制执行安全属性，从而消除漏洞。Senx解决了属性为基础的APR的几个挑战：它确定必须评估以检查安全属性的程序表达式和变量，确定它们可以在何处进行评估的程序范围，它生成新代码来选择性地计算所需的值，如果调用现有的程序代码会导致不必要的副作用，它使用一种新颖的访问范围分析技术，避免将补丁放置在可能引起性能开销的循环中。我们的评估结果显示，Senx生成的补丁成功修复了来自11个应用程序的42个真实世界漏洞中的32个，包括用于操作图形/媒体文件的各种工具或库、一种编程语言解释器、一种关系数据库引擎、用于创建和管理二进制程序的一组编程工具以及一组基本的文件、Shell和文本处理工具。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835226/](https://ieeexplore.ieee.org/document/8835226/)
## Short Text, Large Effect: Measuring the Impact of User Reviews on Android App Security & Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#short-text-large-effect-measuring-the-impact-of-user-reviews-on-android-app-security-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#short-text-large-effect-measuring-the-impact-of-user-reviews-on-android-app-security-privacy)**
### 作者
* Duc Cuong Nguyen, CISPA, Saarland University
* Erik Derr, CISPA, Saarland University
* Michael Backes, CISPA Helmholtz Center i.G.
* Sven Bugiel, CISPA Helmholtz Center i.G.
### 摘要
> 应用市场简化了终端用户查找和安装应用程序的任务。它们也成为应用开发者与终端用户之间即时沟通的渠道，通过应用评论，用户可以向开发者提供关于应用程序的反馈意见。然而，尚不清楚用户在多大程度上使用此渠道来指出他们对应用程序的安全性和隐私方面的担忧，用户在哪些方面表达了担忧，以及开发者对此类安全性和隐私方面的评论如何做出反应。本文提出了第一项研究，研究了终端用户评论与应用程序中与安全性和隐私相关的变化之间的关系。通过在Google Play中对2,583个热门应用的4.5百万用户评论进行自然语言处理，我们识别出了5,527个与安全性和隐私相关的评论（SPR）。对于SPR中提到的每个应用程序版本，我们使用静态代码分析来提取评论中提到的受权限保护的功能。我们成功地将SPR映射到了60.77％的应用更新中与隐私相关的变化。通过探索性数据分析和回归分析，我们能够展示先前的SPR是预测与隐私相关的应用程序更新的重要因素，表明用户评论实际上促进了应用程序的隐私改进。我们的结果进一步表明，采用运行时权限的应用程序接收到的与安全性和隐私相关的评论数量明显更多，这表明运行时权限能更好地让用户意识到可能侵犯隐私的操作。此外，我们可以将大约一半的所有与隐私相关的应用程序变更归因于第三方库代码。这暗示了应用程序开发者在遵守用户隐私期望和市场隐私法规方面存在较大问题。我们的研究呼吁采取行动，使应用程序行为对用户更加透明，以便利用他们的评论为开发者遵守安全性和隐私最佳实践提供激励，同时我们的研究结果同时呼吁提供更好的工具来支持应用程序开发者在这方面的努力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835383/](https://ieeexplore.ieee.org/document/8835383/)
## Demystifying Hidden Privacy Settings in Mobile Apps.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#demystifying-hidden-privacy-settings-in-mobile-apps) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#demystifying-hidden-privacy-settings-in-mobile-apps)**
### 作者
* Yi Chen, Key Laboratory of Network Assessment Technology, CAS
* Mingming Zha, School of Cyber Security, University of Chinese Academy of Sciences
* Nan Zhang, Indiana University Bloomington
* Dandan Xu, School of Cyber Security, University of Chinese Academy of Sciences
* Qianqian Zhao, School of Cyber Security, University of Chinese Academy of Sciences
* Xuan Feng, School of Cyber Security, University of Chinese Academy of Sciences
* Kan Yuan, Indiana University Bloomington
* Fnu Suya, The University of Virginia
* Yuan Tian, The University of Virginia
* Kai Chen, School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, CAS, {CAS-KLONAT†, BKLONSPT‡, SKLOIS♮}, Institute of Information Engineering
* Wei Zou, School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 手机应用程序包括隐私设置，允许用户配置他们的数据应如何共享。然而，这些设置通常很难找到，用户也很难理解，即使在流行的应用程序（比如Facebook）中也是如此。更严重的是，它们通常默认设置为共享用户数据，未经适当同意就暴露了用户的隐私。在本文中，我们报告了对这个问题的首次系统研究，这得益于对用户对隐私设置的深入分析。更具体地说，我们首先进行了两项用户研究（涉及近千名用户），以了解用户角度的隐私设置，并确定这些难以找到的设置。然后，我们选择了14个独特描述这些隐藏隐私设置的特征，并利用一种名为基于语义的用户界面追踪技术从给定的应用程序中提取它们。在这些特征的基础上，我们训练了一个分类器来自动发现隐藏的隐私设置，并与其他创新一起实现到了一个名为“Hound”的工具中。在我们的标记数据集上，该工具实现了93.54%的准确率。进一步在来自Google Play和第三方市场的10万个最新应用程序上运行该工具，我们发现这些应用程序中有超过三分之一（36.29%）的隐私设置是“隐藏的”。查看这些设置，我们发现它们变得难以发现和理解主要是由于应用程序用户界面的问题分类和/或混乱的描述。更重要的是，尽管随着时间的推移给用户提供了更多的隐私选项，但我们也发现它们的可用性问题仍然存在，而且更加严重，例如最初易于找到的设置现在更难找到。在所有这些隐藏隐私设置中，82.16%默认设置为泄漏用户隐私。在我们的研究结束时，我们提供了改进这些隐私设置可用性的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835388/](https://ieeexplore.ieee.org/document/8835388/)
## Security of GPS/INS Based On-road Location Tracking Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#security-of-gps-ins-based-on-road-location-tracking-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#security-of-gps-ins-based-on-road-location-tracking-systems)**
### 作者
* Sashank Narain, Northeastern University, Boston, MA, USA
* Aanjhan Ranganathan, Northeastern University, Boston, MA, USA
* Guevara Noubir, Northeastern University, Boston, MA, USA
### 摘要
> 位置信息对于各种导航和跟踪应用至关重要。GPS作为当今事实上的户外定位系统已被证明容易受到信号欺骗攻击的威胁。惯性导航系统（INS）作为一种流行的辅助系统正在发展壮大，尤其在道路交通系统中，它们可以提供改进的导航和跟踪功能，并对无线信号欺骗和干扰攻击具有抗性。在本文中，我们评估了INS辅助GPS跟踪和导航在道路交通系统中的安全性保证。我们考虑了一个需要从起始位置到达目的地并由INS辅助GPS系统监视的对手。对手的目标是在不被发现的情况下前往其他位置。我们开发和评估了能够实现这一目标的算法，为对手提供了相当大的自由度。我们的算法为给定的道路网络构建了一个图模型，并使我们能够得出攻击者可以达到的潜在目的地，即使使用了INS辅助GPS跟踪和导航系统也不会引起警报。这些算法使陀螺仪和加速度计传感器变得无用，因为它们产生的道路轨迹与合理的路径（无论是转弯角度还是道路曲率）无法区分。我们还设计、构建并演示了通过精确控制线圈的组合可以主动欺骗磁力计。为了在实际环境中实验性地展示和评估攻击的可行性，我们实现了首个实时集成的GPS/INS欺骗器，考虑到交通流动性、拥堵情况、信号灯，并动态生成相应的欺骗信号。此外，我们利用驾驶轨迹和公开可用的城市规划对十个不同城市进行了攻击评估。我们的评估结果显示，攻击者可以在不被发现的情况下到达距离实际目的地高达30公里的目的地。我们还展示了在某些城市中，攻击者可以达到目标区域内几乎60-80%的可能点。这些结果仅为下限，因为攻击者可以调整我们的参数，将更多资源（例如时间）用于目标源/目的地，以超越我们对数千条路径进行性能评估所花费的资源。我们提出了限制攻击者能力的对策，而无需进行任何硬件修改。我们的系统可以作为应对此类攻击的基础，既可以检测到欺骗路径，又可以推荐难以欺骗的路径。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835306/](https://ieeexplore.ieee.org/document/8835306/)
## Understanding the Security of ARM Debugging Features.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#understanding-the-security-of-arm-debugging-features) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#understanding-the-security-of-arm-debugging-features)**
### 作者
* Zhenyu Ning, COMPASS Lab, Wayne State University
* Fengwei Zhang, COMPASS Lab, Wayne State University
### 摘要
> 如今的处理器普遍配备调试功能，以便于程序分析。具体而言，ARM调试架构涉及一系列CoreSight组件和调试寄存器，用于辅助系统调试，并设计了一组调试验证信号来限制这些组件和寄存器的使用。与此同时，调试功能的安全性未经充分审查，因为在传统的调试模式下通常需要物理访问才能使用这些功能。然而，ARM从ARMv7开始引入了一种不需要物理访问的新调试模式，这加剧了我们对调试功能安全性的担忧。本文对ARM调试功能进行了全面的安全分析，并总结了安全和漏洞的影响。为了了解这些影响的影响，我们还调查了一系列不同产品领域（例如开发板、物联网设备、云服务器和移动设备）的基于ARM的平台。我们认为分析和调查揭示了一个在ARM平台上普遍存在的新攻击面。为了验证我们的担忧，我们进一步设计了钉枪攻击，该攻击通过滥用调试功能，从低权限模式下获得敏感信息（例如AES加密密钥和指纹图像），并在高权限模式下实现任意有效负载的执行。该攻击不依赖于软件错误，我们的实验证明，我们调查的几乎所有平台都容易受到该攻击。在ARM生态系统中, 我们从不同的角度讨论了潜在的缓解措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835394/](https://ieeexplore.ieee.org/document/8835394/)
## Tap 'n Ghost: A Compilation of Novel Attack Techniques against Smartphone Touchscreens.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#tap-n-ghost-a-compilation-of-novel-attack-techniques-against-smartphone-touchscreens) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#tap-n-ghost-a-compilation-of-novel-attack-techniques-against-smartphone-touchscreens)**
### 作者
* Seita Maruyama, Waseda University, Japan
* Satohiro Wakabayashi, Waseda University, Japan
* Tatsuya Mori, Waseda University / RIKEN AIP, Japan
### 摘要
> 我们提出了一种名为“Tap 'n Ghost”的新型攻击方法，旨在攻击NFC手机等NFC启用的移动设备的触摸屏。Tap 'n Ghost包括两种突出的攻击技术——“基于标签的自适应策略（TAP）”和“幽灵触摸生成器”。首先，使用嵌入在常见物体（如桌子）中的NFC卡模拟器，TAP系统通过使用设备指纹识别对受害者的手机进行定制攻击；例如，弹出一个定制的对话框，询问是否连接到攻击者的蓝牙鼠标。此外，幽灵触摸生成器迫使受害者即使触摸“取消”按钮来取消对话框，也会强制连接到鼠标；即它改变了屏幕上按钮的选择。在建立连接之后，攻击者可以远程控制手机，并且根据设备指纹识别获取的屏幕布局信息。为了评估攻击的实际情况，我们进行了涉及300名受访者的在线调查和涉及16名参与者的用户研究。结果表明，这种攻击是现实的。我们还讨论了对抗Tap 'n Ghost威胁的可能对策。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835251/](https://ieeexplore.ieee.org/document/8835251/)
## SensorID: Sensor Calibration Fingerprinting for Smartphones.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sensorid-sensor-calibration-fingerprinting-for-smartphones) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sensorid-sensor-calibration-fingerprinting-for-smartphones)**
### 作者
* Jiexin Zhang, University of Cambridge
* Alastair R. Beresford, University of Cambridge
* Ian Sheret, Polymath Insight Limited
### 摘要
> 传感器是如今许多计算机系统中不可或缺的组件。移动设备是一个很好的例子，其包含了大量的传感器，从加速度计和GPS装置到摄像头和麦克风。这些传感器的数据可供应用程序员使用，用于构建上下文感知应用程序。良好的传感器准确性通常至关重要，因此制造商经常使用每个设备的出厂校准来补偿在制造过程中引入的系统性误差。在这篇论文中，我们研究了一种传感器数据指纹攻击的新类型：校准指纹攻击。校准指纹攻击通过仅对传感器输出进行仔细分析即可推断出设备的出厂校准数据。这种攻击不需要直接访问任何校准参数，因为这些参数通常嵌入在设备固件中，并且应用程序开发人员无法直接访问。我们通过对iOS和Android设备中的惯性测量单元传感器进行校准指纹攻击，展示了这一新型攻击的潜力。这些传感器是很好的候选对象，因为访问这些传感器不需要任何特殊权限，并且可以通过设备上安装的本机应用和访问iOS和Android设备上的网站时的JavaScript来访问数据。我们发现我们能够执行非常有效的校准指纹攻击：我们的方法仅需要不到100个传感器数据样本，并且在收集和处理这些数据成为不会随时间或出厂重置而改变的设备指纹时只需要不到一秒钟的时间。我们证明了我们的方法很有可能为iOS设备生成全球唯一的指纹，iPhone 6S设备的指纹估计具有67位的熵。此外，我们还发现Google Pixel 2和Pixel 3设备的加速度计也可以通过我们的方法进行指纹识别。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835276/](https://ieeexplore.ieee.org/document/8835276/)
## Certified Robustness to Adversarial Examples with Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#certified-robustness-to-adversarial-examples-with-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#certified-robustness-to-adversarial-examples-with-differential-privacy)**
### 作者
* Mathias Lecuyer, Columbia University
* Vaggelis Atlidakis, Columbia University
* Roxana Geambasu, Columbia University
* Daniel Hsu, Columbia University
* Suman Jana, Columbia University
### 摘要
> 对机器学习模型，尤其是深度神经网络，产生误导的对抗样本一直是一个高度研究的课题，攻击和防御相互博弈。过去的大部分防御手段都是尽力而为，并且被证明对复杂攻击是脆弱的。最近引入了一组认证防御机制，提供了针对范数受限攻击的鲁棒性保证。然而，这些防御机制要么不能适应大规模数据集，要么只适用于特定类型的模型。本文提出了首个能够适应大型网络和数据集（如谷歌的ImageNet中的Inception网络）并广泛适用于任意模型类型的认证防御。我们的防御机制名为PixelDP，基于对抗样本鲁棒性与差分隐私之间的新颖联系，差分隐私是一种基于密码学的隐私形式主义，为防御机制提供了严密、通用且灵活的基础。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835364/](https://ieeexplore.ieee.org/document/8835364/)
## DEEPSEC: A Uniform Platform for Security Analysis of Deep Learning Model.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#deepsec-a-uniform-platform-for-security-analysis-of-deep-learning-model) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#deepsec-a-uniform-platform-for-security-analysis-of-deep-learning-model)**
### 作者
* Xiang Ling, Zhejiang University
* Shouling Ji, Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies
* Jiaxu Zou, Zhejiang University
* Jiannan Wang, Zhejiang University
* Chunming Wu, Zhejiang University
* Bo Li, UIUC
* Ting Wang, Lehigh University
### 摘要
> 深度学习（DL）模型天生容易受到对抗性示例的攻击，这些恶意构造的输入可以导致目标DL模型的错误行为，从而严重阻碍了DL在安全敏感领域的应用。对抗学习的大量研究导致了攻击者和防御者之间的军备竞赛。这种新兴攻击和防御的丰富性引发了许多问题：哪些攻击更具回避性，可预处理性或可传递性？哪些防御更有效，保持实用性或通用性？多个防御的合奏是否比个人更强大？然而，由于缺乏全面评估对抗性攻击和防御的平台，这些关键问题仍然部分未解决。本文介绍了DEEPSEC的设计，实现和评估，它是一个统一的平台，旨在弥合这一间隔。在当前实施中，DEEPSEC结合了16种最先进的攻击方法和10种攻击实用度量，以及13种最先进的防御方法和5种防御实用度量。据我们所知，DEEPSEC是第一个能够使研究人员和从业人员能够（i）量化DL模型的易受攻击性，（ii）评估各种攻击/防御方法的有效性，以及（iii）以全面和信息丰富的方式进行攻击/防御方法的比较研究的平台。利用DEEPSEC，我们系统评估了现有的对抗性攻击和防御方法，并得出一系列关键发现，证明了DEEPSEC的丰富功能，例如：（1）误分类和感知性之间的权衡在经验上得到确认；（2）大多数声称具有普适性的防御方法只能在受限环境下防御有限类型的攻击；（3）高扰动幅度的对抗性示例并不一定更容易被检测到；（4）多个防御的合奏无法提高整体防御能力，但可以提高个体的最低防御效果。DEEPSEC的广泛分析证明了它作为基准平台的能力和优势，对未来的对抗学习研究具有益处。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835375/](https://ieeexplore.ieee.org/document/8835375/)
## Exploiting Unintended Feature Leakage in Collaborative Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#exploiting-unintended-feature-leakage-in-collaborative-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#exploiting-unintended-feature-leakage-in-collaborative-learning)**
### 作者
* Luca Melis, UCL
* Congzheng Song, Cornell University
* Emiliano De Cristofaro, UCL & Alan Turing Institute
* Vitaly Shmatikov, Cornell Tech
### 摘要
> 合作机器学习和相关技术，如联邦学习，允许多个参与者使用各自的训练数据集通过本地训练并定期交换模型更新来构建联合模型。我们证明了这些更新会泄漏参与者训练数据的无意信息，并开发被动和主动推断攻击来利用这种泄漏。首先，我们展示了对手可以推断出其他参与者的训练数据中存在的确切数据点（例如特定位置）（即成员推断）。然后，我们展示了这个对手如何推断出仅对训练数据子集有效且与联合模型旨在捕捉的属性无关的属性。例如，他可以推断出特定人首次出现在用于训练二元性别分类器的照片中的时间。我们在各种任务、数据集和学习配置上评估了我们的攻击，分析了它们的局限性，并讨论了可能的防御措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835269/](https://ieeexplore.ieee.org/document/8835269/)
## Neural Cleanse: Identifying and Mitigating Backdoor Attacks in Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#neural-cleanse-identifying-and-mitigating-backdoor-attacks-in-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#neural-cleanse-identifying-and-mitigating-backdoor-attacks-in-neural-networks)**
### 作者
* Bolun Wang, UC Santa Barbara
* Yuanshun Yao, University of Chicago
* Shawn Shan, University of Chicago
* Huiying Li, University of Chicago
* Bimal Viswanath, Virginia Tech
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 深度神经网络（DNNs）缺乏透明度，使其容易受到后门攻击的影响，其中隐藏的关联或触发器可以覆盖正常分类，产生意外结果。例如，当输入中存在特定符号时，具有后门的模型总是将脸识别为比尔·盖茨。后门可以一直隐藏，直到被输入触发，并对许多安全或安全相关应用，例如生物特征身份验证系统或自动驾驶汽车，构成严重的安全风险。我们提出了第一个稳健且可推广的检测和缓解DNN后门攻击的系统。我们的技术能够识别后门并重建可能的触发器。我们通过对各种DNNs进行大量实验证明了它们的有效性，并克服了先前工作识别出的两种类型的后门注入方法。我们的技术还证明了对多种后门攻击变体的稳健性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835365/](https://ieeexplore.ieee.org/document/8835365/)
## Helen: Maliciously Secure Coopetitive Learning for Linear Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#helen-maliciously-secure-coopetitive-learning-for-linear-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#helen-maliciously-secure-coopetitive-learning-for-linear-models)**
### 作者
* Wenting Zheng, UC Berkeley
* Raluca Ada Popa, UC Berkeley
* Joseph E. Gonzalez, UC Berkeley
* Ion Stoica, UC Berkeley
### 摘要
> 许多组织希望通过合作训练机器学习模型来利用它们的组合数据集获得共同的好处（例如，更好的医学研究或欺诈检测）。然而，由于隐私问题和/或业务竞争，它们通常无法共享明文数据集。在本文中，我们设计并构建了一种名为Helen的系统，该系统允许多个参与方在不透露其数据的情况下训练线性模型，这种设置被称为合作竞争学习。与先前的安全训练系统相比，Helen可以防御一个更为恶意且可以危害m-1个参与方的更强大的对手。我们的评估结果显示，与使用现有最先进的安全多方计算框架训练相比，Helen可以实现高达五个数量级的性能提升。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835215/](https://ieeexplore.ieee.org/document/8835215/)
## Comprehensive Privacy Analysis of Deep Learning: Passive and Active White-box Inference Attacks against Centralized and Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#comprehensive-privacy-analysis-of-deep-learning-passive-and-active-white-box-inference-attacks-against-centralized-and-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#comprehensive-privacy-analysis-of-deep-learning-passive-and-active-white-box-inference-attacks-against-centralized-and-federated-learning)**
### 作者
* Milad Nasr, University of Massachusetts Amherst
* Reza Shokri, National University of Singapore
* Amir Houmansadr, University of Massachusetts Amherst
### 摘要
> 深度神经网络对各种推理攻击都很容易受到攻击，因为它们会记忆有关训练数据的信息。我们设计了白盒推理攻击，以对深度学习模型进行全面的隐私分析。我们通过对完全训练的模型参数以及训练过程中的参数更新进行隐私泄漏度量。我们设计了关于集中式和联合学习的推理算法，针对被动和主动推理攻击者，并假设攻击者具有不同的先验知识。我们评估了我们的新型白盒成员推理攻击对深度学习算法的追踪训练数据记录的效果。我们表明，将已知的黑盒攻击直接扩展到白盒环境（通过分析激活函数的输出）是无效的。因此，我们设计了专门针对白盒环境的新算法，通过利用随机梯度下降算法的隐私漏洞，该算法用于训练深度神经网络。我们研究了深度学习模型可能泄露训练数据信息的原因。然后，我们通过分析用于CIFAR数据集的最先进预训练和公开可用模型，展示了即使是良好泛化模型也非常容易受到白盒成员推理攻击的情况。我们还展示了在联合学习环境中，对方可以成功运行主动成员推理攻击，即使全局模型达到了高预测准确度。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835245/](https://ieeexplore.ieee.org/document/8835245/)
## Razzer: Finding Kernel Race Bugs through Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#razzer-finding-kernel-race-bugs-through-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#razzer-finding-kernel-race-bugs-through-fuzzing)**
### 作者
* Dae R. Jeong, Computer Science, KAIST
* Kyungtae Kim, Computer Science, Purdue University
* Basavesh Shivakumar, Computer Science, Purdue University
* Byoungyoung Lee, Electrical and Computer Engineering, Seoul National University
* Insik Shin, Computer Science, KAIST
### 摘要
> 内核中的数据竞争是一类重要的错误，对相关系统的可靠性和安全性有重要影响。由于竞争，内核可能变得无响应。更糟糕的是，攻击者可能发起特权提升攻击以获取root特权。在本文中，我们提出了Razzer，一种在内核中发现竞争错误的工具。Razzer的核心是引导模糊测试在内核中寻找潜在的数据竞争点。Razzer采用了两种技术来高效地找到竞争：静态分析和确定性线程交错技术。使用静态分析，Razzer识别出了过度近似的潜在数据竞争点，引导模糊测试更高效地搜索内核中的数据竞争。使用在超级监视器上实现的确定性线程交错技术，Razzer控制了内核的非确定性行为，从而可以确定地触发竞争。我们实现了Razzer的原型，并使用Razzer对最新的Linux内核（从v4.16-rc3到v4.18-rc3）进行了测试。结果，Razzer在内核中发现了30个新的竞争错误，并在报告后由内核开发人员确认和修补了其中的16个。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835326/](https://ieeexplore.ieee.org/document/8835326/)
## ProFuzzer: On-the-fly Input Type Probing for Better Zero-Day Vulnerability Discovery.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#profuzzer-on-the-fly-input-type-probing-for-better-zero-day-vulnerability-discovery) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#profuzzer-on-the-fly-input-type-probing-for-better-zero-day-vulnerability-discovery)**
### 作者
* Wei You, Department of Computer Science, Purdue University, Indiana, USA
* Xueqiang Wang, School of Informatics, Computing, and Engineering, Indiana University Bloomington, Indiana, USA
* Shiqing Ma, Department of Computer Science, Purdue University, Indiana, USA
* Jianjun Huang, School of Information, Renmin University of China, Beijing, China
* Xiangyu Zhang, Department of Computer Science, Purdue University, Indiana, USA
* XiaoFeng Wang, School of Informatics, Computing, and Engineering, Indiana University Bloomington, Indiana, USA
* Bin Liang, School of Information, Renmin University of China, Beijing, China
### 摘要
> 现有的基于突变的模糊测试器倾向于在不理解程序的底层语法和语义的情况下随机突变输入。在本文中，我们提出了一种新颖的即时探测技术（称为ProFuzzer），它在模糊测试过程中自动恢复和理解与漏洞发现密切相关的输入字段，并智能地调整突变策略，增加命中零日攻击目标的机会。由于这种探测技术透明地搭载在常规模糊测试中，不需要事先了解输入规范。在模糊测试过程中，首先对单个字节进行突变，然后自动分析其模糊测试结果，将相关字节连接起来并识别与之连接的字段类型；然后根据类型特定的策略共同对这些字节进行进一步的突变，从而大大减少了搜索空间。我们对所有应用程序一般定义了探针类型，因此使得我们的技术适用于各种应用。我们在标准基准测试和真实应用程序上进行的实验表明，ProFuzzer在性能上明显优于AFL及其优化版本AFLFast，以及其他状态最新的模糊测试器，包括VUzzer、Driller和QSYM。在两个月内，在10个深度测试的程序中，它暴露了42个零日漏洞，生成了30个CVE标识。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835384/](https://ieeexplore.ieee.org/document/8835384/)
## Full-Speed Fuzzing: Reducing Fuzzing Overhead through Coverage-Guided Tracing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#full-speed-fuzzing-reducing-fuzzing-overhead-through-coverage-guided-tracing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#full-speed-fuzzing-reducing-fuzzing-overhead-through-coverage-guided-tracing)**
### 作者
* Stefan Nagy, Virginia Tech
* Matthew Hicks, Virginia Tech
### 摘要
> 覆盖引导模糊测试是发现软件错误和安全漏洞的最成功方法之一。其中的三个主要组成部分是：（1）测试用例生成，（2）代码覆盖跟踪和（3）崩溃诊断，而代码覆盖跟踪是主要的性能开销来源。覆盖引导模糊测试通过静态或动态二进制插装，或最近的硬件支持，跟踪每个测试用例的代码覆盖。不幸的是，即使大多数测试用例及其覆盖信息被丢弃，因为它们不增加代码覆盖率，跟踪所有测试用例仍会产生显著的性能惩罚。为了消除覆盖引导模糊测试中不必要的跟踪，我们引入了覆盖引导跟踪的概念。覆盖引导跟踪利用了两个观察结果：（1）只有一部分生成的测试用例增加了覆盖率，因此需要跟踪；以及（2）随着时间的推移，增加覆盖率的测试用例越来越少。覆盖引导跟踪将目标二进制文件中的当前覆盖范围编码，以便在测试用例产生新覆盖时进行自述（无需跟踪）。这作为一个跟踪的过滤器，仅将跟踪的开销限制在仅增加覆盖率的测试用例上。因此，覆盖引导跟踪将处理增加覆盖率的测试用例的时间增加，以减少处理不增加覆盖率的测试用例的时间。为了展示覆盖引导跟踪的潜力，我们创建了一个基于静态二进制插装工具Dyninst的实现，称为UnTracer。我们使用模糊测试社区常用的八个真实世界二进制文件对UnTracer进行评估。实验证明，在仅一小时的模糊测试后，UnTracer的平均开销低于1%，在24小时的模糊测试后，UnTracer的开销接近0%，而使用流行的白盒和黑盒二进制跟踪器AFL-Clang、AFL-QEMU和AFL-Dyninst跟踪每个测试用例分别产生了36%、612%和518%的开销。我们进一步将UnTracer与最先进的混合模糊器QSYM集成，结果显示在24小时的模糊测试中，QSYM-UnTracer执行的测试用例比QSYM-Clang和QSYM-QEMU分别多出79%和616%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835316/](https://ieeexplore.ieee.org/document/8835316/)
## NEUZZ: Efficient Fuzzing with Neural Program Smoothing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#neuzz-efficient-fuzzing-with-neural-program-smoothing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#neuzz-efficient-fuzzing-with-neural-program-smoothing)**
### 作者
* Dongdong She, Columbia University
* Kexin Pei, Columbia University
* Dave Epstein, Columbia University
* Junfeng Yang, Columbia University
* Baishakhi Ray, Columbia University
* Suman Jana, Columbia University
### 摘要
> 模糊测试已成为发现软件漏洞的事实上的标准技术。然而，即使是最先进的模糊测试工具在查找难以触发的软件错误方面也不是很有效。大多数流行的模糊测试工具使用进化引导来生成可以触发不同错误的输入。这种进化算法虽然快速和简单易实现，却经常陷入无效的随机突变序列。梯度引导优化提供了一种有希望的替代方法。梯度引导技术已被证明在解决高维结构化优化问题方面，如机器学习领域，通过高效利用梯度或高阶导数显著优于进化算法。然而，梯度引导方法在模糊测试中并不直接适用，因为现实世界的程序行为包含许多不连续、高原和脊线，在这些区域，基于梯度的方法往往会卡住。我们观察到，可以通过创建一个平滑的代理函数来解决这个问题，该函数近似目标程序的离散分支行为。在本文中，我们提出了一种使用代理神经网络模型的新型程序平滑技术，可以逐步学习复杂的现实世界程序的分支行为的平滑逼近。我们进一步证明了这些神经网络模型可以与梯度引导的输入生成方案一起使用，以显著提高模糊测试过程的效率。我们的广泛评估表明，NEUZZ在找到新的错误和实现更高的边缘覆盖率方面，在10个流行的现实世界程序上显著优于10种最先进的灰盒模糊测试工具。NEUZZ在10个现实世界程序中发现了31个以前未知的错误（包括两个CVE），其他模糊测试工具未能发现，并在24小时运行中实现了比所有测试的灰盒模糊测试工具更高的3倍的边缘覆盖率。此外，NEUZZ在LAVA-M和DARPA CGC漏洞数据集上的表现也超过了现有的模糊测试工具。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835342/](https://ieeexplore.ieee.org/document/8835342/)
## Fuzzing File Systems via Two-Dimensional Input Space Exploration.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#fuzzing-file-systems-via-two-dimensional-input-space-exploration) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#fuzzing-file-systems-via-two-dimensional-input-space-exploration)**
### 作者
* Wen Xu, Georgia Institute of Technology
* Hyungon Moon, Ulsan National Institute of Science and Technology
* Sanidhya Kashyap, Georgia Institute of Technology
* Po-Ning Tseng, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 文件系统是操作系统的基本构建模块，过于庞大和复杂以至于难以无缺陷。然而，文件系统仍然依赖于常规的压力测试工具和形式化检查器来发现错误，但由于文件系统和操作系统日益复杂，这些方法的局限性也越来越大。因此，模糊测试被证明是一种有效且实用的方法，因为它不需要对目标有太多的了解。然而，在模糊测试文件系统中存在三个主要挑战：变异大型图像块会降低整体性能，生成与图像相关的文件操作，并且对于现有的操作系统模糊测试工具来说很难重现已找到的错误。因此，我们提出了JANUS，这是第一个基于反馈的模糊测试工具，它探索文件系统的二维输入空间，即变异大型图像上的元数据，并发出针对图像的文件操作。此外，JANUS依赖于一个库操作系统而不是传统的虚拟机来进行模糊测试，这使得JANUS能够加载操作系统的新副本，从而更好地重现错误。我们在八个文件系统上评估了JANUS，并在上游Linux内核中发现了90个错误，其中62个已得到确认。其中43个错误已被修复，并分配了32个CVE编号。此外，在与用于模糊测试文件系统的最先进的模糊测试工具Syzkaller进行了12小时的比较后，JANUS在所有文件系统上都实现了更高的代码覆盖率。JANUS在Btrfs和ext4上分别访问了4.19倍和2.01倍的代码路径。此外，JANUS能够重现88-100%的崩溃，而Syzkaller则无法解决所有的崩溃问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835267/](https://ieeexplore.ieee.org/document/8835267/)
## F-BLEAU: Fast Black-Box Leakage Estimation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#f-bleau-fast-black-box-leakage-estimation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#f-bleau-fast-black-box-leakage-estimation)**
### 作者
* Giovanni Cherubin, EPFL
* Konstantinos Chatzikokolakis, University of Athens
* Catuscia Palamidessi, INRIA, École Polytechnique
### 摘要
> 我们考虑了测量系统有关其秘密输入的泄露程度的问题。我们在黑盒设置中进行工作：我们假设对系统的内部没有先验知识，并且我们运行系统以选择秘密，并测量其从相应输出中的泄露。我们的目标是估计贝叶斯风险，从而可以推导出一些最流行的泄露度量（例如最小熵泄露）。目前用于估计这些泄露度量的最先进方法是频率主义范式，该方法通过查看输入和输出的频率来近似系统的内部。不幸的是，对于具有较大输出空间的系统，这种方法无法扩展，因为它需要过多的输入输出示例。因此，它也无法应用于具有连续输出的系统（例如时间侧信道、网络流量）。在本文中，我们利用机器学习（ML）和黑盒泄露估计之间的类比，展示了系统的贝叶斯风险可以通过使用一类ML方法来估计：具有普遍一致性学习规则；这些规则可以利用输入输出示例中的模式来改善估计的收敛性，同时保持形式上的最优性保证。我们重点介绍其中一组最近邻规则；我们展示了它们在精确估计所需的黑盒查询数量方面的显著减少，每当相邻输出倾向于由相同的秘密产生时；此外，其中一些规则可以处理具有连续输出的系统。我们通过对合成和真实世界数据进行应用性示例，并将它们与基于频率主义方法的最先进工具leakiEst进行比较，以说明这些技术的适用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835250/](https://ieeexplore.ieee.org/document/8835250/)
## Synesthesia: Detecting Screen Content via Remote Acoustic Side Channels.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#synesthesia-detecting-screen-content-via-remote-acoustic-side-channels) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#synesthesia-detecting-screen-content-via-remote-acoustic-side-channels)**
### 作者
* Daniel Genkin, University of Michigan
* Mihir Pattani, University of Pennsylvania
* Roei Schuster, Tel Aviv University and Cornell Tech
* Eran Tromer, Tel Aviv University and Columbia University
### 摘要
> 我们发现计算机屏幕内部发出的微弱声音可以用于检测屏幕上显示的内容。这种声音可以被内置在网络摄像头或屏幕中的普通麦克风捕获，并无意中传输给其他人，例如在视频会议或存档的录音中。它还可以被放置在屏幕旁边的智能手机或“智能扬声器”，或使用抛物线麦克风从10米远的地方录制。通过实证演示各种攻击场景，我们展示了如何利用该通道实时检测屏幕上的文字，或者用户在屏幕虚拟键盘上输入。我们还展示了攻击者如何分析接收到的视频通话期间的音频（例如在谷歌Hangout上）来推断对方是否在浏览网页而不是观看视频通话，并显示其屏幕上的网站。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835386/](https://ieeexplore.ieee.org/document/8835386/)
## Port Contention for Fun and Profit.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#port-contention-for-fun-and-profit) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#port-contention-for-fun-and-profit)**
### 作者
* Alejandro Cabrera Aldaya, Universidad Tecnológica de la Habana (CUJAE), Habana, Cuba
* Billy Bob Brumley, Tampere University, Tampere, Finland
* Sohaib ul Hassan, Tampere University, Tampere, Finland
* Cesar Pereida García, Tampere University, Tampere, Finland
* Nicola Tuveri, Tampere University, Tampere, Finland
### 摘要
> 同时多线程（SMT）架构是具有吸引力的侧信道攻击目标，因其固有的较广攻击面，比跨核攻击暴露更多针对物理核心微架构组件。在本文中，我们探讨了SMT执行引擎共享作为一个侧信道泄露源。我们以执行单元堆栈的端口为目标，通过端口争用创建了一个高分辨率的时序侧信道，其固有的隐秘性因为不依赖于内存子系统而不像其他缓存或TLB基于的攻击。在实现上，我们在Intel Skylake和Kaby Lake架构上使用Hyper-Threading进行攻击，通过少量重复的TLS握手尝试从一个由OpenSSL驱动的TLS服务器中恢复P-384私钥。此外，我们还展示了针对共享库、静态构建和SGX enclave的跟踪实质上是相同的，因此我们的信道具有广泛的目标应用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835264/](https://ieeexplore.ieee.org/document/8835264/)
## Attack Directories, Not Caches: Side Channel Attacks in a Non-Inclusive World.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#attack-directories-not-caches-side-channel-attacks-in-a-non-inclusive-world) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#attack-directories-not-caches-side-channel-attacks-in-a-non-inclusive-world)**
### 作者
* Mengjia Yan, University of Illinois at Urbana Champaign
* Read Sprabery, University of Illinois at Urbana Champaign
* Bhargava Gopireddy, University of Illinois at Urbana Champaign
* Christopher Fletcher, University of Illinois at Urbana Champaign
* Roy Campbell, University of Illinois at Urbana Champaign
* Josep Torrellas, University of Illinois at Urbana Champaign
### 摘要
> 虽然云计算具有强大的虚拟内存隔离保证，但源自共享高速缓存的缓存攻击已被证明是一个重大的安全问题。然而，尽管缓存攻击过去有效，但由于缓存层次结构设计的趋势不再是包容性缓存层次结构，对于现代系统，其可行性最近受到质疑。在本文中，我们对一个切片的、非包容性缓存层次结构中的目录结构进行了逆向工程，并证明该目录可以用于启动基于冲突的缓存攻击，以攻击末级缓存。我们设计了第一个可以跨核心进行的Prime+Probe攻击，适用于非包容性缓存。该攻击只需最小的假设条件：攻击者无需与受害者共享任何虚拟内存，也无需在同一处理器核心上运行。我们还展示了第一个对同一硬件的高带宽Evict+Reload攻击。我们通过在一台最先进的非包容性Intel Skylake-X服务器上在GnuPG中提取关键位来演示这两种攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835325/](https://ieeexplore.ieee.org/document/8835325/)
## Hard Drive of Hearing: Disks that Eavesdrop with a Synthesized Microphone.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#hard-drive-of-hearing-disks-that-eavesdrop-with-a-synthesized-microphone) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#hard-drive-of-hearing-disks-that-eavesdrop-with-a-synthesized-microphone)**
### 作者
* Andrew Kwong, University of Michigan spqr:eecs:umich:edu
* Wenyuan Xu, Zhejiang University usslab:org
* Kevin Fu, University of Michigan spqr:eecs:umich:edu
### 摘要
> 注重安全的个人可能会采取相当大的措施来禁用传感器以保护他们的隐私。然而，他们通常忽视了那些从一开始就不设计成传感器的设备所暴露出的网络物理攻击面。我们的研究证明，磁性硬盘驱动器中的机械组件可作为具备足够精确度以提取和解析人类语音的麦克风。这些非故意的麦克风能够以足够高的保真度感知语音，从而使 Shazam 服务能够识别通过硬盘录制的歌曲。这个概念验证攻击揭示了即使在传统传感器缺失的情况下也有可能侵犯隐私的可能性。我们还提出了防御机制，例如使用超声混淆，来减轻硬盘驱动器中合成麦克风的声音窃听。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835219/](https://ieeexplore.ieee.org/document/8835219/)
## "Should I Worry?" A Cross-Cultural Examination of Account Security Incident Response.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#should-i-worry-a-cross-cultural-examination-of-account-security-incident-response) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#should-i-worry-a-cross-cultural-examination-of-account-security-incident-response)**
### 作者
* Elissa M. Redmiles, University of Maryland
### 摘要
> 数字安全技术能够识别和防止用户账户的许多威胁。然而，仍然存在一些需要人为干预才能提供可靠安全保护的威胁，例如用户注意警告信息或完成二次身份验证程序。尽管之前的研究已经广泛探讨了人们对数字安全威胁的心理模型，但我们对用户在真实环境中对威胁做出具体实时响应的过程了解甚少。在本研究中，我们采用定性访谈的方法（n=67），对最近在他们的真实Facebook账户中遭遇可疑登录事件的用户进行研究，以探索账户安全事件响应的过程。我们发现参与者共同的过程跨越了来自五个不同网上和网下文化的国家，这使我们能够确定未来技术发展的重点，以最佳支持用户安全。我们还提供了有关安全事件响应信息寻求的独特性、已知攻击者威胁模型以及从一个大型跨文化定性研究中所学的见解，该研究涉及数字安全。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835359/](https://ieeexplore.ieee.org/document/8835359/)
## Bitcoin vs. Bitcoin Cash: Coexistence or Downfall of Bitcoin Cash?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#bitcoin-vs-bitcoin-cash-coexistence-or-downfall-of-bitcoin-cash) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#bitcoin-vs-bitcoin-cash-coexistence-or-downfall-of-bitcoin-cash)**
### 作者
* Yujin Kwon, KAIST
* Hyoungshick Kim, Sungkyunkwan University
* Jinwoo Shin, KAIST
* Yongdae Kim, KAIST
### 摘要
> 比特币是一种基于点对点网络的最流行的加密货币。在2017年8月，比特币被分裂为原始比特币（BTC）和比特币现金（BCH）。自那时以来，矿工可以选择BTC和BCH的挖矿，因为它们具有兼容的工作量证明算法。因此，他们可以自由选择挖掘哪种货币以获得更高的利润，利润取决于货币价格和挖矿难度。一些矿工可以在挖矿难度变化时立即切换挖矿的货币，因为挖矿难度变化比货币价格更容易预测，我们称这种行为为反复无常的挖矿。在本文中，我们通过建立一个两种货币之间的博弈模型来研究反复无常挖矿的影响。为了做到这一点，我们考虑了反复无常的矿工和一些派别（如BCH挖矿的BITMAIN），他们坚持挖矿一个货币以维护该链。在这个模型中，我们展示了反复无常挖矿导致了一种纳什均衡状态，只有坚持挖矿的派别才会作为对价值较低的货币（如BCH）的忠诚矿工而存在，忠诚矿工指的是即使在挖矿难度增加后仍进行挖矿的人。这种情况会导致严重的中心化，削弱货币系统的安全性。为了确定竞争对手货币系统（如BTC与BCH）朝着哪个均衡状态发展，我们追踪了BTC和BCH的挖矿算力的历史变化，发现BCH直到2017年11月13日才有忠诚矿工。然而，BCH挖矿的难度调整算法的改变导致了BTC和BCH稳定共存的状态。我们还证明了当一部分矿工自动地反复切换到最有利可图的挖矿货币（即自动挖矿）时，BCH缺乏忠诚矿工的情况仍然可能出现。根据我们的分析，截至2018年12月，如果BTC和BCH的总挖矿能力中有超过约5%参与了自动挖矿，那么对BCH的忠诚矿工将会离开。此外，我们还分析了比特币ABC和SV之间的最近的“算力之战”，这证实了我们的理论分析。最后，我们指出我们的结果可以应用于任何竞争性的加密货币系统，其中相同的硬件（如ASIC或GPU）可用于挖矿。因此，我们的研究在竞争性的币市场中带来了新的重要观点：当挖矿硬件在两个竞争货币之间共享时，一种货币可以故意削弱另一种竞争货币的安全性和去中心化水平，以便进行自动挖矿。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835333/](https://ieeexplore.ieee.org/document/8835333/)
## Stealthy Porn: Understanding Real-World Adversarial Images for Illicit Online Promotion.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#stealthy-porn-understanding-real-world-adversarial-images-for-illicit-online-promotion) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#stealthy-porn-understanding-real-world-adversarial-images-for-illicit-online-promotion)**
### 作者
* Kan Yuan, Indiana University Bloomington
* Di Tang, Chinese University of Hong Kong
* Xiaojing Liao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Xuan Feng, Chinese Academy of Sciences
* Yi Chen, Chinese Academy of Sciences
* Menghan Sun, Chinese University of Hong Kong
* Haoran Lu, Indiana University Bloomington
* Kehuan Zhang, Chinese University of Hong Kong
### 摘要
> 近年来，深度学习（DP）取得了快速发展，但同时也将其潜在弱点带入了安全和机器学习研究的聚光灯下。然而，虽然对抗学习研究已经取得了重要的发现，但对于网络犯罪者在现实世界中使用的逃避基于图像的检测的对抗技术却几乎没有引起足够的重视。与引发错误分类的对抗性示例不同，这些真实世界的对抗性图像往往不太理想，但同样有效。为了对这种威胁有所了解，我们在论文中报告了一项关于对抗推广色情图像（APPIs）的研究，这些图像在地下广告中被广泛使用。我们展示了今天的对手是如何策略性地构建APPIs以逃避明确内容检测的，同时仍保留它们的性吸引力，尽管引入的扭曲和噪音对人类来说是明显可观察到的。为了了解这种真实世界的对抗性图像及其背后的地下业务，我们开发了一种名为Male`na的新型DP方法，该方法聚焦于图像中性内容最不被隐藏的区域，从而对推广目标受众可见。利用这种技术，我们从流行社交媒体中爬取的4042690张图像中发现了4000多个APPIs，并揭示了它们用于逃避流行的明确内容检测器（例如Google Cloud Vision API、Yahoo Open NSFW模型）的独特技术以及这些技术奏效的原因。我们还研究了这种非法推广的生态系统，包括通过这些图像宣传的隐藏联系方式、用于传播它们的被攻陷的账户以及涉及数千张图像的大规模APPIs活动。另一个有趣的发现是网络犯罪分子似乎试图窃取他人的图像进行广告。该研究强调了对真实世界对抗学习的重要性，并为减轻其带来的威胁迈出了第一步。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835391/](https://ieeexplore.ieee.org/document/8835391/)
## LBM: A Security Framework for Peripherals within the Linux Kernel.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#lbm-a-security-framework-for-peripherals-within-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#lbm-a-security-framework-for-peripherals-within-the-linux-kernel)**
### 作者
* Dave Jing Tian, University of Florida
* Grant Hernandez, University of Florida
* Joseph I. Choi, University of Florida
* Vanessa Frost, University of Florida
* Peter C. Johnson, Middlebury College
* Kevin R. B. Butler, University of Florida
### 摘要
> 现代计算机外设在其功能和功能上多样化，从键盘和打印机到智能手机和外部GPU。近年来，外设越来越多地通过一小部分标准化通信协议进行连接，包括USB、蓝牙和NFC。主机操作系统负责管理这些设备；然而，恶意外设可以向操作系统请求额外功能，从而导致系统妥协，或者可以构造数据包来利用操作系统软件栈中的漏洞。迄今为止，针对恶意外设的防御措施只部分覆盖了外设攻击面，并且局限于特定协议（例如USB）。在本文中，我们提出了Linux（e）BPF模块（LBM），这是一个通用的安全框架，为在Linux内核中针对恶意外设进行保护提供统一的API。LBM利用eBPF数据包过滤机制实现性能和可扩展性，我们提供了一种高级语言来促进强大的过滤功能的开发。我们演示了LBM如何提供主机对恶意USB、蓝牙和NFC设备的保护；我们还在LBM框架下实例化和统一现有的防御措施。我们的评估显示，LBM引入的开销在大多数情况下每个数据包不到1微秒，应用程序和系统开销可以忽略不计，而且LBM的性能超过了其他最先进的解决方案。据我们所知，LBM是第一个专为在Linux内核中全面保护恶意外设而设计的安全框架。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835285/](https://ieeexplore.ieee.org/document/8835285/)
## SoK: Shining Light on Shadow Stacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-shining-light-on-shadow-stacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-shining-light-on-shadow-stacks)**
### 作者
* Nathan Burow, Purdue University
* Xinping Zhang, Purdue University
* Mathias Payer, EPFL
### 摘要
> 控制流劫持攻击是针对C/C++程序的主要攻击手段。控制流完整性（CFI）解决方案可以在前沿防御攻击，即通过函数指针和虚函数调用的间接调用。保护后向边缘则交由堆栈随机数（stack canaries），但这很容易通过信息泄漏绕过。影子堆栈（Shadow Stacks）是一种完全精确的机制，可用于保护后向边缘，并应与CFI防御一起部署。我们对所有可能的影子堆栈机制进行了全面分析，涉及性能、兼容性和安全性三个方面。性能比较使用了SPEC CPU2006，而安全性和兼容性进行了定性分析。根据我们的研究，我们呼吁设计一种影子堆栈方案，它利用专用寄存器，以获得较低的性能开销和最小的内存开销，但牺牲了兼容性。我们还通过对Phoronix和Apache上的Shadesmar的案例研究展示了这种设计的可行性和可部署性，从而使编译器设计师和实践者能够为不同的用途场景选择正确的影子堆栈设计。影子堆栈属于防御机制的一类，需要程序状态的元数据来执行其防御策略。保护已部署缓解措施中的这些元数据需要对虚拟地址空间中的一段进行进程内隔离。在此类防御机制的先前工作中，依赖于信息隐藏来保护元数据。我们证明可以通过重新利用英特尔x86的两个新扩展（内存保护扩展（MPX）和页表控制扩展（MPK））来提供更强的保证。基于我们在MPX和MPK上的隔离工作，我们提出了支持进程内存隔离的专用硬件机制的设计要求，并讨论了这种机制如何为依赖于部分隔离信息的下一波高度精确的软件安全缓解措施提供支持。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835389/](https://ieeexplore.ieee.org/document/8835389/)
## Kiss from a Rogue: Evaluating Detectability of Pay-at-the-Pump Card Skimmers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#kiss-from-a-rogue-evaluating-detectability-of-pay-at-the-pump-card-skimmers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#kiss-from-a-rogue-evaluating-detectability-of-pay-at-the-pump-card-skimmers)**
### 作者
* Nolen Scaife, University of Florida
* Jasmine Bowers, University of Florida
* Christian Peeters, University of Florida
* Grant Hernandez, University of Florida
* Imani N. Sherman, University of Florida
* Patrick Traynor, University of Florida
* Lisa Anthony, University of Florida
### 摘要
> 信用卡和借记卡使得北美地区无人值守的“加油站自助付款”终端能够进行金融交易。攻击者秘密打开这些加油泵并安装读取器，以复制敏感的卡片数据。尽管EMV（芯片与密码）在传统零售商已经取得了重大进展，但由于成本极高以及物流/监管限制，这些系统几乎没有部署在自助付款终端上，使得消费者在这些场景下非常容易受到攻击。为了提高安全性，加油站业主已经部署了一些安全指示器，例如低成本的防篡改封条，并且技术人员已经开发了可用于手机的读取器检测应用。然而，这些解决方案不仅要求消费者在加油泵上注意并且对安全问题做出反应，而且这些解决方案的效果也没有得到衡量。在本文中，我们评估了消费者可用于检测读取器的指示器。我们对iOS和Android设备上所有已知的读取器检测应用进行了综合拆解，并对多个执法机构收集到的真实世界加油泵读取器硬件进行了法医分析。最后，我们分析了加油泵业主/操作者部署的反读取器机制，并通过对佛罗里达州农业和消费者服务部门四年内收集的读取器报告和相关安全措施的分析来补充这项研究，使其成为最全面的长期研究。我们的研究结果表明常见的加油泵安全指示器不仅不能有效帮助消费者检测篡改，而且可能产生虚假的安全感。因此，必须开发更强大、可靠、廉价的措施来保护消费者和商户免受欺诈行为的侵害。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835327/](https://ieeexplore.ieee.org/document/8835327/)
## Blind Certificate Authorities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#blind-certificate-authorities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#blind-certificate-authorities)**
### 作者
* Liang Wang, UW–Madison
* Gilad Asharov, Cornell Tech
* Rafael Pass, Cornell Tech
* Thomas Ristenpart, Cornell Tech
* Abhi Shelat, Northeastern University
### 摘要
> 我们探索如何构建一个盲认证机构（CA）。与传统的CA不同，传统CA可以了解注册公钥的身份，而盲CA可以同时验证身份并提供绑定公钥的证书，而不必了解身份。因此，盲CA将允许启动真正匿名的系统，其中没有一方知道参与者的身份。在本文中，我们专注于构建可以将电子邮件地址与公钥绑定的盲CA。为此，我们首先引入了安全通道注入（SCI）协议。这些协议允许一方（在我们的设置中是盲CA）将私密消息插入另一方的加密通信中。我们构建了一种适用于TLS的高效SCI协议，并使用它来实现SMTP服务器的匿名账户拥有证明。结合零知识证书签名协议，我们构建了第一个盲CA，允许Alice获得一个X.509证书，将她选择的公钥与她的电子邮件地址alice@domain.com绑定，而不必向CA透露“alice”。实验证明我们的系统适用于标准电子邮件服务器实现以及Gmail。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835242/](https://ieeexplore.ieee.org/document/8835242/)
## Data Recovery on Encrypted Databases with k-Nearest Neighbor Query Leakage.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#data-recovery-on-encrypted-databases-with-k-nearest-neighbor-query-leakage) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#data-recovery-on-encrypted-databases-with-k-nearest-neighbor-query-leakage)**
### 作者
* Evgenios M. Kornaropoulos, Brown University
* Charalampos Papamanthou, University of Maryland
* Roberto Tamassia, Brown University
### 摘要
> 最近，Kellaris等人（CCS'16）和Lacharite等人（SP'18）展示了攻击支持范围查询等丰富查询的加密数据库的数据恢复。在本文中，我们开发了第一个对支持一维k最近邻（k-NN）查询的加密数据库进行数据恢复攻击的研究，该查询在空间数据管理中被广泛使用。我们的攻击利用了通用的k-NN查询泄露模式：攻击者观察到匹配记录的标识符。我们考虑了无序响应（泄露为一个集合）和有序响应（泄露为按距离从查询点排序的k元组）两种情况。作为第一步，我们对精确重构进行了理论可行性研究，即恢复加密数据库的确切明文值。对于有序响应，我们证明了如果攻击者可以获得一些通常在实践中不可用的辅助信息，精确重构是可行的。对于无序响应，我们证明由于存在无限数量的有效重构，精确重构是不可能的。作为下一步，我们提出了更实际和现实的近似重构攻击方法，以恢复明文值的近似值。对于有序响应，我们证明在观察到足够的查询响应后，攻击者可以以相当准确的精度近似客户的加密数据库。对于无序响应，我们将有效重构的集合刻画为k维空间中的一种凸多面体，并提出了一种严格的攻击方法，可以以有界的近似误差重构明文数据库。由于多维空间数据可以通过将其映射到一维空间中的希尔伯特曲线上来高效处理，我们在隐私敏感的地理位置数据上演示了我们的近似重构攻击。我们在现实世界数据集上的实验表明，我们的攻击可以以2.9％至0.003％的相对误差重构明文值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835292/](https://ieeexplore.ieee.org/document/8835292/)
## Threshold ECDSA from ECDSA Assumptions: The Multiparty Case.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#threshold-ecdsa-from-ecdsa-assumptions-the-multiparty-case) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#threshold-ecdsa-from-ecdsa-assumptions-the-multiparty-case)**
### 作者
* Jack Doerner, Northeastern University
* Yashvanth Kondi, Northeastern University
* Eysa Lee, Northeastern University
* Abhi Shelat, Northeastern University
### 摘要
> 加密货币应用催生了对使用门限协议计算ECDSA签名的兴趣的复苏。门限协议是一种签名密钥被分秘密分享给n个参与方的协议，其中任意大小为t的子集必须进行交互以计算签名。在迄今为止的相关工作中，Doerner等人的工作在达到最佳实际签名速度的同时，需要最自然的假设。然而，它仅限于门限为二的情况。我们提出了对他们方案的扩展，使其适用于任意门限，并在只使用计算Diffie-Hellman假设的随机预言机模型下证明了其对抗恶意敌手的安全性。这个假设比ECDSA被证明的假设更弱。最佳当前门限为二的ECDSA签名方案使用Diffie-Hellman密钥交换来计算每个签名的随机数，直接将这种技术适应于更大的门限t将导致线性数量的回合；因此我们放弃了它，转而使用一种新机制，可以在总共需要log(t)+6回合的协议中实现。我们设计了一种新的一致性检查，与Doerner等人的检查有相似的精神，但适用于任意数量的参与者，并且我们优化了我们方案基于的两方乘法协议，减少了具体的通信和计算成本。我们实现了我们的方案，并在最多256个共同位置和128个地理分布的参与方以及嵌入式设备的小组中进行了评估。我们发现，在局域网设置中，我们的方案在性能上超过了以前的所有工作数个数量级，而且它足够高效，即使在智能手机或硬件令牌上也可以使用。在广域网设置中，我们发现，尽管它具有对数回合数，但我们的协议在现实场景中胜过了最佳的定长回合协议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835354/](https://ieeexplore.ieee.org/document/8835354/)
## Learning to Reconstruct: Statistical Learning Theory and Encrypted Database Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#learning-to-reconstruct-statistical-learning-theory-and-encrypted-database-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#learning-to-reconstruct-statistical-learning-theory-and-encrypted-database-attacks)**
### 作者
* Paul Grubbs, Cornell University
* Marie-Sarah Lacharité, Royal Holloway, University of London
* Brice Minaud, École Normale Supérieure, CNRS, PSL University
* Kenneth G. Paterson, Cornell University
### 摘要
> 我们展示了从访问模式泄漏中重建加密数据库的问题与统计学习理论密切相关。这种新的观点使我们能够开发出更广泛的攻击，这些攻击得到了简化的性能分析支持。首先，我们解决了从范围查询泄漏中的ε-近似数据库重建（ε-ADR）问题，给出了仅与相对误差ε成比例的查询成本的攻击，与数据库的大小或可能的数据项值的数量N无关。这已经显著超越了具有代表性的Kellaris等人（ACM CCS 2016）和Lacharité等人（IEEE S＆P 2018）的攻击的现有技术。我们还研究了新问题ε-近似序重建（ε-AOR），其中对手的任务是重建记录的顺序，但排除了值近似相等的记录。我们展示了只需要O(ε <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">-1</sup>  log ε <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">-1</sup> )个统一随机范围查询就足够实现这个目标。我们的分析依赖于将学习理论应用于PQ树，这是一种特殊的数据结构，用于紧凑地记录某些排序约束。然后，我们展示了当有辅助分布可用时，可以将ε-AOR增强为实现ε-ADR；使用真实数据，我们展示了实现非常精确的数据库重建仅需要少量的查询。最后，我们从范围广泛考虑学习理论告诉我们访问模式泄漏对其他查询类别的影响，重点关注前缀查询和后缀查询。我们通过具体的前缀查询攻击和所有查询类别的一般下界来说明这一点。我们还展示了一个非常普遍的从已知或选择查询的重建到PAC学习的约化。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835288/](https://ieeexplore.ieee.org/document/8835288/)
## On the Security of Two-Round Multi-Signatures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#on-the-security-of-two-round-multi-signatures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#on-the-security-of-two-round-multi-signatures)**
### 作者
* Manu Drijvers, ETH Zurich
* Kasra Edalatnejad, EPFL
* Bryan Ford, EPFL
* Eike Kiltz, Ruhr-Universität Bochum
* Julian Loss, Ruhr-Universität Bochum
* Gregory Neven, DFINITY
* Igors Stepanovs, UCSD
### 摘要
> 多签名方案允许一组签名者进行合作签署一条消息，创建一个单一签名，使验证者相信每个签名者都批准了该消息。去中心化信任技术的日益受到关注引发了高效的基于Schnorr的两轮多签名方案的提出，这些方案旨在扩展至上千个签名者，包括Bagherzandi等人的BCJ方案（CCS 2008），Ma等人的MWLD方案（DCC 2010），Syta等人的CoSi方案（S&P 2016）和Maxwell等人的MuSig方案（ePrint 2018）。本研究指出了当前已知的所有两轮多签名方案（不包括配对）存在严重的安全问题。首先，我们证明没有任何方案可以在不彻底改变当前已知技术的情况下被证明安全。也就是说，我们展示了如果 one-more离散对数问题难解，那么就不存在任何代数约简证明任何这些方案在离散对数或one-more离散对数问题下的安全性。我们指出了上述方案中已发布的安全证明中的微妙缺陷（CoSi除外，该方案尚未被证明为安全），以澄清我们的结果与现有证明之间的矛盾。接下来，我们描述了对所有方案的实际次指数攻击，进一步证明了它们的不安全性。在没有两轮多签名方案的情况下，我们提出了mBCJ，这是BCJ方案的一种变体，在随机预言机模型下我们证明了其在离散对数假设下的安全性。我们的实验证明，与CoSi相比，mBCJ对可扩展性几乎没有影响，允许16384个签名者合作签署一条消息约需2秒，从而成为大规模部署的高度实用和可证明安全的替代方案。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835240/](https://ieeexplore.ieee.org/document/8835240/)
## New Primitives for Actively-Secure MPC over Rings with Applications to Private Machine Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#new-primitives-for-actively-secure-mpc-over-rings-with-applications-to-private-machine-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#new-primitives-for-actively-secure-mpc-over-rings-with-applications-to-private-machine-learning)**
### 作者
* Ivan Damgård, Aarhus University
* Daniel Escudero, Aarhus University
* Tore Frederiksen, Alexandra Institute
* Marcel Keller, Data61, CSIRO
* Peter Scholl, Aarhus University
* Nikolaj Volgushev, Alexandra Institute
### 摘要
> 在CRYPTO 2018年的会议上，Cramer等人介绍了SPDZ2k，一种基于秘密共享的新协议，用于对抗不诚实多数的主动安全多方计算，该协议在环上而非域上工作。他们的协议与在域上工作的竞争方案相比，通信量稍微多一些。然而，在实现方面，他们的方法允许使用本机32或64位CPU操作进行算术运算，而不是取模大素数。因此，作者们猜测增加的通信量将被实现效率的提高所弥补。在这项研究中，我们肯定地回答了他们的猜想。我们通过实现他们的方案，并设计和实现了新的高效协议，用于在环上进行相等性测试、比较和截断。我们进一步展示了这些操作在机器学习领域的应用，并且确实显著优于在域上的竞争对手。特别是，我们实现和基准测试了对决策树和支持向量机（SVM）评估的无意识算法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835310/](https://ieeexplore.ieee.org/document/8835310/)
## Breaking LTE on Layer Two.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#breaking-lte-on-layer-two) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#breaking-lte-on-layer-two)**
### 作者
* David Rupprecht, Ruhr-University, Bochum
* Katharina Kohls, Ruhr-University, Bochum
* Thorsten Holz, Ruhr-University, Bochum
* Christina Pöpper, New York University, Abu Dhabi
### 摘要
> 长期演进（LTE）是最新的移动通信标准，在我们的信息社会中起着重要的作用：LTE将性能目标与现代安全机制相结合，同时服务于日常使用情况以及关键基础设施和公共安全通信。这两种情况对LTE的可靠和安全规范和实现提出了要求，因为停机和公开攻击向量潜在地导致严重风险。以前的LTE协议安全工作识别了物理层（第一层）和网络层（第三层）的关键攻击向量。然而，数据链路层（第二层）协议仍然是现有LTE安全研究的一个盲点。在本文中，我们提出了一种全面的第二层安全分析，并识别了三种攻击向量。这些攻击影响了LTE通信的机密性和/或隐私性。具体而言，我们首先介绍了一种被动身份映射攻击，将易变的无线电身份映射到持久的网络身份，使我们能够在小区内识别用户，并作为后续攻击的跳板。其次，我们演示了被动攻击者如何滥用资源分配作为一个侧信道来执行网站指纹识别，从而使攻击者能够了解用户访问的网站。最后，我们提出了一种利用LTE用户数据在计数器模式（AES-CTR）中进行加密而没有完整性保护的A LTE R攻击，这使我们能够修改消息载荷。作为概念验证演示，我们展示了主动攻击者如何重定向DNS请求，然后执行DNS欺骗攻击。结果，用户被重定向到恶意网站。我们的实验分析证明了这三种攻击的现实适用性，并强调了对LTE第二层协议的开放攻击向量的威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835335/](https://ieeexplore.ieee.org/document/8835335/)
## HOLMES: Real-Time APT Detection through Correlation of Suspicious Information Flows.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#holmes-real-time-apt-detection-through-correlation-of-suspicious-information-flows) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#holmes-real-time-apt-detection-through-correlation-of-suspicious-information-flows)**
### 作者
* Sadegh M. Milajerdi, University of Illinois at Chicago
* Rigel Gjomemo, University of Illinois at Chicago
* Birhanu Eshete, The third author performed this work as a postdoctoral associate at the University of Illinois at Chicago.
* R. Sekar, Stony Brook University
* V.N. Venkatakrishnan, University of Illinois at Chicago
### 摘要
> 在本研究中，我们介绍了HOLMES，一种实现对高级持续威胁（APTs）检测的新方法的系统。HOLMES受到了几个真实世界APTs案例研究的启发，这些案例研究突出了APTs行动者的一些共同目标。简而言之，HOLMES的目标是生成一种检测信号，指示存在一系列协调的活动，这些活动是APTs活动的一部分。我们的方法所面临的主要挑战之一是开发一套技术，使检测信号具有稳健性和可靠性。从高层次上讲，我们开发的技术有效利用了攻击者活动期间产生的可疑信息流之间的相关性。除了其检测能力，HOLMES还能够实时生成一个总结攻击者行动的高层次图。这个图可以被分析人员用于有效的网络响应。对我们的方法对一些真实世界APTs的评估表明，HOLMES可以高精度低误报率地检测APTs活动。HOLMES生成的紧凑高层次图有效地总结了正在进行的攻击活动，并可以辅助实时网络响应操作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835390/](https://ieeexplore.ieee.org/document/8835390/)
## Touching the Untouchables: Dynamic Security Analysis of the LTE Control Plane.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#touching-the-untouchables-dynamic-security-analysis-of-the-lte-control-plane) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#touching-the-untouchables-dynamic-security-analysis-of-the-lte-control-plane)**
### 作者
* Hongil Kim, KAIST
* Jiho Lee, KAIST
* Eunkyu Lee, KAIST
* Yongdae Kim, KAIST
### 摘要
> 本文介绍了我们对基于动态测试运营长期演进（LTE）网络中控制平面程序安全性的广泛调查。对于LTE网络的动态测试，我们使用开源LTE软件实施了半自动化测试工具LTEFuzz，用户可以完全控制该工具。我们通过仔细分析标准定义了三个基本安全属性来系统地生成测试用例。LTEFuzz根据安全属性生成并发送测试用例到目标网络，并通过仅监控设备端日志来分类显示问题行为。因此，我们发现了36个以前未曝光的漏洞。这些发现分为五类：对（1）未保护的初始过程的不当处理，（2）伪造的明文请求，（3）带有无效完整性保护的消息，（4）重播的消息和（5）安全过程绕过进行处理。我们通过对运营LTE网络进行概念验证攻击来确认这些漏洞。攻击的影响是拒绝合法用户的LTE服务、伪造短信消息或窃听/篡改用户数据流量。文中还提供了准确的根本原因分析和潜在的对策来解决这些问题。为了维护道德标准并验证我们在商业LTE网络中的发现，部分移动运营商参与了该研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835363/](https://ieeexplore.ieee.org/document/8835363/)
## On the Feasibility of Rerouting-Based DDoS Defenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#on-the-feasibility-of-rerouting-based-ddos-defenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#on-the-feasibility-of-rerouting-based-ddos-defenses)**
### 作者
* Muoi Tran, National University of Singapore
* Min Suk Kang, National University of Singapore
* Hsu-Chun Hsiao, National Taiwan University
* Wei-Hsuan Chiang, National Taiwan University
* Shu-Po Tung, National Taiwan University
* Yu-Su Wang, National Taiwan University
### 摘要
> 大型基于僵尸网络的洪泛攻击最近展示了前所未有的破坏力。然而，最为人所知的抗洪泛攻击的端到端可用性保证需要在自治系统之间进行昂贵的全球规模协调。最近的一个提议称之为绕过拥塞（Routing Around Congestion，简称RAC），试图通过动态重路由到无拥塞的绕行路径，为选择的关键流量提供强大的端到端可用性，而不需要任何自治系统之间的协调。本文对RAC防御的可行性进行了深入分析，并指出其重路由方法虽然有吸引力，但不可能解决令人困惑的洪泛问题。有效的RAC解决方案应该具备以下两个期望属性的域间绕行路径：（1）它能够确保建立自己所选择的任意绕行路径；（2）它能够将已建立的绕行路径与非关键流量隔离开来，以便该路径专用于关键流量。然而，我们展示了这两个期望属性之间存在根本的权衡，结果只能实现其中一个而不是同时实现两个。更糟糕的是，我们展示了无法同时实现这两个属性使得RAC防御不仅无效而且几乎无法使用。当新建立的绕行路径未被隔离时，新的自适应对手可以实时检测并立即拥塞该路径，从而打败RAC防御的目标。相反，如果不能保证建立任意绕行路径，我们测试的关键流量中有超过80%仅能够建立一个小数目（例如三个或更少）的实际绕行路径，并且这些路径之间彼此不连通，这严重限制了可靠的RAC操作的选项。这项研究的第一个教训是，当前域间基础设施中基于BGP的重路由解决方案似乎是不现实的，因为存在无法实现的隐含假设（例如“中毒”消息的不可见性）。第二，我们得出结论，仅分析协议规范是不足以对任何新的防御提议进行可行性研究的，因此需要进行额外的严格安全分析和各种网络评估，包括现实世界的测试。最后，我们在本文中得出的结果与关于端到端保证的主要文献的结论非常一致，即强大的端到端可用性应该是互联网路由的安全特性之一，而不是通过利用当前路由协议获得的临时特性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835347/](https://ieeexplore.ieee.org/document/8835347/)
## Resident Evil: Understanding Residential IP Proxy as a Dark Service.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#resident-evil-understanding-residential-ip-proxy-as-a-dark-service) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#resident-evil-understanding-residential-ip-proxy-as-a-dark-service)**
### 作者
* Xianghang Mi, Indiana University Bloomington
* Xuan Feng, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Baojun Liu, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Feng Qian, Indiana University Bloomington
* Zhou Li, Indiana University Bloomington
* Sumayah Alrwais, Indiana University Bloomington
* Limin Sun, Indiana University Bloomington
* Ying Liu, Indiana University Bloomington
### 摘要
> 一种新兴的互联网业务是居民代理（RESIP）作为一种服务，其中提供商利用居民网络中的主机（与运行在数据中心中的主机相反）来中继其客户的流量，以避免服务器阻止和检测。尽管这些服务在地下业务世界中扮演重要角色，但在了解它们是否确实参与网络犯罪以及它们如何运作方面还未进行充分研究，这是因为很难确定它们的RESIP地址，更不用说对它们进行深入分析了。本文报告了对RESIP进行的首项研究，揭示了这些隐秘灰色服务的行为和生态系统。我们的研究采用了一个渗透框架，包括我们为RESIP服务设计的客户端和他们访问的服务器，以检测全球230个国家和52,000多个ISP中的600万个RESIP IP地址。这些观察到的地址进行了分析，并且使用新的分析系统进一步对其后面的主机进行了指纹识别。我们的努力揭示了关于RESIP服务之前未知的几个惊人发现。令人惊讶的是，尽管供应商声称代理主机是自愿加入的，许多代理都运行在可能被入侵的主机上，包括物联网设备。通过对我们发现的主机与一家领先IT公司提供的PUP（潜在不需要的程序）日志进行交叉匹配，我们揭示了RESIP主机执行的各种非法操作，包括非法宣传、快速流轮回、钓鱼、恶意软件托管等。我们还对RESIP服务的内部基础设施进行了反向工程，并揭示了它们的可能重新品牌和转售行为。我们的研究是了解这种新型互联网服务的第一步，有助于有效控制其安全风险。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835239/](https://ieeexplore.ieee.org/document/8835239/)
## Simple High-Level Code for Cryptographic Arithmetic - With Proofs, Without Compromises.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#simple-high-level-code-for-cryptographic-arithmetic-with-proofs-without-compromises) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#simple-high-level-code-for-cryptographic-arithmetic-with-proofs-without-compromises)**
### 作者
* Andres Erbsen, MIT CSAIL, Cambridge, MA, USA
* Jade Philipoom, MIT CSAIL, Cambridge, MA, USA
* Jason Gross, MIT CSAIL, Cambridge, MA, USA
* Robert Sloan, MIT CSAIL, Cambridge, MA, USA
* Adam Chlipala, MIT CSAIL, Cambridge, MA, USA
### 摘要
> 我们引入了一种新的方法来在短的高级代码中实现加密算术，并使用机器检查的功能正确性证明。我们进一步证明，简单的部分求值就足以转化为已知最快的C代码，打破了几十年来只有那些手动编写指令级步骤的快速实现的模式。这些技术被用于构建一个椭圆曲线库，为80个素数域和多个CPU体系结构实现了有竞争力的性能，表明实施和证明工作与概念上不同算法的数量和复杂性相关，而不是它们的用例。作为一个结果，我们提出了第一个经过验证的高性能实现P-256，这是最广泛使用的椭圆曲线。我们的库中的实现被包含在BoringSSL中，用以替代现有的专用代码，并用于Chrome、Android和CloudFlare等多个大型部署中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835346/](https://ieeexplore.ieee.org/document/8835346/)
## SoK: General Purpose Compilers for Secure Multi-Party Computation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-general-purpose-compilers-for-secure-multi-party-computation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-general-purpose-compilers-for-secure-multi-party-computation)**
### 作者
* Marcella Hastings, University of Pennsylvania
* Brett Hemenway, University of Pennsylvania
* Daniel Noble, University of Pennsylvania
* Steve Zdancewic, University of Pennsylvania
### 摘要
> 安全多方计算（MPC）允许互不信任的一组参与方对其输入进行联合函数计算，并且不透露计算结果以外的任何信息。这种计算方式非常强大，并且在学术界、工业界和政府领域具有广泛应用。存在已经有几十年的安全计算协议，但直到最近才开始开发用于在任意函数上执行MPC的通用编译器。这些项目快速提升了技术的水平，并开始使非专业用户能够使用MPC。然而，该领域变化如此迅速，以至于连专家都很难跟上现代框架的多样能力。在本研究中，我们对用于安全多方计算的通用编译器进行了调查。这些工具提供高层次的抽象，用于描述任意函数并执行安全计算协议。我们考虑了EMP-toolkit、Obliv-C、ObliVM、TinyGarble、SCALE-MAMBA（前身为SPDZ）、Wysteria、Sharemind、PICCO、ABY、Frigate和CBMC-GC等十一个系统。我们根据语言表达能力、加密后端的能力以及对开发者的易用性等一系列标准对这些系统进行评估。我们主张改进MPC框架的文档化，推动社群的标准化，并对编译器开发的未来方向提出建议。安装和运行这些系统可能会有一定的挑战，对于每个系统，我们还提供了一个完整的虚拟环境（Docker容器），其中包含运行编译器和我们的示例程序所需的所有依赖项。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835312/](https://ieeexplore.ieee.org/document/8835312/)
## The Code That Never Ran: Modeling Attacks on Speculative Evaluation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#the-code-that-never-ran-modeling-attacks-on-speculative-evaluation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#the-code-that-never-ran-modeling-attacks-on-speculative-evaluation)**
### 作者
* Craig Disselkoen, Mozilla Research Internship, University of California San Diego
* Radha Jagadeesan, DePaul University
* Alan Jeffrey, Mozilla Research
* James Riely, DePaul University
### 摘要
> 本文研究了硬件和软件中由猜测机制引起的信息流问题。Spectre攻击显示了存在利用动态安全检查、猜测评估和缓存定时相互作用的实际信息流攻击。之前的程序执行形式化模型旨在捕捉计算机体系结构，而不是微架构，因此无法捕捉到Spectre等攻击。本文提出了一个基于pomsets的模型，用于建模猜测评估。该模型在具体微架构特性（如缓存和流水线）方面是抽象的，但足够强大以表示已知的攻击，如Spectre和Prime+Abort，并验证其对策。该模型还可以预测新的信息流攻击。我们通过对gcc和clang进行实验验证，推导出了两种利用编译器优化的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835248/](https://ieeexplore.ieee.org/document/8835248/)
## Formally Verified Cryptographic Web Applications in WebAssembly.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#formally-verified-cryptographic-web-applications-in-webassembly) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#formally-verified-cryptographic-web-applications-in-webassembly)**
### 作者
* Jonathan Protzenko, Microsoft Research
* Benjamin Beurdouche, Inria
* Denis Merigoux, Inria
* Karthikeyan Bhargavan, Inria
### 摘要
> 经历了数十年的高调攻击之后，对安全关键软件进行形式验证的需求变得更加明确。与验证为导向的编程语言（例如F*）现在被用于构建高可靠性的加密库和标准协议（例如TLS）的实现。在本文中，我们试图将这些验证技术应用于现代Web应用程序，例如WhatsApp，这些应用程序内嵌复杂的自定义加密组件。问题在于，这些组件通常是用JavaScript实现的，而这种语言对于密码代码来说既不友好又难以推理。因此，我们选择以WebAssembly为目标，这是一种由所有主要JavaScript运行时支持的新指令集。我们提出了一个新的工具链，将F*编程语言的低级子集Low*编译成WebAssembly。与Emscripten等其他WebAssembly编译器不同，我们的编译流程侧重于紧凑性和可审计性：我们在本文中形式化了完整的翻译规则，并使用几千行OCaml实现了它。利用这个工具链，我们展示了两个案例研究。首先，我们构建了WHACL*，这是现有的经过验证的HACL*加密库的WebAssembly版本。然后，我们呈现了LibSignal*，这是一个全新的经过验证的Signal协议的WebAssembly实现，可以被WhatsApp、Skype和Signal等消息应用程序直接使用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835291/](https://ieeexplore.ieee.org/document/8835291/)
## SoK: Sanitizing for Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-sanitizing-for-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-sanitizing-for-security)**
### 作者
* Dokyung Song, University of California, Irvine
* Julian Lettner, University of California, Irvine
* Prabhu Rajasekaran, University of California, Irvine
* Yeoul Na, University of California, Irvine
* Stijn Volckaert, University of California, Irvine
* Per Larsen, University of California, Irvine
* Michael Franz, University of California, Irvine
### 摘要
> C和C++编程语言以其不安全的特性而臭名昭著，但仍然不可或缺。因此，开发人员采取多管齐下的方法，在攻击者之前发现安全问题。这些方法包括手动、静态和动态程序分析。动态错误查找工具，以下简称"定位器"，能够发现其他类型分析所忽略的错误，因为它们观察程序的实际执行，并因此能够直接观察到程序发生的错误行为。学术界已经原型化了大量的定位器，并由实践者进行了改进。我们提供了对定位器的系统概述，重点介绍它们在发现安全问题中的作用。具体而言，我们对可用工具和它们覆盖的安全漏洞进行分类，描述它们的性能和兼容性特性，并突出各种权衡。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835294/](https://ieeexplore.ieee.org/document/8835294/)
## Why Does Your Data Leak? Uncovering the Data Leakage in Cloud from Mobile Apps.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#why-does-your-data-leak-uncovering-the-data-leakage-in-cloud-from-mobile-apps) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#why-does-your-data-leak-uncovering-the-data-leakage-in-cloud-from-mobile-apps)**
### 作者
* Chaoshun Zuo, The Ohio State University
* Zhiqiang Lin, The Ohio State University
* Yinqian Zhang, The Ohio State University
### 摘要
> 越来越多的移动应用程序（简称为应用）正在使用云作为后台，特别是云API，用于数据存储、数据分析、消息通知和监控。不幸的是，我们最近目睹了从云端发生的大规模数据泄漏事件，范围涵盖了个人身份信息到公司机密。在本文中，我们试图理解为什么会发生如此重大的泄漏，并设计工具来自动识别它们。令人惊讶的是，我们的研究揭示出认证缺失、认证中各种密钥的误用（例如，普通用户密钥和超级用户密钥）以及授权中用户权限的错误配置是根本原因。然后，我们设计了一组自动化程序分析技术，包括抗混淆的云API识别和字符串值分析，并在名为LeakScope的工具中实现了它们，用于根据云API的使用方式识别移动应用程序中潜在的数据泄漏漏洞。我们在Google Play商店的160多万款移动应用程序上进行了评估，发现有15,098个由亚马逊、谷歌和微软等主流云服务提供商管理的应用程序服务器存在数据泄漏攻击的风险。我们已经向每个云服务提供商进行了负责任的披露，他们都确认了我们所发现的漏洞，并积极与移动应用程序开发者合作修补其存在漏洞的服务。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835301/](https://ieeexplore.ieee.org/document/8835301/)
## Measuring and Analyzing Search Engine Poisoning of Linguistic Collisions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#measuring-and-analyzing-search-engine-poisoning-of-linguistic-collisions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#measuring-and-analyzing-search-engine-poisoning-of-linguistic-collisions)**
### 作者
* Matthew Joslin, University of Texas at Dallas
* Neng Li, Shanghai Jiao Tong University
* Shuang Hao, University of Texas at Dallas
* Minhui Xue, Macquarie University
* Haojin Zhu, Shanghai Jiao Tong University
### 摘要
> 错误拼写的关键词已成为搜索中毒的一个有吸引力的目标，因为与正确查询相比，它们的推广竞争性较小，并且占据大量的搜索流量。搜索引擎采用了多种对策策略，例如Google对查询关键词应用自动纠正并直接返回纠正版本的搜索结果。然而，一种被我们称为语言冲突拼写的复杂攻击可以规避自动纠正并操控搜索结果。网络犯罪分子以错误拼写的词汇为目标，这些词汇即使在其他语言中也是存在的单词（例如，“idobe”是英语单词“adobe”的错误拼写，在尼日利亚语中是合法单词）。在本文中，我们首次对语言冲突搜索中毒攻击进行了大规模分析。特别是，我们检查了在Google和百度上的177万个错误拼写搜索词，并分析了英文和中文这两种是网络用户使用最多的语言。我们利用编辑距离操作和语言属性来生成错误拼写候选词。为了更有效地识别语言冲突搜索词，我们设计了一个深度学习模型，与随机抽样相比，可以提高2.84倍的收集率。我们的结果显示滥用现象普遍存在：在Google和百度上，约1.19%的语言冲突搜索词的第一页结果指向恶意网站。我们还发现，网络犯罪分子主要针对赌博、毒品和成人内容等类别。移动设备用户在搜索错误拼写的关键词时比例不成比例，可能是因为输入屏幕小的原因。我们的工作凸显了这一新类型的搜索引擎中毒，并提供了洞察力以帮助减轻威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835220/](https://ieeexplore.ieee.org/document/8835220/)
## How Well Do My Results Generalize? Comparing Security and Privacy Survey Results from MTurk, Web, and Telephone Samples.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#how-well-do-my-results-generalize-comparing-security-and-privacy-survey-results-from-mturk-web-and-telephone-samples) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#how-well-do-my-results-generalize-comparing-security-and-privacy-survey-results-from-mturk-web-and-telephone-samples)**
### 作者
* Elissa M. Redmiles, University of Maryland
* Sean Kross, University of California San Diego
* Michelle L. Mazurek, University of Maryland
### 摘要
> 安全和隐私研究人员通常依赖于从亚马逊机械土耳其（MTurk）收集的数据，以评估安全工具，了解用户的隐私偏好并衡量在线行为。然而，我们对于土耳其工人在安全和隐私相关任务的调查回答和表现如何推广到更广泛的人群知之甚少。本文通过比较使用MTurk（n=480）、具有普查代表性的网络面板（n=428）和概率电话样本（n=3,000）收集的样本之间的用户安全和隐私知识、过去经验、建议来源和行为的自我报告，作为了解安全和隐私用户研究的泛化能力的第一步。令人惊讶的是，结果表明：（1）与普查代表性面板的回答相比，MTurk关于安全和隐私经验、建议来源和知识的回答更具美国人口代表性；（2）对于年龄在50岁以下或具有一定大专教育程度的受访者来说，MTurk和普通人口在安全和隐私经验、知识和建议来源方面的回答非常相似；（3）受访者对我们提出的调查问题的回答在时间上是稳定的，并且对于相关且广泛报道的新闻事件是稳健的。此外，回答差异不能仅通过简单的人口统计权重加以缓解，可能是因为与其人口统计同龄人相比，MTurk和面板参与者在互联网经验上更为丰富。总的来说，这些发现在一定程度上支持以前众包安全和隐私用户研究的泛化能力，并为更准确解释这类研究结果提供了背景，同时也为未来的工作提供了丰富的方向，以减少与经验相关而非人口统计相关的样本偏差。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835345/](https://ieeexplore.ieee.org/document/8835345/)
## PhishFarm: A Scalable Framework for Measuring the Effectiveness of Evasion Techniques against Browser Phishing Blacklists.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#phishfarm-a-scalable-framework-for-measuring-the-effectiveness-of-evasion-techniques-against-browser-phishing-blacklists) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#phishfarm-a-scalable-framework-for-measuring-the-effectiveness-of-evasion-techniques-against-browser-phishing-blacklists)**
### 作者
* Adam Oest, Arizona State University
* Yeganeh Safaei, Arizona State University
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University
* Brad Wardman, PayPal, Inc
* Kevin Tyers, PayPal, Inc
### 摘要
> 网络钓鱼攻击近年来达到了创纪录的规模。与此同时，现代网络钓鱼网站采用了多种伪装技术，以躲避安全基础设施的检测。本文介绍了PhishFarm：一种可扩展的框架，用于系统地测试反网络钓鱼实体和浏览器黑名单对攻击者回避策略的抵抗能力。我们使用PhishFarm部署了2380个活动钓鱼网站（位于新的、独特的以及以前未见过的.com域名上），每个网站使用基于真实网络钓鱼工具包的六种不同的HTTP请求过滤器之一。我们向10个不同的反网络钓鱼实体报告了其中的若干子集，并测量了主要网络浏览器中原生黑名单的出现和及时性，以评估最终为受害用户和组织提供的保护效果。我们的实验揭示了当前基础设施的不足之处，一些网络钓鱼网站在安全社区中不被注意，但仍然对受害者可访问。我们发现，基于地理位置、设备类型或JavaScript等简单伪装技术代表了现实世界攻击，有效地降低了超过55%的被列入黑名单的可能性。我们还发现，在流行的移动浏览器（Chrome、Safari和Firefox）中，黑名单没有按预期工作，这使得使用这些浏览器的用户特别容易受到网络钓鱼攻击的威胁。在披露我们的发现后，反网络钓鱼实体现在能够更好地检测和减轻几种伪装技术（包括针对移动用户的技术），并且黑名单在桌面和移动平台之间的一致性也得到了加强，但是反网络钓鱼实体还需要继续努力，以确保用户得到足够的保护。我们的PhishFarm框架旨在持续监测生态系统，并可以扩展到测试恶意网站使用的未来最先进的回避技术。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835369/](https://ieeexplore.ieee.org/document/8835369/)
## SoK: Security Evaluation of Home-Based IoT Deployments.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-security-evaluation-of-home-based-iot-deployments) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#sok-security-evaluation-of-home-based-iot-deployments)**
### 作者
* Omar Alrawi, Georgia Institute of Technology
* Chaz Lever, Georgia Institute of Technology
* Manos Antonakakis, Georgia Institute of Technology
* Fabian Monrose, University of North Carolina at Chapel Hill
### 摘要
> 家庭物联网设备在安全实践方面的声誉令人堪忧。表面上，物联网设备的不安全性似乎是由集成问题引起的，这些问题可以通过简单的措施来解决，但是这项工作发现这种观点是天真的假设。事实是，物联网部署在核心上利用传统的计算系统，如嵌入式、移动和网络。这些组件存在许多未被探索的挑战，例如超权限移动应用程序对嵌入式设备的影响。我们的工作提出了一种研究人员和实践者可以采用的方法论，用于分析家庭物联网设备的安全属性。我们利用这种方法对家庭物联网的文献进行系统化整理，以了解攻击技术、缓解措施和利益相关者。此外，我们评估了45个设备，以补充已系统化整理的文献，以识别被忽视的研究领域。为了使这种分析对社区更加透明和易于适应，我们提供了一个公开门户来分享我们的评估数据，并邀请社区贡献独立的研究结果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835392/](https://ieeexplore.ieee.org/document/8835392/)
## Dangerous Skills: Understanding and Mitigating Security Risks of Voice-Controlled Third-Party Functions on Virtual Personal Assistant Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#dangerous-skills-understanding-and-mitigating-security-risks-of-voice-controlled-third-party-functions-on-virtual-personal-assistant-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#dangerous-skills-understanding-and-mitigating-security-risks-of-voice-controlled-third-party-functions-on-virtual-personal-assistant-systems)**
### 作者
* Nan Zhang, Indiana University, Bloomington
* Xianghang Mi, Indiana University, Bloomington
* Xuan Feng, Beijing Key Laboratory of IOT Information Security Technology, Institute of Information Engineering, CAS, China
* XiaoFeng Wang, Indiana University, Bloomington
* Yuan Tian, University of Virginia
* Feng Qian, Indiana University, Bloomington
### 摘要
> 虚拟个人助手（VPA）（例如，Amazon Alexa和Google助手）今天主要依靠语音渠道与用户进行沟通，然而该渠道的认证不足，存在漏洞（用户到VPA的认证）。随着VPA生态系统的快速增长，出现了一种新的认证挑战，即允许第三方发布一项功能（称为技能）供服务使用，并且可以利用这一点在与智能音箱（如Amazon Echo和Google Home）的交互过程中向大众传播恶意技能。本文报告了一项研究，得出结论远程、大规模攻击是现实存在的。我们发现了两种新的攻击方式：声音侵占攻击，对手利用调用技能的方式（例如，“打开capital one”），使用类似发音的恶意技能名称（例如，“capital won”）或意义相近的名称（例如，“capital one please”）来劫持原本针对合法技能（例如，“capital one”）的语音命令；以及声音伪装攻击，恶意技能在用户与服务进行对话时冒充VPA服务或合法技能，以窃取用户的个人信息。这些攻击针对VPAs的工作方式或用户对其功能的误解，通过我们在Amazon Echo和Google Home上的实验（包括用户研究和实际部署）发现构成了现实威胁。我们的发现已得到Amazon和Google的承认，并且通过我们构建的新的侵占检测器在Alexa和Google市场上发现了存在风险的技能进一步证明了这一点。我们进一步开发了一种能够自动捕捉进行中伪装攻击的技术，并证明了其有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835332/](https://ieeexplore.ieee.org/document/8835332/)
## Drones' Cryptanalysis - Smashing Cryptography with a Flicker.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#drones-cryptanalysis-smashing-cryptography-with-a-flicker) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#drones-cryptanalysis-smashing-cryptography-with-a-flicker)**
### 作者
* Ben Nassi, Ben-Gurion University of the Negev.
* Raz Ben-Netanel, Ben-Gurion University of the Negev.
* Adi Shamir, Weizmann Institute of Science.
* Yuval Elovici, Ben-Gurion University of the Negev.
### 摘要
> 在无人机在我们周围飞行的“开放天空”时代，一个新的问题出现了：我们如何判断经过的无人机是被其操作员用于合法目的（例如，递送披萨）还是非法目的（例如，偷窥他人在自己家中洗澡）？多年来，已经提出了许多方法来检测特定位置的无人机存在，然而由于无人机飞行不再局限于人口密集地区，先前提出的用于检测侵犯隐私的方法已经不再适用。在本文中，我们提出了一种新的方法，可以检测特定兴趣点（POI）是否正在被无人机进行视频流传输。我们展示了通过对无人机正在视频流传输的目标/受害者施加定期物理刺激，导致在从无人机发送到操作员的加密视频流量中添加水印，并展示了如何通过拦截来检测该水印。基于这种方法，我们提出了一种检测侵犯隐私攻击的算法。我们使用四种商用无人机（DJI Mavic Air，Parrot Bebop 2，DJI Spark和DJI Mavic Pro）来分析我们算法的性能。我们展示了我们的方法如何用于（1）确定检测到的FPV（第一人称视角）信道是否被无人机用于视频流传输POI，以及（2）在空间中定位一个监视无人机；我们还演示了如何隐蔽施加物理刺激。此外，我们提出了一个区分FPV传输和其他可疑无线电传输的分类算法。我们将此算法实现在一种新的入侵攻击检测系统中，并在两种使用情况下进行评估（受害者在家中和受害者在驾驶汽车时被无人机跟踪）；我们的评估结果显示，我们的系统可以在约2-3秒内检测到隐私侵犯攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835328/](https://ieeexplore.ieee.org/document/8835328/)
## Dominance as a New Trusted Computing Primitive for the Internet of Things.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#dominance-as-a-new-trusted-computing-primitive-for-the-internet-of-things) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2019].md#dominance-as-a-new-trusted-computing-primitive-for-the-internet-of-things)**
### 作者
* Meng Xu, Georgia Institute of Technology
* Manuel Huber, Fraunhofer AISEC
* Zhichuang Sun, Northeastern University
* Paul England, Microsoft Research
* Marcus Peinado, Microsoft Research
* Sangho Lee, Microsoft Research
* Andrey Marochko, Microsoft Research
* Dennis Mattoon, Microsoft Research
* Rob Spiger, Microsoft
* Stefan Thom, Microsoft
### 摘要
> 物联网（IoT）正在迅速成为本十年中的主导计算范式之一。应用范围从家庭娱乐到大规模工业部署，例如控制装配线和监控交通。虽然物联网设备在许多方面与传统计算机相似，但用户期望和部署场景以及成本和硬件约束等方面的差异足以带来新的安全挑战和机遇。这对于大规模物联网部署尤其如此，其中一个中央实体部署和控制大量物联网设备，并且人机互动最小。与传统计算机一样，物联网设备也容易受到攻击和妥协。由许多几乎相同的设备组成的大型物联网部署尤其具有吸引力。同时，传统方法从根妥协中恢复变得昂贵和缓慢，尤其是如果设备分散在较大的地理区域内，情况更是如此。在最糟糕的情况下，技术人员必须前往所有设备并手动恢复它们。数据中心解决方案（如依赖于独立服务处理器和网络连接的智能平台管理接口（IPMI））不仅不受现有物联网硬件支持，而且由于主流物联网设备的成本限制，在可预见的未来也不太可能得到支持。本论文介绍了Cider，一种可以在很短的时间内恢复物联网设备的系统，即使攻击者已经完全控制了大规模部署中的每个设备。恢复过程需要最少的手动干预。管理员在确认受损并生成更新的固件图像后，可以指示Cider强制设备重置并在设备上安装修补程序固件。我们通过在三个流行的物联网平台（HummingBoard Edge，Raspberry Pi Compute Module 3和Nucleo-L476RG）上实现Cider来证明其普遍性和实用性，这些平台覆盖了从高端到低端的范围。我们的评估结果显示，Cider的性能开销通常可以忽略不计。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/8835213/](https://ieeexplore.ieee.org/document/8835213/)
