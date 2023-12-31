# IEEE Symposium on Security and Privacy[2020]
## Spectector: Principled Detection of Speculative Information Flows.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#spectector-principled-detection-of-speculative-information-flows) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#spectector-principled-detection-of-speculative-information-flows)**
### 作者
* Marco Guarnieri, IMDEA Software Institute
* Boris Köpf, Microsoft Research
* José F. Morales, IMDEA Software Institute
* Jan Reineke, Saarland University
* Andrés Sánchez, IMDEA Software Institute
### 摘要
> 自从 Spectre 的出现以来，已经提出并部署了许多对策。然而，要严谨地推理它们的有效性需要一个明确定义的针对推测执行攻击的安全概念，而这一概念直到现在才被提出。本文中，我们提出了第一个针对推测执行攻击的语义安全概念——推测非干扰（speculative non-interference），并开发了一种基于符号执行的算法 Spectector，用于自动证明推测非干扰或检测违规行为。我们在一个工具中实现了 Spectector，并用它来检测主要编译器在放置 Spectre 对策时的微小泄漏和优化机会。可扩展性分析显示，检查推测非干扰不会表现出超出符号执行继承的主要瓶颈。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152757/](https://ieeexplore.ieee.org/document/9152757/)
## NetCAT: Practical Cache Attacks from the Network.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#netcat-practical-cache-attacks-from-the-network) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#netcat-practical-cache-attacks-from-the-network)**
### 作者
* Michael Kurth, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Ben Gras, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Dennis Andriesse, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Cristiano Giuffrida, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Herbert Bos, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Kaveh Razavi, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
### 摘要
> 现代处理器的外围性能提升导致了对内存子系统的压力增加。例如，可用的DRAM吞吐量已无法满足现代网络卡的数据传输需求。为了达到承诺的性能，现代英特尔处理器不再将外围设备的数据传输到DRAM，而是直接在最后一级缓存（LLC）上执行I/O操作。尽管直接缓存访问（DCA）取代了直接内存访问（DMA），这是一种明智的性能优化方法，但不幸的是它在实现上忽视了安全性，因为LLC现在是CPU和连接的所有设备（包括网络卡）共享的。本文通过对最近的英特尔处理器上被广泛称为数据直接I/O（DDIO）的DCA行为进行逆向工程，首次提出了对其安全性的分析。根据我们的分析，我们提出了NetCAT，这是一种基于网络的对远程机器处理器LLC的PRIME+PROBE缓存攻击。我们展示了NetCAT不仅可以在合作设置中进行攻击，攻击者可以在网络客户端和隔离服务器进程之间建立隐藏信道（无需网络），而且更令人担忧的是，在一般的对抗设置中也可以进行攻击。在这种设置下，NetCAT可以泄露基于网络时间的敏感信息。例如，我们展示了对目标服务器上属于另一个客户端的受害者SSH连接的按键时序攻击。我们的结果应该警告处理器供应商不要无监督地将（额外的）微架构组件与受恶意输入影响的外围设备共享。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152768/](https://ieeexplore.ieee.org/document/9152768/)
## SpecCFI: Mitigating Spectre Attacks using CFI Informed Speculation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#speccfi-mitigating-spectre-attacks-using-cfi-informed-speculation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#speccfi-mitigating-spectre-attacks-using-cfi-informed-speculation)**
### 作者
* Esmaeil Mohammadian Koruyeh, Computer Science and Engineering Department, University of California, Riverside
* Shirin Haji Amin Shirazi, Computer Science and Engineering Department, University of California, Riverside
* Khaled N. Khasawneh, Electrical and Computer Engineering Department, George Mason University
* Chengyu Song, Computer Science and Engineering Department, University of California, Riverside
* Nael Abu-Ghazaleh, Computer Science and Engineering Department, University of California, Riverside
### 摘要
> 幽灵攻击及其众多后续变体是一种影响现代CPU的新型漏洞类别。这些攻击依赖于误导推测执行的能力，通常是通过利用分支预测结构来执行一个有漏洞的代码序列。在本文中，我们建议在承诺路径上使用控制流完整性（CFI）这一安全技术，以阻止推测性控制流被劫持并用于发起Spectre攻击的最危险的变体（Spectre-BTB和Spectre-RSB）。具体而言，CFI试图将间接分支的可能目标限制为由预先计算的控制流图（CFG）定义的一组合法目标。随着CFI技术被普通软件（如Windows和Android）和普通硬件（如Intel的CET和ARM的BTI）采用，CFI信息通过硬件CFI扩展变得容易获取。利用CFI信息，我们将CFI原则应用于约束推测执行期间的非法控制流。具体而言，我们提出的防御方案SpecCFI确保控制流指令只指向合法的目标，以约束对前向控制流路径（即间接调用和分支）的危险推测。为了约束对后向控制流边缘（即返回）的推测，我们还采用了一个精确的、意识到推测的硬件堆栈。我们将这个解决方案与现有的针对分支目标预测器攻击（Spectre-PHT）的解决方案相结合，以消除所有已知的非供应商特定的Spectre漏洞。我们展示了SpecCFI在性能和额外硬件复杂性方面都具有较小的开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152786/](https://ieeexplore.ieee.org/document/9152786/)
## LVI: Hijacking Transient Execution through Microarchitectural Load Value Injection.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#lvi-hijacking-transient-execution-through-microarchitectural-load-value-injection) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#lvi-hijacking-transient-execution-through-microarchitectural-load-value-injection)**
### 作者
* Jo Van Bulck, imec-DistriNet, KU Leuven
* Daniel Moghimi, Worcester Polytechnic Institute
* Michael Schwarz, Graz University of Technology
* Moritz Lippi, Graz University of Technology
* Marina Minkin, University of Michigan
* Daniel Genkin, University of Michigan
* Yuval Yarom, University of Adelaide and Data61
* Berk Sunar, Worcester Polytechnic Institute
* Daniel Gruss, Graz University of Technology
* Frank Piessens, imec-DistriNet, KU Leuven
### 摘要
> 最近的Spectre攻击首次展示了如何通过污染微架构分支预测历史，将错误的分支目标注入受害域。本文将基于注入的方法论推广到内存层次结构，通过直接向受害者的瞬态执行中注入错误的、攻击者可控的值。我们提出了一种创新的技术Load Value Injection (LVI)，用于反向利用Meltdown类型的微架构数据泄露。LVI滥用了由合法受害程序执行的故障或辅助加载，在最终被处理器重新发布之前，可能会临时使用来自各种微架构缓冲区的伪值或有毒数据。我们展示了LVI工具的作用，可以暴露受害者的机密信息并劫持瞬态控制流。我们实际演示了针对Intel SGX隔离区的几个概念验证攻击，并讨论了对传统用户进程和内核隔离的影响。目前的Meltdown和Spectre防御措施，包括广泛采用的硅级和微代码缓解措施，与我们的新型LVI技术并行。LVI大大扩大了错误瞬态路径的范围。为了完全缓解我们的攻击，需要在可能的每次内存加载后使用lfence指令来序列化处理器流水线。此外，由于隐式加载的原因，某些指令必须被列入黑名单，包括无处不在的x86 ret指令。Intel计划通过编译器和汇编器的全面缓解措施，使至少SGX隔离区程序在LVI易受攻击的系统上仍然安全。根据应用程序和优化策略的不同，我们观察到实施完全缓解的原型实现会产生2至19倍的广泛开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152763/](https://ieeexplore.ieee.org/document/9152763/)
## HydRand: Efficient Continuous Distributed Randomness.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#hydrand-efficient-continuous-distributed-randomness) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#hydrand-efficient-continuous-distributed-randomness)**
### 作者
* Philipp Schindler, SBA Research
* Aljosha Judmayer, SBA Research
* Nicholas Stifter, SBA Research
* Edgar Weippl, SBA Research
### 摘要
> 一个可靠的随机源不仅是各种密码学、安全和分布式系统协议的基本构建模块，而且在许多新的区块链提案设计中也起着重要作用。因此，公开可验证的、抗偏差的和不可预测的随机性的话题最近受到了越来越多的关注。特别是针对连续运行的随机信标协议，可以成为当前基于权益证明的分布式总账提案的重要组成部分。我们改进了以往的随机信标方法，提出了HydRand，这是一种基于公开可验证的秘密共享（PVSS）的新型分布式协议，用于确保连续随机信标值的不可预测性、抗偏差性和公开可验证性。此外，在存在敌对行为的情况下，HydRand能够保证按照正常和可预测的间隔提供随机性输出，并且不依赖于可信的经销商进行初始设置。与现有PVSS基于方法相比，我们的解决方案通过将通信复杂性从$\mathcal{O}\left( {{n^3}} \right)$ 降低到$\mathcal{O}\left( {{n^2}} \right)$来提高可扩展性。此外，我们是首次对最近描述的可用于实现随机信标的方案和协议进行了详细比较。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152802/](https://ieeexplore.ieee.org/document/9152802/)
## OHIE: Blockchain Scaling Made Simple.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ohie-blockchain-scaling-made-simple) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ohie-blockchain-scaling-made-simple)**
### 作者
* Haifeng Yu, Department of Computer Science, National University of Singapore
* Ivica Nikolić, Department of Computer Science, National University of Singapore
* Ruomu Hou, Department of Computer Science, National University of Singapore
* Prateek Saxena, Department of Computer Science, National University of Singapore
### 摘要
> 最近，已经提出了许多区块链共识协议，旨在利用可用带宽来扩展区块链的吞吐量。然而，这些协议变得越来越复杂，导致更难以产生其安全性保证的证明。我们提出了一种新颖的无许可区块链协议OHIE，其明确追求简单性。OHIE通过组合许多与比特币原始（且简单）骨干协议并行的实例来实现出色的吞吐量。我们正式证明了OHIE的安全性和存活性。我们通过原型实现和多达50,000个节点的大规模实验来展示其性能。在我们的实验中，OHIE的吞吐量随可用带宽线性扩展，提供约4-10Mbps的交易吞吐量（在每个节点可用带宽配置为8-20Mbps的情况下），并且至少比以前的工作具有约20倍更好的去中心化。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152798/](https://ieeexplore.ieee.org/document/9152798/)
## Sync HotStuff: Simple and Practical Synchronous State Machine Replication.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sync-hotstuff-simple-and-practical-synchronous-state-machine-replication) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sync-hotstuff-simple-and-practical-synchronous-state-machine-replication)**
### 作者
* Ittai Abraham, VMware Research
* Dahlia Malkhi, Calibra
* Kartik Nayak, Duke University
* Ling Ren, University of Illinois at Urbana-Champaign
* Maofan Yin, Cornell University
### 摘要
> 同步解决方案用于拜占庭容错（BFT）可以容忍多数故障。在这项工作中，我们提出了Sync HotStuff，这是一种出人意料简单而直观的同步BFT解决方案，可以在稳态下以2Δ的延迟实现共识（其中Δ是同步消息延迟的上限）。此外，Sync HotStuff在较弱的同步模型中确保安全性，其中同步假设不必始终对所有副本都有效。此外，Sync HotStuff具有乐观的响应能力，即当不响应的副本少于四分之一时，以网络速度推进。借鉴实际部分同步BFT解决方案，Sync HotStuff具有两阶段基于领导者的结构，并在标准同步假设下进行了完全原型化。在容忍单个故障的情况下，Sync HotStuff在典型网络性能下实现了超过280 Kops/秒的吞吐量，与已知的最佳部分同步解决方案相当。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152792/](https://ieeexplore.ieee.org/document/9152792/)
## Replicated state machines without replicated execution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#replicated-state-machines-without-replicated-execution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#replicated-state-machines-without-replicated-execution)**
### 作者
* Jonathan Lee, Microsoft Research
* Kirill Nikitin, Microsoft Research
* Srinath Setty, Microsoft Research
### 摘要
> 这篇论文介绍了一种新的方法，可以在建立在拜占庭错误模型下的大规模复制系统中降低端到端成本。具体而言，我们的方法将给定的复制状态机（RSM）转换为另一个RSM，其中节点通过委托状态机执行来承担更低的成本：一个不可信的证明者生成简洁的密码学证明以及状态变化的正确状态转换，转换后的RSM中的节点分别进行验证和应用。为了实现我们的方法，我们构建了Piperine，这是一个在RSM上使证明机制具有盈利性的系统。具体而言，Piperine降低了证明和验证状态机执行正确性的成本，同时保持了在RSM上上下文中的活性-这是一个独特的要求。我们的实验评估表明，对于支付服务，使用Piperine比单纯重新执行交易更具盈利性，只要有>10<sup>4</sup>个节点。当我们将Piperine应用于以太坊中的ERC-20交易（一个具有10<sup>5</sup>个节点的实际RSM），它将每笔交易成本降低了5.4倍，网络成本降低了2.7倍。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152807/](https://ieeexplore.ieee.org/document/9152807/)
## ICLab: A Global, Longitudinal Internet Censorship Measurement Platform.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#iclab-a-global-longitudinal-internet-censorship-measurement-platform) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#iclab-a-global-longitudinal-internet-censorship-measurement-platform)**
### 作者
* Arian Akhavan Niaki, University of Massachusetts, Amherst
* Shinyoung Cho, University of Massachusetts, Amherst
* Zachary Weinberg, Carnegie Mellon University
* Nguyen Phong Hoang, Stony Brook University
* Abbas Razaghpanah, Stony Brook University
* Nicolas Christin, Carnegie Mellon University
* Phillipa Gill, University of Massachusetts, Amherst
### 摘要
> 研究人员研究网络审查已经有很长一段时间了，几乎与审查内容的尝试同样长久。然而，大多数研究都只限于短期和少数国家；个别例外则以广度换取详细程度。收集足够的数据以获得全面、全球的长期视角仍然具有挑战性。在这项工作中，我们介绍了ICLab，这是一个专门用于审查研究的互联网测量平台。通过使用商业虚拟专用网络（VPN）作为分布在世界各地的观测点，它在覆盖范围和测量细节之间实现了新的平衡。ICLab自2016年末以来一直在连续运行。目前，它可以检测DNS操纵和TCP数据包注入，以及明显的“封锁页面”。ICLab详细记录和存档原始观察数据，使得使用新技术进行回顾性分析成为可能。在处理的每个阶段，ICLab致力于最小化误报和手动验证。在ICLab在2017年和2018年收集的53,906,532个个别网页测量中，我们观察到60个国家中3,602个唯一URL被封锁。利用这些数据，我们比较了不同地区和/或不同类型内容的不同封锁技术的使用情况。我们的长期监测准确定位了印度和土耳其在政治变动同时的审查变化，而我们的聚类技术发现了48个以前未知的封锁页面。ICLab广泛而详细的测量还揭示了其他形式的网络干扰，如监视和恶意软件注入。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152784/](https://ieeexplore.ieee.org/document/9152784/)
## High Precision Open-World Website Fingerprinting.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#high-precision-open-world-website-fingerprinting) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#high-precision-open-world-website-fingerprinting)**
### 作者
* Tao Wang, Hong Kong University of Science and Technology
### 摘要
> 使用仅通过数据包元数据即可识别客户端正在浏览的网页的流量分析攻击，也就是所谓的网页指纹识别（WF），已被证明在针对隐私技术如Tor的封闭环境实验中是有效的。我们希望调查它们在真实开放世界中的实用性。几种WF攻击声称具有较高的召回率和较低的误报率，但只有在高基准率页面上才能成功。我们明确地将基准率纳入到精确度中，并称之为r-precision。使用这个度量标准，我们展示了先前最好的攻击在基准率实际上较低时很难获得良好的精确度；我们研究了这样的一种情况（r = 1000），在这种情况下实现的最大r-precision仅为0.14。为了提高r-precision，我们提出了三种新的精确度优化器类别，可以应用于任何分类器以增加精确度。对于r = 1000，我们最佳的优化分类器可以实现至少0.86的精确度，精确度增加了超过6倍。我们首次展示了一个WF分类器可以适应任何开放世界集合大小。我们还研究了使用精确分类器来解决网页指纹识别中的现实目标，包括不同类型的网站、敏感客户的识别以及击败网页指纹识别防御。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152806/](https://ieeexplore.ieee.org/document/9152806/)
## Breaking and (Partially) Fixing Provably Secure Onion Routing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#breaking-and-partially-fixing-provably-secure-onion-routing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#breaking-and-partially-fixing-provably-secure-onion-routing)**
### 作者
* Christiane Kuhn, KIT Karlsruhe
* Martin Beck, TU Dresden
* Thorsten Strufe, KIT Karlsruhe
### 摘要
> 在对洋葱路由进行多年的研究后，卡门尼什和利扬斯卡娅在对其进行严格分析的尝试中，定义了一个理想功能，并结合协议必须满足的属性，以实现可证安全性。一整个系统家族都基于这项工作进行了安全性证明。然而，通过对这个家族中的两个实例HORNET和Sphinx进行分析，我们发现这种证明策略是错误的。我们发现了一个之前未知的漏洞，完全破坏了匿名性，并解释了一个已知的漏洞。如果隐私得到正确证明，这两个都不应该存在。
> 
> 在这项工作中，我们分析并修复了用于这个系统家族的证明策略。在证明理想功能的有效性之后，我们展示了原始属性存在的缺陷，并建议用改进的、有效的属性替代它们。最后，我们发现了证明中的另一个常见错误。通过展示我们改进的属性来部分修复一个协议，我们演示了如何避免这个错误，从而部分修复了可证安全的洋葱路由协议的系统家族。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152635/](https://ieeexplore.ieee.org/document/9152635/)
## Are anonymity-seekers just like everybody else? An analysis of contributions to Wikipedia from Tor.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#are-anonymity-seekers-just-like-everybody-else-an-analysis-of-contributions-to-wikipedia-from-tor) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#are-anonymity-seekers-just-like-everybody-else-an-analysis-of-contributions-to-wikipedia-from-tor)**
### 作者
* Chau Tran, Department of Computer Science & Engineering, New York University, New York, USA
* Kaylea Champion, Department of Communication, University of Washington, Seatle, USA
* Andrea Forte, College of Computing & Informatics, Drexel University, Philadelphia, USA
* Benjamin Mako Hill, Department of Communication, University of Washington, Seatle, USA
* Rachel Greenstadt, Department of Computer Science & Engineering, New York University, New York, USA
### 摘要
> 用户生成内容网站通常会阻止隐私增强代理（如Tor）的用户进行贡献，因为普遍认为代理是破坏、垃圾信息和滥用的来源。虽然这些封锁可能有效，但隐身追求者未能实现有价值贡献的“附带伤害”是看不见的。维基百科是最大和最重要的用户生成内容网站之一，自2005年以来一直试图阻止Tor用户的贡献。我们证明这些阻止是不完美的，许多通过Tor在维基百科上进行编辑的尝试是成功的。我们利用多个数据来源和分析技术来测量和描述维基百科上Tor编辑的历史，并比较Tor用户与其他维基百科用户组的贡献。我们的分析表明，虽然逃过维基百科禁令的Tor用户贡献的内容更容易被撤销和反转他人，但他们的贡献在质量上与其他未注册参与者以及注册用户最初的贡献类似。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152664/](https://ieeexplore.ieee.org/document/9152664/)
## Detection of Electromagnetic Interference Attacks on Sensor Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#detection-of-electromagnetic-interference-attacks-on-sensor-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#detection-of-electromagnetic-interference-attacks-on-sensor-systems)**
### 作者
* Youqian Zhang, University of Oxford
* Kasper Rasmussen, University of Oxford
### 摘要
> 传感器系统在微控制器与物理世界进行交互时使用。它们在家庭自动化、工厂控制系统、关键基础设施、交通系统等方面都得到广泛应用。在传感器系统中，传感器将物理量转化为模拟信号，发送到ADC和微控制器进行数字化和进一步处理。一旦测量结果以数字形式出现，微控制器可以根据测量结果执行任务。电磁干扰（EMI）可能会影响测量结果在传输到微控制器的过程中。攻击者可以通过在传感器和微控制器之间的电线上故意引入EMI来操纵传感器输出。由于传感器和微控制器之间的模拟通道的特性，微控制器无法验证测量结果是来自传感器还是攻击者。如果微控制器将错误的测量结果纳入其控制决策中，可能会产生灾难性后果。我们提出了一种新颖的检测系统，用于检测这些低水平电磁干扰攻击。我们的系统基于如下思想：如果传感器关闭，微控制器读取的信号应该是0V（或其他已知值）。我们利用这个想法以一种对对手来说是不可预测的方式调制传感器输出。如果微控制器检测到传感器输出的波动，可以检测到攻击信号。我们的提案只需要少量的额外元件，因此便宜且易于实施。我们介绍了我们的检测方法的工作机制，并在强攻击者模型的背景下证明了检测保证。我们实施了我们的方法，以便在麦克风系统和温度传感器系统中检测敌对的EMI信号，并且我们展示了我们的检测机制既有效又稳健。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152793/](https://ieeexplore.ieee.org/document/9152793/)
## WaveSpy: Remote and Through-wall Screen Attack via mmWave Sensing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#wavespy-remote-and-through-wall-screen-attack-via-mmwave-sensing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#wavespy-remote-and-through-wall-screen-attack-via-mmwave-sensing)**
### 作者
* Zhengxiong Li, University at Buffalo, SUNY, Buffalo, New York, USA
* Fenglong Ma, University at Buffalo, SUNY, Buffalo, New York, USA
* Aditya Singh Rathore, University at Buffalo, SUNY, Buffalo, New York, USA
* Zhuolin Yang, University at Buffalo, SUNY, Buffalo, New York, USA
* Baicheng Chen, University at Buffalo, SUNY, Buffalo, New York, USA
* Lu Su, University at Buffalo, SUNY, Buffalo, New York, USA
* Wenyao Xu, University at Buffalo, SUNY, Buffalo, New York, USA
### 摘要
> 数字屏幕（如液晶显示器）容易受到攻击（例如“窥屏”），可以绕过安全保护服务（例如防火墙），从预定受害者那里窃取机密信息。传统做法是进行隔离以减轻这些威胁。一个无法访问、接近和视线的孤立区域似乎能够将个人设备带到一个真正安全的地方。在本文中，我们重新审视这个历史话题，并重新评估了隔离场景中屏幕攻击的安全风险。具体来说，我们通过利用一种低成本射频传感器对液晶噪声估计的液晶态作用，识别和验证了一种新的实用的屏幕内容侧信道攻击。通过利用显示器中液晶阵列的状态与屏幕内容之间的关系，我们开发了WaveSpy，一种端到端的可穿墙屏幕攻击系统。WaveSpy包括一种低成本、高能效和轻量级的毫米波（mmWave）探头，可以远程收集液晶态对一组mmWave刺激的响应，并促进屏幕内容推断，即使受害者的屏幕被放置在孤立的区域中。我们对WaveSpy在屏幕攻击中的性能和实用性进行了深入评估，包括对30个现代电子设备的100多种不同类型的内容。WaveSpy在屏幕内容类型识别方面达到了99%的准确率，在真实世界的情况下敏感信息的Top-3检索成功率为87.77%。此外，我们讨论了几种潜在的防御机制，以减轻类似WaveSpy的屏幕窃听。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152804/](https://ieeexplore.ieee.org/document/9152804/)
## SoK: A Minimalist Approach to Formalizing Analog Sensor Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-a-minimalist-approach-to-formalizing-analog-sensor-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-a-minimalist-approach-to-formalizing-analog-sensor-security)**
### 作者
* Chen Yan, Zhejiang University
* Hocheol Shin, KAIST
* Connor Bolton, University of Michigan
* Wenyuan Xu, Zhejiang University
* Yongdae Kim, KAIST
* Kevin Fu, University of Michigan
### 摘要
> 在过去的六年中，几篇论文展示了如何通过声学、射频、激光和其他物理模式的有意模拟干扰来诱发故障、影响甚至控制传感器的输出。对传感器输出的可用性和完整性的破坏对基于可信传感器测量进行自动决策的安全关键系统带来重大风险。现有的信号处理模型使用传递函数来表达传感器的可靠性和可信性特性，但现有模型没有提供一种明确的方式来表达和捕捉安全属性的含义。我们的研究开始填补这个空白，通过系统化地了解针对传感器电路的模拟攻击和防御知识。我们的主要贡献是一个简单的传感器安全模型，使传感器工程师可以更好地表达传感器电路的模拟安全属性，而无需学习显著新的符号。我们的模型引入了传递函数和一个对抗性噪声向量，以表示传感器信号调理链中每个阶段的对抗性能力。系统化的主要目标是(1)能更有意义地量化过去和未来传感器的设计和评估风险，(2)更好地预测新的攻击向量，以及(3)建立防御设计模式，使传感器对模拟攻击更具抵抗力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152711/](https://ieeexplore.ieee.org/document/9152711/)
## Gesture Authentication for Smartphones: Evaluation of Gesture Password Selection Policies.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#gesture-authentication-for-smartphones-evaluation-of-gesture-password-selection-policies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#gesture-authentication-for-smartphones-evaluation-of-gesture-password-selection-policies)**
### 作者
* Eunyong Cheon, Department of Human Factors Engineering, UNIST, Republic of Korea
* Yonghwan Shin, Department of Human Factors Engineering, UNIST, Republic of Korea
* Jun Ho Huh, Samsung Research, Seoul, Republic of Korea
* Hyoungshick Kim, Department of Software, Sungkyunkwan University, Republic of Korea
* Ian Oakley, Department of Human Factors Engineering, UNIST, Republic of Korea
### 摘要
> 触摸屏手势作为身份验证方法已经引起了研究人员的关注。尽管研究已经展示了它们的可用性，但确定甚至增强它们的安全性却更为复杂。问题既来自于当前数据集的规模较小，又来自于手势匹配的不精确性 - 通过距离度量方法进行匹配。这使得使用传统算法评估熵变得具有挑战性。为了解决这些问题，我们从众包工作者中捕获了一个大规模的手势密码数据集（N = 2594），并开发了一个安全评估框架，可以计算部分猜测熵估计，并生成可以在在线攻击中破解23.13％或更多手势（在20次猜测内）的字典。为了提高手势密码的熵，我们设计了新的黑名单和词汇政策，分别限制和鼓励手势的创建。最后，我们通过在一个新的众包研究中验证了我们的安全评估框架和政策（N = 4000）。我们的黑名单增加了熵并增强了抵御基于字典猜测攻击的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152710/](https://ieeexplore.ieee.org/document/9152710/)
## Is FIDO2 the Kingslayer of User Authentication? A Comparative Usability Study of FIDO2 Passwordless Authentication.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#is-fido2-the-kingslayer-of-user-authentication-a-comparative-usability-study-of-fido2-passwordless-authentication) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#is-fido2-the-kingslayer-of-user-authentication-a-comparative-usability-study-of-fido2-passwordless-authentication)**
### 作者
* Sanam Ghorbani Lyastani, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Schilling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michaela Neumayr, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sven Bugiel, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 最新成为继密码之后的网络身份验证方案候选者是FIDO2标准。FIDO2由FIDO联盟和W3C联合开发和支持，几乎在所有浏览器中得到支持，并且在服务提供商中得到越来越多的支持，而且还在其他领域得到采用。虽然它支持多因素认证和双因素认证，但其单因素无密码认证与安全令牌引起了广泛关注，并被其支持者和媒体誉为将取代网络文本密码的解决方案。尽管它具有明显的安全性和可部署性优势，但将一种熟悉的知识要素转变为纯粹的所有权要素所带来的范式转变引发了有关最终用户对无密码认证的接受程度的问题。本文提供了关于最终用户对无密码认证的感知、接受和关注的第一次大规模实验室研究。通过亲身参与的任务，我们的参与者使用安全密钥进行无密码认证，并在之后的调查中反思他们的经验。我们的结果表明，用户愿意接受将基于文本的密码直接替换为安全密钥进行单因素身份验证。这是在替代密码的探索过程中鼓舞人心的结果。但是，我们的结果也发现了可能阻碍FIDO2无密码认证广泛采用的新问题。为了缓解这些因素，我们提出了具体的建议，以帮助在网络上继续推广无密码认证。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152694/](https://ieeexplore.ieee.org/document/9152694/)
## This PIN Can Be Easily Guessed: Analyzing the Security of Smartphone Unlock PINs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#this-pin-can-be-easily-guessed-analyzing-the-security-of-smartphone-unlock-pins) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#this-pin-can-be-easily-guessed-analyzing-the-security-of-smartphone-unlock-pins)**
### 作者
* Philipp Markert, Ruhr University Bochum
* Daniel V. Bailey, Ruhr University Bochum
* Maximilian Golla, Max Planck Institute for Security and Privacy
* Markus Dürmuth, Ruhr University Bochum
* Adam J. Aviv, The George Washington University
### 摘要
> 我们提供了对用户选择的4位和6位数字密码（n = 1220）进行的首次全面研究，数据采集自被明确引导至设备解锁的智能手机参与者。我们发现，在受限制的攻击者（尝试10次、30次或100次，与智能手机解锁设置匹配）的情况下，使用6位数字密码而不是4位数字密码在安全性上几乎没有提升，甚至令人意外地可能会降低安全性。我们还研究了黑名单的影响，在选择密码期间不允许使用一组“容易猜到”的密码。目前iOS正在使用两个这样的黑名单，一个针对4位数密码（274个密码），另一个针对6位数密码（2910个密码）。我们提取了这两个黑名单，并将它们与另外四个黑名单进行了比较，其中包括一个小的4位数黑名单（27个密码），一个大的4位数黑名单（2740个密码），以及两个安慰剂黑名单，分别针对4位和6位数字密码，总是不包含首选密码。我们发现，目前iOS所使用的相对较小的黑名单在受限制的猜测攻击下几乎没有或没有多少好处。只有当黑名单规模大得多时，才能观察到安全性的提升，但这同时也增加了用户的困惑和失望。我们的分析表明，黑名单占密码空间约10％的规模可能提供最佳的可用性和安全性平衡。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152672/](https://ieeexplore.ieee.org/document/9152672/)
## The Value of Collaboration in Convex Machine Learning with Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-value-of-collaboration-in-convex-machine-learning-with-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-value-of-collaboration-in-convex-machine-learning-with-differential-privacy)**
### 作者
* Nan Wu, Macquarie University
* Farhad Farokhi, CSIRO’s Data61
* David Smith, CSIRO’s Data61
* Mohamed Ali Kaafar, CSIRO’s Data61
### 摘要
> 在本文中，我们将机器学习应用于由多个数据所有者拥有的分布式私有数据，这些数据所有者可以访问非重叠的训练数据集。我们使用具有噪声的差分隐私梯度，利用随机梯度下降来最小化机器学习模型的适应成本。我们通过隐私预算和分布式数据集的大小量化训练模型的质量，以捕捉隐私和机器学习中效用之间的权衡。通过这种方式，我们可以在执行潜在计算昂贵的机器学习算法之前预测隐私意识数据所有者之间的协作结果。特别是，我们发现使用差分隐私梯度查询训练的机器学习模型的适应性与没有任何隐私问题时训练机器模型的适应性成本之间的差异与训练数据集的大小的平方和隐私预算的平方成反比。我们成功地验证了提出的隐私感知学习算法的实际性能预测，应用于：使用回归确定贷款利率的金融数据集；以及使用支持向量机检测信用卡欺诈。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152691/](https://ieeexplore.ieee.org/document/9152691/)
## Automatically Detecting Bystanders in Photos to Reduce Privacy Risks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#automatically-detecting-bystanders-in-photos-to-reduce-privacy-risks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#automatically-detecting-bystanders-in-photos-to-reduce-privacy-risks)**
### 作者
* Rakibul Hasan, Indiana University, Bloomington, USA
* David Crandall, Indiana University, Bloomington, USA
* Mario Fritz, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Germany
* Apu Kapadia, Indiana University, Bloomington, USA
### 摘要
> 在公共场所拍摄的照片通常会包含旁观者——照片的主题之外的人。当这些照片在网上分享时，可能会触及大量观众，并潜在地侵犯旁观者的隐私。此外，近期计算机视觉和机器学习的发展可以被在线平台用来识别和追踪个人。为了解决这个问题，研究人员提出了需要旁观者主动使用特定设备或应用来广播他们的隐私政策和身份信息以在图像中定位他们的技术解决方案。我们探索了一种不同的方法的前景——仅基于图像中存在的视觉信息来识别旁观者。通过在线用户研究，我们编制了人类用于对图像中的主题和旁观者进行分类的理由，系统验证了一套直观的概念（例如有意摆姿势为拍照）可以用于自动识别旁观者。利用图像数据，我们推断这些概念，然后用它们来训练几个分类模型。我们对这些模型进行了广泛评估，并将它们与人类评级者进行了比较。在我们的初始数据集上，通过10折交叉验证，我们最好的模型在人类评级者对类别标签达成100%一致性时，平均检测准确率达到93%，当一致性仅为67%时，准确率为80%。我们在完全不同的数据集上验证了这个模型，并取得了类似的结果，证明我们的模型具有良好的泛化能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152778/](https://ieeexplore.ieee.org/document/9152778/)
## CrypTFlow: Secure TensorFlow Inference.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#cryptflow-secure-tensorflow-inference) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#cryptflow-secure-tensorflow-inference)**
### 作者
* Nishant Kumar, Microsoft Research
* Mayank Rathee, Microsoft Research
* Nishanth Chandran, Microsoft Research
* Divya Gupta, Microsoft Research
* Aseem Rastogi, Microsoft Research
* Rahul Sharma, Microsoft Research
### 摘要
> 我们展示 CrypTFlow，这是一个颠覆性的系统，能够将 TensorFlow 推断代码转化为一键生成安全多方计算（MPC）协议。为实现这一目标，我们构建了三个组件。第一个组件 Athos 是一个从 TensorFlow 到多种半诚实 MPC 协议的端到端编译器。第二个组件 Porthos 是一种改进的半诚实三方协议，能够显著提升 TensorFlow 类应用的速度。最后，为了提供恶意安全的 MPC 协议，我们的第三个组件 Aramis 是一种使用具备完整性保证的硬件将任何半诚实 MPC 协议转化为恶意安全的 MPC 协议的创新技术。Aramis 生成的协议的恶意安全性依赖于硬件的完整性和 MPC 的半诚实安全性。此外，我们的系统能够达到明文 TensorFlow 的推断准确性。我们通过实验演示了我们系统的强大能力，展示了在 ImageNet 数据集上使用真实世界的神经网络（如 ResNet50 和 DenseNet121）进行安全推断的运行时间，半诚实安全的运行时间为约 30 秒，而恶意安全的运行时间不超过两分钟。之前在安全推断领域的工作仅局限于对小型网络和小数据集（如 MNIST 或 CIFAR）的半诚实安全性。即便在 MNIST/CIFAR 上，CrypTFlow 也超越了先前的工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152660/](https://ieeexplore.ieee.org/document/9152660/)
## SoK: Differential Privacy as a Causal Property.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-differential-privacy-as-a-causal-property) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-differential-privacy-as-a-causal-property)**
### 作者
* Michael Carl Tschantz, International Computer Science Institute
* Shayak Sen, Carnegie Mellon University
* Anupam Datta, Carnegie Mellon University
### 摘要
> 我们提出了差分隐私的关联观点和因果观点的形式模型。在关联观点下，数据点之间的依赖关系可能导致对差分隐私保证的简单陈述变得复杂，因为它需要以单个变化的数据点作为条件。然而，我们证明在因果观点下，存在一个简单的差分隐私特征化，即限制单个数据点的影响，而无需假设数据点之间独立。我们相信这个特征化解决了关于差分隐私后续工作中的争议和困惑。关联观点需要假设的本质实质上是相关性并不意味着因果关系的逆否命题：差分隐私确保缺乏（强）因果关系并不意味着缺乏（强）关联。我们的特征化还打开了在研究差分隐私时应用统计学、实验设计和科学中有关因果关系的结果的可能性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152780/](https://ieeexplore.ieee.org/document/9152780/)
## Private resource allocators and their applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#private-resource-allocators-and-their-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#private-resource-allocators-and-their-applications)**
### 作者
* Sebastian Angel, University of Pennsylvania
* Sampath Kannan, University of Pennsylvania
* Zachary Ratliff, Raytheon BBN Technologies
### 摘要
> 本文介绍了一种称为私有资源分配器（PRA）的新型密码原语，可以用于向一组客户端分配资源（例如网络带宽、CPU），而不向客户端透露其他客户端是否收到了资源。我们提供了几种构建PRA的方法，这些方法提供了从信息理论到差分隐私的不同保证。PRA在防止一种我们称之为基于分配的侧信道攻击的新攻击类别方面非常有用。这些攻击可以被用于破坏那些专为抵御侧信道和流量分析攻击而设计的匿名消息系统的隐私保证。我们在最新的匿名消息系统Alpenhorn中实现了PRA，结果表明PRA使得启动一个对话所需的网络资源增加了多达16倍（在某些情况下可以降低到4倍），但一旦对话建立起来就不会增加额外开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152764/](https://ieeexplore.ieee.org/document/9152764/)
## Towards Effective Differential Privacy Communication for Users' Data Sharing Decision and Comprehension.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-effective-differential-privacy-communication-for-users-data-sharing-decision-and-comprehension) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-effective-differential-privacy-communication-for-users-data-sharing-decision-and-comprehension)**
### 作者
* Aiping Xiong, Penn State University
* Tianhao Wang, Purdue University
* Ninghui Li, Purdue University
* Somesh Jha, University of Wisconsin-Madison
### 摘要
> 差分隐私通过对聚合水平（DP）或个体水平（LDP）的数据进行扰动来保护个人的隐私。我们报告了四个在线人体实验，研究了在健康应用程序数据收集环境中向非专业人士传达差分隐私技术时使用不同方法的效果。实验1和2研究了在给予不同的DP或LDP描述时，参与者对于低敏感和高敏感个人信息的数据披露决策。实验3和4揭示了参与者数据共享决策背后的原因，并检查了参与者对于这些DP或LDP描述的主观和客观理解。当向参与者展示解释了差分隐私或局部差分隐私技术的含义而非定义/过程的描述时，参与者表现出更好的理解，并且与DP相比，他们更愿意与LDP分享信息，表明他们理解LDP相比DP具有更强的隐私保证。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152658/](https://ieeexplore.ieee.org/document/9152658/)
## A Programming Framework for Differential Privacy with Accuracy Concentration Bounds.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-programming-framework-for-differential-privacy-with-accuracy-concentration-bounds) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-programming-framework-for-differential-privacy-with-accuracy-concentration-bounds)**
### 作者
* Elisabet Lobo-Vesga, Chalmers University of Technology, Sweden
* Alejandro Russo, Chalmers University of Technology, Sweden
* Marco Gaboardi, Boston University, USA
### 摘要
> 差分隐私提供了一个形式化的框架，用于思考关于个人数据的隐私和计算的准确性。它还提供了一套丰富的构建隐私数据分析的基础组件。当仔细校准时，这些分析同时保证了贡献其数据个人的隐私和数据分析结果的准确性，推断了关于群体的有用属性。差分隐私的组合性质促使设计和实现了几种旨在帮助数据分析师编写差分隐私分析的编程语言。然而，迄今为止，大多数差分隐私编程语言提供了关于隐私的推理支持，但并未提供关于数据分析准确性的推理支持。为了克服这个限制，在这项工作中，我们介绍了DPella，一个编程框架，为数据分析师提供关于隐私、准确性及其权衡的推理支持。DPella的独特特点是一种新颖的组件，用于静态跟踪不同数据分析的准确性。为了更紧密地估计准确性，该组件利用污点分析自动推断为保证隐私而添加的不同噪声量之间的统计独立性。我们通过实现文献中的几个经典查询，并展示数据分析师如何找出最佳方法来校准隐私以满足准确性要求，评估了我们的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152641/](https://ieeexplore.ieee.org/document/9152641/)
## Security Update Labels: Establishing Economic Incentives for Security Patching of IoT Consumer Products.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#security-update-labels-establishing-economic-incentives-for-security-patching-of-iot-consumer-products) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#security-update-labels-establishing-economic-incentives-for-security-patching-of-iot-consumer-products)**
### 作者
* Philipp Morgner, Department of Computer, Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany
* Christoph Mai, School of Business, Economics and Society, Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany
* Nicole Koschate-Fischer, School of Business, Economics and Society, Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany
* Felix Freiling, Department of Computer, Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany
* Zinaida Benenson, Department of Computer, Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), Germany
### 摘要
> 随着物联网（IoT）的发展，由于不安全和配置错误的物联网设备所导致的安全事件数量正在增加。特别是在消费市场上，制造商在全面安全策略的代价下注重于新功能和早期发布。因此，专家开始呼吁对物联网消费市场进行监管，而政策制定者则寻求适当的监管方法。我们研究了如何激励制造商增加对物联网产品的可持续安全努力。我们提出了强制安全更新标签的设想，该标签在购买决策中向消费者提供关于制造商提供未来安全更新的意愿的信息。强制性意味着标签明确说明安全更新不被保证的情况。我们进行了一项用户研究，共有1,400多名参与者，通过共同分析评估了安全更新标签对消费者选择的重要性。结果显示，安全更新的可用性（更新保证的截止日期）对整体消费者选择的影响程度在8%至35%之间，取决于产品类别的安全风险感知。对于具有较高安全风险感知的产品，这种可用性的重要性是其他高排名产品属性的两倍。此外，安全更新的提供时间（在发现漏洞后修补产品的速度）还对消费者选择产生7%至25%的影响。这些提出的标签被消费者直观理解，在发布之前不需要第三方对产品进行评估，并有激励制造商提供可持续安全支持的潜力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152783/](https://ieeexplore.ieee.org/document/9152783/)
## Ask the Experts: What Should Be on an IoT Privacy and Security Label?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ask-the-experts-what-should-be-on-an-iot-privacy-and-security-label) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ask-the-experts-what-should-be-on-an-iot-privacy-and-security-label)**
### 作者
* Pardis Emami-Naeini, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Lorrie Faith Cranor, Carnegie Mellon University
* Hanan Hibshi, Carnegie Mellon University
### 摘要
> 关于物联网（IoT）设备的隐私和安全信息并不容易为消费者所获得，消费者在购买之前想要考虑这一信息。虽然立法者已经提出了添加简明、对消费者易于接近的标签的建议，但他们并没有对这些标签的内容提供指导。本文中，我们通过一系列与隐私和安全专家以及消费者的面谈和调查，来探索和测试物联网隐私和安全标签中的内容设计空间。我们通过遵循三轮 Delphi 过程与 22 位隐私和安全专家进行专家征求研究，以确定专家们认为在比较物联网设备的隐私和安全时对消费者来说重要的因素。根据专家们认为每个因素在向消费者传达风险方面的重要性，我们将这些因素分为两层-主要层显示在产品包装本身或显著位置的网站上，次要层可以通过网络链接或二维码在线获取。我们报告了专家选择的因素的理由和论据。此外，为了研究消费者如何看待专家所指定的隐私和安全信息，我们进行了一系列半结构化面试，参与者共计 15 名，他们至少购买过一台物联网设备（智能家居设备或可穿戴设备）。基于我们的专家调查和消费者研究结果，我们提出了一个原型隐私和安全标签，以帮助消费者做出更明智的物联网相关购买决策。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152770/](https://ieeexplore.ieee.org/document/9152770/)
## Burglars' IoT Paradise: Understanding and Mitigating Security Risks of General Messaging Protocols on IoT Clouds.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#burglars-iot-paradise-understanding-and-mitigating-security-risks-of-general-messaging-protocols-on-iot-clouds) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#burglars-iot-paradise-understanding-and-mitigating-security-risks-of-general-messaging-protocols-on-iot-clouds)**
### 作者
* Yan Jia, School of Cyber Engineering, Xidian University, China
* Luyi Xing, Indiana University, Bloomington, USA
* Yuhang Mao, School of Cyber Engineering, Xidian University, China
* Dongfang Zhao, Indiana University, Bloomington, USA
* XiaoFeng Wang, Indiana University, Bloomington, USA
* Shangru Zhao, School of Cyber Engineering, Xidian University, China
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, China
### 摘要
> 随着物联网（IoT）的日益普及，许多物联网云平台应运而生，以帮助物联网制造商将其设备连接到用户端。设备-用户通讯的服务是部署在这些平台上的一般性消息协议。然而，目前还不清楚这些协议是否会引入新的风险，因为它们并没有针对物联网中的对抗环境进行设计。在本文中，我们报道了对物联网主要云平台（如AWS、Microsoft、IBM）所提供的用于最流行的消息协议MQTT的保护措施的第一次系统研究。我们发现这些平台对协议的安全增强都存在漏洞，使得攻击者可以控制设备、发动大规模的拒绝服务攻击、窃取受害者的敏感数据并伪造受害者设备的状态以进行欺骗。我们成功地对这些热门的物联网云平台进行了端到端攻击，并进一步进行了一个测量研究，证明了我们攻击的安全影响是真实的、严重的和广泛的。我们已向相关方报告了我们的发现，并得到了他们的重视。我们进一步提出了新的设计原则和增强的接入模型MOUCON。我们在一个流行的开源MQTT服务器上实现了我们的保护措施。我们的评估结果表明它具有很高的效果，并且性能开销几乎可以忽略不计。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152619/](https://ieeexplore.ieee.org/document/9152619/)
## Towards a Natural Perspective of Smart Homes for Practical Security and Safety Analyses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-a-natural-perspective-of-smart-homes-for-practical-security-and-safety-analyses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-a-natural-perspective-of-smart-homes-for-practical-security-and-safety-analyses)**
### 作者
* Sunil Manandhar, William & Mary, Williamsburg, VA, USA
* Kevin Moran, William & Mary, Williamsburg, VA, USA
* Kaushal Kafle, William & Mary, Williamsburg, VA, USA
* Ruhao Tang, William & Mary, Williamsburg, VA, USA
* Denys Poshyvanyk, William & Mary, Williamsburg, VA, USA
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### 摘要
> 设计实用的智能家居安全系统在没有了解真实家庭使用情况的情况下是具有挑战性的。本文描述了Hεlion的设计和实施，这是一个通过识别用户驱动的家庭自动化序列中的规律性来生成自然家庭自动化场景的框架，而这些序列则是由最终用户创建的例行程序生成的。我们的主要假设是，用户创建的智能家居事件序列表现出固有的语义模式，或者可以建模并用于生成有效和有用场景的自然性。为了评估我们的方法，我们首先通过一个包含30,518个家庭自动化事件的语料库，以及从40个用户收集的273个例行程序来经验性地证明了这个自然性假设的成立。然后，我们通过与16名外部评估者进行的两项研究展示了Hεlion生成的场景对最终用户似乎是有效的。我们进一步通过解决政策规范的挑战，并使用Hεlion生成17个安全/安全策略来展示Hεlion场景的有用性，而且只需很少的努力。我们从结果中提炼出16个关键发现，展示了我们方法的优势、家庭自动化的意外方面，以及这个快速增长领域中的挑战和机遇。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152773/](https://ieeexplore.ieee.org/document/9152773/)
## Message Time of Arrival Codes: A Fundamental Primitive for Secure Distance Measurement.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#message-time-of-arrival-codes-a-fundamental-primitive-for-secure-distance-measurement) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#message-time-of-arrival-codes-a-fundamental-primitive-for-secure-distance-measurement)**
### 作者
* Patrick Leu, Department of Computer Science, ETH Zurich
* Mridula Singh, Department of Computer Science, ETH Zurich
* Marc Roeschlin, Department of Computer Science, ETH Zurich
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich
* Srdjan Čapkun, Department of Computer Science, ETH Zurich
### 摘要
> 安全的距离测量，因此安全的到达时间（ToA）测量对于无接触支付、无钥匙进入和启动系统以及导航系统等应用至关重要。本文对到达时间信息码（MTACs）及其安全性进行了研究。MTACs是构建安全ToA测量系统的核心基元。通过以这种方式提出MTACs，我们首次能够形式化定义保护ToA测量系统免受攻击的物理层措施的安全要求。我们的观点还使我们能够统一呈现现有的MTACs（如距离绑定协议和安全距离测量标准中提出的那些）并提出保护ToA测量系统免受现有机制未解决攻击的基本原则。我们还使用我们的观点系统地探索了适用于所有信号调制技术的安全性和性能之间的权衡。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152702/](https://ieeexplore.ieee.org/document/9152702/)
## Dragonblood: Analyzing the Dragonfly Handshake of WPA3 and EAP-pwd.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#dragonblood-analyzing-the-dragonfly-handshake-of-wpa3-and-eap-pwd) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#dragonblood-analyzing-the-dragonfly-handshake-of-wpa3-and-eap-pwd)**
### 作者
* Mathy Vanhoef, New York University, Abu Dhabi
* Eyal Ronen, Tel Aviv University and KU Leuven
### 摘要
> WPA3认证旨在保护家庭网络，而EAP-pwd用于某些企业Wi-Fi网络以认证用户。两者均使用Dragonfly握手协议提供前向保密性和对字典攻击的防护。本文系统评估了Dragonfly的安全性。首先，我们审核了实现并揭示了EAP-pwd和WPA3守护程序中的定时泄漏和身份验证绕过漏洞。然后，我们研究了Dragonfly的设计并讨论了降级和拒绝服务攻击。我们的下一个主要研究结果是针对Dragonfly密码编码方法（如哈希到曲线）的侧信道攻击。我们认为这些侧信道泄漏是Dragonfly固有的。例如，在我们最初披露之后，经过修补的软件仍受到新型侧信道泄漏的影响。我们还分析了使用泄漏信息进行密码暴力破解的复杂度。例如，在Amazon EC2实例中，暴力破解一个大小为10的字典所需的成本不到1美元。这些结果由于关于将Dragonfly作为TLS握手、密码身份验证密钥交换（PAKEs）和哈希到曲线的持续标准化努力而具有普遍的兴趣。最后，我们讨论了向后兼容的防御措施，并提出了防止攻击的协议修复方案。我们的工作导致了一个新的协议草案，其中融入了我们提出的设计改变。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152782/](https://ieeexplore.ieee.org/document/9152782/)
## Even Black Cats Cannot Stay Hidden in the Dark: Full-band De-anonymization of Bluetooth Classic Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#even-black-cats-cannot-stay-hidden-in-the-dark-full-band-de-anonymization-of-bluetooth-classic-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#even-black-cats-cannot-stay-hidden-in-the-dark-full-band-de-anonymization-of-bluetooth-classic-devices)**
### 作者
* Marco Cominelli, CNIT/University of Brescia, Italy
* Francesco Gringoli, CNIT/University of Brescia, Italy
* Paul Patras, The University of Edinburgh, Scotland
* Margus Lind, Context Information Security, Scotland
* Guevara Noubir, Northeastern University, Boston, USA
### 摘要
> 蓝牙经典（BT）仍然是汽车音响系统、无线耳机、笔记本电脑以及各种可穿戴设备中的事实上的连接技术，特别适用于需要高数据速率的应用，如音频流传输，语音通话，网络共享等。与蓝牙低功耗（BLE）不同，其中地址随机化是制造商可用的功能，蓝牙的地址不会被随机化，因为人们普遍认为它们不容易受到跟踪攻击。我们分析了BT的设计并设计了一种可靠的反匿名化技术，该技术依赖于从帧编码中泄露的表面正常信息，从而推断出一个piconet的时钟、跳频序列和最终主设备物理地址的上部地址部分（UAP），这些信息在明文中从未交换过。与所有传输的帧中都存在的上部地址部分（LAP）一起使用，这使得可以跟踪piconet主设备，从而揭穿BT的隐私保证。我们通过开发第一个基于软件定义无线电（SDR）的嗅探器验证了这种攻击，该嗅探器可以进行完整的BT频谱分析（79 MHz）并实施所提出的反匿名化技术。我们在多个测试平台上研究了隐私攻击的可行性，考虑了不同数量的设备、通信流量和通信范围。我们证明可以在距离嗅探器多达85米的地方跟踪BT设备，并在嗅探不到1秒内实现超过80％的设备识别准确率，并在不到4秒内实现100％的检测率。最后，我们研究了在实际环境中发现的隐私攻击，并在一个路口连续5天捕获了BT流量，证明我们的系统可以重新识别数百个用户并推断出他们的通勤模式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152700/](https://ieeexplore.ieee.org/document/9152700/)
## BIAS: Bluetooth Impersonation AttackS.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#bias-bluetooth-impersonation-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#bias-bluetooth-impersonation-attacks)**
### 作者
* Daniele Antonioli, School of Computer and Communication Sciences, EPFL
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security
* Kasper Rasmussen, Department of Computer Science, University of Oxford
### 摘要
> 蓝牙（BR/EDR）是一种广泛应用于无线通信的技术，被数十亿设备使用。蓝牙标准包括遗留认证过程和安全认证过程，允许设备使用长期密钥进行彼此认证。这些过程在配对和安全连接建立过程中使用，以防止冒充攻击。本文中，我们展示了蓝牙规范存在漏洞，使得在安全连接建立过程中可以进行冒充攻击。这些漏洞包括缺乏强制互相认证、过度宽松的角色切换和认证过程降级。我们详细描述了每个漏洞，并利用它们设计、实现和评估主从冒充攻击，包括遗留认证过程和安全认证过程。我们将这些攻击称为Bluetooth冒充攻击（BIAS）。我们的攻击符合蓝牙标准，因此对任何符合蓝牙版本、安全模式（例如Secure Connections）、设备制造商和实现细节的标准蓝牙设备都有效。我们的攻击具有隐匿性，因为蓝牙标准不要求向最终用户通知认证过程的结果或缺乏互相认证。为了证实BIAS攻击的实用性，我们成功地对来自主要硬件和软件供应商的31个蓝牙设备（28个唯一的蓝牙芯片）进行了攻击，涵盖了包括苹果、高通、英特尔、赛普拉斯、博通、三星和CSR在内的所有主要蓝牙版本的实现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152758/](https://ieeexplore.ieee.org/document/9152758/)
## xMP: Selective Memory Protection for Kernel and User Space.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#xmp-selective-memory-protection-for-kernel-and-user-space) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#xmp-selective-memory-protection-for-kernel-and-user-space)**
### 作者
* Sergej Proskurin, Technical University of Munich
* Marius Momeu, Technical University of Munich
* Seyedhamed Ghavamnia, Stony Brook University
* Vasileios P. Kemerlis, Brown University
* Michalis Polychronakis, Stony Brook University
### 摘要
> 攻击者利用内存损坏漏洞来建立对易受攻击进程地址空间进行读取或写入的基本操作。这些基本操作为代码重用和数据导向攻击奠定了基础。虽然针对前一类攻击的各种防御措施已被证明是有效的，但对后者的缓解仍然存在问题。在本文中，我们识别了x86架构在内存隔离方面的各种不足，并利用虚拟化来构建一个有效的对抗数据导向攻击的防御机制。我们的方法被称为xMP，它提供了（客户端内部的）选择性内存保护基本操作，允许虚拟机在不同的xMP域中将敏感数据隔离在用户空间或内核空间中。我们通过将Xen的altp2m子系统与Linux内存管理系统进行接口交互，赋予了虚拟机定义自定义策略的灵活性。与传统方法相反，xMP利用了虚拟化扩展，但在初始化后不需要任何监视器干预。为了确保内核管理信息的完整性以及与隔离域内敏感数据的指针，xMP使用绑定到不可变上下文的HMAC来保护指针，以便只有在正确的上下文中才能验证完整性。我们已经将xMP应用于保护Linux内核的页表和进程凭据，以及各种用户空间应用程序中的敏感数据。总体而言，我们的评估结果显示，xMP对于真实的工作负载和应用程序引入了最小的开销，并提供了有效的保护措施来抵御数据导向攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152671/](https://ieeexplore.ieee.org/document/9152671/)
## MarkUs: Drop-in use-after-free prevention for low-level languages.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#markus-drop-in-use-after-free-prevention-for-low-level-languages) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#markus-drop-in-use-after-free-prevention-for-low-level-languages)**
### 作者
* Sam Ainsworth, University of Cambridge, UK
* Timothy M. Jones, University of Cambridge, UK
### 摘要
> 使用后释放漏洞已经困扰着使用低级语言编写的软件，如C和C++，成为最常见的被利用的软件漏洞之一。攻击者识别出程序员手动释放数据的代码路径，但稍后错误地重用数据，并通过重新分配数据来获利。然后，他们在程序不知情的情况下修改数据，利用错误的重用来控制应用程序甚至整个系统。虽然已经开发了各种技术来解决这些漏洞，但它们通常在最坏情况下具有无法接受的高性能或内存开销。
> 
> 我们设计了MarkUs，一个内存分配器，可以在低开销的情况下防止这种形式的攻击，并能够在真实软件中使用，即使在分配和内存密集场景下也能满足要求。我们通过隔离程序员释放的数据并禁止重新分配，直到确定没有指向它的悬空指针为止，从而防止使用后释放的攻击。为了识别这些悬空指针，我们遍历从寄存器和内存可访问的活动对象，并标记我们遇到的对象，以检查被隔离的数据是否能从任何当前已分配的位置访问到。与垃圾回收不同，垃圾回收在C和C++中是不安全的，MarkUs通过仅释放被程序员隔离且没有可识别悬空指针的数据来确保安全性。程序员的分配和释放提供的信息进一步允许我们通过提前释放大对象的物理地址、为小对象专门分析以及仅在隔离的数据足够时执行标记来优化过程。
> 
> 使用MarkUs，我们将低级语言中时间安全性的开销平均降低到了1.1倍，SPEC CPU2006的最大减速仅为2倍，大大改进了现有技术的状况。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152661/](https://ieeexplore.ieee.org/document/9152661/)
## SEIMI: Efficient and Secure SMAP-Enabled Intra-process Memory Isolation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#seimi-efficient-and-secure-smap-enabled-intra-process-memory-isolation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#seimi-efficient-and-secure-smap-enabled-intra-process-memory-isolation)**
### 作者
* Zhe Wang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Chenggang Wu, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Mengyao Xie, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Yinqian Zhang, The Ohio State University
* Kangjie Lu, University of Minnesota
* Xiaofeng Zhang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Yuanming Lai, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Yan Kang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Min Yang, Fudan University
### 摘要
> 内存损坏攻击（如代码重用攻击和仅数据攻击）一直是系统安全的主要威胁。为了应对这些威胁，研究人员提出了各种防御手段，包括控制流完整性（CFI）、代码指针完整性（CPI）和代码（重新）随机化。为了有效地应对这些威胁，所有这些防御手段都需要一种安全原语：对敏感数据的进程内保密和/或完整性保护（如CFI的影子栈和CPI的安全区域）。
> 
> 本文中，我们提出了一种名为SEIMI的高效进程内内存隔离技术，用于保护内存损坏防御的敏感数据。SEIMI的核心是利用高效的监管模式访问预防（SMAP），这是一种硬件特性，最初用于阻止内核访问用户空间，以实现进程内内存隔离。为了利用SMAP，SEIMI在特权模式下创造性地执行用户代码。除了启用基于SMAP的内存隔离的新设计外，我们还进一步开发了多种新技术，以确保用户代码的安全提升，例如使用描述符高速缓存捕获可能的段操作，并配置虚拟机控制结构（VMCS）以使与控制寄存器相关的操作的执行结果无效。广泛的实验结果表明，SEIMI优于现有的隔离机制，包括基于内存保护键（MPK）的方案和基于内存保护扩展（MPX）的方案，同时提供安全的内存隔离。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152611/](https://ieeexplore.ieee.org/document/9152611/)
## Cornucopia: Temporal Safety for CHERI Heaps.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#cornucopia-temporal-safety-for-cheri-heaps) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#cornucopia-temporal-safety-for-cheri-heaps)**
### 作者
* Nathaniel Wesley Filardo, University of Cambridge, Cambridge, UK
* Brett F. Gutstein, University of Cambridge, Cambridge, UK
* Jonathan Woodruff, University of Cambridge, Cambridge, UK
* Sam Ainsworth, University of Cambridge, Cambridge, UK
* Lucian Paul-Trifu, University of Cambridge, Cambridge, UK
* Brooks Davis, SRI International, Menlo Park, CA, USA
* Hongyan Xia, University of Cambridge, Cambridge, UK
* Edward Tomasz Napierala, University of Cambridge, Cambridge, UK
* Alexander Richardson, University of Cambridge, Cambridge, UK
* John Baldwin, Ararat River Consulting, Walnut Creek, CA, USA
* David Chisnall, Microsoft Research, Cambridge, UK
* Jessica Clarke, University of Cambridge, Cambridge, UK
* Khilan Gudka, University of Cambridge, Cambridge, UK
* Alexandre Joannou, University of Cambridge, Cambridge, UK
* A. Theodore Markettos, University of Cambridge, Cambridge, UK
* Alfredo Mazzinghi, University of Cambridge, Cambridge, UK
* Robert M. Norton, University of Cambridge, Cambridge, UK
* Michael Roe, University of Cambridge, Cambridge, UK
* Peter Sewell, University of Cambridge, Cambridge, UK
* Stacey Son, University of Cambridge, Cambridge, UK
* Timothy M. Jones, University of Cambridge, Cambridge, UK
* Simon W. Moore, University of Cambridge, Cambridge, UK
* Peter G. Neumann, SRI International, Menlo Park, CA, USA
* Robert N. M. Watson, University of Cambridge, Cambridge, UK
### 摘要
> temporal memory safety的使用后释放违规继续困扰着软件系统，构成了许多具有高影响力的攻击。CHERI能力系统在实现C和C++语言的空间内存安全方面显示出很大的潜力，可以防止越界访问。要在CHERI上实施语言级别的时间安全，需要能力吊销，传统上通过表查找来实现（但在CHERI设计中为了性能而避免了这种方式），或者通过在内存中识别能力并进行吊销（类似于垃圾回收器扫描）。之前的可行性研究CHERIvoke表明，CHERI的标记能力可以使这种后一种策略可行，但只对体系结构限制进行了建模，没有考虑该方法的完整实施和评估。Cornucopia是一种用于CHERI的轻量级能力吊销系统，为标准堆分配实现了非概率性的C/C++时间内存安全。它扩展了CheriBSD虚拟内存子系统，跟踪内存中的能力流，并提供了一个适用于多处理器和硬件加速的并发内核驻留吊销服务。我们在多核CHERI FPGA CPU上的兼容SPEC CPU2006基准测试中，演示了不到2%的平均开销和最坏情况下8.9%的并发吊销开销，并通过Juliet测试套件的包含有时间不安全程序的语料库验证了Cornucopia。我们通过在启动多用户CheriBSD时使用吊销分配器作为系统分配器，测试其与大量C程序的兼容性。Cornucopia是一种适用于生产环境的始终保持时间堆内存安全的可行策略。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152640/](https://ieeexplore.ieee.org/document/9152640/)
## The Many Kinds of Creepware Used for Interpersonal Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-many-kinds-of-creepware-used-for-interpersonal-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-many-kinds-of-creepware-used-for-interpersonal-attacks)**
### 作者
* Kevin A. Roundy, NortonLifeLock Research Group
* Paula Barmaimon Mendelberg, Cornell Tech
* Nicola Dell, Cornell Tech
* Damon McCoy, New York University
* Daniel Nissani, New York University
* Thomas Ristenpart, Cornell Tech
* Acar Tamersoy, NortonLifeLock Research Group
### 摘要
> 科技越来越容易导致个人间的骚扰、虐待和其他形式的攻击。虽然以前的研究已经对用于跟踪的软件生态系统进行了研究，但还存在一个未研究的更大的应用程序领域，我们称之为“隐形软件”，用于个人间的攻击。在本文中，我们开始利用一个数据集，详细描述了超过5000万台安卓设备上安装的移动应用程序来研究隐形软件。我们开发了一种新的算法——CreepRank，利用关联性罪刑原则来揭示以前未知的隐形软件示例，然后通过定量和定性方法对其进行描述和刻画。我们发现了用于骚扰、冒充、欺诈、信息窃取、隐匿甚至声称保护受害者免受此类威胁的应用程序。由于我们的工作，Google Play商店已经删除了数百个违反政策的应用程序。更广泛地说，我们的研究结果和技术提高了对隐形软件生态系统的理解，并将为未来旨在减轻个人间攻击的努力提供信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152794/](https://ieeexplore.ieee.org/document/9152794/)
## How not to prove your election outcome.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#how-not-to-prove-your-election-outcome) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#how-not-to-prove-your-election-outcome)**
### 作者
* Thomas Haines, Norwegian University of Science and Technology
* Sarah Jamie Lewis, Open Privacy Research Society, Canada
* Olivier Pereira, UCLouvain - ICTEAM, Louvain-la-Neuve, Belgium
* Vanessa Teague, The University of Melbourne, Melbourne, Australia
### 摘要
> Scytl/SwissPost电子投票解决方案旨在为瑞士政府选举提供完整的可验证性。我们展示了在个体可验证性和全体可验证性（根据瑞士联邦法令161.116的定义）方面的失败，这是基于密码组件错误实施所致。这些失败使得可以构造出“证明”，表明选举结果准确，尽管选票已经被操纵。在没有适当考虑密码协议提供的属性以及应用条件的情况下使用复杂的密码协议，可能引发无法检测到的欺诈机会，尽管系统看起来可以验证结果。我们的发现与目前在瑞士和澳大利亚以及可能其他地方使用的系统息息相关。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152765/](https://ieeexplore.ieee.org/document/9152765/)
## A Security Analysis of the Facebook Ad Library.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-security-analysis-of-the-facebook-ad-library) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-security-analysis-of-the-facebook-ad-library)**
### 作者
* Laura Edelson, New York University
* Tobias Lauinger, New York University
* Damon McCoy, New York University
### 摘要
> 选举虚假信息参与者正在利用在线广告平台传播政治信息。针对这一威胁，在线广告网络已开始使其平台上的政治广告更加透明，以便第三方能够检测到恶意广告发布者。我们提出了一套方法并对Facebook的美国广告库进行了安全分析，该广告库是其政治广告透明度产品。不幸的是，我们发现存在一些弱点，使得恶意广告发布者能够避免准确披露其政治广告。我们还提出了一种基于聚类的方法来检测从事未申报协同活动的广告发布者。我们的聚类方法发现了16个可能是伪造社群的集群，总共在政治广告上花费了超过四百万美元。这支持了透明度可能是对抗虚假信息的一种有希望的工具的想法。最后，基于我们的发现，我们提出了改进Facebook和其他平台广告透明度安全性的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152626/](https://ieeexplore.ieee.org/document/9152626/)
## Can Voters Detect Malicious Manipulation of Ballot Marking Devices?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#can-voters-detect-malicious-manipulation-of-ballot-marking-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#can-voters-detect-malicious-manipulation-of-ballot-marking-devices)**
### 作者
* Matthew Bernhard, University of Michigan
* Allison McDonald, University of Michigan
* Henry Meng, University of Michigan
* Jensen Hwa, University of Michigan
* Nakul Bajaj, University of Michigan
* Kevin Chang, University of Michigan
* J. Alex Halderman, University of Michigan
### 摘要
> 选票标记设备（BMDs）允许选民在计算机亭上选择候选人，计算机亭会打印一张选票供选民在将其插入扫描仪进行计票前审核。与无纸投票机不同，BMDs为选民提供了验证其选择的可审计实体记录的机会，越来越多的美国司法辖区正在为所有选民采用这种设备。然而，BMDs的安全性取决于选民能够可靠地发现和纠正其打印选票中任何故意引入的错误。为了衡量选民的错误检测能力，我们在一个真实的投票地点设置中使用真实的投票机进行了一项大规模研究（N = 241），我们修改了这些投票机，使每个打印输出都引入了一个错误。在没有干预的情况下，只有40％的参与者完全审核了他们的打印选票，只有6.6％的参与者告诉投票工作人员有错误出现。我们还发现，经过精心设计的干预措施可以提高验证性能。口头指示选民审查打印选票并提供一份候选人名单写有明确要求可显著增加审核和报告率-尽管这种改进可能不足以在激烈竞选时提供强大的安全性，特别是当所有选民都使用BMDs时。根据这些发现，我们提出了几点基于证据的建议，以帮助更好地保卫基于BMDs的选举。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152705/](https://ieeexplore.ieee.org/document/9152705/)
## RAMBleed: Reading Bits in Memory Without Accessing Them.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#rambleed-reading-bits-in-memory-without-accessing-them) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#rambleed-reading-bits-in-memory-without-accessing-them)**
### 作者
* Andrew Kwong, University of Michigan
* Daniel Genkin, University of Michigan
* Daniel Gruss, University of Michigan
* Yuval Yarom, University of Michigan
### 摘要
> Rowhammer bug是DRAM单元的可靠性问题，可以使非特权对手翻转内存模块上相邻行中的位的值。先前的工作利用这一点进行各种类型的故障攻击跨安全边界，攻击者翻转无法访问的位，通常导致特权升级。然而，广泛认为，对手自己的私有内存中的位翻转对安全没有影响，因为攻击者已经可以通过常规写操作修改其私有内存。我们通过将Rowhammer用作读取侧信道来证明这种假设是不正确的。更具体地说，我们展示了非特权攻击者如何利用Rowhammer引起的位翻转与附近行的位之间的数据依赖来推断这些位，包括属于其他进程和内核的值。因此，本文的主要贡献是展示Rowhammer不仅对完整性有威胁，而且对保密性也有威胁。此外，与需要持久位翻转的Rowhammer写入侧信道相比，我们的读取信道即使ECC内存检测和纠正每个位翻转也能成功。因此，我们展示了成功纠正的位翻转的首个安全影响，之前被认为是无害的。为了演示这个读取侧信道的影响，我们提出了对OpenSSH 7.9的端到端攻击，从根级SSH守护程序中提取RSA-2048密钥。为了实现这一点，我们开发了从用户空间将内存转换为可利用状态的新技术，并利用DRAM行缓冲区时序侧信道来定位需要进行双面Rowhammer的物理连续内存。与先前的Rowhammer攻击不同，我们的攻击不需要使用大页面，并且适用于Ubuntu Linux的默认配置设置下。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152687/](https://ieeexplore.ieee.org/document/9152687/)
## Are We Susceptible to Rowhammer? An End-to-End Methodology for Cloud Providers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#are-we-susceptible-to-rowhammer-an-end-to-end-methodology-for-cloud-providers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#are-we-susceptible-to-rowhammer-an-end-to-end-methodology-for-cloud-providers)**
### 作者
* Lucian Cojocar, Microsoft Research
* Jeremie Kim, ETH Zürich
* Minesh Patel, ETH Zürich
* Lillian Tsai, MIT
* Stefan Saroiu, Microsoft Research
* Alec Wolman, Microsoft Research
* Onur Mutlu, ETH Zürich
### 摘要
> 云服务提供商对Rowhammer对其服务器构成的潜在危害表示关切，然而迄今为止他们缺乏一种系统的方法来测试其服务器中使用的DRAM是否易受Rowhammer攻击的影响。本文提出了一种端到端的方法来确定云服务器是否容易受到这些攻击的影响。通过我们的方法，云服务提供商可以构建DRAM的最坏情况测试条件。我们将我们的方法应用于一个主要云服务提供商的三类服务器。我们的研究结果表明，在以前的工作中使用的CPU指令序列中，没有一个能够创建最坏情况DRAM测试条件的。为了解决这个限制，我们开发了一种利用微架构副作用的指令序列，在现代的Intel Skylake和Cascade Lake平台上以接近最优的速率"锤击"DRAM。我们还设计了一个DDR4故障注入器，可以对任何DDR4 DIMM进行反向工程行邻接关系。当应用于我们云服务提供商的DIMM时，我们发现DRAM行并不总是遵循线性映射。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152654/](https://ieeexplore.ieee.org/document/9152654/)
## Leveraging EM Side-Channel Information to Detect Rowhammer Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#leveraging-em-side-channel-information-to-detect-rowhammer-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#leveraging-em-side-channel-information-to-detect-rowhammer-attacks)**
### 作者
* Zhenkai Zhang, Texas Tech University
* Zihao Zhan, Vanderbilt University
* Daniel Balasubramanian, Vanderbilt University
* Bo Li, University of Illinois at Urbana-Champaign
* Peter Volgyesi, Vanderbilt University
* Xenofon Koutsoukos, Vanderbilt University
### 摘要
> 行锤错误是由软件引起的硬件故障之一，已被利用形成各种强大的行锤攻击。然而，如何有效地检测此类攻击仍然是一个具有挑战性的问题。在本文中，我们提出了一种新颖的方法，名为RADAR（通过无线电检测行锤攻击），利用特定的电磁信号来检测行锤攻击。特别地，我们发现在DRAM时钟信号的频谱中存在可识别的行锤相关旁带模式。由于这些模式是行锤DRAM的不可避免的物理副作用，它们可以“暴露”包括Intel SGX信封中隐藏的极其难以捉摸的加密和隔离环境中的任何潜在行锤攻击。然而，由于计算机系统中普遍使用频谱扩展（SSC），感兴趣的模式可能变得不明显。我们提出了一种去扩谱方法，可以重新组装被SSC散射的行锤相关旁带模式。利用常见的分类技术，我们可以在各种情况下通过RADAR原型实现有效而强大的检测型防御行锤攻击，经过评估。此外，我们的RADAR不会对受保护系统产生任何性能开销。之前很少有研究利用物理侧信道信息来进行行锤防御，据我们所知，这是第一次利用电磁侧信道信息进行这一目的的调查。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152769/](https://ieeexplore.ieee.org/document/9152769/)
## TRRespass: Exploiting the Many Sides of Target Row Refresh.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#trrespass-exploiting-the-many-sides-of-target-row-refresh) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#trrespass-exploiting-the-many-sides-of-target-row-refresh)**
### 作者
* Pietro Frigo, Vrije Universiteit Amsterdam
* Emanuele Vannacc, Vrije Universiteit Amsterdam
* Hasan Hassan, ETH Zürich
* Victor van der Veen, Qualcomm Technologies Inc
* Onur Mutlu, ETH Zürich
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
* Kaveh Razavi, Vrije Universiteit Amsterdam
### 摘要
> 在一系列引人注目的高调RowHammer攻击之后，CPU和DRAM生产商争相推出了旨在解决RowHammer问题的最终硬件解决方案：目标行刷新（TRR）。从业者普遍认为，对于受到TRR保护的最新一代DDR4系统来说，RowHammer在实际中已经不再是一个问题。然而，实际上对TRR的了解非常有限。TRR到底是如何防止RowHammer的？系统中的哪些部分负责操作TRR机制？TRR是否完全解决了RowHammer问题，还是存在弱点？在本文中，我们揭示了TRR的内部工作原理，并揭开了其安全保证的真相。我们表明，所谓的单一缓解机制实际上是一系列不同的解决方案，在目标行刷新这个总称下融合在一起。我们通过深入分析，检查和披露了不同的现有TRR解决方案，并证明现代实施完全在DRAM芯片内部操作。尽管分析内部DRAM缓解措施存在困难，但我们描述了用于了解这些缓解机制操作的新技术。这些洞见使我们能够构建TRRespass，一个可扩展的黑盒RowHammer模糊器，我们在42个最近的DDR4模块上进行了评估。 TRRespass表明，即使使用了内部DRAM TRR的最新一代DDR4芯片免受所有已知的RowHammer攻击，仍然经常容易受到我们开发的新的TRR-aware变体RowHammer的攻击。特别是，TRRespass发现，在现有的DDR4模块上，当使用许多侵略者行（某些情况下多达19行）时，仍然存在RowHammer的可能性，我们通常将其称为多面RowHammer。总体而言，我们的分析显示，来自三大主要DRAM供应商（即三星、美光和海力士）的42个模块中，有13个容易受到我们TRR-aware RowHammer访问模式的攻击，因此仍然可以进行现有的最先进的系统级RowHammer攻击。除了DDR4，我们还对LPDDR4(X)芯片进行了实验，并展示了它们对RowHammer位翻转也是脆弱的。我们的结果为追求更好的RowHammer缓解措施提供了具体的证据，这一工作必须继续进行。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152631/](https://ieeexplore.ieee.org/document/9152631/)
## AdGraph: A Graph-Based Approach to Ad and Tracker Blocking.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#adgraph-a-graph-based-approach-to-ad-and-tracker-blocking) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#adgraph-a-graph-based-approach-to-ad-and-tracker-blocking)**
### 作者
* Umar Iqbal, University of Iowa
* Peter Snyder, Brave Software
* Shitong Zhu, UC Riverside
* Benjamin Livshits, Brave Software
* Zhiyun Qian, UC Riverside
* Zubair Shafiq, University of Iowa
### 摘要
> 用户对阻止在线广告和追踪的需求越来越大。现有的工具，无论是已部署的还是在研究中描述的，都被证明是有用的，但要成为一个通用解决方案，它们要么不够完整，要么不够稳健。现有的检测方法通常只关注广告或追踪的一个方面（例如URL模式、代码结构），这使得现有的方法容易被规避。在这项工作中，我们提出了一种名为AdGraph的新颖的基于图形的机器学习方法，用于检测网络上的广告和追踪资源。与现有方法不同，AdGraph通过构建HTML结构、网络请求和JavaScript行为的图形表示，利用这种独特的表示来训练分类器以识别广告和追踪资源。由于AdGraph考虑了网络请求发生的上下文的许多方面，它对单因素规避技术的敏感性较低，这使得它比现有方法更难以躲避。我们在Alexa排名前10,000的网站上评估了AdGraph，并发现它的准确性很高，能够以95.33%的准确率复制人工生成的过滤列表的标签，甚至可以识别出许多过滤列表中的错误。我们将AdGraph实现为对Chromium的修改。AdGraph在页面加载和执行方面只增加了轻微的开销，并且实际上比原版Chromium在42%的网站上更快，比AdBlock Plus在78%的网站上更快。总的来说，我们得出结论，AdGraph既准确又高效，适用于在线使用，对比起基于流行的过滤列表的方法，它可以破解相当或更少的网站。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152669/](https://ieeexplore.ieee.org/document/9152669/)
## Browsing Unicity: On the Limits of Anonymizing Web Tracking Data.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#browsing-unicity-on-the-limits-of-anonymizing-web-tracking-data) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#browsing-unicity-on-the-limits-of-anonymizing-web-tracking-data)**
### 作者
* Clemens Deußer, Chair of Privacy and Security, TU Dresden, Germany
* Steffen Passmann, INFOnline GmbH, Berlin, Germany
* Thorsten Strufe, Karlsruhe Institute of Technology, Centre for Tactile Internet, TU Dresden
### 摘要
> 跨域追踪已成为规则而非例外，收集访问者行为数据的脚本在网页上随处可见。这些数据形成了关于浏览模式的综合概况，并包含个人敏感信息。这些数据很容易与所追踪的个人联系起来，而其中大多数人可能对这些信息的存在甚至存储和处理的方式都毫无察觉。随着公众压力增加，像谷歌、Facebook或百度这样的追踪公司如今声称对数据集进行了匿名化处理，从而限制或消除了将其与数据主体联系起来的可能性。通过与欧洲最大的观众测量协会合作，我们利用全面的追踪数据集来评估浏览数据的可识别性和匿名化的可能性。我们的研究结果显示，通过概括进行匿名化无法充分保护匿名性。将浏览数据的独特性降低到可忽略的水平需要删除所有客户端和网络域信息以及点击时间。在具体的对手情景下，被认为是匿名化的数据集极易受到数据集补充和肩浏的攻击，几乎有一半的浏览会话可以通过仅两个观察值进行识别。我们得出的结论是，虽然可能以单个粗糙点击的形式匿名存储，但任何更复杂的数据集合都会包含大量的假名数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152774/](https://ieeexplore.ieee.org/document/9152774/)
## Do Cookie Banners Respect my Choice? : Measuring Legal Compliance of Banners from IAB Europe's Transparency and Consent Framework.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#do-cookie-banners-respect-my-choice-measuring-legal-compliance-of-banners-from-iab-europes-transparency-and-consent-framework) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#do-cookie-banners-respect-my-choice-measuring-legal-compliance-of-banners-from-iab-europes-transparency-and-consent-framework)**
### 作者
* Célestin Matte, Université Côte d’Azur, Inria, France
* Nataliia Bielova, Université Côte d’Azur, Inria, France
* Cristiana Santos, Research Centre for Justice and Governance School of Law, University of Minho
### 摘要
> 由于《通用数据保护条例》（GDPR）和《电子隐私指令》（ePrivacy Directive）的影响，欧洲用户几乎在每个网站上都会遇到cookie横幅。许多此类横幅由遵守IAB Europe的透明度和同意框架（TCF）的同意管理提供者（CMP）实施。通过cookie横幅，CMP会收集和传播用户同意给第三方。在这项工作中，我们系统研究了IAB Europe的TCF，并分析了TCF cookie横幅用户界面后面存储的同意。我们分析了GDPR和电子隐私指令，以确定基于同意存储的cookie横幅实施中可能存在的法律违规行为，并通过对包含TCF横幅的1426个网站进行爬行（这些网站是在对28257个欧洲网站进行爬行中发现的）。通过两次自动和半自动爬行活动，我们发现了可疑违规行为，其中包括：141个网站在用户未做出选择的情况下注册了积极的同意；236个网站通过预先选中选项来引导用户接受同意；27个网站在用户明确选择退出后仍然存储积极的同意。通过对560个网站进行广泛测试，我们发现其中54%至少存在一种可疑违规行为。最后，我们提供了一个浏览器扩展程序，以方便常规用户和数据保护机构手动检测可疑违规行为。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152617/](https://ieeexplore.ieee.org/document/9152617/)
## Meddling Middlemen: Empirical Analysis of the Risks of Data-Saving Mobile Browsers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#meddling-middlemen-empirical-analysis-of-the-risks-of-data-saving-mobile-browsers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#meddling-middlemen-empirical-analysis-of-the-risks-of-data-saving-mobile-browsers)**
### 作者
* Brian Kondracki, Stony Brook University
* Assel Aliyeva, Boston University
* Manuel Egele, Boston University
* Jason Polakis, University of Illinois at Chicago
* Nick Nikiforakis, Stony Brook University
### 摘要
> 移动浏览器已成为我们在线活动的主要媒介之一。然而，随着网页不断增大和即时流媒体变得普遍，移动数据计划限制仍然是用户关注的重要问题。因此，在选择移动浏览器时，节省数据的功能成为一个可以区分的因素。本文中，我们对数据节省功能对用户的安全和隐私威胁进行了全面探讨。我们首次对安卓数据节省浏览器（DSB）生态系统进行了多方面分析，包括各种浏览器基础设施的特征，它们在应用和协议层面上的行为，以及它们对用户浏览体验的影响。我们的研究无疑表明，在主要浏览器中启用数据节省功能会显著降低用户的安全性，引入严重的漏洞，这些漏洞在正常操作期间浏览器中并不存在。总之，我们的实验显示，启用数据节省功能会使用户面临以下风险：（i）代理服务器运行过时软件，（ii）由于TLS证书验证问题导致的中间人攻击，（iii）TLS密码套件选择减弱，（iv）不支持HSTS等安全头，以及（v）更容易被标记为机器人。尽管这些问题可以得到解决，但我们认为，在日益加密的Web环境中，数据节省功能具有固有的风险，用户在每次启用此功能时都会默认接受关键的节省与安全之间的权衡。因此，我们应该提醒用户这个问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152644/](https://ieeexplore.ieee.org/document/9152644/)
## Efficient and Secure Multiparty Computation from Fixed-Key Block Ciphers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#efficient-and-secure-multiparty-computation-from-fixed-key-block-ciphers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#efficient-and-secure-multiparty-computation-from-fixed-key-block-ciphers)**
### 作者
* Chun Guo, Université Catholique de Louvain
* Jonathan Katz, University of Maryland
* Xiao Wang, Northwestern University
* Yu Yu, Shanghai Jiao Tong University
### 摘要
> 许多安全计算的实现使用固定密钥的AES（模拟为随机置换）；这是因为现有硬件对AES有支持，并且可以避免重新计算AES密钥调度，从而获得了显著的性能优势。然而，在调查这些实现时，我们发现大多数以一种启发式的方式利用AES；在最好的情况下，这会导致安全证明的缺漏，但在很多情况下，我们发现这会导致明确的攻击。鉴于这种不令人满意的情况，我们着手全面研究如何高效且安全地使用固定密钥分组密码进行安全计算，特别是用于OT扩展和电路加密。具体来说：· 我们考虑了几种哈希函数的伪随机性概念（例如相关性鲁棒性），并且基于满足这些概念的哈希函数，我们展示了在OT扩展、加密和其他应用中的可证明安全方案。· 我们在（非可编程）随机置换模型中提供了满足我们考虑的不同伪随机性概念的哈希函数的可证明安全构造。综合起来，我们的结果为基于固定密钥分组密码（模拟为随机置换）的安全计算协议的实现提供了端到端的安全证明。令人惊讶的是，与此同时，我们的工作也实现了与最先进技术相比可观的性能改进。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152760/](https://ieeexplore.ieee.org/document/9152760/)
## Path Oblivious Heap: Optimal and Practical Oblivious Priority Queue.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#path-oblivious-heap-optimal-and-practical-oblivious-priority-queue) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#path-oblivious-heap-optimal-and-practical-oblivious-priority-queue)**
### 作者
* Elaine Shi, Cornell University
### 摘要
> 我们提出了Path Oblivious Heap（POH），这是一种极其简单、实用和最优的混淆优先队列。我们的构建还意味着一种实用和最优的混淆排序算法，名为Path Oblivious Sort（POS）。我们的算法不仅在渐近意义上是最优的，而且实际性能只比不安全的基线差一个较小的常量因子。具体来说，假设客户端私有存储大约为对数级别，POH消耗的带宽比普通的不安全二叉堆多2倍至7倍；POS消耗的带宽比不安全的归并排序多4.5倍至6倍。我们展示了这些性能结果相对于现有工作的提升达到1-2个数量级。最后，我们对多方计算场景下的算法进行评估，并展示了相对于现有技术的对称加密数量减少了7倍至8倍<sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152809/](https://ieeexplore.ieee.org/document/9152809/)
## Transparent Polynomial Delegation and Its Applications to Zero Knowledge Proof.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#transparent-polynomial-delegation-and-its-applications-to-zero-knowledge-proof) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#transparent-polynomial-delegation-and-its-applications-to-zero-knowledge-proof)**
### 作者
* Jiaheng Zhang, University of California, Berkeley
* Tiancheng Xie, University of California, Berkeley
* Yupeng Zhang, Texas A&M University
* Dawn Song, University of California, Berkeley
### 摘要
> 我们提出了一种新的简洁零知识证明方案，用于层次算术电路且无需可信设置。证明者时间为O（C + nlogn），证明大小为O（D logC + log2 n），其中D深度电路具有n个输入和C个门。如果电路是结构化的，验证时间也是简洁的，O（D logC + log2 n）。我们的方案仅使用轻量级密码原语，例如抗冲突哈希函数，并且具有可信后量子安全性。我们基于我们的新方案实现了一个零知识证明系统Virgo，并将其性能与现有方案进行了比较。实验表明，生成一个计算具有256个叶子的Merkle树的电路的证明仅需53秒，比所有其他简洁零知识证明方案快上至少一个数量级。验证时间为50ms，证明大小为253KB，两者与现有系统相比具有竞争力。Virgo的基础是一种具有对数证明大小和验证时间的透明零知识可验证多项式委托方案。该方案处于交互式oracle证明模型中，可能具有独立的研究兴趣。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152704/](https://ieeexplore.ieee.org/document/9152704/)
## Towards Scalable Threshold Cryptosystems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-scalable-threshold-cryptosystems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#towards-scalable-threshold-cryptosystems)**
### 作者
* Alin Tomescu, MIT CSAIL
* Robert Chen, MIT PRIMES & Lexington High School
* Yiming Zheng, MIT PRIMES & Lexington High School
* Ittai Abraham, VMware Research
* Benny Pinkas, VMware Research
* Guy Golan Gueta, VMware Research
* Srinivas Devadas, Bar Ilan University
### 摘要
> 对于拜占庭容错系统的复苏兴趣将需要更具可扩展性的门限密码系统。不幸的是，当前的系统规模扩展性差，需要的时间与参与者数量成二次关系。在本论文中，我们提出了一些技术，帮助将门限签名方案（TSS）、可验证秘密共享（VSS）和分布式密钥生成（DKG）协议扩展到数十万参与者及以上。首先，我们使用高效算法在多个点上求解多项式，以加快计算拉格朗日系数，用于聚合门限签名。结果是，我们可以在仅6秒内聚合13万个260,000个BLS门限签名（由30分钟减少而来）。其次，我们展示了如何“认证”这样的多点求值可以加快多项式求值的证明，这是通信效率高的VSS和DKG协议的关键步骤。结果是，我们将VSS和DKG协议的渐进（和具体）计算复杂性从二次时间降低到准线性时间，在通信复杂性略微增加的情况下。例如，使用我们的DKG协议，我们可以在2.3小时内安全地生成上述BLS方案的密钥（由8天缩短而来）。我们的技术改进了门限值从255开始的性能，并推广到任何基于拉格朗日门限方案，而不仅仅是门限签名。我们的工作有一定的局限性：我们需要一个可信的设置，我们专注于同步VSS和DKG协议，并未解决DKG中最糟糕的投诉开销问题。尽管如此，我们希望它能激发对设计大规模分布式系统的新兴兴趣。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152696/](https://ieeexplore.ieee.org/document/9152696/)
## A Stealthier Partitioning Attack against Bitcoin Peer-to-Peer Network.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-stealthier-partitioning-attack-against-bitcoin-peer-to-peer-network) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-stealthier-partitioning-attack-against-bitcoin-peer-to-peer-network)**
### 作者
* Muoi Tran, National University of Singapore
* Inho Choi, National University of Singapore
* Gi Jun Moon, Korea University
* Anh V. Vu, Japan Advanced Institute of Science and Technology
* Min Suk Kang, National University of Singapore
### 摘要
> 网络对手，例如恶意的自治系统（AS），已被证明能够通过路由级别攻击来分割比特币的点对点网络；例如，网络对手利用BGP漏洞进行前缀劫持攻击（参见Apostolaki等人[3]）。由于BGP操作的性质，这种劫持是全球可观察到的，因此可以立即检测到攻击并确定攻击者的身份。在本文中，我们提出了一种更隐蔽的攻击，称为EREBUS攻击，它可以在不进行任何路由操作的情况下分割比特币网络，从而使攻击对控制平面和数据平面检测器都无法被察觉。EREBUS的创新之处在于，它使网络对手AS成为一个自然的中间人网络，控制一个或多个目标比特币节点的所有与对等节点的连接，并通过耐心地影响目标节点的对等决策。我们表明，影响比特币节点的对等决策被认为是不可行的，因为之前的Eclipse攻击[29]已经进行了一系列错误修补，但网络对手可以利用丰富的网络地址资源（例如，在许多其他自治系统中伪造数百万个IP地址）以可靠地、以可忽略的成本长期执行攻击。EREBUS攻击对于大型自治系统（例如一级和大型二级自治系统）来说是可行的，可以针对约10,000个公共比特币节点中的绝大多数节点，每个目标比特币节点的攻击流量速率仅为大约520比特/秒，并且攻击执行期间适当（例如，5-6周）。EREBUS攻击可以由国家对手发起，他们愿意耐心地执行复杂的攻击策略来破坏加密货币（例如，控制共识、关闭加密货币、审查交易）。由于该攻击利用了网络对手的拓扑优势而不是比特币核心的特定漏洞，似乎没有快速修补措施可用。我们讨论了一些朴素的解决方案（例如，白名单、速率限制）的无效性，并且第三方代理解决方案可能会加剧比特币的集中化问题。我们提供了一些对比特币核心的建议修改，并表明它们有效地使EREBUS攻击变得更加困难；然而，在广泛部署之前，对其对比特币网络操作（例如，对等动态，传播延迟）的非平凡更改应进行彻底检查。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152616/](https://ieeexplore.ieee.org/document/9152616/)
## Flash Boys 2.0: Frontrunning in Decentralized Exchanges, Miner Extractable Value, and Consensus Instability.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flash-boys-2-0-frontrunning-in-decentralized-exchanges-miner-extractable-value-and-consensus-instability) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flash-boys-2-0-frontrunning-in-decentralized-exchanges-miner-extractable-value-and-consensus-instability)**
### 作者
* Philip Daian, Cornell Tech
* Steven Goldfeder, Cornell Tech
* Tyler Kell, Cornell Tech
* Yunqi Li, Cornell Tech
* Xueyuan Zhao, Cornell Tech
* Iddo Bentov, Cornell Tech
* Lorenz Breidenbach, Cornell Tech
* Ari Juels, Cornell Tech
### 摘要
> 区块链和智能合约承诺创建公平和透明的交易生态系统。然而，我们发现这一承诺并未得到实现。我们记录并量化了仲裁机器人在区块链系统中的广泛和不断增长的部署，特别是在去中心化交易所（或“DEXes”）中。这些机器人类似于华尔街的高频交易者，它们利用DEXes中的不完善之处，支付高交易费用并优化网络延迟，以预先进行普通用户的DEX交易并加以剥削。我们研究了在一部分产生可量化收入的交易中DEX仲裁机器人的广度。我们还研究了机器人的盈利策略，重点关注区块链特定的元素。我们观察到机器人参与所谓的优先气体拍卖（PGAs），通过竞标交易费用来获得优先排序，即早期块位置和执行，以用于它们的交易。PGAs提供了一个有趣且复杂的新的连续时间、部分信息、博弈论模型，我们对其进行了形式化和研究。我们发布了一个交互式网站门户，frontrun.me，以提供实时的PGAs数据给社区。我们还表明，为了获得优先交易排序而支付的高费用对共识层安全造成了系统性风险。我们解释了这些费用只是DEXes和其他领域一个普遍现象的一种形式，我们称之为矿工可提取价值（MEV），它构成了具体、可衡量的共识层安全风险。我们经验证据显示，MEV今天对以太坊构成了现实威胁。我们的工作凸显了智能合约中交易排序依赖性所带来的巨大且复杂的风险，以及传统金融市场利用形式在适应和渗透区块链经济中的方式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152675/](https://ieeexplore.ieee.org/document/9152675/)
## FlyClient: Super-Light Clients for Cryptocurrencies.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flyclient-super-light-clients-for-cryptocurrencies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flyclient-super-light-clients-for-cryptocurrencies)**
### 作者
* Benedikt Bünz, Stanford University
* Lucianna Kiffer, Northwestern University
* Loi Luu, Kyber Network
* Mahdi Zamani, Visa Research
### 摘要
> 为了验证交易的有效性，比特币和以太坊等加密货币需要节点验证区块链的有效性。这需要下载和验证所有区块，耗时数小时，并需要大量的带宽和存储空间。因此，资源有限的客户端在没有信任完全节点的情况下无法独立验证交易。比特币和以太坊提供了被称为简化支付验证（SPV）客户端的轻量级客户端，可以通过仅下载区块头来验证区块链。不幸的是，SPV客户端的存储和带宽需求仍然与链的长度成线性增长。例如，截至2019年7月，以太坊的SPV客户端需要下载和存储约4 GB的数据。
> 
> 最近，Kiayias等人提出了一种被称为无交互工作证明（NIPoPoW）的解决方案，允许轻量级客户端在预期中仅下载和存储对数次多的区块头。不幸的是，只要没有对诚实链产生影响的对手，NIPoPoW才是简洁的，并且只能在具有固定区块难度的链上使用，而大多数加密货币会根据网络算力频繁调整区块难度。
> 
> 我们介绍了一种名为FlyClient的新型交易验证轻量级客户端，适用于难度可变的区块链。FlyClient在渐近和实际上都具有高效性，只需要下载对数数量的区块头，同时在执行过程中只需存储一个区块头。通过使用最佳的概率区块抽样协议和默克尔山脉范围（MMR）承诺，FlyClient克服了NIPoPoW的局限性，并生成了所有测量参数的较短证明。在以太坊中，FlyClient实现了不到500 KB的同步证明大小，大约比SPV证明小6,600倍。最后，我们讨论了如何通过无争议的丝绒分叉以最小的更改将FlyClient部署到现有的加密货币中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152680/](https://ieeexplore.ieee.org/document/9152680/)
## ZEXE: Enabling Decentralized Private Computation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#zexe-enabling-decentralized-private-computation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#zexe-enabling-decentralized-private-computation)**
### 作者
* Sean Bowe, Zcash
* Alessandro Chiesa, UC Berkeley
* Matthew Green, Johns Hopkins University
* Ian Miers, Cornell Tech
* Pratyush Mishra, UC Berkeley
* Howard Wu, UC Berkeley
### 摘要
> 支持丰富应用程序的基于账本的系统通常存在两个限制。首先，验证交易需要重新执行它所证明的状态转换。其次，交易不仅会揭示哪个应用程序发生了状态转换，还会揭示应用程序的内部状态。我们设计、实现和评估了ZEXE，这是一个基于账本的系统，用户可以执行离线计算，并随后生成交易，证明这些计算的正确性，满足两个主要属性。首先，交易隐藏了有关离线计算的所有信息。其次，任何人都可以在常数时间内验证交易，而不考虑离线计算的复杂性。ZEXE的核心是一种我们引入的新的密码原语的构造，分散式私密计算（DPC）方案。为了实现我们的构造的高效实现，我们利用了密码学证明领域的工具，包括简洁的零知识证明和递归证明组合。总体而言，ZEXE中的交易的大小为968字节，不考虑离线计算，生成这些交易所需的时间不到1分钟，再加上与离线计算增长相关的时间。我们演示了如何使用ZEXE实现隐私保护的受欢迎应用的类比：私人用户定义的资产和用于这些资产的私人分散交易所。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152634/](https://ieeexplore.ieee.org/document/9152634/)
## The Last Mile: High-Assurance and High-Speed Cryptographic Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-last-mile-high-assurance-and-high-speed-cryptographic-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-last-mile-high-assurance-and-high-speed-cryptographic-implementations)**
### 作者
* José Bacelar Almeida, University of Minho and INESC TEC
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC
* Gilles Barthe, MPI for Security and Privacy and IMDEA Software
* Benjamin Grégoire, Inria
* Adrien Koutsos, LSV, CNRS, ENS Paris-Saclay
* Vincent Laporte, Inria
* Tiago Oliveira, University of Porto (FCUP) and INESC TEC
* Pierre-Yves Strub, Ecole Polytechnique
### 摘要
> 我们开发了一种构建加密实现的新方法。我们的方法在最后一步提供能够被证明功能正确、受到侧信道攻击保护，并且和手写汇编一样高效的汇编代码。我们使用TLS 1.3中推荐的两种密码套件之一ChaCha20-Poly1305来说明我们的方法，并提供经过形式验证的向量化实现，其性能超过最快的非验证代码。我们通过结合Jasmin框架和EasyCrypt证明助手来实现我们的方法。Jasmin框架提供高层次和低层次编程功能，EasyCrypt证明助手提供支持功能正确性和等价性检查的通用验证基础设施。这些工具在功能正确性方面都没有被使用过。综合考虑，这些基础设施使得程序员能够通过“游戏跳跃”的方式开发高效且经过验证的实现，从已被证明与规范功能正确的参考实现开始，逐渐引入经过等价性检查验证正确的程序优化。我们还提供了一些独立性的新贡献，包括Jasmin的新型可扩展验证编译器，具有更丰富的内存模型和对向量化指令的支持，以及在EasyCrypt中嵌入Jasmin的新方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152665/](https://ieeexplore.ieee.org/document/9152665/)
## EverCrypt: A Fast, Verified, Cross-Platform Cryptographic Provider.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#evercrypt-a-fast-verified-cross-platform-cryptographic-provider) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#evercrypt-a-fast-verified-cross-platform-cryptographic-provider)**
### 作者
* Jonathan Protzenko, Microsoft Research
* Bryan Parno, Carnegie Mellon University
* Aymeric Fromherz, Carnegie Mellon University
* Chris Hawblitzel, Microsoft Research
* Marina Polubelova, Inria
* Karthikeyan Bhargavan, Inria
* Benjamin Beurdouche, Inria
* Joonwon Choi, Microsoft Research
* Antoine Delignat-Lavaud, Microsoft Research
* Cédric Fournet, Microsoft Research
* Natalia Kulatova, Inria
* Tahina Ramananandro, Microsoft Research
* Aseem Rastogi, Microsoft Research
* Nikhil Swamy, Microsoft Research
* Christoph M. Wintersteiger, Microsoft Research
* Santiago Zanella-Beguelin, Microsoft Research
### 摘要
> 我们提出了EverCrypt：一种通过精心设计的API提供的验证、高性能密码功能的综合集合。该API可证明地支持灵活性（在同一功能中选择多种算法）和多路复用（在同一算法中选择多种实现）。通过抽象和零成本泛型编程，我们展示了灵活性如何在不牺牲性能的情况下简化验证，并展示了如何针对共享规范对C语言和汇编语言进行组合和验证。我们通过新的验证实现（包括哈希、Curve25519和AES-GCM等）的实验证明了这些技术的有效性，其性能与最佳未验证实现相匹配或超过。我们通过两个高性能验证案例研究来验证API设计，这些案例是基于EverCrypt构建的，其中包括一个安全网络协议和一个用于生产区块链的支持每秒270万个插入的Merkle树库。总体而言，EverCrypt包含超过124K行验证规范、代码和证明，并生成超过29K行C代码和14K行汇编代码。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152808/](https://ieeexplore.ieee.org/document/9152808/)
## Rigorous engineering for hardware security: Formal modelling and proof in the CHERI design and implementation process.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#rigorous-engineering-for-hardware-security-formal-modelling-and-proof-in-the-cheri-design-and-implementation-process) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#rigorous-engineering-for-hardware-security-formal-modelling-and-proof-in-the-cheri-design-and-implementation-process)**
### 作者
* Kyndylan Nienhuis, University of Cambridge
* Alexandre Joannou, University of Cambridge
* Thomas Bauereiss, University of Cambridge
* Anthony Fox, ARM Limited
* Michael Roe, University of Cambridge
* Brian Campbell, University of Edinburgh
* Matthew Naylor, University of Cambridge
* Robert M. Norton, University of Cambridge
* Simon W. Moore, University of Cambridge
* Peter G. Neumann, SRI International
* Ian Stark, University of Edinburgh
* Robert N. M. Watson, University of Cambridge
* Peter Sewell, University of Cambridge
### 摘要
> 许多安全漏洞的根本原因包括两个问题的恶性组合，这些问题通常被视为计算机领域无法逃避的方面。首先，流行的处理器架构和C/C++语言抽象提供的保护机制，可以追溯到上世纪70年代甚至更早，仅提供粗粒度的基于虚拟内存的保护。其次，主流的系统工程几乎完全依赖于测试和调试方法，最多只有词语规范。这些方法在商业上历史上一直足够满足计算机行业的需求，但它们无法阻止大量的可利用漏洞，并造成越来越严重的安全问题。本文展示了如何将更严格的工程方法应用于新的安全增强型处理器架构的开发，以及其相应的硬件实现和软件堆栈。我们在设计和工程过程中使用了完整指令集体系结构（ISA）的正式模型，以轻量级的方式支持和改进正常的工程实践，作为文档，用于作为硬件测试神谕和运行软件的模拟器，以及用于测试生成，并进行形式化验证。我们形式化了设计的关键安全属性，并通过机械化证明证明这些属性在完整的ISA模型下是成立的（完整到足以引导操作系统）。我们在CHERI上进行了这项工作，CHERI是一种具有硬件能力的架构，支持细粒度内存保护和可扩展的安全区隔，同时为现有软件提供了平滑的采用路径。CHERI是一个发展成熟的研究架构，自2010年以来一直在开发，并且现在正在进行的工作是在Arm工业原型上探索其在大规模商用处理器中的可能采用方式。本文所描述的严格的工程工作一直是其发展的一个组成部分，使实验更快、更有信心，提高了设计的信任度。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152777/](https://ieeexplore.ieee.org/document/9152777/)
## Binsec/Rel: Efficient Relational Symbolic Execution for Constant-Time at Binary-Level.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#binsec-rel-efficient-relational-symbolic-execution-for-constant-time-at-binary-level) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#binsec-rel-efficient-relational-symbolic-execution-for-constant-time-at-binary-level)**
### 作者
* Lesly-Ann Daniel, CEA, List, Université Paris-Saclay, France
* Sébastien Bardin, CEA, List, Université Paris-Saclay, France
* Tamara Rezk, INRIA Sophia-Antipolis, INDES Project, France
### 摘要
> 常数时间编程（CT）是一种高效的对抗时序侧信道攻击的措施，要求控制流和内存访问与秘密信息无关。然而，编写CT代码具有挑战性，因为它要求对执行轨迹的成对推理（2-hypersafety属性），而且通常不被编译器保留，需要二进制级的分析。不幸的是，目前针对CT的验证工具要么在更高级别（C或LLVM）推理，要么牺牲了漏洞发现或有界验证，要么无法扩展。我们解决了设计一种高效的二进制级CT验证工具的问题，能够提供漏洞发现和有界验证。该技术基于增强的关系符号执行，加入了专门用于信息流和二进制级分析的新优化，从而显著改进了基于符号执行的先前工作。我们实现了一个原型，BINSEC/REL，并对338个密码实现进行了广泛的实验，证明了我们方法在漏洞发现和有界验证方面的优势。使用BINSEC/REL，我们还自动化了之前人工研究的CT在编译器中的保留问题。有趣的是，我们发现gcc -O0和clang的后端传递在先前被认为由LLVM级别的先进CT验证工具保证安全的实现中引入了CT的违规情况，显示了在二进制级别进行推理的重要性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152766/](https://ieeexplore.ieee.org/document/9152766/)
## An Analysis of Pre-installed Android Software.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#an-analysis-of-pre-installed-android-software) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#an-analysis-of-pre-installed-android-software)**
### 作者
* Julien Gamba, IMDEA Networks Institute
* Mohammed Rashed, Universidad Carlos III de Madrid
* Abbas Razaghpanah, Stony Brook University
* Juan Tapiador, Universidad Carlos III de Madrid
* Narseo Vallina-Rodriguez, IMDEA Networks Institute
### 摘要
> 安卓操作系统的开源特性使得制造商能够将定制版本的操作系统与预装应用一同出货，以实现产品差异化。一些设备供应商最近因其设备上预装应用的潜在侵入性私人数据收集行为和其他可能有害或不受欢迎的行为而受到审查。然而，安卓预装软件的现状在安全性和隐私影响方面在很大程度上仍然未被探索。本文在全球范围内对来自200多个供应商的安卓设备上的预装软件进行了首次大规模研究。我们的研究依赖于使用众包方法在世界各地获取的大规模真实安卓固件数据集。这使我们能够回答与供应链相关的问题，从设备制造商和移动网络运营商到广告和追踪服务以及社交网络平台等第三方组织的参与者。我们的研究还帮助我们揭示了这些参与者之间的关系，这些关系似乎主要围绕着广告和数据驱动的服务。总体而言，围绕安卓开源模式的供应链缺乏透明度，促使了潜在有害行为和对敏感数据和服务的后门访问，而用户并未经过同意或察觉。我们在论文中得出了提高安卓生态系统透明度、归属和责任的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152633/](https://ieeexplore.ieee.org/document/9152633/)
## Kobold: Evaluating Decentralized Access Control for Remote NSXPC Methods on iOS.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#kobold-evaluating-decentralized-access-control-for-remote-nsxpc-methods-on-ios) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#kobold-evaluating-decentralized-access-control-for-remote-nsxpc-methods-on-ios)**
### 作者
* Luke Deshotels, Samsung Research America, North Carolina State University
* Costin Carabas, University POLITEHNICA of Bucharest
* Jordan Beichler, North Carolina State University
* Răzvan Deaconescu, University POLITEHNICA of Bucharest
* William Enck, North Carolina State University
### 摘要
> 苹果公司采用多种访问控制机制，以防止第三方应用程序直接访问安全敏感资源，包括沙盒和文件访问控制。然而，第三方应用程序也可以通过与系统守护进程进行进程间通信（IPC）间接访问这些资源。如果这些守护进程未能正确执行IPC上的访问控制，可能会产生混淆副助漏洞。鉴定此类漏洞的第一步是列举所有对第三方应用程序可访问的IPC服务。然而，IPC接口及其对应的访问控制策略是未知的，必须进行大规模的逆向工程。在本文中，我们介绍了Kobold框架，以使用静态和动态分析相结合的方式研究基于NSXPC的系统服务。使用Kobold，我们发现了多个具有混淆副助漏洞和守护进程崩溃的NSXPC服务。我们的发现包括激活麦克风，禁止访问所有网站以及泄露存储在iOS文件提供程序中的私密数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152695/](https://ieeexplore.ieee.org/document/9152695/)
## TextExerciser: Feedback-driven Text Input Exercising for Android Applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#textexerciser-feedback-driven-text-input-exercising-for-android-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#textexerciser-feedback-driven-text-input-exercising-for-android-applications)**
### 作者
* Yuyu He, Fudan University
* Lei Zhang, Fudan University
* Zhemin Yang, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Keke Lian, Fudan University
* Shuai Li, Fudan University
* Wei Yang, University of Texas at Dalla
* Zhibo Zhang, Fudan University
* Min Yang, Fudan University
* Yuan Zhang, Fudan University
* Haixin Duan, Tsinghua University
### 摘要
> 动态分析Android应用程序通常与试用者一起使用以增加其代码覆盖率。设计这种Android应用程序试用者的一个重大障碍来自于基于文本的输入的存在，这些输入通常受到输入字段的性质的限制，如长度和字符限制。在本文中，我们提出了TextExerciser，一种迭代的、反馈驱动的文本输入试用者，用于为Android应用程序生成文本输入。我们的关键观点是，Android应用程序通常会为格式错误的输入提供反馈，称为提示，以便我们的系统可以利用这些提示来改进输入生成。我们实现了TextExerciser的原型，并通过将TextExerciser与The Monkey和DroidBot等最先进的试用者进行比较来评估它。我们的评估结果表明，TextExerciser可以实现显著更高的代码覆盖率，并触发比这些工具更敏感的行为。我们还将TextExerciser与动态分析工具相结合，并展示它们能够比现有的试用者更好地检测到使用TextExerciser导致的隐私泄漏和漏洞。特别是，在TextExerciser的帮助下，现有的工具在一个拥有超过1000万次下载量的热门社交应用中找到了几个新的漏洞，例如用户凭据泄漏。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152712/](https://ieeexplore.ieee.org/document/9152712/)
## Ex-vivo dynamic analysis framework for Android device drivers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ex-vivo-dynamic-analysis-framework-for-android-device-drivers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ex-vivo-dynamic-analysis-framework-for-android-device-drivers)**
### 作者
* Ivan Pustogarov, University of Toronto
* Qian Wu, University of Toronto
* David Lie, University of Toronto
### 摘要
> 能够执行和分析代码使得许多安全任务，如漏洞利用开发、逆向工程和漏洞检测变得更加容易。然而，在嵌入式设备上，诸如Android智能手机之类的设备上，在设备上执行代码进行分析的能力受到了多种限制，包括需要获取这些设备、设备的速度以及在某些情况下需要在设备上加载自定义代码。另一种选择是在设备外执行代码，但这种方法要么需要移植，要么需要复杂的硬件仿真。在本文中，我们利用一个观察结果，即许多驱动程序中的执行路径很大程度上只依赖于驱动程序所执行的硬件和内核，从而创建了一个适用于Android设备的设备外动态驱动程序分析框架，既不需要移植也不需要仿真。我们通过开发一个通用的逃避框架来实现这一目标，通过逃避硬件和内核的依赖而不是精确仿真它们来实现驱动程序的初始化，然后开发了一种新颖的设备外分析框架(EASIER)，它能够在设备外分析初始化的驱动程序状态。与在设备上进行分析相比，我们的方法能够使用用户空间工具，并且随着可用通用CPU的数量而扩展，而不是随着智能手机数量的增加。我们通过针对平台设备驱动程序中的系统调用处理程序的权限升级漏洞来证明我们框架的实用性。我们发现它可以加载来自三个不同Android内核的48/62(77%)驱动程序：MSM、小米和华为。然后，我们证实它能够找到并检测到21个已知的漏洞。最后，我们发现了12个新的漏洞，并已经进行了报告和确认。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152767/](https://ieeexplore.ieee.org/document/9152767/)
## Automatic Uncovering of Hidden Behaviors From Input Validation in Mobile Apps.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#automatic-uncovering-of-hidden-behaviors-from-input-validation-in-mobile-apps) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#automatic-uncovering-of-hidden-behaviors-from-input-validation-in-mobile-apps)**
### 作者
* Qingchuan Zhao, The Ohio State University
* Chaoshun Zuo, The Ohio State University
* Brendan Dolan-Gavitt, New York University
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
* Zhiqiang Lin, The Ohio State University
### 摘要
> 移动应用程序（APP）的流行度迅速增长，数十亿的智能手机用户使用着通过Google Play商店或苹果应用商店等市场提供的数百万款应用程序。尽管这些应用程序提供了丰富且有用的功能供最终用户使用，但它们也包含一些未公开的隐藏行为，比如后门和黑名单，用于阻止不受欢迎的内容。在本文中，我们展示了用户输入验证行为-即移动应用程序处理和响应用户输入数据的方式-可以作为揭示这些隐藏功能的有力工具。因此，我们开发了一个名为InputScope的工具，自动检测用户输入验证的执行上下文以及参与验证的内容，以自动揭示感兴趣的秘密。我们已经使用InputScope对超过150,000款移动应用程序进行了测试，包括来自主要应用商店的热门应用和随手机预装的应用，发现了12,706款带有后门秘密的移动应用程序，以及4,028款包含黑名单秘密的移动应用程序。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152205/](https://ieeexplore.ieee.org/document/9152205/)
## PMP: Cost-effective Forced Execution with Probabilistic Memory Pre-planning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pmp-cost-effective-forced-execution-with-probabilistic-memory-pre-planning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pmp-cost-effective-forced-execution-with-probabilistic-memory-pre-planning)**
### 作者
* Wei You, Department of Computer Science, Purdue University, Indiana, USA
* Zhuo Zhang, Department of Computer Science, Purdue University, Indiana, USA
* Yonghwi Kwon, Department of Computer Science, University of Virginia, Virginia, USA
* Yousra Aafer, Department of Computer Science, Purdue University, Indiana, USA
* Fei Peng, Department of Computer Science, Purdue University, Indiana, USA
* Yu Shi, Department of Computer Science, Purdue University, Indiana, USA
* Carson Harmon, Department of Computer Science, Purdue University, Indiana, USA
* Xiangyu Zhang, Department of Computer Science, Purdue University, Indiana, USA
### 摘要
> 恶意软件是一种突出的安全威胁，揭示恶意软件行为是一个关键挑战。最近的恶意软件通常具有只在满足特定条件时才释放的有效负载。因此，仅仅执行恶意软件很难完全披露有效负载。此外，恶意软件样本可能配备了识别虚拟机的伪装技术，一旦检测到恶意软件正被监视，便会停止执行。强制执行是一种高效的方法，用于渗透恶意软件的自我保护措施，并揭示其隐藏行为，通过强制设定特定分支结果。然而，现有的先进强制执行技术X-Force非常沉重，需要对每个指令进行跟踪，即时推理关于指针别名关系，并通过按需内存分配来修复无效指针。我们开发了一种轻量级实用的强制执行技术。在不丢失分析精度的情况下，它避免了跟踪每个指令和按需分配内存。在我们的方案下，强制执行与本地执行非常相似。它具有一种新颖的内存预规划阶段，预先分配了一个大型内存缓冲区，并在真正执行之前以随机方式精心设置缓冲区和目标二进制文件中的变量的值。预规划设计得以使得解引用无效指针有很大的机会落入预先分配的区域，从而不会引发任何异常，并且语义无关的无效指针解引用高度可能访问不相交（预先分配的）内存区域，避免了随机化保证的状态损坏。我们的实验表明，我们的技术比X-Force快84倍，对于程序依赖检测分别减少了6.5倍和10%的误报率和漏报率，并且可以在400个最近的恶意软件样本中暴露出更多的恶意行为。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152685/](https://ieeexplore.ieee.org/document/9152685/)
## Combating Dependence Explosion in Forensic Analysis Using Alternative Tag Propagation Semantics.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#combating-dependence-explosion-in-forensic-analysis-using-alternative-tag-propagation-semantics) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#combating-dependence-explosion-in-forensic-analysis-using-alternative-tag-propagation-semantics)**
### 作者
* Md Nahid Hossain, Stony Brook University, Stony Brook, NY, USA
* Sanaz Sheikhi, Stony Brook University, Stony Brook, NY, USA
* R. Sekar, Stony Brook University, Stony Brook, NY, USA
### 摘要
> 我们目睹了所谓高级持续威胁（APTs）的有目共睹的迅速升级的网络攻击。由技术娴熟的对手实施的这些攻击在较长时间内进行，并保持数月不被察觉。重新追踪攻击者行动的常见方法是从系统日志中选择一个或多个可疑事件，并进行依赖性分析以揭示攻击者其他行动。这种分析的准确性受到依赖性扩散问题的影响，而该问题会导致大量良性事件被标记为攻击的一部分。在本文中，我们提出了两种新颖的技术，标签衰减和标签衰变，以减轻依赖性扩散的影响。我们的技术利用良性进程的共同行为，同时对具有可疑来历的进程和数据进行保守处理。我们的系统名为Morse，能够在几秒钟内筛选数百万个系统事件，并构建一个简洁的场景图来总结攻击者的活动。我们使用两个政府机构赞助的红队演习的数据进行的实验评估表明，我们的技术在识别隐秘攻击行动方面非常有效，大大降低了误报率，并且呈现出能够捕捉到绝大部分攻击，同时排除了良性背景活动的简洁场景图。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152772/](https://ieeexplore.ieee.org/document/9152772/)
## TARDIS: Rolling Back The Clock On CMS-Targeting Cyber Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#tardis-rolling-back-the-clock-on-cms-targeting-cyber-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#tardis-rolling-back-the-clock-on-cms-targeting-cyber-attacks)**
### 作者
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Yiting Sun, Georgia Institute of Technology
* Ruian Duan, Georgia Institute of Technology
* Omar Alrawi, Georgia Institute of Technology
* Ehsan Asdar, Georgia Institute of Technology
* Victor Zhu, Georgia Institute of Technology
* Yonghwi Kwon, University of Virginia
* Brendan Saltaformaggio, Georgia Institute of Technology
### 摘要
> 超过55%的全球网站使用内容管理系统（CMS）。不幸的是，这个庞大的用户群使得基于CMS的网站成为黑客攻击的高风险目标。更糟糕的是，绝大部分的网站托管行业已经转向了“备份和恢复”安全模式，依赖于容易出错的防病毒扫描程序提示用户恢复到每晚感染之前的快照版本。本研究有机会对超过30万个独特的生产网站的每晚备份进行研究。通过这样做，我们测量了基于CMS的网站的攻击格局，并评估了备份和恢复保护方案的有效性。令我们惊讶的是，我们发现数以万计的攻击在演变过程中呈现出明显持久的多阶段攻击模式。因此，我们提出了TARDIS，一种自动溯源推断技术，可以基于网站托管公司已经收集到的每晚备份来调查和修复针对CMS的攻击。在我们的行业合作伙伴的帮助下，我们将TARDIS应用于这30万个网站的每晚备份，发现了20591次持续时间从6天到1694天不等的攻击，其中一些攻击仍未被发现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152609/](https://ieeexplore.ieee.org/document/9152609/)
## Tactical Provenance Analysis for Endpoint Detection and Response Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#tactical-provenance-analysis-for-endpoint-detection-and-response-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#tactical-provenance-analysis-for-endpoint-detection-and-response-systems)**
### 作者
* Wajih Ul Hassan, University of Illinois at Urbana-Champaign
* Adam Bates, University of Illinois at Urbana-Champaign
* Daniel Marino, NortonLifeLock Research Group
### 摘要
> 终端检测与响应（Endpoint Detection and Response，简称EDR）工具通过将系统事件与已知的对抗行为进行匹配，提供了对复杂入侵的可视性。然而，目前的解决方案存在三个挑战：1）EDR工具产生了大量的误报，给分析人员带来了调查任务的积压；2）确定这些威胁警报的真实性需要繁琐的人工劳动，因为低级别系统日志数量庞大，造成了“大海捞针”的问题；3）由于日志保留的巨大资源负担，实际上在进行调查之前，描述长期存在的攻击活动的系统日志通常会被删除。本文介绍了将数据溯源的好处带给商业EDR工具的努力。我们引入了战术证据图（Tactical Provenance Graphs，简称TPGs），而不是编码低级别的系统事件依赖关系，而是对EDR生成的威胁警报之间的因果关系进行推理。TPGs为分析人员提供了多阶段攻击的紧凑可视化，加快了调查进程。为了解决EDR的误报问题，我们引入了一种威胁评分方法，基于TPG中个别威胁警报之间的时间排序来评估风险。与庞杂的系统日志保留相反，我们维护一个最小充分的骨架图，可以提供现有和未来威胁警报之间的链接性。我们在企业环境中使用赛门铁克（Symantec）EDR工具评估了我们的系统RapSheet。结果显示，我们的方法可以将真正恶意的TPGs排在误报TPGs之前。此外，我们的骨架图将长期的日志保留负担减少了最多87%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152771/](https://ieeexplore.ieee.org/document/9152771/)
## Throwing Darts in the Dark? Detecting Bots with Limited Data using Neural Data Augmentation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#throwing-darts-in-the-dark-detecting-bots-with-limited-data-using-neural-data-augmentation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#throwing-darts-in-the-dark-detecting-bots-with-limited-data-using-neural-data-augmentation)**
### 作者
* Steve T.K. Jan, University of Illinois at Urbana-Champaign
* Qingying Hao, University of Illinois at Urbana-Champaign
* Tianrui Hu, Virginia Tech
* Jiameng Pu, Virginia Tech
* Sonal Oswal, Radware
* Gang Wang, University of Illinois at Urbana-Champaign
* Bimal Viswanath, Virginia Tech
### 摘要
> 机器学习已广泛应用于构建安全应用程序。然而，许多机器学习模型需要连续供应具有代表性标记数据进行训练，这在实践中限制了模型的可用性。在本文中，我们以机器人检测为例，探讨了数据合成在解决这一问题中的应用。我们从一年内的三个不同月份的三个在线服务中收集了网络流量数据（2300万个网络请求）。我们开发了一种基于流的特征编码方案，以支持用于检测高级机器人的机器学习模型。关键的创新点在于我们的模型能够在非常有限的标记数据的情况下检测机器人。我们提出了一种数据合成方法，可以合成未见过的（或未来的）机器人行为分布。这种合成方法是分布感知的，在特征空间的聚类区域和离群区域使用了两个不同的生成对抗网络生成器合成数据。我们评估了这个想法，并展示了我们的方法可以用仅有1%的标记数据训练一个性能优于现有方法的模型。我们还表明数据合成还能提高模型在时间上的可持续性，并加快重新训练的速度。最后，我们比较了数据合成和对抗训练，并展示它们可以互补地改善模型的泛化能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152805/](https://ieeexplore.ieee.org/document/9152805/)
## JIT Leaks: Inducing Timing Side Channels through Just-In-Time Compilation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#jit-leaks-inducing-timing-side-channels-through-just-in-time-compilation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#jit-leaks-inducing-timing-side-channels-through-just-in-time-compilation)**
### 作者
* Tegan Brennan, University of California Santa Barbara
* Nicolás Rosner, University of California Santa Barbara
* Tevfik Bultan, University of California Santa Barbara
### 摘要
> 软件中的侧信道漏洞是由于不同程序路径上资源使用不平衡而引起的。我们表明，即时编译（JIT）对于现代解释语言的运行时性能至关重要，但在程序的输入分布非均匀的情况下，它可能引入时间侧信道。这种时间信道可以使攻击者推断有关程序输入条件的潜在敏感信息。我们定义了三种攻击模型，可以利用此类侧信道，以及五种漏洞模板来检测易受攻击的代码片段和条件。我们还提出了分析算法，以生成攻击者执行准确推测所需的代表性统计信息。我们系统评估了这些基于JIT的侧信道在Java标准库的java.lang.String、java.lang.Math和java.math.BigInteger类，以及JavaScript内置对象String、Math和Array上的强度。我们使用广泛采用的、开源的、JIT增强的Java和JavaScript语言运行时引擎进行评估，分别是Oracle HotSpot Java虚拟机和Google V8 JavaScript引擎。最后，我们在Apache Shiro安全框架和GraphHopper路线规划服务器中演示了几个基于JIT的侧信道示例，并且证明它们可以在公共互联网上被观察到。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152649/](https://ieeexplore.ieee.org/document/9152649/)
## The State of the Uniform: Attacks on Encrypted Databases Beyond the Uniform Query Distribution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-state-of-the-uniform-attacks-on-encrypted-databases-beyond-the-uniform-query-distribution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#the-state-of-the-uniform-attacks-on-encrypted-databases-beyond-the-uniform-query-distribution)**
### 作者
* Evgenios M. Kornaropoulos, UC Berkeley
* Charalampos Papamanthou, UC Berkeley
* Roberto Tamassia, UC Berkeley
### 摘要
> 最近关于对加密数据库的泄露滥用攻击的基础性研究拓宽了我们对敌对利用标准泄露特征所能实现的理解。然而，所有已知的数值重建攻击都建立在可能在现实世界中不成立的强假设之上。最为普遍的假设是查询是由客户端均匀随机发出的。我们提出了首个在不了解查询或数据分布信息的情况下成功实施数值重建攻击的方法。我们的方法利用了搜索模式泄露，这种泄露存在于所有已知的结构化加密方案中，但迄今尚未被充分利用。我们的方法的核心是一个支持大小估计器，这是一种利用具有相同响应的搜索令牌的重复出现来估计加密值之间距离的技术，而不需要对底层分布作出任何假设。基于从搜索模式泄露中提取的信息，我们设计了无关分布的重建攻击，包括范围查询和k最近邻（k-NN）查询。我们的新的范围攻击采用不同的算法方法，与最先进的攻击方法不同，后者被精心调整以适应均匀分布的查询。相反，我们在各种偏斜的查询分布下重建明文值，甚至在均匀查询分布下的准确性上超过了以前的方法。我们的新的k-NN攻击需要比以前的攻击更少的样本，并且可以扩展到更大的k值。我们通过在广泛的查询分布和数据库密度上进行实验测试，展示了我们攻击的有效性，这些分布和密度对于对手来说都是未知的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152800/](https://ieeexplore.ieee.org/document/9152800/)
## Pseudorandom Black Swans: Cache Attacks on CTR_DRBG.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pseudorandom-black-swans-cache-attacks-on-ctr-drbg) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pseudorandom-black-swans-cache-attacks-on-ctr-drbg)**
### 作者
* Shaanan Cohney, University of Pennsylvania
* Andrew Kwong, University of Michigan
* Shahar Paz, Tel Aviv University
* Daniel Genkin, University of Michigan
* Nadia Heninger, University of California, San Diego
* Eyal Ronen, COSIC (KU Leuven), Tel Aviv University
* Yuval Yarom, Data61, University of Adelaide
### 摘要
> 现代密码学要求能够安全地生成伪随机数。然而，尽管有数十年的侧信道攻击研究，但对于其应用于伪随机数生成器（PRG）的讨论很少。在这项工作中，我们致力于填补这一空白，通过经验评估常见PRG实现的侧信道抗性。我们发现，加密原语中有关侧信道泄漏的宝贵经验教训并未应用于PRG的各个抽象层级。在设计层面，美国国家标准与技术研究所（NIST）推荐的CTR_DRBG在存在攻击者能够破坏状态（例如，通过侧信道）的情况下并不具备前向安全性。在基元层面上，CTR_DRBG的流行实现，如OpenSSL的FIPS模块和NetBSD的内核，使用泄漏T表AES作为其底层密码，从而容易受到缓存侧信道攻击。最后，我们发现许多实现选择的参数使攻击者能够充分利用侧信道，从TLS连接中恢复秘密密钥。我们通过实证验证了我们的攻击，具体表现在两个情景中。首先，当TLS客户端连接到受攻击控制的服务器时，我们进行了一次缓存攻击，从易受攻击的CTR_DRBG实现中恢复了私有状态。然后我们使用恢复的状态计算客户端的长期认证密钥，从而允许攻击者冒充客户端。在第二个情景中，我们展示了攻击者如何利用Intel SGX提供的高时间分辨率进行盲攻击，只需进行三次AES加密即可从被动收集的TLS连接中恢复CTR_DRBG的状态，并因此进行解密。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152663/](https://ieeexplore.ieee.org/document/9152663/)
## Flaw Label: Exploiting IPv6 Flow Label.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flaw-label-exploiting-ipv6-flow-label) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#flaw-label-exploiting-ipv6-flow-label)**
### 作者
* Jonathan Berger, Bar-Ilan University
* Amit Klein, Bar-Ilan University
* Benny Pinkas, Bar-Ilan University
### 摘要
> IPv6协议的设计考虑了安全性。IPv6引入的一个改变是在其协议头中增加了一个新的20位流标签字段。我们展示了远程服务器可以利用流标签字段为每个设备分配唯一的ID，与运行Windows 10（版本1703及更高版本）、Linux和Android（内核版本4.3及更高版本）的机器进行通信。然后，服务器能够将相应的设备ID与从这些机器发送的后续传输相关联。这种识别是通过利用流标签字段生成逻辑进行的，并且在所有浏览器中都可以工作，而不管网络更改如何。此外，这种攻击的变体也可以被动地工作，即不需要主动触发这些机器的流量。为了设计这种攻击，我们逆向工程和密码分析了Windows的流标签生成代码，并检查了Linux内核的流标签生成代码。我们提供了一种实用的技术来部分提取每个算法使用的密钥，并观察到该密钥可以跨网络、VPN、浏览器和隐私设置识别个别设备。我们部署了一个演示（适用于Windows和Linux/Android），显示密钥提取和机器指纹识别在实际中是有效的，并从世界各地的网络进行了测试。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152759/](https://ieeexplore.ieee.org/document/9152759/)
## HopSkipJumpAttack: A Query-Efficient Decision-Based Attack.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#hopskipjumpattack-a-query-efficient-decision-based-attack) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#hopskipjumpattack-a-query-efficient-decision-based-attack)**
### 作者
* Jianbo Chen, University of California, Berkeley
* Michael I. Jordan, University of California, Berkeley
* Martin J. Wainwright, University of California, Berkeley
### 摘要
> 决策模型对抗攻击的目标是仅基于观察目标模型返回的输出标签生成对抗性样本。我们开发了HopSkipJumpAttack，这是一类基于决策边界上的二进制信息对梯度方向进行估计的算法。所提算法家族包括针对ℓ和ℓ∞相似度度量的非定向和定向攻击。我们提供了对所提算法和梯度方向估计的理论分析。实验证明，相比几种现有的决策模型对抗攻击，HopSkipJumpAttack所需的模型查询数量明显较少。它在攻击几种广泛使用的防御机制上也取得了竞争性的性能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152788/](https://ieeexplore.ieee.org/document/9152788/)
## Humpty Dumpty: Controlling Word Meanings via Corpus Poisoning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#humpty-dumpty-controlling-word-meanings-via-corpus-poisoning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#humpty-dumpty-controlling-word-meanings-via-corpus-poisoning)**
### 作者
* Roei Schuster, Tel Aviv University
* Tal Schuster, CSAIL, MIT
* Yoav Meri, Cornell Tech, Cornell University, New York, NY, USA
* Vitaly Shmatikov, Cornell Tech
### 摘要
> 词嵌入，例如GloVe和SGNS，是低维度的向量表示，通过编码词语的“含义”，使得词向量之间的距离与它们的语义相似度相对应。这使得语义的迁移学习可以应用于各种自然语言处理任务。词嵌入通常在大型公共语料库（如维基百科或Twitter）上进行训练。我们证明了，一个能够修改嵌入训练语料库的攻击者可以通过改变词语在嵌入空间中的位置来控制新词和现有词的“含义”。我们开发了一个明确的表达式来描述语料库特征，作为词语之间距离的代理，并建立了其数值与嵌入距离之间的因果关系。然后，我们展示了如何利用这种关系实现两个对抗目标：（1）使一个词成为另一个词的排名靠前的邻居，（2）将一个词从一个语义聚类移到另一个语义聚类。对词嵌入的攻击可以影响多样化的下游任务，首次展示了数据污染在迁移学习情景中的潜力。我们利用这种攻击来操纵信息检索系统（如简历搜索）中的查询扩展，使某些名称在命名实体识别模型中更或更少可见，并导致新词被翻译成特定目标词，而不考虑语言。最后，我们展示了攻击者如何生成语言上可信的语料库修改，从而愚弄那些试图使用语言模型过滤不可信句子的防御方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152608/](https://ieeexplore.ieee.org/document/9152608/)
## Privacy Risks of General-Purpose Language Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#privacy-risks-of-general-purpose-language-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#privacy-risks-of-general-purpose-language-models)**
### 作者
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Shouling Ji, Zhejiang University
* Min Yang, Fudan University
### 摘要
> 最近，在自然语言处理（NLP）中建立通用语言模型的新范式（例如，Google的Bert和OpenAI的GPT-2）已经出现，并开始在各种下游NLP任务和实际系统（例如，Google的搜索引擎[6]）中应用，它是NLP系统中的标准流程，将文本转换为向量（即嵌入）以供下游建模使用。为了获得通用的文本嵌入，这些语言模型具有非常复杂的架构，拥有数百万个可学习参数，并且通常在被使用之前预训练数十亿个句子。众所周知，这种做法确实提高了许多下游NLP任务的最先进性能。然而，这种改进性并非免费。我们发现通用语言模型的文本嵌入会从纯文本中捕获许多敏感信息。一旦被对手访问，这些嵌入可以被逆向工程以揭示受害者的敏感信息，从而进一步骚扰。尽管这种隐私风险可能对这些有前途的NLP工具的未来发展产生实际威胁，但迄今为止，主流工业级语言模型还没有发表的攻击或系统评估。为了弥补这一差距，我们提出了第一个系统研究，对8个最先进的语言模型进行了4个不同案例研究，以研究其隐私风险。通过构建2个新的攻击类别，我们的研究证明了上述隐私风险确实存在，并且对涵盖身份、基因组、医疗保健和位置的敏感数据的通用语言模型的应用构成实际威胁。例如，我们展示了即使对手几乎没有先验知识，也可以根据患者的医疗描述的Bert嵌入来推断出大约75％的疾病位置准确性。作为可能的对策，我们提出了4种不同的防御措施（通过舍入、差分隐私、对抗性训练和子空间投影），以模糊未受保护的嵌入以减轻风险。通过广泛的评估，我们还对每种防御措施带来的效用和隐私权之间的权衡进行了初步分析，我们希望这可以促进未来的减轻研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152761/](https://ieeexplore.ieee.org/document/9152761/)
## Intriguing Properties of Adversarial ML Attacks in the Problem Space.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#intriguing-properties-of-adversarial-ml-attacks-in-the-problem-space) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#intriguing-properties-of-adversarial-ml-attacks-in-the-problem-space)**
### 作者
* Fabio Pierazzi, King's College London
* Feargus Pendlebury, King's College London
* Jacopo Cortellazzi, King's College London
* Lorenzo Cavallaro, King's College London
### 摘要
> 对抗性机器学习的最近研究已经探讨了问题空间攻击，重点是在图像之外的领域中生成真实的逃避对象，这些领域中没有清晰的特征空间的逆映射（例如软件）。然而，问题空间攻击的设计、比较和现实世界的影响仍未得到充分探讨。本文提出了两个重大贡献。首先，我们提出了一个对问题空间中的对抗性机器学习逃避攻击进行新颖形式化的方法，其中包括对可用变换、保持语义一致性、预处理的鲁棒性和合理性等方面的全面约束的定义。我们阐明了特征空间和问题空间之间的关系，并引入了作为逆向特征映射问题副产品的副作用特征的概念。这使我们能够定义和证明问题空间攻击存在的必要和充分条件。我们进一步通过使用我们的形式化方法描述了相邻领域中的几种攻击，展示了其表达能力的有效性。其次，在我们的形式化基础上，我们提出了一种在Android恶意软件领域的新型问题空间攻击，克服了过去的局限性。在2017年和2018年的一个包含170K个Android应用的数据集上的实验证明了规避先进恶意软件分类器及其加固版本的可行性。我们的结果表明，“作为一项服务的对抗性恶意软件”是一个现实的威胁，因为我们可以自动生成数千个逼真且不引人注意的对抗性应用程序，平均只需要几分钟就可以生成一个对抗性应用程序。然而，在过去的六年中，大约有1600多篇有关对抗性机器学习的论文中，只有约40篇集中在恶意软件领域，其中许多仍然只停留在特征空间。我们的问题空间攻击的形式化为该领域的更加原则性的研究铺平了道路。我们负责地向其他研究人员发布了我们的新型攻击的代码和数据集，以鼓励未来在问题空间中进行防御方面的研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152781/](https://ieeexplore.ieee.org/document/9152781/)
## Influencing Photo Sharing Decisions on Social Media: A Case of Paradoxical Findings.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#influencing-photo-sharing-decisions-on-social-media-a-case-of-paradoxical-findings) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#influencing-photo-sharing-decisions-on-social-media-a-case-of-paradoxical-findings)**
### 作者
* Mary Jean Amon, University of Colorado Boulder, Boulder, USA
* Rakibul Hasan, Indiana University, Bloomington, USA
* Kurt Hugenberg, Indiana University, Bloomington, USA
* Bennett I. Bertenthal, Indiana University, Bloomington, USA
* Apu Kapadia, Indiana University, Bloomington, USA
### 摘要
> 我们调查了透视能力、隐私提示和对照片主题的描绘（即照片情感）对通过社交媒体分享照片的决策的影响。在一项在线实验中，我们询问了379名参与者对98张照片的意愿（之前这些照片已经被评估为情感）。实验设置了三个条件：(1) 基线：参与者评估分享每张照片的可能性；(2) 透视能力：参与者被引导想象自己是照片中的人，评估分享每张照片的可能性；(3) 隐私：参与者被提示考虑照片中人的隐私，评估分享每张照片的可能性。尽管不同条件下的参与者都表明不太可能分享描绘人物负面形象的照片，令人惊讶的是，当被提醒考虑照片中人的隐私时，他们报告分享照片的可能性更高。在现实世界的社交媒体平台上频繁分享照片的人和没有强烈个人隐私偏好的人在实验中特别倾向于希望分享照片，而不论照片如何描绘主题。随后的一项研究涉及了100名参与者对其回答的解释，结果显示隐私条件导致了对他人隐私的缺乏关注。这些发现表明，开发减少照片分享和保护他人隐私的干预措施是一个多变量问题，明显的解决方案有时可能出现问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152698/](https://ieeexplore.ieee.org/document/9152698/)
## SoK: Cyber Insurance - Technical Challenges and a System Security Roadmap.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-cyber-insurance-technical-challenges-and-a-system-security-roadmap) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-cyber-insurance-technical-challenges-and-a-system-security-roadmap)**
### 作者
* Savino Dambra, Eurecom
* Leyla Bilge, Symantec Research Labs
* Davide Balzarotti, Eurecom
### 摘要
> 近年来，网络攻击的数量和复杂性不断增加，公司和组织相应地增加了在更强大的基础设施上的投资，以保护其数据、资产和声誉。然而，单靠预防措施无法完全保护免受这些无数且不断演变的威胁。因此，为了处理残留风险并在发生事故时控制业务损失，企业越来越多地将网络保险作为其企业风险管理策略的一部分采用。因此，网络保险部门 - 其提供将与网络和计算机事故相关的金融风险转移给第三方的保险 - 正迅速增长，最近的索赔已经达到1亿美元。然而，尽管其他保险部门依赖于经过验证的方法来准确预测风险，但网络领域的许多特殊性导致运营商经常采用基于专家意见的定性方法。本文研究了过去在网络保险领域进行的研究，并将以经济方面、数学模型、风险管理方法和网络事件预测为重点的以往研究进行分类。然后，我们针对每个保险阶段确定了一组实际研究问题，安全专家可以帮助开发新的以数据驱动的方法和自动化工具来取代现有的定性方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152206/](https://ieeexplore.ieee.org/document/9152206/)
## A Tale of Sea and Sky On the Security of Maritime VSAT Communications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-tale-of-sea-and-sky-on-the-security-of-maritime-vsat-communications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#a-tale-of-sea-and-sky-on-the-security-of-maritime-vsat-communications)**
### 作者
* James Pavur, Oxford University
* Daniel Moser, armasuisse
* Martin Strohmeier, armasuisse
* Vincent Lenders, armasuisse
* Ivan Martinovic, Oxford University
### 摘要
> 非常小型口径终端（VSAT）已经彻底改变了海事运营。然而，海事VSAT服务的安全维度尚未被充分理解。历史上，高昂的设备成本阻碍了研究人员和攻击者的进入。在本文中，我们展示了一种威胁模型的实质性变化，通过使用不到400美元的广泛可用电视设备对海事VSAT网络进行实际攻击。这是通过GSExtract实现的，这是一个专门设计的取证工具，可以从高度损坏的VSAT数据流中提取IP流量。通过分析涵盖26百万平方公里覆盖面积的超过1.3TB真实世界海事VSAT记录，我们实验性地评估了这一威胁的影响。这些系统采用的底层网络平台代表全球海事VSAT服务市场的60%以上。我们发现，一些世界上最大的海事公司的敏感数据经常在VSAT船到岸通信中泄露。通过案例研究，从拦截和修改导航图表到盗取护照和信用卡详细信息，对这一威胁进行了情境化的描述。除此之外，我们展示了在某些网络配置下任意拦截和修改TCP会话的能力，从而实施中间人和拒绝服务攻击。本文最后对VSAT环境中加密的独特要求和挑战进行了简要讨论。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152624/](https://ieeexplore.ieee.org/document/9152624/)
## I Know Where You Parked Last Summer : Automated Reverse Engineering and Privacy Analysis of Modern Cars.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#i-know-where-you-parked-last-summer-automated-reverse-engineering-and-privacy-analysis-of-modern-cars) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#i-know-where-you-parked-last-summer-automated-reverse-engineering-and-privacy-analysis-of-modern-cars)**
### 作者
* Daniel Frassinelli, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sohyeon Park, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Stefan Nürnberger, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 现如今，汽车配备了数百个传感器和数十台处理数据的计算机。不幸的是，由于汽车行业的极度保密性，不存在官方或客观的信息源来准确说明他们的车辆收集了哪些数据。据个别证据表明，原始设备制造商（OEMs）在司法要求时突然披露了他们收集的大量关于驾驶员的个人数据。在本文中，我们介绍了我们的工具AutoCAN，用于汽车的隐私和安全分析，通过接入车辆内部网络并提取数据的时间序列，自动建立基于物理规律的关系来理解这些数据。这些算法适用于任何品牌、型号或使用的协议。我们的研究结果表明，汽车制造商追踪GPS位置、乘客人数、体重、车门、灯光和空调的使用统计数据。我们还揭示了OEMs嵌入的远程停用汽车功能和在驾驶员超速时发出警报的功能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152789/](https://ieeexplore.ieee.org/document/9152789/)
## SoK: Understanding the Prevailing Security Vulnerabilities in TrustZone-assisted TEE Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-understanding-the-prevailing-security-vulnerabilities-in-trustzone-assisted-tee-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sok-understanding-the-prevailing-security-vulnerabilities-in-trustzone-assisted-tee-systems)**
### 作者
* David Cerdeira, Centro Algoritmi, Universidade do Minho
* Nuno Santos, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* Pedro Fonseca, Department of Computer Science, Purdue University
* Sandro Pinto, Centro Algoritmi, Universidade do Minho
### 摘要
> 全球数亿部移动设备依赖于使用Arm TrustZone构建的可信执行环境（TEEs）来保护安全关键应用程序（例如DRM）和操作系统（例如Android密钥存储区）。人们通常认为TEEs非常安全；然而，在过去的几年里，TEEs已经多次受到攻击，对各种平台造成了严重的损害。不幸的是，这些攻击是由TEEs系统存在安全漏洞导致的。在本文中，我们旨在了解哪些类型的漏洞和限制影响了现有的TrustZone辅助TEEs系统，构建它们的主要挑战是什么，以及可以从研究社区中借鉴哪些贡献来克服这些挑战。为此，我们对Qualcomm、Trustonic、华为、Nvidia和Linaro开发的目标Cortex-A处理器的热门TrustZone辅助TEEs系统进行了安全分析。通过研究公开记录的攻击和漏洞以及逆向工程TEE固件，我们发现了现有系统中的几个关键漏洞，这使得对商业TEEs实现的安全性提出了合理的担忧。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152801/](https://ieeexplore.ieee.org/document/9152801/)
## OAT: Attesting Operation Integrity of Embedded Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#oat-attesting-operation-integrity-of-embedded-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#oat-attesting-operation-integrity-of-embedded-devices)**
### 作者
* Zhichuang Sun, Northeastern University
* Bo Feng, Northeastern University
* Long Lu, Northeastern University
* Somesh Jha, University of Wisconsin
### 摘要
> 由于物联网/网络控制系统(IoT/CPS systems) 的广泛应用，嵌入式设备（物联网前端）与网络连接和关键任务日益紧密，这反过来吸引了高级攻击（例如控制流劫持和仅数据攻击）。不幸的是，物联网后端（例如遥控器或云服务）在接收来自物联网设备（远程部署的嵌入式设备）的数据、服务请求或操作状态时，无法检测到此类攻击是否发生。因此，目前物联网后端被迫盲目信任其与之交互的物联网设备。为了填补这一空白，我们首先提出了一种针对嵌入式设备的新安全性质，称为"操作执行完整性" (Operation Execution Integrity, OEI)。然后，我们设计并构建了一个名为OAT的系统，该系统能够对基于ARM的裸机嵌入式设备进行远程OEI验证。我们的OEI的制定涵盖了操作执行中涉及的控制流和关键数据的完整性。因此，满足OEI要求意味着操作执行不受意外的控制和数据篡改，而这是现有的验证方法无法检查的。我们设计的OAT在满足嵌入式设备的计算能力和存储限制的同时，也满足了验证器的要求（完全可验证和取证协助）。OAT使用一种新的控制流测量方案，可以轻量级且占用空间小的方式进行测量（与基于跟踪的方法相比，空间减少了97%）。OAT通过抽象执行进行远程控制流验证，速度快且确定性强。OAT还具有对关键数据进行轻量级完整性检查的功能（比以前的工作所需的插桩较少了74%）。我们的安全性分析表明，OAT允许远程验证器或物联网后端检测到影响物联网设备上操作执行的控制流劫持和仅数据攻击。在我们使用真实嵌入式程序进行评估时，OAT的运行时开销为2.7%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152803/](https://ieeexplore.ieee.org/document/9152803/)
## Enabling Rack-scale Confidential Computing using Heterogeneous Trusted Execution Environment.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#enabling-rack-scale-confidential-computing-using-heterogeneous-trusted-execution-environment) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#enabling-rack-scale-confidential-computing-using-heterogeneous-trusted-execution-environment)**
### 作者
* Jianping Zhu, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Rui Hou, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, Indiana University at Bloomington
* Wenhao Wang, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Jiangfeng Cao, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Boyan Zhao, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Zhongpu Wang, CAS, Institute of Computing Technology
* Yuhui Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Jiameng Ying, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Lixin Zhang, CAS, Institute of Computing Technology
* Dan Meng, State Key Laboratory of Information Security, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 由于目前的可信执行环境（TEE）无法提供可扩展且有效保护大规模高吞吐加速器（如GPU，FPGA和TPU等）的需求，大规模保密计算仍然无法得到支持。尽管最近有一些尝试将类似于CPU的飞地扩展到GPU，但这些解决方案需要对CPU或GPU芯片进行更改，可能由于CPU-GPU通信中的侧信道泄漏而引入新的安全风险，并且在目前的CPU TEE资源限制下仍然具有不足。为解决这些问题，我们提出了第一个能够真正支持大规模计算或数据密集型（CDI）计算的异构TEE设计，而无需进行芯片级别的更改。我们的方法，称为HETEE，是用于服务器机柜上的所有计算单元（例如GPU和其他加速器）的集中管理设备。它独特地设计用于与现代数据中心和云协同工作，利用现代资源池技术动态地隔离计算任务，并通过硬件支持进行强制隔离和缩小TCB。更具体地说，HETEE利用PCIe ExpressFabric将其加速器分配给同一机柜上的服务器节点，用于非敏感的CDI任务，并在需要进行保密计算时将它们移回安全飞地。我们的设计在安全控制器（SC）上运行一个薄的TCB堆栈用于安全管理，同时将大量软件（例如AI运行时，GPU驱动程序等）留给操作飞地的集成微服务器。通过硬件物理隔离，SC在底层对飞地进行验证。在结束时，微服务器和计算单元会恢复到安全状态。我们在一个真实的硬件系统上实现了HETEE，并通过流行的神经网络推断和训练任务进行了评估。评估结果显示，HETEE可以轻松支持实际规模的CDI任务，并在ResNet152的推断和训练中产生最大吞吐量开销分别为2.17％和0.95％。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152787/](https://ieeexplore.ieee.org/document/9152787/)
## Plundervolt: Software-based Fault Injection Attacks against Intel SGX.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#plundervolt-software-based-fault-injection-attacks-against-intel-sgx) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#plundervolt-software-based-fault-injection-attacks-against-intel-sgx)**
### 作者
* Kit Murdock, University of Birmingham, UK
* David Oswald, University of Birmingham, UK
* Flavio D. Garcia, University of Birmingham, UK
* Jo Van Bulck, imec-DistriNet, KU Leuven, Belgium
* Daniel Gruss, Oraz University of Technology, Austria
* Frank Piessens, imec-DistriNet, KU Leuven, Belgium
### 摘要
> 在现代处理器中，动态频率和电压调节功能已被引入以管理不断增长的热量和功耗。设计限制确保频率和电压是根据当前负载调整的一对，因为对于每个频率，处理器只能在某一特定电压范围内正常运行。为此，许多处理器（包括广泛使用的英特尔Core系列）向外界暴露了特权软件接口，以动态调节处理器频率和工作电压。本文中，我们证明这些特权接口可以可靠地被利用以破坏系统的安全性。我们提出了Plundervolt攻击，其中一个特权软件对手滥用了一个未记录的英特尔Core电压调节接口，以破坏Intel SGX enclave计算的完整性。Plundervolt在enclave计算期间精确控制处理器的供电电压，引发处理器包内可预测的故障。因此，即使Intel SGX的内存加密/认证技术也无法防止Plundervolt攻击。在多个案例研究中，我们展示了enclave计算中引发的故障如何在现实世界中被利用来从密码算法（包括AES-NI指令集扩展）中恢复密钥，或者在无bug的enclave代码中引发内存安全漏洞。最后，我们讨论了为什么防止Plundervolt攻击不是一件简单的事情，需要通过微码更新或硬件更改来恢复可信计算基础。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152636/](https://ieeexplore.ieee.org/document/9152636/)
## SEVurity: No Security Without Integrity : Breaking Integrity-Free Memory Encryption with Minimal Assumptions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sevurity-no-security-without-integrity-breaking-integrity-free-memory-encryption-with-minimal-assumptions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#sevurity-no-security-without-integrity-breaking-integrity-free-memory-encryption-with-minimal-assumptions)**
### 作者
* Luca Wilke, University of Lübeck, Lübeck, Germany
* Jan Wichelmann, University of Lübeck, Lübeck, Germany
* Mathias Morbitzer, Fraunhofer AISEC, Garching, Germany
* Thomas Eisenbarth, University of Lübeck, Lübeck, Germany
### 摘要
> 不采用云服务的原因之一是对云供应商的信任要求：由于他们控制着超级管理程序，系统中处理的所有数据都可以被他们访问。虚拟机（VM）的完全内存加密可以防止对好奇的云供应商以及被入侵的超级管理程序的访问。AMD安全加密虚拟化（SEV）是目前最流行的基于硬件的虚拟机完全内存加密技术。它的最新扩展SEV-ES还在上下文切换期间保护整个虚拟机状态，旨在确保主机既不会了解虚拟机内部处理的数据，也不能修改其执行状态。一些先前的研究已分析了SEV的安全性，并表明通过控制输入/输出，可以窃取数据甚至控制虚拟机的执行。在本研究中，我们介绍了两种新方法，使我们能够向SEV-ES保护的虚拟机中注入任意代码。由于缺乏适当的完整性保护，重复使用现有的密文就足以构建一个高速加密预言机。因此，我们的攻击不再依赖于先前攻击所需的对输入/输出的控制。由于I/O操作的操纵很容易被检测到，我们的攻击更加隐蔽。此外，我们逆向工程了先前未知的，AMD在更新的处理器上使用的改进型异或-加密-异或（XEX）加密模式，并首次展示了它如何被我们的新攻击所克服。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152717/](https://ieeexplore.ieee.org/document/9152717/)
## RetroWrite: Statically Instrumenting COTS Binaries for Fuzzing and Sanitization.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#retrowrite-statically-instrumenting-cots-binaries-for-fuzzing-and-sanitization) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#retrowrite-statically-instrumenting-cots-binaries-for-fuzzing-and-sanitization)**
### 作者
* Sushant Dinesh, Purdue University
* Nathan Burow, Purdue University
* Dongyan Xu, Purdue University
* Mathias Payer, EPFL
### 摘要
> 目前，分析闭源二进制文件的安全性对于最终用户甚至依赖第三方库的开发者来说是不切实际的。这种分析依赖于自动漏洞发现技术，尤其是启用了Sanitizers的模糊测试。目前将模糊测试或消毒技术应用于二进制文件的最先进技术是动态二进制转换，但其性能开销十分高昂。另一种替代技术——静态二进制重写，无法完全恢复符号化信息，因此在修改二进制文件以跟踪模糊测试的代码覆盖率或添加Sanitizers的安全检查方面存在困难。对于二进制安全性分析来说，理想的解决方案是一个静态重写程序，可以智能地添加所需的工具函数，就像在编译时插入一样。这种工具函数需要进行分析，以在引用和标量之间进行静态消歧义，这在一般情况下被认为是一个无法解决的问题。我们展示了在实践中恢复这些信息是可能的，针对最常见的一类软件和库：64位的位置无关代码。基于这一观察，我们开发了RetroWrite，一个二进制重写插装，用于支持American Fuzzy Lop（AFL）和Address Sanitizer（ASan），并且证明它可以在保持精确性的同时实现编译器级的性能。使用RetroWrite进行基于覆盖率引导的模糊测试的二进制文件在性能上与编译器插装的二进制文件相同，并且比默认的基于QEMU的插装性能提高了4.5倍，同时触发更多的错误。我们基于二进制的Address Sanitizer的实现比Valgrind的memcheck，即二进制内存检查器的最新技术，快3倍，同时在我们的评估中检测到80%更多的错误。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152762/](https://ieeexplore.ieee.org/document/9152762/)
## Unexpected Data Dependency Creation and Chaining: A New Attack to SDN.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#unexpected-data-dependency-creation-and-chaining-a-new-attack-to-sdn) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#unexpected-data-dependency-creation-and-chaining-a-new-attack-to-sdn)**
### 作者
* Feng Xiao, The Pennsylvania State University
* Jinquan Zhang, The Pennsylvania State University
* Jianwei Huang, SUCCESS Lab, Texas A&M University
* Guofei Gu, SUCCESS Lab, Texas A&M University
* Dinghao Wu, The Pennsylvania State University
* Peng Liu, The Pennsylvania State University
### 摘要
> 软件定义网络（SDN）是一种新兴的网络架构，通过一个逻辑上的中央控制器提供可编程的网络功能。随着SDN越来越受重视，它的安全漏洞也变得比以往任何时候都更加明显。作为软件定义网络的“大脑”，控制平面（网络的）如何对外部输入（即数据平面消息）开放与网络的安全性直接相关。幸运的是，由于一些独特的SDN设计选择（例如控制平面和数据平面的分离），攻击者通常很难找到通向控制平面深处隐藏的那些容易受攻击的逻辑的路径。本文证明，只能控制一个商品网络设备（主机或交换机）的弱对手可以通过恶意增加控制平面中的可达性来攻击以前无法到达的控制平面组件。我们介绍了一种称为D2C2（数据依赖创建和链接）攻击的方法，该方法利用了一些广泛使用的SDN协议功能（例如自定义字段），以创建和链接意外的数据依赖关系，以实现更大范围的可达性。我们开发了一种新颖的工具SVHunter，可以有效地识别D2C2漏洞。到目前为止，我们已经在三个主流开源SDN控制器（ONOS、Floodlight和Opendaylight）以及一个增强安全性的控制器（SE-Floodlight）上评估了SVHunter。SVHunter检测到18个以前未知的漏洞，所有这些漏洞都可以远程利用，发起严重的攻击，比如执行任意命令、窃取机密文件和崩溃SDN服务。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152642/](https://ieeexplore.ieee.org/document/9152642/)
## Neutaint: Efficient Dynamic Taint Analysis with Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#neutaint-efficient-dynamic-taint-analysis-with-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#neutaint-efficient-dynamic-taint-analysis-with-neural-networks)**
### 作者
* Dongdong She, Columbia University
* Yizheng Chen, Columbia University
* Abhishek Shah, Columbia University
* Baishakhi Ray, Columbia University
* Suman Jana, Columbia University
### 摘要
> 动态污点分析（DTA）广泛应用于各种应用程序，在运行时执行过程中跟踪信息流。现有的DTA技术使用基于规则的污点传播，既不准确（即高误报率），也不高效（即大的运行时开销）。很难为每个操作指定正确地覆盖所有边界情况的污点规则。此外，过度污点和欠污点错误可能在污点信息传播过程中累积。最后，基于规则的传播要求在应用适当规则之前对每个操作进行检查，从而在大型实际应用程序上产生了昂贵的性能开销。
> 
> 在这项工作中，我们提出了一种新颖的端到端方法Neutaint，用于使用神经程序嵌入跟踪信息流。神经程序嵌入模型化了从污点源到污点接收器之间发生的目标程序计算，通过观察多样化的执行跟踪自动学习信息流。为了进行轻量级和精确的信息流分析，我们利用显著性图来推断不同接收器的最有影响力的源。Neutaint构建了两个显著性图，用于总结神经程序嵌入中的粗粒度和细粒度信息流，这是一种常用的机器学习方法进行影响分析。
> 
> 我们将Neutaint与3个最先进的动态污点分析工具进行了比较。评估结果显示，Neutaint在6个真实世界程序上能够实现平均68%的准确度，这是对第二好的污点工具Libdft的10%改进，同时减少40倍的运行时开销。在用于污点引导模糊测试时，Neutaint还实现了61%更多的边界覆盖，表明了所识别的有影响力的字节的有效性。我们还评估了Neutaint检测现实世界软件攻击的能力。结果显示，Neutaint能够成功检测到包括缓冲区/堆/整数溢出、除以零等不同类型的漏洞。最后，Neutaint能够检测到98.7%的总流量，是所有污点分析工具中最高的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152790/](https://ieeexplore.ieee.org/document/9152790/)
## Karonte: Detecting Insecure Multi-binary Interactions in Embedded Firmware.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#karonte-detecting-insecure-multi-binary-interactions-in-embedded-firmware) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#karonte-detecting-insecure-multi-binary-interactions-in-embedded-firmware)**
### 作者
* Nilo Redini, UC Santa Barbara
* Aravind Machiry, UC Santa Barbara
* Ruoyu Wang, Arizona State University
* Chad Spensky, UC Santa Barbara
* Andrea Continella, UC Santa Barbara
* Yan Shoshitaishvili, Arizona State University
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
### 摘要
> 低功耗、单一用途的嵌入式设备（如路由器和物联网设备）已经无处不在。虽然它们自动化和简化了用户生活的许多方面，但最近的大规模攻击表明它们的数量对互联网基础设施构成了严重威胁。不幸的是，这些系统上的软件是硬件依赖的，通常在独特的、最小化的环境中执行，具有非标准配置，这使得安全分析变得特别具有挑战性。许多现有设备通过使用多个二进制文件来实现其功能。这种多二进制服务实现使得当前的静态和动态分析技术无效或低效，因为它们无法识别和充分建模各个可执行文件之间的通信。本文中，我们提出了Karonte，这是一种能够通过建模和跟踪多二进制交互来分析嵌入式设备固件的静态分析方法。我们的方法将污点信息在二进制文件之间传播，以检测不安全的交互并确定漏洞。我们首先对来自各个供应商的53个固件样本进行了Karonte的评估，并展示了我们的原型工具可以成功跟踪和约束多二进制交互。这导致了发现了46个零日漏洞。然后，我们对899个不同样本进行了大规模实验，显示Karonte能够很好地应对不同大小和复杂度的固件样本。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152796/](https://ieeexplore.ieee.org/document/9152796/)
## SPIDER: Enabling Fast Patch Propagation In Related Software Repositories.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#spider-enabling-fast-patch-propagation-in-related-software-repositories) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#spider-enabling-fast-patch-propagation-in-related-software-repositories)**
### 作者
* Aravind Machiry, University of California, Santa Barbara
* Nilo Redini, University of California, Santa Barbara
* Eric Camellini, Politecnico di Milano
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 尽管软件维护人员努力不懈，但补丁在开源代码库和所有相关项目（如分支）之间的传播存在明显的延迟。先前的研究表明，这对于安全补丁同样存在问题，这是一个严重的问题。漏洞数据库（如CVE数据库）的出现是为了加快关键补丁的应用；然而，与CVE条目相关联的补丁（即CVE补丁）仍存在延迟应用的问题，并且一些安全修复缺乏相应的CVE条目。由于这个原因，项目维护人员在升级软件时可能会错过安全补丁。
> 
> 在本文中，我们首次定义了安全补丁（sps）。安全补丁是指在有效输入下不会破坏程序预期功能的补丁，即可以无需测试即可应用的补丁；我们认为大多数安全修复都属于这一类别。此外，我们展示了一种识别安全补丁的技术，并实现了基于该技术的工具SPIDER。SPIDER通过分析原始版本和修补版本文件的源代码来工作。我们对32个大型和流行的源代码库的341,767个补丁以及809个CVE补丁进行了大规模评估。结果显示，SPIDER能够识别出67,408个安全补丁，并且大多数CVE补丁都是安全补丁。此外，SPIDER还鉴别出2,278个修复了缺乏CVE的漏洞的补丁；其中229个漏洞在不同厂商的内核中仍未修复，可以视为潜在未修复的漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152613/](https://ieeexplore.ieee.org/document/9152613/)
## SAVIOR: Towards Bug-Driven Hybrid Testing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#savior-towards-bug-driven-hybrid-testing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#savior-towards-bug-driven-hybrid-testing)**
### 作者
* Yaohui Chen, Northeastern University
* Peng Li, Baidu USA
* Jun Xu, Stevens Institute of Technology
* Shengjian Guo, Baidu USA
* Rundong Zhou, Baidu USA
* Yulong Zhang, Baidu USA
* Tao Wei, Baidu USA
* Long Lu, Northeastern University
### 摘要
> 混合测试结合模糊测试和共型执行。它利用模糊测试来测试容易接触到的代码区域，并使用共型执行来探索由复杂分支条件保护的代码块。因此，与单独的模糊测试或共型执行相比，混合测试能够更深入地进入程序状态空间。最近，混合测试取得了重大进展。然而，它以代码覆盖为中心的设计在漏洞检测方面效率低下。首先，它盲目地选择给共型执行使用的种子，并旨在持续探索新代码。然而，统计数据显示，经过探索的代码往往有很大比例是没有错误的。因此，在混合测试期间，对代码的每个部分均给予同等关注是一种非最优策略。这会使真实漏洞的检测速度降低43%以上。其次，经典的混合测试在到达代码块后快速移动，而不是对其中的隐藏缺陷进行检查。尽管已经探索了易受攻击的代码路径，但它可能经常错过微妙的漏洞。我们提出了SAVIOR，这是一个新的混合测试框架，引领了一种以漏洞驱动的原则。与现有的混合测试工具不同，SAVIOR优先考虑可能发现更多漏洞的共型执行种子。此外，SAVIOR验证执行程序路径上的所有易受攻击程序位置。通过使用SMT约束建模错误情况，SAVIOR推理漏洞的可行性并生成具体的测试用例作为证明。我们的评估显示，以漏洞驱动方法的效果优于主流的自动化测试技术，包括以代码覆盖为驱动的最新混合测试系统。平均而言，SAVIOR比DRILLER和QSYM快43.4%和44.3%的速度，分别发现了88和76个更多的唯一漏洞。根据对11个经过充分模糊测试的基准程序的评估，在前24小时内，SAVIOR触发了481个UBSAN违规，其中243个是真正的漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152682/](https://ieeexplore.ieee.org/document/9152682/)
## Ijon: Exploring Deep State Spaces via Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ijon-exploring-deep-state-spaces-via-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#ijon-exploring-deep-state-spaces-via-fuzzing)**
### 作者
* Cornelius Aschermann, Ruhr University, Bochum
* Sergej Schumilo, Ruhr University, Bochum
* Ali Abbasi, Ruhr University, Bochum
* Thorsten Holz, Ruhr University, Bochum
### 摘要
> 尽管当前的模糊测试（fuzzing）方法非常有效，但在复杂状态机等许多情况下，完全自动化的方法仍然失败。最先进的模糊测试方法在人与模糊器之间的交互和辅助方面能力非常有限。具体来说，大多数当前的方法仅限于添加字典或新的种子输入来引导模糊器。当处理复杂程序时，这些机制无法发现代码库的新部分。在本文中，我们提出了一种名为Ijon的注释机制，这是一个人类分析师可以用来引导模糊器的方法。与前面提到的两种技术相比，这种方法允许更系统地探索程序的行为，基于表示程序内部状态的数据。因此，只需使用一个小的（通常是一行）注释，用户就可以帮助模糊器解决以前无法解决的挑战。我们通过给目标应用程序的源代码添加引导提示，扩展了各种基于AFL的模糊器的能力。我们的评估表明，这样简单的注释能够解决该领域目前其他任何模糊器或基于符号执行的工具都无法解决的问题。例如，借助我们的扩展，模糊器能够玩并解决像超级马里奥兄弟之类的游戏，或解决更复杂的模式，如哈希图查找。为了进一步展示我们注释的能力，我们使用AFL结合Ijon来发现新颖的安全问题和以前需要自定义和全面的语法才能发现的问题。最后，我们展示了使用Ijon和AFL，可以解决CGC数据集中到目前为止所有完全自动化和人工引导尝试都未能解决的许多挑战。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152719/](https://ieeexplore.ieee.org/document/9152719/)
## Pangolin: Incremental Hybrid Fuzzing with Polyhedral Path Abstraction.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pangolin-incremental-hybrid-fuzzing-with-polyhedral-path-abstraction) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#pangolin-incremental-hybrid-fuzzing-with-polyhedral-path-abstraction)**
### 作者
* Heqing Huang, The Hong Kong University of Science and Technology, China
* Peisen Yao, The Hong Kong University of Science and Technology, China
* Rongxin Wu, Xiamen University, China
* Qingkai Shi, The Hong Kong University of Science and Technology, China
* Charles Zhang, The Hong Kong University of Science and Technology, China
### 摘要
> 混合模糊测试是将模糊测试和符号执行相结合的一种方法，已成为覆盖引导模糊测试技术中最重要的趋势之一。尽管在混合模糊器上进行了大量研究，但我们观察到现有技术仍然效率低下。一个重要原因是这些技术缓存和重用计算结果的较少，因此丧失了许多优化机会。为了实现增量操作，我们提出了“多面体路径抽象”，该方法在符号执行阶段中保留了探索状态，并允许在现有技术基础上进行更有效的变异和约束求解。我们将我们的想法实现为一种工具，即Pangolin，并使用LAVA-M和其他九个真实世界程序进行了评估。评估结果显示，Pangolin在覆盖率提高10%至30%方面优于最先进的模糊测试技术。此外，Pangolin在LAVA-M中找到了400个更多的漏洞，并发现了41个未知的漏洞，其中有8个分配了CVE标识符。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152662/](https://ieeexplore.ieee.org/document/9152662/)
## Fuzzing JavaScript Engines with Aspect-preserving Mutation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#fuzzing-javascript-engines-with-aspect-preserving-mutation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#fuzzing-javascript-engines-with-aspect-preserving-mutation)**
### 作者
* Soyeon Park, Georgia Institute of Technology
* Wen Xu, Georgia Institute of Technology
* Insu Yun, Georgia Institute of Technology
* Daehee Jang, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 模糊测试是一种实践性广泛应用的技术，用于发现像JavaScript引擎这样的复杂现实世界程序中的漏洞。然而，我们观察到现有的模糊测试方法，无论是生成性的还是变异性的，都无法充分获取高质量输入语料库，例如已知的概念证明（PoC）漏洞或单元测试。现有的模糊测试工具往往会破坏输入语料库中编码的微妙语义或条件，以生成新的测试用例，因为这种方法有助于发现程序的新代码路径。然而，对于类似JavaScript的复杂程序，这种传统设计导致测试用例只涉及复杂代码库的表层部分，并且由于巨大的输入空间，无法有效地发现深层次的漏洞。本文提出了一种新技术，称为保留方面的变异，它通过随机地保留我们希望在变异过程中保持的可取特性，称为方面。我们用两种变异策略，即结构保留和类型保留，展示了方面保留在我们全功能的JavaScript模糊测试工具Die中的应用。我们的评估结果表明，Die的方面保留变异在发现新漏洞（独特崩溃数增加了5.7倍）和生成有效测试用例（运行时错误减少了2.4倍）方面比最先进的JavaScript模糊测试工具更加有效。Die在ChakraCore，JavaScriptCore和V8中发现了48个高影响的漏洞（截至今天，其中38个已修复，分配了12个CVE编号）。Die的源代码作为开源项目公开可用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152648/](https://ieeexplore.ieee.org/document/9152648/)
## Krace: Data Race Fuzzing for Kernel File Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#krace-data-race-fuzzing-for-kernel-file-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#krace-data-race-fuzzing-for-kernel-file-systems)**
### 作者
* Meng Xu, Georgia Institute of Technology
* Sanidhya Kashyap, Georgia Institute of Technology
* Hanqing Zhao, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 数据竞争发生在两个线程在访问共享数据时未正确同步的情况下。在内核文件系统中，由于其高度并发的设计，数据竞争是常见的错误，并经常给用户造成不一致的状态或数据丢失。之前对文件系统的模糊测试实践已经有效地发现了数百个错误，但它们主要关注文件系统执行的顺序方面，并没有全面探索并行性这一维度，因此错过了捕捉数据竞争的机会。本文将覆盖引导模糊测试引入并行性维度，引入了三个新构建：1）一种专门设计的新覆盖跟踪度量标准，别名覆盖，用于捕获在并行性维度上的探索进度；2）一种用于生成、变异和合并多线程系统调用序列的进化算法，作为并行性模糊测试的输入；3）一种针对内核同步原语的全面锁集和先行发生关系建模，以精确检测数据竞争。这些组件被集成到Krace中，一个端到端的模糊测试框架，到目前为止已经发现了ext4、btrfs和VFS层中的23个数据竞争问题，并确认有9个是有害的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152693/](https://ieeexplore.ieee.org/document/9152693/)
## VerX: Safety Verification of Smart Contracts.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#verx-safety-verification-of-smart-contracts) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#verx-safety-verification-of-smart-contracts)**
### 作者
* Anton Permenev, ChainSecurity AG, Switzerland
* Dimitar Dimitrov, ETH Zurich, Switzerland
* Petar Tsankov, ChainSecurity AG, Switzerland
* Dana Drachsler-Cohen, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### 摘要
> 我们介绍VerX，这是第一个能够证明以太坊智能合约功能性属性的自动验证器。VerX解决了一个重要问题，即所有实际合约必须满足定制的功能规范。VerX基于三种技术的精心结合，使其能够自动验证无穷状态智能合约的时态属性：（i）将时态属性验证简化为可达性检查，（ii）用于以太坊虚拟机的新的符号执行引擎，对于实际的以太坊合约片段来说既精确又高效，以及（iii）延迟的谓词抽象，该方法在交易过程中使用符号执行和在事务边界处进行抽象。我们对83个时态属性和12个实际项目进行了广泛的实验评估，包括热门的众筹和库，结果显示VerX具有实际效果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152791/](https://ieeexplore.ieee.org/document/9152791/)
## VERISMART: A Highly Precise Safety Verifier for Ethereum Smart Contracts.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#verismart-a-highly-precise-safety-verifier-for-ethereum-smart-contracts) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#verismart-a-highly-precise-safety-verifier-for-ethereum-smart-contracts)**
### 作者
* Sunbeom So, Department of Computer Science and Engineering, Korea University
* Myungho Lee, Department of Computer Science and Engineering, Korea University
* Jisu Park, Department of Computer Science and Engineering, Korea University
* Heejo Lee, Department of Computer Science and Engineering, Korea University
* Hakjoo Oh, Department of Computer Science and Engineering, Korea University
### 摘要
> 我们提出了VERISMART，这是一个高精确度的验证器，用于确保以太坊智能合约的算术安全性。编写安全的智能合约以避免意外行为非常重要，因为智能合约是不可变的，即使有一个缺陷也可能导致巨大的财务损失。特别是确保算术操作的安全是当今以太坊智能合约最重要且最常见的安全关注点之一。为了回应这一关注点，在过去几年中提出了几种安全分析工具，但是现有工具的最新技术水平仍然不令人满意；没有现有工具能够同时实现高精确度和高召回率，它们要么产生烦人的误报，要么在关键漏洞上漏检。相比之下，VERISMART旨在成为一种不妥协的分析器，能够进行全面验证而不牺牲精确度或可扩展性，从而大大减轻手动检查未发现或错误报告的问题的负担。为了实现这一目标，我们提出了一种用于验证智能合约的新领域专用算法，该算法能够自动发现和利用对准确分析智能合约至关重要的交易不变量。对真实世界的智能合约进行评估表明，VERISMART能够以可忽略的误报数量检测出所有算术错误，远远优于现有的分析工具。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152689/](https://ieeexplore.ieee.org/document/9152689/)
## Semantic Understanding of Smart Contracts: Executable Operational Semantics of Solidity.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#semantic-understanding-of-smart-contracts-executable-operational-semantics-of-solidity) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#semantic-understanding-of-smart-contracts-executable-operational-semantics-of-solidity)**
### 作者
* Jiao Jiao, Nanyang Technological University, Singapore
* Shuanglong Kan, Nanyang Technological University, Singapore
* Shang-Wei Lin, Nanyang Technological University, Singapore
* David Sanan, Nanyang Technological University, Singapore
* Yang Liu, Nanyang Technological University, Singapore
* Jun Sun, Singapore Management University, Singapore
### 摘要
> 比特币近年来一直是一个热门的研究话题。以太坊（ETH）是一种第二代加密货币，通过提供名为Solidity的图灵完备编程语言来扩展比特币的设计，以开发智能合约。智能合约允许在以太坊虚拟机（EVM）上进行可信执行的合约，而无需第三方。由于区块链的分散计算性质，开发正确和安全的智能合约具有挑战性。有缺陷的智能合约可能导致巨大的财务损失。此外，一旦部署，智能合约非常难以修复，甚至可能无法修复。因此，近来对分析和验证智能合约的兴趣明显增加。尽管大部分现有研究要么关注EVM字节码，要么将Solidity智能合约转化为中间语言程序，但我们认为重要并且有必要了解和正式定义Solidity的语义，因为程序员在源代码级别编写和推理智能合约。在这项工作中，我们为Solidity开发了一种形式语义，提供了智能合约的正式规范，以定义语义级安全性属性，用于高级验证。此外，所提出的语义定义了智能合约的正确和安全的高级执行行为，以推理编译器错误并帮助开发人员编写安全的智能合约。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152785/](https://ieeexplore.ieee.org/document/9152785/)
## Transys: Leveraging Common Security Properties Across Hardware Designs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#transys-leveraging-common-security-properties-across-hardware-designs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#transys-leveraging-common-security-properties-across-hardware-designs)**
### 作者
* Rui Zhang, University of North Carolina at Chapel Hill
* Cynthia Sturton, University of North Carolina at Chapel Hill
### 摘要
> 本文介绍了Transys，一种用于将为一个硬件设计编写的安全关键属性转化为适用于第二个设计的类似属性的工具。Transys通过三次传递来调整原始属性的变量名称、算术表达式、逻辑前提条件和时间约束，以保留属性的预期语义，并使其对第二个设计有效。我们通过将27个在时态逻辑中编写的断言和9个用于级联信息流跟踪的属性翻译到38个AES设计、3个RSA设计和5个RISC处理器设计中来评估Transys。Transys成功翻译了96%的属性。其中，23个(64%)属性的翻译实现了60%以上的语义等价率。每个属性的平均翻译时间约为70秒。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152775/](https://ieeexplore.ieee.org/document/9152775/)
## C3APSULe: Cross-FPGA Covert-Channel Attacks through Power Supply Unit Leakage.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#c3apsule-cross-fpga-covert-channel-attacks-through-power-supply-unit-leakage) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#c3apsule-cross-fpga-covert-channel-attacks-through-power-supply-unit-leakage)**
### 作者
* Ilias Giechaskiel, University of Oxford, Oxford, United Kingdom
* Kasper Bonne Rasmussen, University of Oxford, Oxford, United Kingdom
* Jakub Szefer, Yale University, New Haven, CT, USA
### 摘要
> 现场可编程门阵列(Field-Programmable Gate Arrays, FPGAs)是多功能、可重构的集成电路，可用作处理高度敏感数据的硬件加速器。然而，泄露这些数据和相关的加密密钥可能会破坏系统的安全性。为了防止可能导致不同数据中心租户之间权限分离失效的无意间交互，云环境中的FPGAs目前被专门针对每个用户进行了分配。然而，虽然FPGAs本身并不在不同用户之间共享，但数据中心基础设施的其他部分是共享的。本文首次明确显示了通过同一个电源单元(PSU)为FPGA、CPU和GPU供电可以利用FPGA与FPGA、CPU与FPGA以及GPU与FPGA之间的隐秘通道。这些隐秘通道可以远程操作，无需对板卡进行物理访问或修改。为了演示这些攻击，本文使用“感应”和“压力”环振荡器作为接收器在目标FPGA上，并在源FPGA上使用环振荡器作为发射器。发射和接收电路用于确定现有泄漏的存在，使用了包含Artix 7和Kintex 7 FPGA芯片的现成Xilinx板，对其进行了实验。实验使用了两个供应商的PSU，以及不同代的CPU和GPU。此外，还测试了不同尺寸和类型的环振荡器。此外，本文还讨论了减轻跨板泄漏影响的潜在对策。本文的结果突出了本地和云计算FPGAs中共享电源单元的危险性，因此有必要重新思考共享基础架构的FPGA安全性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152795/](https://ieeexplore.ieee.org/document/9152795/)
## ICAS: an Extensible Framework for Estimating the Susceptibility of IC Layouts to Additive Trojans.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#icas-an-extensible-framework-for-estimating-the-susceptibility-of-ic-layouts-to-additive-trojans) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2020].md#icas-an-extensible-framework-for-estimating-the-susceptibility-of-ic-layouts-to-additive-trojans)**
### 作者
* Timothy Trippel, Computer Science & Engineering, University of Michigan, Ann Arbor, MI
* Kang G. Shin, Computer Science & Engineering, University of Michigan, Ann Arbor, MI
* Kevin B. Bush, Cyber Physical Systems, MIT Lincoln Laboratory, Lexington, MA
* Matthew Hicks, Computer Science, Virginia Tech, Blacksburg, VA
### 摘要
> 用于构建集成电路（IC）的晶体管继续缩小。尽管这种缩小改善了性能和密度，但也降低了信任度：建造尖端微制造设施的价格飙升，甚至迫使一些国家将高性能IC的制造外包。外包制造存在安全威胁，因为制造IC的黑匣子本质使得全面检查变得不可行。由于以前的研究显示制造时间攻击者回避现有后制造防御的可行性，IC设计师必须能够在将其移交给不可信赖的晶片代工厂之前保护他们的物理设计。为此，最近的研究提出了一些方法来加固IC布局以降低攻击风险。不幸的是，目前没有工具可以评估所提出的防御措施的有效性，因此防御漏洞无法消除。本文提出了一种可扩展的IC布局安全分析工具，称为IC攻击面（ICAS），它可以量化防御覆盖范围。对于研究人员来说，ICAS可以识别未来防御措施的缺陷，并实现现有和未来防御措施的定量比较。对于从业人员来说，ICAS可以探索设计决策对IC对制造时间攻击的韧性的影响。ICAS采用一组度量标准来编码在IC布局中插入硬件特洛伊的挑战，一组防守方关心的攻击方式，以及完成的IC布局，并报告攻击者向设计添加每种攻击的方法数量。理想分数为零，但实际上，我们发现较低的分数与攻击者的努力增加相关。为了展示ICAS揭示防御漏洞的能力，我们分析了三个真实硬件设计（处理器，AES和DSP加速器）的60多个布局，这些布局受到现有防御的保护。我们评估了每个电路防御组合对文献中三种代表性攻击的有效性。结果显示，一些防御措施是无效的，而其他防御措施在减少攻击面的同时，仍留下了数十到数千个攻击者可以利用的独特攻击实现方式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9152692/](https://ieeexplore.ieee.org/document/9152692/)
