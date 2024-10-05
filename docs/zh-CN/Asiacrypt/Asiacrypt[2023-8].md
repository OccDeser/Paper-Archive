# Asiacrypt[2023-8]
## Oblivious Transfer from Zero-Knowledge Proofs - Or How to Achieve Round-Optimal Quantum Oblivious Transfer and Zero-Knowledge Proofs on Quantum States.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#oblivious-transfer-from-zero-knowledge-proofs-or-how-to-achieve-round-optimal-quantum-oblivious-transfer-and-zero-knowledge-proofs-on-quantum-states) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#oblivious-transfer-from-zero-knowledge-proofs-or-how-to-achieve-round-optimal-quantum-oblivious-transfer-and-zero-knowledge-proofs-on-quantum-states)**
### 作者
* Léo Colisson, Centrum Wiskunde and Informatica, Amsterdam, The Netherlands
* Garazi Muguruza, Informatics Institute, University of Amsterdam, Amsterdam, The Netherlands
* Florian Speelman, Informatics Institute, University of Amsterdam, Amsterdam, The Netherlands
* Léo Colisson, QuSoft, Amsterdam, The Netherlands
* Garazi Muguruza, QuSoft, Amsterdam, The Netherlands
* Florian Speelman, QuSoft, Amsterdam, The Netherlands
### 摘要
> 我们提供了一个通用的构造，可以将任何经典的零知识（ZK）协议转换为一个可组合的（量子）遗忘传输（OT）协议，从而将ZK协议的轮复杂性特性和安全性保证（普通模型/统计安全/非结构化功能\(\ldots \)）大部分提升到生成的OT协议中。这样的构造在经典情况下不太可能存在，因为人们认为Cryptomania与Minicrypt是不同的。
> 
> 特别是，通过使用非交互式ZK（NIZK）对我们的构造进行实例化，我们在随机预言模型中提供了第一个轮优化（2消息）的量子OT协议，并对字符串和k-out-of-n OT进行了轮优化扩展。
> 
> 我们构造的核心是一种新方法，可以在不透露额外信息的情况下证明接收到的量子状态的性质，即使在非交互或使用适当的经典ZK协议时也可以做到统计保证。我们可以明显证明一个状态已经部分测量过（对于被测量的量子比特集合具有任意限制），而不泄露任何关于这个集合的额外信息。这个概念可以被视为与量子态有关的ZK的类比，并且我们认为它将作为独立利益存在，因为它将复杂性理论扩展到量子语言，正如我们引入的两个新复杂性类别ZKstatesQIP和ZKstatesQMA所显示的那样。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_1](https://doi.org/10.1007/978-981-99-8742-9_1)
## On the (Im)plausibility of Public-Key Quantum Money from Collision-Resistant Hash Functions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#on-the-im-plausibility-of-public-key-quantum-money-from-collision-resistant-hash-functions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#on-the-im-plausibility-of-public-key-quantum-money-from-collision-resistant-hash-functions)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Zihan Hu, Tsinghua University, Beijing, China
* Henry Yuen, Columbia University, New York, USA
### 摘要
> 公钥量子货币是一种使用高度纠缠的量子态作为货币的加密方案，它是公开可验证的，但由于物理定律而具有抵制伪造的能力。尽管有着重大关注，但基于标准加密假设构建公钥量子货币方案的可证明安全性仍然是一个难以实现的目标。即使提出可信的安全候选方案也是一种挑战。为了深入系统地研究公钥量子货币方案的结构和它们可以基于的假设，我们提出了第一个量子货币和密码原语的黑盒分离。具体而言，我们表明，用于防冲突哈希函数的黑盒不能用于构建公钥量子货币方案，其中纸币验证向哈希函数进行经典查询。我们的结果涉及量子复杂性理论中的状态合成技术和模拟技术的新组合，包括 Zhandry 的压缩预言机技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_2](https://doi.org/10.1007/978-981-99-8742-9_2)
## Short Concurrent Covert Authenticated Key Exchange (Short cAKE).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#short-concurrent-covert-authenticated-key-exchange-short-cake) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#short-concurrent-covert-authenticated-key-exchange-short-cake)**
### 作者
* Karim Eldefrawy, SRI International, Menlo Park, USA
* Nicholas Genise, Duality Technologies, Hoboken, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
### 摘要
> Von Ahn，Hopper和Langford提出了隐蔽计算-即隐蔽计算的概念，用于捕捉分布式计算，其中攻击者不得能够区别真诚的参与者和发出随机比特串的实体。除了计算功能的预期输出所揭示的内容外，这种可区别性应在计算持续时间内保持不变。隐蔽计算的一个重要案例是相互验证密钥交换，即相互验证。相互验证是一种基本的原语，常常在用于分布式计算的更复杂的安全协议之前。然而，标准的验证实现不是隐蔽的，这允许网络对手针对或阻止参与验证的方。因此，相互验证是隐蔽计算的主要用例之一，具有许多现实世界的应用，例如，在由歧视性实体控制的网络中通过隐写信道实现身份验证。
> 
> 我们通过提出一个协议来改进隐蔽验证的现状，该协议在并发组合下保持了隐蔽性和安全性，具有最小的消息复杂度，并将协议带宽与先前的构造相比降低了一个数量级。为了建立我们方案的安全性模型，我们开发了一个UC模型，该模型捕获了安全相互验证的标准特性，但扩展到了覆盖度。我们证明在这个UC模型中，我们的构造是安全的。我们还提供了我们方案的概念证明实现。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_3](https://doi.org/10.1007/978-981-99-8742-9_3)
## Generalized Fuzzy Password-Authenticated Key Exchange from Error Correcting Codes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#generalized-fuzzy-password-authenticated-key-exchange-from-error-correcting-codes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#generalized-fuzzy-password-authenticated-key-exchange-from-error-correcting-codes)**
### 作者
* Jonathan Bootle, IBM Research Europe – Zurich, Zürich, Switzerland
* Sebastian Faller, IBM Research Europe – Zurich, Zürich, Switzerland
* Julia Hesse, IBM Research Europe – Zurich, Zürich, Switzerland
* Sebastian Faller, ETH Zurich, Zürich, Switzerland
* Kristina Hostáková, ETH Zurich, Zürich, Switzerland
* Johannes Ottenhues, University of St. Gallen, St. Gallen, Switzerland
### 摘要
> 模糊密码认证密钥交换（fuzzy PAKE）允许从模糊且熵低的认证数据生成加密密钥。 模糊PAKE对离线攻击提供了强大的保护，为安全生物识别认证、容错密码认证和自动化IoT设备配对开辟了一条有趣的途径。 以往的模糊PAKE构造要么基于纠错码（ECC），要么基于通用多方计算技术，如Garbled Circuits。 尽管基于ECC的构造效率显著更高，但它们依赖于纠错码的多个特殊属性，如最大距离可分离性和平滑性。
> 
> 我们在模糊PAKE研究领域做出两方面贡献。 首先，我们发现当前最有效的模糊PAKE构造（Dupont等人，Eurocrypt 2018）在安全性分析中存在微妙但具有破坏性的漏洞，允许中间人攻击者测试单个密码字符。 其次，我们提供一种基于ECC和PAKE的新模糊PAKE方案，它内置了对单个密码字符猜测的保护，并需要更少、更标准的底层ECC属性。 此外，我们的构造比以前基于ECC的模糊PAKE具有更好的纠错能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_4](https://doi.org/10.1007/978-981-99-8742-9_4)
## A Generic Construction of Tightly Secure Password-Based Authenticated Key Exchange.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#a-generic-construction-of-tightly-secure-password-based-authenticated-key-exchange) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#a-generic-construction-of-tightly-secure-password-based-authenticated-key-exchange)**
### 作者
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们提出了一种从密钥封装机制(KEM)构建基于密码的认证密钥交换(PAKE)的通用方法。假设KEM针对明文可检攻击(OW-PCA)是单向安全的，我们证明我们的PAKE协议在Bellare-Pointcheval-Rogaway模型(EUROCRYPT 2000)中是严密安全的。我们的严密安全证明需要理想密码和随机预言。OW-PCA安全性相对较弱，可以利用Diffie-Hellman假设紧密实现，这推广了Liu等人的工作(PKC 2023)，并且几乎可以利用基于格的假设紧密实现，这加强了Beguinet等人的工作的安全性损失(ACNS 2023)，并可以更有效地使用Kyber进行实际实现。除此之外，这也为基于各种假设构建严密PAKE提供了机会。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_5](https://doi.org/10.1007/978-981-99-8742-9_5)
## An Efficient Strong Asymmetric PAKE Compiler Instantiable from Group Actions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#an-efficient-strong-asymmetric-pake-compiler-instantiable-from-group-actions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#an-efficient-strong-asymmetric-pake-compiler-instantiable-from-group-actions)**
### 作者
* Ian McQuoid, Oregon State University, Corvallis, USA
* Jiayu Xu, Oregon State University, Corvallis, USA
### 摘要
> 密码身份认证密钥交换（PAKE）是一类协议，可使两个方​​​​​‍​​​​​式将共享的（可能是低熵的）密码转换为高熵的联合会话密钥。 强对称PAKE（saPAKE）是一个扩展，模拟服务器可以存储客户的密码以进行重复身份验证的客户端-服务器设置，并在2019-2020年由IETF进行标准化。 在本文中，我们提出了最具计算效率的saPAKE协议：一种从PAKE到saPAKE的编译器，仅花费2个消息和7个群指数化总计（客户端3个，服务器4个），当与适当的底层PAKE协议一起实例化时。 除了高效之外，我们的saPAKE协议在概念上也非常简单，并实现了最强的普遍可组合（UC）安全性概念。
> 
> 除了传统假设和传统PAKE之外，我们还可以使用密码组操作（例如基于同源性的CSIDH）和后量子PAKE实例化我们的PAKE-to-saPAKE编译器。 这产生了第一个基于后量子假设的saPAKE协议，因为所有先前的构造都依赖于Shor算法弱的加密假设。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_6](https://doi.org/10.1007/978-981-99-8742-9_6)
## New SIDH Countermeasures for a More Efficient Key Exchange.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#new-sidh-countermeasures-for-a-more-efficient-key-exchange) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#new-sidh-countermeasures-for-a-more-efficient-key-exchange)**
### 作者
* Andrea Basso, University of Bristol, Bristol, UK
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
### 摘要
> 超奇异同态Diffie-Hellman（SIDH）协议一直是最主要且最有效的同态加密协议，直到一系列突破导致多项式时间密钥恢复攻击。虽然已经提出了一些对策，但所得到的方案明显比原始SIDH慢而且较大。
> 
> 在本研究中，我们提出了一种新的对策技术，从而得到了更有效和紧凑的协议。为此，我们引入了人工定向曲线的概念，这些曲线带有一对相关子群。我们表明，这个信息足以建立并行同态，从而获得类似SIDH的密钥交换，同时相对于以前的构造方法，也显著减少了信息的泄露。
> 
> 在引入人工定向曲线之后，我们规范化了几个相关的计算问题，并彻底评估它们的预期难度。然后将SIDH密钥交换翻译到人工定向环境中，得到基于固定度数同态的二进制SIDH和基于变动度数同态的三进制SIDH密钥交换协议。
> 
> 最后，我们还提供了所提议协议的概念证明实现。尽管terSIDH是用高级语言实现的，但它的运行时间非常具有竞争力，这表明terSIDH可能是最有效的同态加密协议。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_7](https://doi.org/10.1007/978-981-99-8742-9_7)
## The Indifferentiability of the Duplex and Its Practical Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#the-indifferentiability-of-the-duplex-and-its-practical-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#the-indifferentiability-of-the-duplex-and-its-practical-applications)**
### 作者
* Jean Paul Degabriele, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Jean Paul Degabriele, CNS, Technische Universität Darmstadt, Darmstadt, Germany
* Jérôme Govinden, CNS, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> Duplex结构是由Bertoni等人（SAC 2011）引入的置换密码学中瑞士军刀。它可以用于实现各种密码对象，从哈希函数和MAC到认证加密和对称棘轮。这在STROBE协议框架表现出来，它是一个仅基于Duplex和丰富的函数调用的软件密码库。虽然先前的研究通常专注于Duplex的特定用途，但我们在这里的关注是它的不可区分性。更具体地说，我们考虑了Duplex结构与在线随机预言者的不可区分性——这是与Duplex相同的接口的理想化。作为我们的主要结果之一，我们建立了Duplex与在线随机预言者的不可区分性。然而，不可区分性仅适用于标准的Duplex结构，我们还表明Duplex的全状态变体无法满足这一概念。我们的不可区分性定理为Duplex在各种场景下的安全性提供了理论上的证明，其中包括其在STROBE框架中作为通用密码原语的使用。接下来，我们将注意力转向基于Duplex的AEAD方案，即SpongeWrap，它是NIST轻量级密码标准Ascon的基础。我们利用不可区分性的力量，建立了SpongeWrap能够抵御依赖密钥的消息输入、相关密钥攻击，并且还是承诺的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_8](https://doi.org/10.1007/978-981-99-8742-9_8)
## Populating the Zoo of Rugged Pseudorandom Permutations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#populating-the-zoo-of-rugged-pseudorandom-permutations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#populating-the-zoo-of-rugged-pseudorandom-permutations)**
### 作者
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 一个坚固的伪随机置换（RPRP）是一种可变输入长度的可调密码，满足介于可调PRP和可调SPRP之间的安全概念。它由Degabriele和Karadžić在CRYPTO 2022年提出，他们还展示了如何将这种原语通用地转换为基于nonce的和隐藏nonce的AEAD方案，这些方案满足要么误用抵抗性，要么未经验证明文释放安全性，以及具有QUIC和DTLS等协议中应用的Nonce-Set AEAD。他们的工作表明RPRP是强大且多才多艺的加密原语。然而，RPRP安全概念本身似乎相当牵强，其背后的动机并不立即清晰。此外，他们仅提供了一个名为UIV的单个RPRP构造，这引出了他们模块化方法的一般性以及其他实例化是否可能的疑问。在这项工作中，我们通过提出新的RPRP构造积极回答了这个问题，从而验证了他们的模块化方法，并为支持RPRP安全定义提供进一步的理由。此外，我们通过展示我们引入的严格较弱的RPRP变种足以满足他们许多转换的要求，从而更精细地审视他们的结果。从理论角度看，我们的结果表明，众所周知的三轮费斯特尔结构在排列时比单纯的伪随机置换具有更强的安全性，这是由Luby和Rackoff的开创性结果所确定的。最后，我们通过展示如何扩展一个RPRP构造的左域来结束更注重实际应用的讨论，以满足所需安全级别需要更大值的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_9](https://doi.org/10.1007/978-981-99-8742-9_9)
## Generic Security of the SAFE API and Its Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-8].md#generic-security-of-the-safe-api-and-its-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-8].md#generic-security-of-the-safe-api-and-its-applications)**
### 作者
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Mario Marhuenda Beltrán, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### 摘要
> 我们为SAFE提供安全基础，这是一种最近引入的API框架，专门针对基于素数域协议的海绵型哈希函数。SAFE旨在提供一个强大且防错的接口，已在海王星哈希框架和一些零知识证明项目中实现，但尽管其易用性和适用性，它目前缺乏任何安全证明。这样的证明并不容易，因为SAFE滥用了海绵的内部部分，并填充了协议特定的数据。
> 
> 在这项工作中，我们确定了SAFECore作为SAFE的可变异海绵结构，并证明了其对所有二进制和素数域（约为|\mathbb {F}_p |^{c/2}个查询）的不可区分性，其中\(\mathbb {F}_p \)是基础域，c为容量，并将此安全结果应用于各种用例。我们证明了基于SAFE的纯哈希、认证加密、可验证计算、非交互证明和承诺方案等协议针对广泛类别的对手是安全的，包括处理单个应用程序中的多次调用的那些对手。我们的结果为使用SAFE与哈希函数的全部分类体系，包括SNARK、格和x86友好的哈希奠定了基础。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8742-9_10](https://doi.org/10.1007/978-981-99-8742-9_10)
