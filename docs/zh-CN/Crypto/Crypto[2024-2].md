# Crypto[2024-2]
## Advancing Scalability in Decentralized Storage: A Novel Approach to Proof-of-Replication via Polynomial Evaluation.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#advancing-scalability-in-decentralized-storage-a-novel-approach-to-proof-of-replication-via-polynomial-evaluation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#advancing-scalability-in-decentralized-storage-a-novel-approach-to-proof-of-replication-via-polynomial-evaluation)**
### 作者
* Giuseppe Ateniese, George Mason University, Fairfax, VA, USA
* Foteini Baldimtsi, George Mason University, Fairfax, VA, USA
* Danilo Francati, George Mason University, Fairfax, VA, USA
* Ioanna Karantaidou, George Mason University, Fairfax, VA, USA
* Matteo Campanelli, Matter Labs, Berlin, Germany
### 摘要
> “证明复制（PoRep）”在分散式存储网络中扮演着重要角色，是验证提供者持续存储特定数据可检索副本的机制。尽管 PoRep 的效用毋庸置疑，但其在如 Filecoin 等大规模系统中的实现受到可伸缩性挑战的限制。大多数现有的 PoRep 方案，如 Fisch’s（Eurocrypt 2019），随着存储文件数量的增加而面临逐渐增加的挑战和计算开销。本文引入了一种新颖的 PoRep 方案，专门针对广泛的分散式存储网络。在其核心，我们的方法依赖于多项式评估，与先前工作中普遍存在的概率检查不同。值得注意的是，我们的设计仅需要一个挑战，无论文件数量如何，确保提供者和验证者的运行时间保持可管理，即使文件数量飙升。我们的方法引入了 PoRep 设计的范式转变，提供了高度可伸缩和高效的分散式存储解决方案的蓝图。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_1](https://doi.org/10.1007/978-3-031-68379-4_1)
## A Formal Treatment of End-to-End Encrypted Cloud Storage.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#a-formal-treatment-of-end-to-end-encrypted-cloud-storage) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#a-formal-treatment-of-end-to-end-encrypted-cloud-storage)**
### 作者
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Hannah Davis, Seagate Technology, Shakopee, MN, USA
* Felix Günther, IBM Research Europe – Zurich, Zurich, Switzerland
* Miro Haller, University of California, San Diego, La Jolla, USA
### 摘要
> 用户越来越多地将他们的数据存储在云端，从而获得便捷的访问、共享和冗余功能。为了进一步保证外包数据的安全性，甚至在服务器受到妥协的情况下，一些服务提供商已开始提供端到端加密（E2EE）云存储。通过这种加密保护，只有合法的所有者才能阅读或修改数据。然而，对最大的E2EE提供商的最近攻击突出了这种新型服务的不足之处。
> 
> 在本文中，我们通过发起对E2EE云存储的形式化研究来解决这一不足。我们给出了一个形式化的语法，来捕捉云存储系统的核心功能，捕捉了这种系统构成互动协议的现实复杂性。然后我们针对云存储系统对抗完全恶意的服务器，定义了基于游戏的安全概念，以保护机密性和完整性。我们处理选择性和完全自适应的客户端的妥协。我们的概念受到对E2EE云存储提供商的最近攻击的影响。特别是，我们表明我们的语法足够丰富，捕捉了MEGA的核心功能，并且对它的最近攻击出现了违反我们安全概念的情况。最后，我们呈现了一个E2EE云存储系统，它提供了所有核心功能，并且在相对于我们选择性安全概念而言既有效又可证明安全。在此过程中，我们讨论了将云存储的安全性提升到与其他端对端原语（如安全消息传输和TLS）相媲美的挑战。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_2](https://doi.org/10.1007/978-3-031-68379-4_2)
## Compact Key Storage - A Modern Approach to Key Backup and Delegation.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#compact-key-storage-a-modern-approach-to-key-backup-and-delegation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#compact-key-storage-a-modern-approach-to-key-backup-and-delegation)**
### 作者
* Yevgeniy Dodis, New York University, New York, USA
* Daniel Jost, New York University, New York, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
### 摘要
> 端到端（E2E）加密消息传递正变得越来越受欢迎，即使服务提供商也无法了解通信内容。由于用户关心保留对其数据的访问权，即使其设备丢失、损坏或仅仅被替换，这些系统通常与云备份解决方案配对：通常，用户会使用固定密钥加密他们的消息，并将密文上传到服务器。不幸的是，这种天真的解决方案有许多缺点。首先，它经常削弱核心应用程序的复杂安全保证，如前向保密性（FS）和妥协后安全性（PCS），如果单个备份密钥遭到破坏。其次，在备份大型群组中的对话时效率低下，其中许多用户都对备份相同的消息序列感兴趣。
> 
> 相反，我们将一个称为紧凑密钥存储（Compact Key Storage, CKS）的新原语形式化为此问题的“正确”解决方案。这种CKS方案允许可变的一组参与方委托服务器存储一组逐渐增长的密钥，而每个客户端仅保持一个小状态。客户端在学习新密钥（保持PCS）或每当他们想要忘记密钥（实现FS）时更新他们的状态，通常无需与服务器交互。此外，可以有效地将访问密钥（或其中的某个子集）委派给新的群组成员，这些成员都高效地共享同一服务器的存储。
> 
> 我们仔细定义了CKS方案的语法、正确性、隐私和完整性，并构建了两种有效方案，可以证明满足这些概念。我们的线路方案覆盖了最基本的“全有或全无”CKS风格，其中希望紧凑存储并委派以往秘密历史的整个过程。因此，只有在获准访问整个密钥历史之后，新用户才能享受CKS的效率和紧凑性属性。相比之下，我们的间隔方案只稍微低效，但允许更精细的访问、委派和删除以往的密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_3](https://doi.org/10.1007/978-3-031-68379-4_3)
## Towards Permissionless Consensus in the Standard Model via Fine-Grained Complexity.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#towards-permissionless-consensus-in-the-standard-model-via-fine-grained-complexity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#towards-permissionless-consensus-in-the-standard-model-via-fine-grained-complexity)**
### 作者
* Marshall Ball, NYU, New York, USA
* Peter Hall, NYU, New York, USA
* Juan Garay, Texas A&M University, College Station, USA
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, Input Output, London, UK
* Giorgos Panagiotakos, Input Output, Piraeus, Greece
### 摘要
> 我们研究了在标准假定下，无需许可的共识（又称拜占庭协议）的可行性。已经提出了许多协议来实现无需许可的共识，尤其是基于比特币协议的协议; 然而，至今还没有已知的协议可以在随机拉克达模型之外被证明地实现。在这项工作中，我们朝着在标准模型下实现无需许可共识迈出了第一步。特别地，我们证明了精细复杂度的最坏情况猜想，特别是与强指数时间假设相一致的正交向量猜想，意味着在随机信标模型下实现无需许可共识 - 这是一种在定期间隔内向所有方提供新随机值的设置。这给出了一个显着的双赢结果：要么在相对于随机信标的情况下存在无需许可共识，要么在除SAT之外的许多自然算法问题中存在非平凡的最坏情况算法加速度。我们的协议实现了对抗者的弹性，这些对抗者控制诚实计算能力的反比多项式部分，即对抗力a = T ^（1-ε）对于某些常数ε> 0，其中T表示诚实计算能力。这种相对较低的阈值是精细复杂度猜想懈怠的副产品之一。一个技术上的亮点是种子工作的构建：工作证明，其中可以从单个短公共种子派生出许多（相关的）挑战，但仍然没有非平凡的摊销可能。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_4](https://doi.org/10.1007/978-3-031-68379-4_4)
## Universal Composable Transaction Serialization with Order Fairness.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#universal-composable-transaction-serialization-with-order-fairness) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#universal-composable-transaction-serialization-with-order-fairness)**
### 作者
* Michele Ciampi, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Yu Shen, University of Edinburgh, Edinburgh, UK
* Aggelos Kiayias, Input Output, Edinburgh, UK
### 摘要
> 最近，分布式账本中的订单公平性受到了重大关注，原因是一系列攻击利用重新排序和自适应注入交易（违反所谓的“输入因果关系”）。为了解决这些问题，提出了一系列订单公平性的定义，并强调了公平性在交易序列化中的困难和多面性的不可能性和可行性结果。受此启发，我们在通用组合（UC）设置下提出了订单公平性的全面建模。我们的研究结果捕捉了不同类型的发送者订单公平性和输入因果关系（这在账本交易处理方面被认为是最关键的方面之一），并且我们通过一个不可能的结果以参数化方式说明了对于现实构造的可行性的限制。我们的积极结果是，一种利用受信任的隔离区的新型分布式账本协议，与我们的不可能性结果紧密配合，因此提供了一种既是最佳发送者订单公平性账本构造，又极其实用的方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_5](https://doi.org/10.1007/978-3-031-68379-4_5)
## Bare PAKE: Universally Composable Key Exchange from Just Passwords.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#bare-pake-universally-composable-key-exchange-from-just-passwords) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#bare-pake-universally-composable-key-exchange-from-just-passwords)**
### 作者
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Kai Gellert, University of Wuppertal, Wuppertal, Germany
* Julia Hesse, IBM Research Europe - Zurich, Rüschlikon, Switzerland
* Stanislaw Jarecki, University of California Irvine, Irvine, USA
* Manuel Barbosa, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 在过去的三十年中，我们已经建立了一个庞大的知识体系，围绕着安全和私密的密码认证。特别是，安全的基于密码的密钥交换（PAKE）协议仅需要比传统的Diffie-Hellman密钥交换更少的开销。PAKE还被认为具有强大的可组合安全性保证，涵盖了许多与密码相关的问题，例如密码相关或密码输入错误等等。然而，为了实现回合最优性和强安全性，PAKE协议的应用必须提供唯一的会话和参与者标识符。如果这样的标识符不容易获得，它们必须达成一致，这将导致额外的通信流量成本，在从业者中引起了不理解的情况，阻碍了可证实安全密码认证在实践中的采用。在这项工作中，我们提出了一种名为bare PAKE的真正仅基于密码但安全可组合的PAKE的新范例，解决了这个问题。我们正式证明了两个显著的PAKE协议，即CPace和EKE，可以被视为bare PAKE，并且不需要预先协商除密码以外的任何内容。我们的bare PAKE建模进一步允许研究PAKE的新颖“可重用”属性，即是否可以从仅n个消息中交换n^2个成对键，就像Diffie-Hellman无交互密钥交换在公钥设置中所做的那样。作为一个附加贡献，bare PAKE的这个补充属性使我们观察到一些以前的PAKE构造依赖于不必要的强大，“可重用”的构建块。通过展示“不可重用”工具足以满足标准PAKE，我们开辟了通向回合最优的后量子安全密码认证密钥交换的新途径。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_6](https://doi.org/10.1007/978-3-031-68379-4_6)
## LATKE: A Framework for Constructing Identity-Binding PAKEs.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#latke-a-framework-for-constructing-identity-binding-pakes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#latke-a-framework-for-constructing-identity-binding-pakes)**
### 作者
* Jonathan Katz, Google, Washington DC, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Michael Rosenberg, University of Maryland, College Park, USA
### 摘要
> 受物联网(IoT)的应用启发，Cremers、Naor、Paz和Ronen(CRYPTO '22)最近考虑了多方共享通用密码并希望能够进行成对认证的情景。他们观察到，在这种情况下使用标准密码认证密钥交换(PAKE)协议会导致灾难性的冒充攻击，即单个方的妥协允许攻击者冒充任何方与其他方进行通信。为了解决这个问题，他们提出了身份绑定的PAKE (iPAKE)概念，并展示了iPAKE协议CHIP的构建。
> 
> 我们提出了LATKE，一个iPAKE的框架，它可以帮助我们构建具有超越CHIP的特性的协议。特别是，我们可以实例化我们框架的组件，以产生具有后量子安全性和身份隐藏的iPAKE协议，其中一方在进行认证之前会隐藏其身份。这是第一个具有任何属性的iPAKE协议。
> 
> 为了展示我们框架的具体效率，我们实现了各种实例化，并将结果协议与在普通硬件上运行时与CHIP进行比较。我们的方案的性能与CHIP非常接近，同时提供更强的安全性质。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_7](https://doi.org/10.1007/978-3-031-68379-4_7)
## Fine-Grained Non-interactive Key-Exchange Without Idealized Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-without-idealized-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-without-idealized-assumptions)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Chuanjie Su, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, University of Kassel, Kassel, Germany
### 摘要
> 本文研究了细粒度设定下的多方非交互式密钥交换（NIKE）。更具体地，我们在三个计算模型（有界并行时间、有界时间和有界存储模型）中提出了三种多方NIKE方案。它们的安全性基于非常温和的假设（例如，\(\mathsf{NC^1}\subsetneq \mathsf{\oplus L/poly}\)）甚至没有任何复杂性假设。这改进了Afshar、Couteau、Mahmoody和Sadeghi（EUROCRYPT 2023）的最近工作，该工作需要理想化假设，例如随机神谕或通用群。
> 
> 此外，我们展示了我们所有的构造都满足一种自然的可扩展属性，我们将其称为可扩展性，并且我们给出了从可扩展的多方NIKE到细粒度设置下的多方基于身份的NIKE的通用转换。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_8](https://doi.org/10.1007/978-3-031-68379-4_8)
## Fine-Grained Non-interactive Key Exchange, Revisited.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-revisited) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#fine-grained-non-interactive-key-exchange-revisited)**
### 作者
* Balthazar Bauer, UVSQ, Versailles, France
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Elahe Sadeghi, University of Texas at Austin, Austin, USA
### 摘要
> 我们重新审视了多方非交互式密钥交换协议的构造，该协议具有细粒度的安全性，这在(Afshar et al.，关于欧洲密钥加密2023)中最近被研究。他们的工作引入了四方非交互式密钥交换协议，具有二次难度，并在Shoup通用群模型中证明了其安全性。除了这个积极的结果外，还证明了任何n方非交互式密钥交换具有超二次安全性时都不可能在Maurer的通用群模型中存在，其中n≥3。因为Shoup模型强于Maurer模型，这之间留下了一个差距，并且他们的工作将封闭这个差距并获得精细的非交互式密钥交换而不依赖于理想模型作为一个公开问题。
> 
> 在这项工作中，我们在两个问题上取得了重大进展。我们获得了两个主要结果：
> 
> 1.一种四方非交互式密钥交换协议，具有二次安全缺口，假设指数级安全的可逆伪随机生成器的存在，并且计算Diffie-Hellman假设有亚指数级难度。此外，我们的方案更具概念上的简单性，并且可以推广到其他设置（使用更多方或从其他假设出发）。
> 
> 2.我们进一步假设存在非统一安全可逆伪随机生成器，具有指数难度，我们证明了我们的协议在Maurer模型中是安全的，尽管安全性比(Afshar et al.，欧洲密钥加密2023)的积极和消极结果之间的差距要小（最高达到N1.6）。有点有趣的是，证明我们的方案在Maurer的理想模型中的安全性要比在标准模型中的安全性更难。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_9](https://doi.org/10.1007/978-3-031-68379-4_9)
## k-SUM in the Sparse Regime: Complexity and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#k-sum-in-the-sparse-regime-complexity-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#k-sum-in-the-sparse-regime-complexity-and-applications)**
### 作者
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Akhil Vanukuri, Indian Institute of Technology Madras, Chennai, India
* Sagnik Saha, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Nikolaj I. Schwartzbach, CIFRA Institute, Bocconi University, Milan, Italy
* Prashant Nalini Vasudevan, Department of Computer Science, National University of Singapore, Singapore, Singapore
### 摘要
> 在平均情况下的k-SUM问题中，从{0，… ，M-1}均匀随机选择r个整数，目标是找到一个模M为0的k个数字的“解”集。在M≤r^k的密集区域中，解以高概率存在，这些问题的复杂性已得到很好理解。但在稀疏区域M≫r^k中，解不太可能存在，了解较少。
> 
> 出于应用于加密学的动机，我们开始研究k-SUM及其变种k-XOR的稀疏区域，特别是它们的种植版本，在其中，将一个随机解种植在一个随机生成的实例中，并且必须恢复。我们提供了这些问题困难性的证据，并展示了构建公钥加密方案的应用。我们的贡献总结如下。
> 
> 复杂性。我们研究了这些问题在稀疏区域的复杂性，并展示：
> 
> 条件下界：假设已有猜想关于平均情况（非种植）k-SUM/k-XOR的困难性，当M = r^k时，我们对种植k-SUM的算法运行时间提供了非平凡的下界，当r^k≤M≤r^{2k}时。
> 
> 困难度增强：我们展示，对于任何M ≥ r^k，如果一个运行时间为T的算法能够以\(\varOmega (1/\textrm{polylog}(r))\)的成功概率解决种植k-SUM/k-XOR问题，则存在一个运行时间为\(\widetilde{{\mathcal {O}}}(T)\)的算法以概率\((1-o(1))\)解决该问题。这使我们能够在我们的加密构造中使用相对较轻微的k-SUM/k-XOR困难性。我们主要的技术贡献是证明这一结果，这与现有的困难度增强方法有显著差异。
> 
> 新降低和算法。我们提供了从搜索到决策的k-SUM/k-XOR降低，以及最坏情况和平均情况降低到子集和问题的降低。此外，我们提出了一种新的平均情况k-XOR算法，比已知的低密度下最坏情况算法更快。
> 
> 应用。我们展示，通过额外假设k-XOR的轻微困难性，我们可以从比以前更弱的学习带噪声奇偶性（LPN）问题的变体构建公钥加密（PKE）。特别地，此类LPN困难性似乎本身并不意味着PKE——这表明k-XOR/k-SUM可以在某些情况下用于连接“minicrypt”和“cryptomania”。我们乐观地认为，这种技术将在加密学中找到其他应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_10](https://doi.org/10.1007/978-3-031-68379-4_10)
## Limits of Black-Box Anamorphic Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#limits-of-black-box-anamorphic-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#limits-of-black-box-anamorphic-encryption)**
### 作者
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Francesco Migliaro, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### 摘要
> 一种由Persiano等人在Eurocrypt 2022年引入的变形加密，考虑了在一个秘密解密密钥被独裁者控制的世界中实现私密通信的问题。这里的挑战是能够建立一个秘密通信渠道，以在一些已部署的公钥加密方案之上交换隐秘（即变形）信息。
> 
> 在过去的几年里，一些研究已经针对这一挑战进行了新的构建、精化概念和扩展。然而，大部分这些构建要么是特定的，因为它们建立在底层PKE的特定属性上，要么会对底层变形信息空间的大小施加严格限制。
> 
> 在本文中，我们考虑了一个问题，即是否可能有原语的实现既是通用的，又允许大的变形信息空间。我们强烈暗示，不幸的是，情况并非如此。
> 
> 我们的第一个结果表明，任何原语的黑盒实现，即只通过oracle调用访问底层PKE的任何实现，其变形信息空间的大小最多为\(\textsf{poly}(\lambda )\)（\(\lambda \)是安全参数）。
> 
> 更糟糕的是，如果一个人的目标是更强的原语变体（特别是最近由Catalano等人提出的非对称变形加密概念），我们显示这样的黑盒实现是根本不可能的，即无论变形信息空间有多小。
> 
> 最后，我们展示了我们的不可能性结果相当紧密：事实上，通过对底层PKE进行更具体的假设，就可以建立变形AE的通用模型，其中变形信息空间大小为\(\varOmega (2^\lambda )\)。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_11](https://doi.org/10.1007/978-3-031-68379-4_11)
## Formally Verifying Kyber - Episode V: Machine-Checked IND-CCA Security and Correctness of ML-KEM in EasyCrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#formally-verifying-kyber-episode-v-machine-checked-ind-cca-security-and-correctness-of-ml-kem-in-easycrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#formally-verifying-kyber-episode-v-machine-checked-ind-cca-security-and-correctness-of-ml-kem-in-easycrypt)**
### 作者
* José Bacelar Almeida, Universidade do Minho, Braga, Portugal
* José Bacelar Almeida, INESC TEC, Porto, Portugal
* Manuel Barbosa, INESC TEC, Porto, Portugal
* Hugo Pacheco, INESC TEC, Porto, Portugal
* Santiago Arranz Olmos, Max Planck Institute for Security and Privacy, Bochum, Germany
* Manuel Barbosa, Max Planck Institute for Security and Privacy, Bochum, Germany
* Gilles Barthe, Max Planck Institute for Security and Privacy, Bochum, Germany
* Miguel Quaresma, Max Planck Institute for Security and Privacy, Bochum, Germany
* Peter Schwabe, Max Planck Institute for Security and Privacy, Bochum, Germany
* Manuel Barbosa, University of Porto (FCUP), Porto, Portugal
* Hugo Pacheco, University of Porto (FCUP), Porto, Portugal
* Gilles Barthe, IMDEA Software Institute, Madrid, Spain
* François Dupressoir, University of Bristol, Bristol, UK
* Cameron Low, University of Bristol, Bristol, UK
* Benjamin Grégoire, Université Côte d’Azur, Inria, Nice, France
* Jean-Christophe Léchenet, Université Côte d’Azur, Inria, Nice, France
* Vincent Laporte, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Tiago Oliveira, SandboxAQ, Tarrytown, USA
* Peter Schwabe, Radboud University, Nijmegen, The Netherlands
* Pierre-Yves Strub, PQShield, Paris, France
### 摘要
> 我们提供了一个形式验证的证明，证明了ML-KEM的正确性和IND-CCA安全性，这是一种由NIST进行标准化的基于Kyber的密钥封装机制（KEM）。该证明在EasyCrypt中进行了机器检查，包括：1) Kyber基础公钥加密方案的正确性（解密失败概率）和IND-CPA安全性的形式化，遵循了Bos等人在2018年的Euro S&P会议上的方法; 2) 随机预言模型（ROM）中相关的Fujisaki-Okamoto变换的形式化，紧密地遵循（但不完全相同）Hofheinz、Hövelmanns和Kiltz在2017年的TCC会议上的方法; 3) 从前面的结果可知，ML-KEM规范的IND-CCA安全性和其作为KEM的正确性的证明; 4) 在Jasmin中编写的两个经过形式验证的ML-KEM实现，证明它们是可证常数时间的，与ML-KEM规范功能等效，并因此继承了前面点所建立的可证安全性保证。最高层定理给出了ML-KEM的正确性和安全性的自包含具体界限，包括（一种变体的）模- LWE。我们讨论了它们如何通过利用各种EasyCrypt特性进行模块化建立。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_12](https://doi.org/10.1007/978-3-031-68379-4_12)
## Public-Key Anamorphism in (CCA-Secure) Public-Key Encryption and Beyond.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#public-key-anamorphism-in-cca-secure-public-key-encryption-and-beyond) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#public-key-anamorphism-in-cca-secure-public-key-encryption-and-beyond)**
### 作者
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
* Giuseppe Persiano, Google LLC, New York, USA
* Moti Yung, Google LLC, New York, USA
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Moti Yung, Columbia University, New York, USA
### 摘要
> 最近提出了（接收者）变形加密的概念，以表明独裁者（即过度扩张的政府）要求获取接收者的私钥甚至规定发送者的消息时，不能阻止接收者从发送者那里获取额外的隐藏变形消息。该模型需要最初的私人合作来分享一些秘密。然而，在某些情况下，最初的合作可能是不可能的或性能上是禁止的，或者在需要立即发送消息而无法生成私钥（例如由任何需要的随意发件人）的情况下可能存在。到目前为止，这种情况在某种程度上限制了变形加密的适用性。为了克服这一问题，在本文中，我们提出了“公钥变形加密”的新概念，在这种情况下，任何没有与接收者以任何形式协调的发件人，仍然可以在接收者的私钥的独裁控制下向接收者发送一个额外的隐藏变形秘密消息。我们定义了这种独特新属性的新概念，然后证明了相当有趣的是，众所周知的CCA安全的Koppula–Waters（KW）系统实际上是公钥变形系统。
> 
> 然后我们描述了一个公钥变形方案如何支持新的混合变形封装模式（KDEM），其中公钥变形部分作为激活相同密文中的常规变形消息的引导机制，从而共同增加了变形通道的容量。
> 
> 通过迄今为止的研究现状，我们观察到最初的系统（Eurocrypt'22）被证明具有常规变形特性的是CCA安全的Naor-Yung（和其他相关方案）。在这里，我们确定KW CCA安全方案也提供了一种新类型的变形。因此，这种情况暗示着CCA安全方案与某种类型的变形方案可能存在某种联系（尽管两种基本不同原语的目标是根本不同的）；这个问题具有基础性。鉴于此，我们确定了一个“从CPA安全方案黑盒减少的CCA安全方案直接产生“变形加密方案”的充分条件！此外，我们确定了减少的额外属性，这产生了如此定义的公钥变形方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_13](https://doi.org/10.1007/978-3-031-68379-4_13)
## Provable Security Against Decryption Failure Attacks from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-2].md#provable-security-against-decryption-failure-attacks-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-2].md#provable-security-against-decryption-failure-attacks-from-lwe)**
### 作者
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
* Fabrizio Sisinni, Technical University of Denmark, Kongens Lyngby, Denmark
### 摘要
> 在最近的一项工作中，Hövelmanns、Hülsing和Majenz引入了一种新的安全证明，用于在后量子密钥封装机制中使用的量子可访问随机预言模型(QROM)中的Fujisaki-Okamoto变换。虽然由于许多构造中存在解密失败而具有较小的安全损失，但它需要基础公钥加密方案(PKE)的两个新的安全属性。
> 
> 在这项工作中，我们证明了其中一种属性——查找失败的纯文本——非泛化(FFP-NG)安全，可以使用相对高效的基于LWE的PKE实现，且并不具有完美的正确性。特别是，我们展示了当所有LWE错误都是离散高斯分布时，LWE归约为打破PVW方案的FFP-NG安全性。该缩减具有任意小的LWE错误大小的常数乘损失。为了证明，我们运用了Genise、Micciancio、Peikert和Walter的技术，分析了离散高斯和的边缘和条件分布。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68379-4_14](https://doi.org/10.1007/978-3-031-68379-4_14)
