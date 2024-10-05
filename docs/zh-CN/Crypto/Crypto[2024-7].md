# Crypto[2024-7]
## A Modular Approach to Unclonable Cryptography.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#a-modular-approach-to-unclonable-cryptography) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#a-modular-approach-to-unclonable-cryptography)**
### 作者
* Prabhanjan Ananth, University of California Santa Barbara, Santa Barbara, USA
* Amit Behera, Ben-Gurion University, Be’er Sheva, Israel
### 摘要
> 我们探讨一种新的设计不可复制加密原语的途径。我们提出了一种称为不可复制可穿孔模糊化（UPO）的新概念，并研究其对于不可复制密码学的影响。使用UPO，我们提供了许多不可复制密码学原语的模块化（在某些情况下甚至是简单的）构建，包括公钥量子货币、许多功能类的量子副本保护、不可复制加密和单解密加密。
> 
> 值得注意的是，我们在假设存在UPO的情况下获得了以下新结果：
> 
> 我们展示了只要满足我们称之为可穿孔安全的安全概念，任何加密功能都可以进行副本保护。以往的可行性结果关注于保护特定的加密功能。
> 
> 我们展示了只要关联的分布满足预映像可抽样性条件，便存在对任何类的逃避性函数进行副本保护的方法。以往的研究仅展示了点功能的副本保护，而我们的结果是点功能的特殊情况。
> 
> 我们提出了两种UPO构建方法。第一种构建方法基于存在（后量子化的）亚指数级安全不可区分性模糊化、单向可注入函数、学习误差的量子难度和一种称为同时内积猜想的两种版本的安全性。第二种构建方法的安全性基于存在不可复制不可区分的比特加密、单向可注入函数和量子态不可区分模糊化。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_1](https://doi.org/10.1007/978-3-031-68394-7_1)
## Unconditionally Secure Quantum Commitments with Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#unconditionally-secure-quantum-commitments-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#unconditionally-secure-quantum-commitments-with-preprocessing)**
### 作者
* Luowen Qian, Boston University, Boston, USA
* Luowen Qian, NTT Research, Sunnyvale, USA
### 摘要
> 我们展示了如何在不依赖未被证明的复杂性假设的情况下，借助于量子辅助输入来构建计算上安全的承诺方案。此外，量子辅助输入可以在统一指数时间内进行采样，也可以在最多双指数时间内进行准备，而不需要依赖外部可信的第三方。在经典场景下，除非首先证明 $\textsf{P} \neq \textsf{NP}$，否则这仍然是不可能做到的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_2](https://doi.org/10.1007/978-3-031-68394-7_2)
## Unconditionally Secure Commitments with Quantum Auxiliary Inputs.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#unconditionally-secure-commitments-with-quantum-auxiliary-inputs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#unconditionally-secure-commitments-with-quantum-auxiliary-inputs)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Barak Nehoran, Princeton University, Princeton, NJ, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### 摘要
> 我们展示了关于量子承诺的两个相关但不同模型中的以下无条件结果：
> 
> 1. 我们重新审视了由Chailloux、Kerenidis和Rosgen（Comput. Complex. 2016）引入的量子辅助输入承诺的概念，在这种概念中，承诺者和接收者都采用相同的量子态作为量子辅助输入，该态由安全参数确定。我们展示了计算隐藏和统计绑定的量子辅助输入承诺在无条件下存在，即，不依赖于任何未经证实的假设，而Chailloux等人假设了复杂性理论假设，即 \(\textbf{QIP}\not \subseteq \textbf{QMA}\)。另一方面，我们观察到在量子辅助输入设置中同时实现统计隐藏和统计绑定是不可能的。据我们所知，这是对任何形式的（经典或量子）承诺的计算安全性进行无条件证明的第一个例子，对于其统计安全性是不可能的。作为我们构造的中间步骤，我们介绍并无条件构造了后量子稀疏伪随机分布和量子辅助输入EFI对，这可能是独立感兴趣的。
> 
> 2. 我们引入了一个新模型，我们称之为公共参考量子态（CRQS）模型，在这个模型中，承诺者和接收者都采用由高效设置算法随机取样的相同量子态。我们无条件证明在CRQS模型中存在统计隐藏和统计绑定的承诺，规避了在普通模型中的不可能性。
> 
> 我们还讨论了它们在零知识证明、遗忘转移和多方计算中的应用。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_3](https://doi.org/10.1007/978-3-031-68394-7_3)
## Quantum Public-Key Encryption with Tamper-Resilient Public Keys from One-Way Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#quantum-public-key-encryption-with-tamper-resilient-public-keys-from-one-way-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#quantum-public-key-encryption-with-tamper-resilient-public-keys-from-one-way-functions)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Fuyuki Kitagawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Ryo Nishimaki, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
### 摘要
> 我们从单向函数构建量子公钥加密。在我们的构造中，公钥是量子的，但密文是经典的。一些最新的工作也提出了从单向函数（或较弱的原语，如类似伪随机函数的状态）构建的量子公钥加密[Morimae-Yamakawa，eprint:2022/1336；Coladangelo，eprint:2023/282；Barooti-Grilo-Malavolta-Sattath-Vu-Walter，TCC 2023]。但是，它们有一个巨大的缺点：只有当量子公钥可以被传输到发送方（运行加密算法）时，它们才是安全的，而不会被对手篡改，这似乎需要令人不满意的物理设置假设，如安全量子通道。我们的构造没有这样的缺点：即使我们只假设未认证的量子通道，它也保证了加密消息的保密性。因此，加密是使用对手篡改的量子公钥完成的。我们的构造是第一个实现了古典公钥加密目标的量子公钥加密，即仅基于单向函数建立不安全通道的安全通信。此外，我们展示了一个通用编译器，将针对已知明文攻击（CPA安全）的安全升级为针对已知密文攻击（CCA安全），仅使用单向函数。因此，我们仅基于单向函数获得了CCA安全的量子公钥加密。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_4](https://doi.org/10.1007/978-3-031-68394-7_4)
## Robust Quantum Public-Key Encryption with Applications to Quantum Key Distribution.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#robust-quantum-public-key-encryption-with-applications-to-quantum-key-distribution) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#robust-quantum-public-key-encryption-with-applications-to-quantum-key-distribution)**
### 作者
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Michael Walter, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 量子密钥分发（QKD）允许Alice和Bob在通过公共（不受信任的）量子信道通信的同时达成共享的秘密密钥。与传统密钥交换相比，它有两个主要优点：（i）密钥对于任何攻击者都是无条件隐藏的，（ii）其安全性仅取决于已认证的经典信道的存在，而在实践中，可以使用Minicrypt假设来实现，如数字签名的存在。但另一方面，QKD协议通常需要多轮交互，而传统密钥交换可以使用公钥加密的最小数量的两个消息来实现。一个长期未解决的问题是QKD是否需要比传统密钥交换更多的交互轮数。
> 
> 在这项工作中，我们提出了一个满足永久安全性的两条消息的QKD协议，假设只存在量子安全单向函数。也就是说，只要在协议执行过程中保持计算假设，共享密钥就是无条件隐藏的。我们的结果来自于一种新的量子公钥加密（QPKE）构造，其安全性，就像它的经典对应物一样，仅依赖于经过身份验证的经典信道。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_5](https://doi.org/10.1007/978-3-031-68394-7_5)
## How (not) to Build Quantum PKE in Minicrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#how-not-to-build-quantum-pke-in-minicrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#how-not-to-build-quantum-pke-in-minicrypt)**
### 作者
* Longcheng Li, State Key Lab of Processors, Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China
* Qian Li, Shenzhen International Center for Industrial and Applied Mathematics, Shenzhen Research Institute of Big Data, Shenzhen, China
* Xingjian Li, Tsinghua University, Beijing, China
* Qipeng Liu, University of California, San Diego, San Diego, CA, USA
### 摘要
> Impagliazzo和Rudich（STOC’89）的开创性工作表明，在一个黑盒的方式中，无法从单向函数（OWF）构建经典的公钥加密（PKE）。量子信息有潜力绕过经典限制，实现看似不可能的任务，如量子货币、软件复制保护和无需单向函数的承诺。然而，问题仍然存在：能否从量子安全的OWF构建量子公钥加密（QPKE）呢？
> 
> 最近的一系列研究表明，确实可以从OWF构建QPKE，但有一个条件。这些构造要求公钥是量子的且不可克隆的，这降低了这种“公共”加密方案的实用性——公钥无法被验证和重复使用。在这项工作中，我们重新审视在量子随机预言模型（QROM）中实现完全完整QPKE的可能性，在那里存在OWF。
> 
> 我们的第一个主要结果：如果密钥生成只进行经典查询，则在QROM中不存在具有经典公钥、秘密键和密文的QPKE。
> 
> 因此，从OWF构建这样的QPKE的必要条件是使密钥生成在经典上“不可模拟”。以前的结果（Austrin等人CRYPTO’22）关于无法从OWF构建QPKE依赖于一个看似强大的猜想。我们的工作向着实现对Impagliazzo和Rudich结果的完整和无条件量子化迈出了重要一步。
> 
> 我们的第二个主要结果将扩展到具有量子公钥的QPKE。
> 
> 第二个主要结果：如果密钥生成只进行经典查询，并且量子公钥要么是纯的，要么是“高效可克隆的”，则在QROM中不存在具有量子公钥、经典秘密键和密文的QPKE。
> 
> 由于这些现有的具有量子公钥、经典秘密键、量子/经典密文和经典查询密钥生成的QPKE需要公钥是混合而不是纯粹；或者需要进行量子查询密钥生成，如果公钥是纯粹的。我们的结果进一步说明了为何现有的QPKE失去了重用性。
> 
> 我们还探讨了通过OWF构建QPKE的其他充分/必要条件。在这过程中，我们使用基于条件互信息和马尔可夫链的新论证重新证明了经典结果；利用Fawzi和Renner（《数学物理通讯》）提出的量子条件互信息和量子马尔可夫链的类比，我们将其扩展到量子情况并证明了所有结果。我们相信本研究中使用的技术将在量子加密/复杂性分离中找到许多其他有用之处。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_6](https://doi.org/10.1007/978-3-031-68394-7_6)
## Secret Sharing with Certified Deletion.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#secret-sharing-with-certified-deletion) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#secret-sharing-with-certified-deletion)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Justin Raizes, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 秘密分享允许用户将秘密分割为多个份额，以便只有在收集到授权的份额集时才能恢复秘密。尽管秘密分享通常不需要进行任何计算困难的假设，但其安全性确实需要对手不能收集到授权的份额集。在敌对方可以从多个数据泄露中受益的长时间内，这可能成为一个不切实际的假设。我们开始系统地研究具有认证删除的秘密分享，以便实现对抗敌手最终收集授权份额集的安全性。在具有认证删除的秘密分享中，一个（经典的）秘密s被分割成可以由经销商以可验证方式销毁的量子份额。我们提出了两种自然的安全定义。无信号安全要求大致是，如果多个非通信的对手删除足够多的份额，那么即使总腐败组合集形成了授权集，他们的组合视图也不包含关于s的信息。自适应安全要求s对抗敌手的隐私，敌手可以连续和自适应地破坏新的份额并删除先前被破坏的份额，只要总的腐败份额减去删除的份额仍然是未授权的。接下来，我们表明这些安全定义是可以实现的：我们展示了如何构建（i）无信号认证删除的秘密分享方案，适用于任何单调访问结构，（ii）具有自适应认证删除的阈值秘密分享方案。我们的第一个构建使用Bartusek和Khurana的（CRYPTO 2023年）2选2秘密分享方案，带有认证删除作为基本构件，而我们的第二个构建是从头开始建立的，并需要几个新的技术思想。例如，我们显着泛化了Agarwal，Bartusek，Khurana和Kumar（EUROCRYPT 2023）的“XOR提取器”，以便从某些量子熵源获得更好的去种子提取，并展示了多项式插值如何在我们具有认证删除的阈值分享的上下文中充当高速随机提取器。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_7](https://doi.org/10.1007/978-3-031-68394-7_7)
## On Central Primitives for Quantum Cryptography with Classical Communication.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#on-central-primitives-for-quantum-cryptography-with-classical-communication) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#on-central-primitives-for-quantum-cryptography-with-classical-communication)**
### 作者
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Eli Goldin, New York University, New York, USA
* Matthew Gray, University of Oxford, Oxford, UK
### 摘要
> 最近的研究引入了“量子计算经典通信”（QCCC）（Chung等人）设定用于密码学。有证据表明单向难题（OWPuzz）是这种设定的自然中心密码原语（Khurana和Tomer）。要考虑一个原语是否为中心，它应具有几个特征。它应该表现良好（本文中我们将其视为具有放大、组合器和通用构造），应被多种其他原语所蕴含，并且应当等价于某类有用原语。我们提出了OWPuzz的组合器、正确性和安全性放大，以及一个通用构造。我们的安全性放大证明使用了从OWPuzz中EFI的新的、更干净的构造（与Khurana和Tomer的结果相比），这种构造推广到弱OWPuzz，并且是文章中最技术上复杂的部分。以前已知OWPuzz被包括承诺、对称密钥加密、单向状态生成器（OWSG）以及伪随机状态（PRS）在内的其他感兴趣的原语所蕴含。然而，我们通过展示一种黑盒分离将一般OWPuzz与一类受限OWPuzz（具有高效验证的那些，我们称之为EV-OWPuzz）之间的等价性排除了许多这些原语。然后我们展示EV-OWPuzz也被大多数这些原语所蕴含，这也将它们与OWPuzz分开。这种分离还区分了扩展PRS与高度压缩PRS，回答了Ananth等人的一个悬而未决问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_8](https://doi.org/10.1007/978-3-031-68394-7_8)
## Adaptively Secure BLS Threshold Signatures from DDH and co-CDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#adaptively-secure-bls-threshold-signatures-from-ddh-and-co-cdh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#adaptively-secure-bls-threshold-signatures-from-ddh-and-co-cdh)**
### 作者
* Sourav Das, University of Illinois at Urbana Champaign, Champaign, USA
* Ling Ren, University of Illinois at Urbana Champaign, Champaign, USA
### 摘要
> 门限签名是分布式系统中最重要的加密原语之一。Boldyreva（PKC’03）引入的BLS门限签名是一种受欢迎的门限签名方案。Boldyreva的门限签名具有许多优点，如签名独特且短小，签名过程非交互式，验证过程与非门限BLS相同等。这些属性使得该方案在多个分散式系统中被广泛采用。然而，尽管该方案广受欢迎并得到广泛应用，但直到最近，Boldyreva方案仅针对静态对手已被证明安全。最近，Bacho和Loss（CCS’22）提出了Boldyreva方案的首个自适应安全性证明，但他们必须依赖于强大且非标准的假设，如单一离散对数（OMDL）的困难性和代数群模型（AGM）的存在。在本文中，我们提出了一种基于随机Oracle模型（ROM）中非对称配对群中DDH和co-CDH难度的自适应安全的门限BLS签名方案。我们的签名方案还具有非交互式签名，与非门限BLS验证的兼容性以及类似Boldyreva方案的实际效率。这些特性使我们的协议成为适合实际采用的合适候选协议，并带有可证明的自适应安全性的附加优势。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_9](https://doi.org/10.1007/978-3-031-68394-7_9)
## Round-Optimal, Fully Secure Distributed Key Generation.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#round-optimal-fully-secure-distributed-key-generation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#round-optimal-fully-secure-distributed-key-generation)**
### 作者
* Jonathan Katz, Google and University of Maryland, College Park, USA
### 摘要
> 在过去几年中，离散对数设置中用于分布式（阈值）密钥生成（DKG）的协议受到了极大关注。已经提出了几种同步DKG协议，但大多数这类协议并不完全安全：它们要么允许已损坏的参与方偏向密钥，要么不够健壮并允许恶意参与方阻止密钥的成功生成。
> 
> 我们探讨了在诚实多数设置中全面安全DKG的轮次复杂性。我们展示了一轮统计不偏倚的DKG协议的不可能性（即使不健壮），无论之前的设置如何。在积极的一面，我们展示了各种轮次最优的协议，用于全面安全的DKG，提供了在效率、必要设置和所需假设方面的权衡。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_10](https://doi.org/10.1007/978-3-031-68394-7_10)
## Accountability for Misbehavior in Threshold Decryption via Threshold Traitor Tracing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#accountability-for-misbehavior-in-threshold-decryption-via-threshold-traitor-tracing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#accountability-for-misbehavior-in-threshold-decryption-via-threshold-traitor-tracing)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Aditi Partap, Stanford University, Stanford, USA
* Lior Rotem, Stanford University, Stanford, USA
### 摘要
> 一种t-out-of-n门槛解密系统将密钥份额分配给n个参与方，以便其中任意t个参与方可以解密格式正确的密文。现有的门槛解密系统在这些参与方是理性的行为者时并不安全：对手可以向这些参与方支付其密钥份额的费用。问题在于，t个参与方共同合作可以向对手出售解密密钥，而这不会透露叛变方的身份。这为参与方提供了无风险的利润，因为他们的错误行为不需要负任何责任——他们向对手出售的信息不会透露其身份。这种行为可能会导致许多门槛解密应用程序完全中断，例如加密的内存池、私人投票和密封竞标拍卖等。
> 
> 在这项工作中，我们提出了这个问题的解决方案。假设t个或更多参与者构造了一个解码器算法D(·)，该算法以密文为输入，输出相应的明文或bot。他们将D出售给对手。我们的门槛解密系统配备了一个追踪算法，该算法可以追踪D到创建它的记数单位的成员。追踪算法仅被授予对D的黑盒访问，并将识别一些行为不当的团队成员。然后可以追究各方的责任，可能会阻止他们首次出售解码器D。
> 
> 我们的起点是标准（非门槛）叛变追踪，其中每个参与方都持有秘密密钥。每个方都可以自行解密格式正确的密文。但是，如果一组方程\(\mathcal{J} \subseteq [n]\)共同合作创建可以解密格式正确的密文的盗版解码器\(D(\cdot )\)，那么，只需对解码器D进行黑盒访问，就可以将D追踪到\(\mathcal{J}\)成员之一。
> 
> 在这项工作中，我们开发了门槛解密的叛徒追踪理论，现在只有\(\mathcal{J} \subseteq [n]\)的t个或更多参与者可以共谋创建一个盗版解码器\(D(\cdot )\)。由于门槛解密系统在加密的内存池中实际部署，这个问题最近变得非常重要，正如我们在论文中所解释的那样。虽然有几种非门槛叛变追踪方案可以利用，但将这些构造调整到门槛解密设置需要新的加密技术。我们提供了几种门槛解密的叛徒追踪构造，并指出大量的设计空间需要进一步研究。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_11](https://doi.org/10.1007/978-3-031-68394-7_11)
## Threshold Encryption with Silent Setup.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#threshold-encryption-with-silent-setup) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#threshold-encryption-with-silent-setup)**
### 作者
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Guru-Vamsi Policharla, UC Berkeley, Berkeley, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Dimitris Kolonelos, IMDEA Software Institute, Universidad Politécnica de Madrid, Madrid, Spain
### 摘要
> 我们构建了一个具体有效的阈值加密方案，其中一组参与方的联合公钥被计算为其本地计算的公钥的确定性函数，实现了无需交互的设置阶段。通过在设置阶段消除交互，我们的方案立即享有了一些非常理想的特性，比如异步设置，多元支持和动态阈值。
> 
> 在我们的工作之前，已知的阈值加密方案的构建都依赖于重型的加密机制，比如不可区分混淆或者所有NP问题的见证加密。我们的核心技术创新在于构建了一个特殊用途的见证加密方案，用于表述“至少有t个参与方已经签署了给定消息”的语句。我们的构建依赖于配对，并且在通用群模型中被证明是安全的。
> 
> 值得注意的是，我们的构建，针对阈值t=1的特殊情况，给出了来自配对的（灵活的）分布式广播加密的可替代构建，这一点是最近几项研究的重点。
> 
> 我们实现并评估了我们的方案，以证明它的具体效率。加密和部分解密都是恒定时间的，分别需要<7ms和<1ms。对于一个包含1024个参与方的委员会，当所有参与方都提供部分解密时，部分解密的汇总时间为<200ms。每个密文的大小大约是ElGamal密文的8倍。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_12](https://doi.org/10.1007/978-3-031-68394-7_12)
## Two-Round Threshold Signature from Algebraic One-More Learning with Errors.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#two-round-threshold-signature-from-algebraic-one-more-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#two-round-threshold-signature-from-algebraic-one-more-learning-with-errors)**
### 作者
* Thomas Espitau, PQShield SAS, Paris, France
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Kaoru Takemure, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Kaoru Takemure, AIST, Tokyo, Japan
### 摘要
> (门限签名)由于在加密货币中的应用而重新引起了人们的兴趣，NIST发布了多方门限方案的呼吁，截止日期预计为2025年上半年。迄今为止，所有基于格的门限签名都需要两轮或更少，并且基于诸如（完全）同态加密（FHE）和同态陷门承诺（HTDC）等工具。这并不令人意外，考虑到大多数有效的来自经典假设的两轮签名都依赖于理想化模型，如代数群模型或一种更多类型的假设，其中在格世界中我们没有很好的类比物。
> 
> 在这项工作中，我们构建了第一个高效的基于格的两轮门限签名，无需依赖FHE或HTDC。它具有离线-在线特性，其中第一轮可以在不知道消息或签名者集合的情况下进行预处理，从而使签名阶段变得非交互式。签名大小小且具有较强的可扩展性。例如，即使对于包含1024个签名者的门限，我们也实现了大约11 KB的签名大小。我们构造的核心是一种称为代数一次学习与误差（\(\textsf{AOM}\text{-}\textsf{MLWE} \)）假设的新基于格的假设。我们相信这是我们格工具包的一个强大补充，并具有独立的兴趣。我们基于标准\(\textsf{MLWE} \)和\(\textsf{MSIS} \)假设建立了\(\textsf{AOM}\text{-}\textsf{MLWE} \)的选择性安全性，并对其自适应安全性进行了深入分析，我们的门限签名就是基于此假设的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_13](https://doi.org/10.1007/978-3-031-68394-7_13)
## Flood and Submerse: Distributed Key Generation and Robust Threshold Signature from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#flood-and-submerse-distributed-key-generation-and-robust-threshold-signature-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#flood-and-submerse-distributed-key-generation-and-robust-threshold-signature-from-lattices)**
### 作者
* Thomas Espitau, PQShield SAS, Paris, France
* Guilhem Niot, PQShield SAS, Paris, France
* Thomas Prest, PQShield SAS, Paris, France
* Guilhem Niot, Univ Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 我们提出了一个基于随机浸没的新框架-即在小高斯噪声盲目的随机子空间上投影-用于构建可验证的短密钥共享，并展示了基于噪声泛滥构造有效的阈值基于格的哈希与签名范式。据我们所知，这是第一个基于哈希与签名的阈值格签名。我们的阈值签名具有非常理想的鲁棒性属性，包括在密钥生成时。在实践中，我们能够为阈值\(T=16\)构建一个鲁棒的哈希和签名的阈值签名，并提供一个典型的参数集，签名大小为13kB。我们的构造在\(\textsf{ROM}\)中根据标准\(\textsf{MLWE}\)假设具有可证安全性，只需要基本原语作为构建模块。特别地，我们不依赖于FHE类型的方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_14](https://doi.org/10.1007/978-3-031-68394-7_14)
## Adaptively Secure 5 Round Threshold Signatures from MLWE/MSIS and DL with Rewinding.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-7].md#adaptively-secure-5-round-threshold-signatures-from-mlwe-msis-and-dl-with-rewinding) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-7].md#adaptively-secure-5-round-threshold-signatures-from-mlwe-msis-and-dl-with-rewinding)**
### 作者
* Shuichi Katsumata, PQShield, Ltd., Oxford, UK
* Kaoru Takemure, PQShield, Ltd., Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Kaoru Takemure, AIST, Tokyo, Japan
* Michael Reichle, ETH Zurich, Zurich, Switzerland
### 摘要
> T-out-of-N门限签名近年来受到了 renewed 的关注，现在有各种不同类型的门限签名可供选择，每种类型都有不同的权衡。然而，一个仍然难以实现的特性是自适应安全性。当我们针对基于 Fiat-Shamir 范式的现有高效签名方案如 Schnorr 进行门限化时，这种难以实现的特性就变得清晰起来。这类签名方案通常依赖于分叉引理来证明不可伪造性。即，对手会在安全游戏中重新运行两次。这样的证明与自适应安全性相悖，因为缩减必须准备好在总共回答 \(2(T-1)\) 个秘密密钥份额，这意味着它可以重建完整的秘密密钥。确实，先前的工作要么假定强理想化模型，如代数群模型（AGM），要么修改基础签名方案，以不依赖于退卷证明。
> 
> 在这个工作中，我们提出了一种新的证明技术，用于构造现有的基于重卷积的 Fiat-Shamir 签名的自适应安全门限签名。因此，我们获得以下结果：
> 
> 1. 在 ROM 下，在 \(\textsf{MLWE}\) 和 \(\textsf{MSIS}\) 假设下，第一个自适应安全的 5 轮格门限签名。结果签名是 del Pino 等人提出的一种基于格的签名方案 \(\textsf{Raccoon}\)，提交给 NIST 的额外提议。
> 
> 2. 在 ROM 下，在 \(\textsf{DL}\) 假设下，第一个自适应安全的 5 轮门限签名。结果签名是标准的 Schnorr 签名。就我们所知，这是第一个基于 \(\textsf{DL}\) 的自适应安全门限签名，即使在假定更强的模型如 AGM 的情况下也是如此。
> 
> 我们的工作受到 del Pino 等人最近在 Eurocrypt 2024 中基于 \(\textsf{Raccoon}\) 提出的静态安全格门限签名的启发。虽然他们依赖于所谓的一次性加性掩码来解决格特定的问题，但我们注意到这些掩码也可以成为实现自适应安全的有用工具。在非常高的层次上，我们通过整个签名协议使用这些掩码来仔细控制对手可以从签名记录中学到的信息。直观地说，这允许缩减将总共随机抽取 \(2(T-1)\) 个秘密密钥份额返回给对手，并在不被检测到的情况下持续解决上述矛盾的情况。最后，通过允许各方维护一个简单的状态，我们可以将我们的 5 轮方案压缩为 4 轮。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68394-7_15](https://doi.org/10.1007/978-3-031-68394-7_15)
