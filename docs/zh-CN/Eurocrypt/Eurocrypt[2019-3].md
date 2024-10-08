# Eurocrypt[2019-3]
## On ELFs, Deterministic Encryption, and Correlated-Input Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-elfs-deterministic-encryption-and-correlated-input-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-elfs-deterministic-encryption-and-correlated-input-security)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 我们构建了一种确定性公钥加密，该加密对任意数量的任意相关的计算不可预测的消息都是安全的。先前的工作需要随机预言机或非标准知识假设。相比之下，我们的构建基于DDH的指数级困难，这在椭圆曲线群中是合理的。我们

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_1](https://doi.org/10.1007/978-3-030-17659-4_1)
## New Techniques for Efficient Trapdoor Functions and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-efficient-trapdoor-functions-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-efficient-trapdoor-functions-and-applications)**
### 作者
* Sanjam Garg, University of California, Berkeley, USA
* Mohammad Hajiabadi, University of California, Berkeley, USA
* Romain Gay, Département informatique de l’ENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Romain Gay, INRIA, Paris, France
* Mohammad Hajiabadi, University of Virginia, Charlottesville, USA
### 摘要
> 我们开发了构建具有短图像大小和高级安全性属性的陷门函数（TDFs）的技术。我们的方法基于Garg和Hajiabadi在CRYPTO 2018中的最新框架。作为我们技术的应用，我们获得了以下成果：
> 
> 基于计算Diffie-Hellman（CDH）假设，我们首次构建了针对块源输入（无论是CPA还是CCA情况）的确定性加密方案。此外，通过应用增强效率的技术，我们获得了以明文大小为线性的CDH-based方案的密文大小。
> 
> 基于决策Diffie-Hellman（DDH）假设，我们首次构建了图像大小与输入大小呈线性关系的丢失TDFs，并保持了[Peikert-Waters STOC 2008]的丢失率。
> 
> 在我们的工作之前，即使是基于更强的DDH假设的确定性加密的所有构造也会产生密文和明文大小之间的二次差距。此外，所有基于DDH的丢失TDF构造的图像大小都与输入大小的平方成正比。
> 
> 从高层次上讲，我们通过引入一种使用抗擦除代码将输入位编码为核心输出位的新技术，打破了先前的二次限制。所有先前的方案都使用群元素来编码输入位，导致二次扩展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_2](https://doi.org/10.1007/978-3-030-17659-4_2)
## Symbolic Encryption with Pseudorandom Keys.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#symbolic-encryption-with-pseudorandom-keys) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#symbolic-encryption-with-pseudorandom-keys)**
### 作者
* Daniele Micciancio, University of California, San Diego, Mail Code 0404, La Jolla, CA, 92093, USA
### 摘要
> 我们提出了一种高效的决策过程，它能够在多项式时间内确定（在输入任意使用常见加密原语的两个（非循环）表达式的情况下）这两个表达式是否产生了计算上无法区分的分布。只要加密实例满足伪随机性和在选择明文攻击下不可区分性这些标准安全概念。该过程通过将每个表达式映射到一个符号模式来工作，该符号模式以完全抽象的方式捕捉了表达式对计算有限的观察者所透露的信息。我们的主要结果表明，如果两个表达式被映射到不同的符号模式，则存在安全的伪随机生成器和加密方案，可以以压倒性的优势区分这两个分布。与此同时，如果任意两个（非循环）表达式被映射到相同的模式，那么相关的分布是无法区分的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_3](https://doi.org/10.1007/978-3-030-17659-4_3)
## Covert Security with Public Verifiability: Faster, Leaner, and Simpler.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#covert-security-with-public-verifiability-faster-leaner-and-simpler) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#covert-security-with-public-verifiability-faster-leaner-and-simpler)**
### 作者
* Cheng Hong, Alibaba, Hangzhou, China
* Jonathan Katz, University of Maryland, College Park, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Wen-jie Lu, University of Tsukuba, Tsukuba, Japan
* Xiao Wang, MIT, Cambridge, USA
* Xiao Wang, BU, Boston, USA
### 摘要
> 隐蔽安全性概念用于安全的两方计算，旨在折中传统的半诚实性和恶意安全性定义。大致而言，隐蔽安全性确保诚实方以合理的概率（如1/2）检测到作弊行为。它提供的保证比半诚实安全性更现实，而开销又明显低于恶意安全性所需的开销。
> 
> 隐蔽安全性的理论基础在于它能够阻止那些关心声誉且不愿冒被抓的风险的参与方的作弊行为。然而，如果诚实方在检测到作弊时能够生成一个公开可验证的证书，则会获得更强的威慑力。虽然对应的公开可验证隐蔽（PVC）安全性已经得到研究，但现有的PVC协议比最佳隐蔽协议更复杂且效率较低，并且具有不现实的大型证书。
> 
> 我们提出了一种新颖的PVC协议，显著改进了之前的工作。我们的协议仅使用“现成的”基元（特别是避免了已签名的无意识传输），在威慑因素为1/2时，与最先进的半诚实协议相比，只增加了20-40%的开销。我们的协议还首次提供了作弊的恒定大小证书（例如，在128位安全级别上长度为354字节）。
> 
> 由于我们的协议在低开销下提供了强大的安全保障，我们认为它是安全的两方计算的许多实际应用的最佳选择。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_4](https://doi.org/10.1007/978-3-030-17659-4_4)
## Efficient Circuit-Based PSI with Linear Communication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#efficient-circuit-based-psi-with-linear-communication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#efficient-circuit-based-psi-with-linear-communication)**
### 作者
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Avishay Yanai, Bar-Ilan University, Ramat Gan, Israel
* Thomas Schneider, TU Darmstadt, Darmstadt, Germany
* Oleksandr Tkachenko, TU Darmstadt, Darmstadt, Germany
### 摘要
> 我们提出了一种新的协议，用于计算实现私有集交功能（PSI）的电路。与使用特定的PSI协议相比，使用电路进行此任务具有优势，因为PSI的许多应用不需要计算交集本身，而是基于交集中的项目的功能。
> 
> 我们的协议是第一个基于电路的PSI协议，实现了线性通信复杂度。它也比所有以前基于电路的PSI协议具体更高效。例如，对于大小为\(2^{20}\)的集合，它比Pinkas等人最近的工作（EUROCRYPT'18）的通信效率提高了10倍以上，并且在局域网设置中运行时间提高了2.8倍，在广域网设置中提高了5.8倍。
> 
> 我们的协议基于使用计算无意义可编程伪随机函数（OPPRF）的协议，并更具体地基于我们的技术来摊销批处理多个OPPRF调用的成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_5](https://doi.org/10.1007/978-3-030-17659-4_5)
## An Algebraic Approach to Maliciously Secure Private Set Intersection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#an-algebraic-approach-to-maliciously-secure-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#an-algebraic-approach-to-maliciously-secure-private-set-intersection)**
### 作者
* Satrajit Ghosh, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Tobias Nilges, ITK Engineering GmbH, Rülzheim, Germany
### 摘要
> 私人集合交集（PSI）是一个重要的研究领域，在过去几十年里一直是许多研究工作的重点。它描述了在至少两个参与方的输入集之间找到交集的问题，而除了它们的交集外，不透露关于输入集的任何信息。
> 
> 在本文中，我们提出了一种基于称为遗忘线性函数评估（OLE）的原语计算集合之间交集的新方法。在抽象层面上，我们使用这种原语以随机化的方式高效地添加两个多项式，同时保留所添加多项式的根。将输入多项式的根设置为输入集的元素，这直接产生了一个具有最优渐进通信复杂度\(O(m\kappa )\)的交集协议。我们强调，该协议在假设OLE的恶意对手下是信息理论上安全的。
> 
> 我们还提出了一个自然的对完全恶意多方情况的二方协议的一般化。我们的协议不需要昂贵的（同态）阈值加密和零知识证明。相反，我们使用简单的组合技术来确保安全性。结果，我们获得了一个具有渐进最优通信复杂度\(O((n^2+nm)\kappa )\)的UC安全协议，其中n是参与方数量，m是集合大小，\(\kappa \)是安全参数。除了相对于先前工作的渐进改进之外，我们的协议还在概念上简单，并且只需要简单的有限域算术。在此过程中，我们还开发了一些可能具有独立兴趣的技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_6](https://doi.org/10.1007/978-3-030-17659-4_6)
## On Finding Quantum Multi-collisions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-finding-quantum-multi-collisions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-finding-quantum-multi-collisions)**
### 作者
* Qipeng Liu, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
### 摘要
> 压缩哈希函数H的k-碰撞是一组k个不同的输入，它们都映射到同一个输出。在这项工作中，我们证明对于任意的常数k，要实现具有常数概率的k-碰撞，需要并且足够使用\(\varTheta \left( N^{\frac{1}{2}(1-\frac{1}{2^k-1})}\right) \)个量子查询。这一结果改进了之前最好的上界(Hosoyamada et al., ASIACRYPT 2017)，且提供了第一个非平凡下界，完全解决了这个问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_7](https://doi.org/10.1007/978-3-030-17659-4_7)
## On Quantum Advantage in Information Theoretic Single-Server PIR.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#on-quantum-advantage-in-information-theoretic-single-server-pir) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#on-quantum-advantage-in-information-theoretic-single-server-pir)**
### 作者
* Dorit Aharonov, Hebrew University, Jerusalem, Israel
* Ayal Green, Hebrew University, Jerusalem, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Ching-Yi Lai, Academia Sinica, Taipei, Taiwan
* Or Sattath, Ben-Gurion University, Beersheba, Israel
### 摘要
> 在（单服务器）私有信息检索（PIR）中，服务器保存一个大小为n的大型数据库\({\mathtt {DB}}\)，客户端保存一个索引 \(i \in [n]\) ，希望在不向服务器透露i的情况下检索\({\mathtt {DB}}[i]\)。众所周知，即使允许量子通信，针对一个“诚实但好奇”的服务器的信息论隐私要求也需要\(\varOmega (n)\)的通信复杂度。这个结论是成立的，原因是对抗性服务器可以在数据库的叠加态上执行协议而不是在特定数据库上执行协议（“输入纯化攻击”）。
> 
> 然而，一些协议提出了在通信复杂度亚线性的情况下实现某种隐私概念的方案。值得注意的是，Le Gall（ToC 2012）提出了一个通信复杂度为\(O(\sqrt{n})\)的协议，Kerenidis等人（QIC 2016）提出了一个通信复杂度为\(O(\log (n))\)且具有O(n)共享纠缠态的协议。
> 
> 我们证明，在某种程度上，输入纯化是唯一有效的对抗策略，而上述两个协议在量子的“诚实但好奇”（也称为猜想的）模型的一种受限变体中是安全的。更明确地说，我们提出了一种受限的隐私概念，称为锚定隐私，在该概念中，对手被迫在一个经典数据库上执行（即执行被锚定到一个经典数据库上）。我们证明对于无测量协议来说，针对诚实的对抗性服务器的锚定安全性意味着针对猜想对手的锚定隐私。
> 
> 最后，我们证明即使有（无限的）预共享纠缠态，在标准的猜想模型中实现通信复杂度亚线性的安全是不可能的，从而进一步证明了我们放松要求的必要性。这个下界可能具有独立的研究意义（尤其是要注意PIR是全同态加密的特例）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_8](https://doi.org/10.1007/978-3-030-17659-4_8)
## Verifier-on-a-Leash: New Schemes for Verifiable Delegated Quantum Computation, with Quasilinear Resources.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#verifier-on-a-leash-new-schemes-for-verifiable-delegated-quantum-computation-with-quasilinear-resources) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#verifier-on-a-leash-new-schemes-for-verifiable-delegated-quantum-computation-with-quasilinear-resources)**
### 作者
* Andrea Coladangelo, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Andrea Coladangelo, CMS, Caltech, Pasadena, USA
* Thomas Vidick, CMS, Caltech, Pasadena, USA
* Alex B. Grilo, QuSoft and CWI, Amsterdam, The Netherlands
* Stacey Jeffery, QuSoft and CWI, Amsterdam, The Netherlands
### 摘要
> 可靠地证明由量子设备执行的计算结果的问题日益引起关注。我们提出了两种协议，用于经典验证者可验证地委托一个量子计算给两个非通信但纠缠的量子证明者。我们的协议在验证者和诚实证明者所使用的总资源方面具有几乎最优的复杂性，每个方的操作总数（包括诚实证明者所需的纠缠量子位对数）随着委派一个大小为g的电路而按\(O(g\log g)\)的比例扩展。这与以前的协议形成对比，在资源使用方面的开销虽然是多项式级别的，但远远超出了实际可行的范围。我们的第一个协议需要的回合数与被委托的电路深度成线性关系，并且是盲目的，意味着任何一方都无法了解电路或其输入。第二个协议不是盲目的，但只需要固定数量的互动回合。
> 
> 我们的主要技术创新是一种高效的刚性定理，允许验证者测试两个纠缠证明者是否按照各自半个m个共享的EPR对的方式执行由任意m个量子比特单量子比特克里夫观测的m个量子比特张量积的测量，其强韧度是独立于m的。我们的双证明者经典验证者委派协议是通过将这个刚性定理与Broadbent引入的单证明者量子验证者委托协议相结合得到的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_9](https://doi.org/10.1007/978-3-030-17659-4_9)
## Ring Signatures: Logarithmic-Size, No Setup - from Standard Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#ring-signatures-logarithmic-size-no-setup-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#ring-signatures-logarithmic-size-no-setup-from-standard-assumptions)**
### 作者
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Kamil Kluczniak, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Jonas Schneider, CISPA Helmholtz Center for Information Security, Saarland Informatics Campus, Saarbrücken, Germany
* Lucjan Hanzlik, Stanford University, Stanford, USA
### 摘要
> 环签名允许代表一个临时组的签名者创建签名，隐藏了签名者在该组中的真实身份。一个自然的目标是构建一个环签名方案，其签名大小与环成员数量相关地较短。此外，这样的构造不应依赖于受信任的设置，并且应该在可验证的标准假设下被证明安全。尽管多年来进行了很多研究，但这个问题仍然没有解决。
> 
> 在本文中，我们提出了第一个无需依赖于受信任的设置或随机预言启发的最优尺寸环签名的构造。具体而言，我们的方案可以从标准假设实例化，并且签名的大小仅在环成员数量的对数增长。
> 
> 我们还将我们的技术扩展到可链接环签名的设置中，其中使用相同的签名密钥创建的签名可以进行关联。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_10](https://doi.org/10.1007/978-3-030-17659-4_10)
## Group Signatures Without NIZK: From Lattices in the Standard Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#group-signatures-without-nizk-from-lattices-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#group-signatures-without-nizk-from-lattices-in-the-standard-model)**
### 作者
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), The University of Tokyo, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 在一个群签名方案中，用户可以代表他们所属的群组匿名签署消息，但在需要时可以追踪签署者。自Gordon、Katz和Vaikuntanathan（ASIACRYPT 2010）在随机预言机模型中提出了基于格的群签名后，研究者们对将其从格中实现到标准模型中的兴趣逐渐增加，然而，该问题仍未解决。本文通过给出首个这样的构造对这一问题取得了进展。我们的方案满足CCA-selfless匿名和全面可追踪性，这是由Bellare、Micciancio和Warinschi（EUROCRYPT 2003）提出的群签名的标准安全要求，其中在偏匿名要求上稍微放宽了Camenisch和Groth（SCN 2004）的建议。我们强调即使有了这种放松的匿名要求，所有以前的群签名构造都依赖于随机预言机或NIZKs，其中目前尚不知道基于格的假设是否能蕴含NIZKs。我们提出了两种构造，其中提供了安全假设和效率之间的权衡：
> 
> 我们的第一个构造在标准LWE和SIS假设下被证明是安全的。公共参数和签名的大小与系统中用户数量呈线性增长。
> 
> 我们的第二个构造在标准LWE和SIS问题的子指数难度下被证明是安全的。公共参数和签名的大小与系统中用户数量无关。
> 
> 从技术上讲，我们通过结合具有附加属性的密钥加密方案和一种特殊类型的基于属性的签名（ABS）方案，从而回避了NIZKs的使用，从而获得了上述方案。更具体地说，我们引入了索引ABS的概念，它是标准ABS的一种放松。上述两种方案是通过使用不同的构造实例化索引ABS得到的。一个是我们提出的直接构造，另一个是基于以前的工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_11](https://doi.org/10.1007/978-3-030-17659-4_11)
## A Modular Treatment of Blind Signatures from Identification Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#a-modular-treatment-of-blind-signatures-from-identification-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#a-modular-treatment-of-blind-signatures-from-identification-schemes)**
### 作者
* Eduard Hauck, Ruhr University Bochum, Bochum, Germany
* Eike Kiltz, Ruhr University Bochum, Bochum, Germany
* Julian Loss, Ruhr University Bochum, Bochum, Germany
### 摘要
> 我们在随机神谕模型中提出了一种基于线性识别方案的模块化安全处理盲签名的方法。为此，我们提出了一个通用框架，可以捕捉文献中的几种众所周知的方案，并且可以证明它们的安全性。我们的模块化安全归约引入了一种新的身份识别方案的安全概念，称之为“中间安全”的One-More-Man，在我们的论文中证明了它与盲签名的经典“One-More-Unforgeability”概念等价。
> 
> 我们还提出了Bellare和Neven（CCS 2006）的Forking引理的一般化版本，并展示了如何利用它来极大地提高Pointcheval和Stern（密码学杂志2000）对盲签名方案的经典安全证明的可理解性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_12](https://doi.org/10.1007/978-3-030-17659-4_12)
## Efficient Verifiable Delay Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#efficient-verifiable-delay-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#efficient-verifiable-delay-functions)**
### 作者
* Benjamin Wesolowski, EPFL IC LACAL, Station 14, 1015, Lausanne, Switzerland
* Benjamin Wesolowski, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> 我们构建了一个可验证的延迟函数（VDF）。VDF是一个需要运行给定数量的连续步骤才能求值的函数，但结果可以高效地进行验证。它们在分散系统中有应用，例如在不信任的环境中生成可信的公共随机数，或资源高效的区块链。为了构建我们的VDF，实际上我们建立了一个带有陷门的VDF。带有陷门的VDF本质上是一种只有掌握秘密（陷门）的参与方能够高效地评估的VDF。通过以陷门未知的方式设置此方案（即使是运行设置的参与方也不知道），我们得到一个简单的VDF，无需可信设置环境。我们的构建基于无序群，如RSA群或虚构二次域的类群等。我们构建的输出非常简短（结果和正确性证明都是群中的单个元素），并且正确性验证非常高效。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_13](https://doi.org/10.1007/978-3-030-17659-4_13)
## Quantum Lightning Never Strikes the Same State Twice.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#quantum-lightning-never-strikes-the-same-state-twice) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#quantum-lightning-never-strikes-the-same-state-twice)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 公钥量子货币可以被视为量子不克隆定理的一个版本，即使在量子状态可以被对手验证的情况下仍然成立。在这项工作中，我们研究了量子闪电，即使对手自己生成要克隆的量子状态，不克隆定理也仍然成立。然后，我们研究了量子货币和量子闪电，并展示了以下结果：
> 
> 我们通过展示几个潜在应用来证明量子闪电在量子货币之外的实用性，例如生成带有熵证明的随机字符串，以实现完全分散的区块链无关的加密货币，其中交易是即时和本地的。
> 
> 我们给出了关于量子货币/闪电的二选一结果，表明要么签名/哈希函数/承诺方案符合最近提出的安全概念，要么它们会产生量子货币或闪电。鉴于构建公钥量子货币的困难，这表明自然方案确实具备强安全性保证。
> 
> 我们展示了使用安全对量子计算机具有难以区分性的模糊化的Aaronson和Christiano [STOC’12]量子货币方案的实例化能够得到安全的量子货币方案。这个构造可以被视为我们对于签名的二选一结果的一个实例，给出了文献中两个安全概念之间的第一个区别。
> 
> 最后，我们给出了一个可行的量子闪电构造，并在与二次哈希函数的多重碰撞抗性相关的假设下证明了其安全性。我们的构造启发于对于哈希函数的二选一结果，并且得到了第一个在标准模型中实现不崩溃冲突抗性哈希函数的可行构造。这改进了Unruh [Eurocrypt’16]的一个基于量子预言机的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_14](https://doi.org/10.1007/978-3-030-17659-4_14)
## Secret-Sharing Schemes for General and Uniform Access Structures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#secret-sharing-schemes-for-general-and-uniform-access-structures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#secret-sharing-schemes-for-general-and-uniform-access-structures)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Oded Nir, Tel Aviv University, Tel Aviv, Israel
* Amos Beimel, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Naty Peter, Ben-Gurion University of the Negev, Be’er-Sheva, Israel
* Oriol Farràs, Universitat Rovira i Virgili, Tarragona, Catalonia, Spain
### 摘要
> 一个秘密分享方案允许一些授权的参与者重建秘密；授权集合被称为访问结构。三十多年来，已知任何（单调）授权集合都可以通过秘密分享方案来实现，其份额大小为 \(2^{n-o(n)}\)，直到最近才发现更好的方案。在最近的突破中，Liu和Vaikuntanathan (STOC 2018)将份额大小降至\(O(2^{0.994n})\)。我们的第一个贡献是将秘密分享的指数提高到了0.892。对于线性秘密分享方案的特殊情况，我们得到了0.942的指数（相比之下，Liu和Vaikuntanathan的指数为0.999）。
> 
> 受Liu和Vaikuntanathan构造的启发，我们研究了均匀访问结构的秘密分享方案。如果所有大于k的大小的集合都是授权的，所有小于k的大小的集合都是未经授权的，并且每个大小为k的集合都可以是授权或未授权，则访问结构为k-均匀。Liu和Vaikuntanathan的构造从有条件透露秘密的协议开始，从中构造均匀访问结构的秘密分享方案，并将这些方案组合以获得一般访问结构的秘密分享方案。本文的第二个贡献是构造均匀访问结构的秘密分享方案。我们实现了以下结果:
> 
> 大秘密的k-均匀访问结构的秘密分享方案，其中份额大小是秘密大小的 \(O(k^2)\) 倍。
> 
> 针对二进制秘密的k-均匀访问结构的线性秘密分享方案，其中份额大小为 \(\tilde{O}(2^{h(k/n)n/2})\)（其中h是二进制熵函数）。通过计数论证，这个构造是最优的（多项式因子）。
> 
> 针对二进制秘密的k-均匀访问结构的秘密分享方案，其中份额大小为 \(2^{\tilde{O}(\sqrt{k \log n})}\)。
> 
> 我们的第三个贡献是构建特定的PSM协议，即只有一部分参与者对其输入进行计算的PSM协议。该结果基于我们在二进制秘密的k-均匀访问结构的秘密分享方案构造中使用的想法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_15](https://doi.org/10.1007/978-3-030-17659-4_15)
## Towards Optimal Robust Secret Sharing with Security Against a Rushing Adversary.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#towards-optimal-robust-secret-sharing-with-security-against-a-rushing-adversary) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#towards-optimal-robust-secret-sharing-with-security-against-a-rushing-adversary)**
### 作者
* Serge Fehr, CWI, Amsterdam, The Netherlands
* Chen Yuan, CWI, Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 鲁棒的秘密分享使得在存在多达 t（n 个中的 t）错误份额的情况下，能够重建秘密共享消息。最具挑战性的情况是当 \(n = 2t+1\)，这是任务仍然可能的最大 t，产生小于 \(2^{-\kappa}\) 的错误概率，并且在份额大小上有一些额外开销。
> 
> 最近，Bishop、Pastro、Rajaraman 和 Wichs [3]提出了一个方案，它的超额开销几乎是最优的 \(\widetilde{O}(\kappa)\)。这似乎回答了由 Cevallos 等人提出的问题 [6]，他们提出了一个开销为 \(\widetilde{O}(n+\kappa)\) 的方案，并询问了是否有必要线性依赖于 n。然而，Bishop et al. 方案的一个微妙问题是它（隐式地）假设了非急迫的对手，因此与 Cevallos et al. [6] 或 Rabin 和 BenOr [13] 的经典方案相比，它满足了一种较弱的安全性概念。
> 
> 在这项工作中，我们几乎填补了这个差距。我们提出了一种新的鲁棒的秘密分享方案，可以针对急迫对手提供完全安全，并且其开销为 \(O(\kappa n^\varepsilon)\)，其中 \(\varepsilon > 0\) 是任意但固定的值。这个 \(n^\varepsilon\) 因子明显比 Bishop et al. 的方案中的 \(\widetilde{O}\) 表示法中隐藏的 \(\mathrm {polylog}(n)\) 因子要糟糕，但它在依赖于 n 的线性关系上表现优秀，而最佳已知方案具有对急迫对手的安全性（当 \(\kappa\) 远远小于 n）。
> 
> 我们方案的一个小变体具有与 Bishop et al. 的方案相同的 \(\widetilde{O}(\kappa)\) 开销，并实现了针对急迫对手的安全性，但重建复杂性略高于超多项式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_16](https://doi.org/10.1007/978-3-030-17659-4_16)
## Simple Schemes in the Bounded Storage Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#simple-schemes-in-the-bounded-storage-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#simple-schemes-in-the-bounded-storage-model)**
### 作者
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandary, Princeton University, Princeton, NJ, 08544, USA
### 摘要
> 有界存储模型承诺对抗计算上无限制的对手进行无条件的安全证明，只要对手的空间是有界的。在本研究中，我们在这个模型中开发了两方密钥协商、比特承诺和遗忘转移的简单新构造。除了简洁性之外，我们的构造在之前的工作基础上具有几个优点，包括改进的回合数和增强的正确性。我们的方案基于 Raz 对学习奇偶的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_17](https://doi.org/10.1007/978-3-030-17659-4_17)
## From Collisions to Chosen-Prefix Collisions Application to Full SHA-1.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#from-collisions-to-chosen-prefix-collisions-application-to-full-sha-1) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#from-collisions-to-chosen-prefix-collisions-application-to-full-sha-1)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Temasek Laboratories, Singapore, Singapore
### 摘要
> 抽选前缀碰撞攻击是碰撞攻击的一种更强大变体，其中任意一对挑战前缀被转化为碰撞。选择前缀碰撞通常比（相同前缀的）碰撞更难产生，但这种攻击的实际影响要大得多。虽然许多密码构造依赖于碰撞抗性来证明它们的安全性，但由于对碰撞消息的控制受到限制，碰撞攻击很难转化为对具体协议的破解。另一方面，选择前缀碰撞已被证明能够破解证书（通过创建一个恶意的CA）和许多互联网协议（TLS、SSH、IPsec）。
> 
> 在本文中，我们提出了将碰撞攻击转化为选择前缀碰撞攻击的新技术。我们的策略包括两个阶段：首先进行生日搜索，旨在将由于选择前缀模型导致的随机链接变量差异转化为一组预定义的目标差异。然后，使用多块方法，仔细分析聚类效应，我们使用为碰撞攻击开发的技术将这个新的链接变量差异映射到一对碰撞状态。
> 
> 我们将这些技术应用于MD5和SHA-1，并获得了改进的攻击。特别是，我们对SHA-1提出了一种复杂性在\(2^{66.9}\)到\(2^{69.4}\)之间的选择前缀碰撞攻击（取决于关于发现近碰撞块成本的假设），而目前已知的最佳攻击复杂性为\(2^{77.1}\)。这与对SHA-1的经典碰撞攻击的复杂性（估计为\(2^{64.7}\)）相差不远。这再次警告行业和用户尽快停止使用SHA-1。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_18](https://doi.org/10.1007/978-3-030-17659-4_18)
## Preimage Attacks on Round-Reduced Keccak-224/256 via an Allocating Approach.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#preimage-attacks-on-round-reduced-keccak-224-256-via-an-allocating-approach) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#preimage-attacks-on-round-reduced-keccak-224-256-via-an-allocating-approach)**
### 作者
* Ting Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yao Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ting Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yao Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们提出了一种新的针对标准Keccak-224和Keccak-256的预像攻击方法，将其降低到3和4轮。攻击中采用了一种分配方法，将整个复杂度分配到两个阶段中，从而减少了考虑的约束条件，并降低了每个阶段的复杂度。具体而言，我们试图找到一个给定哈希值的2个区块的前像，而不是一个区块的前像，第一和第二个消息区块分别在两个阶段中找到。两个消息区块都受到中间状态上一组新提出的条件的限制，这些条件比初始值和哈希值所引入的条件要弱。因此，两个阶段的复杂度都低于直接找到一个块的前像的复杂度。结合基本的分配方法，给出了一种改进的方法来平衡两个阶段的复杂度，从而获得最佳攻击效果。结果上，我们提出了对Keccak-224和Keccak-256降至3和4轮的最佳理论预像攻击方法。此外，我们在实践中找到了一个复杂度为\(2^{39.39}\)的3轮Keccak-224的(第二个)前像。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_19](https://doi.org/10.1007/978-3-030-17659-4_19)
## bison Instantiating the Whitened Swap-Or-Not Construction.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#bison-instantiating-the-whitened-swap-or-not-construction) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#bison-instantiating-the-whitened-swap-or-not-construction)**
### 作者
* Anne Canteaut, Inria, Paris, France
* Virginie Lallemand, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Friedrich Wiemer, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
### 摘要
> 我们提供了变白置换-或-不的构造的第一个实用实例——野牛。在澄清该结构固有局限性后，我们指出这种构建分组密码的方式可以轻松地且非常有效地防御差分攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_20](https://doi.org/10.1007/978-3-030-17659-4_20)
## Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#worst-case-hardness-for-lpn-and-cryptographic-hashing-via-code-smoothing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#worst-case-hardness-for-lpn-and-cryptographic-hashing-via-code-smoothing)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Vinod Vaikuntanathan, Massachusetts Institute of Technology, Cambridge, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们提出了一个最坏情况解码问题，其困难性可以还原到解决带有噪声的学习奇偶校验（Learning Parity with Noise，LPN）问题，某些参数范围内。在此之前，还没有关于LPN的最坏情况困难性结果（与语法相似的问题，如学习有误差的问题）得到证明。然而，这个最坏情况问题只是轻微困难的，并且特别可以使用准多项式时间算法解决，而还原中使用的LPN变种则需要极高的噪声率（1/2-1/多项式(n)）。因此，我们只能证明“非常困难的”LPN比一些“非常轻微困难的”最坏情况问题要难。我们指出，带有噪声率为1/2-1/多项式(n)的LPN已经暗示了对称加密。
> 
> 具体来说，我们考虑（n, m, w）-最近码字问题（(n, m, w)-NCP），其输入是一个m维度排名为n的二进制线性码的生成矩阵和一个非常接近于该码字（汉明距离最多为w）的目标向量，并且要求找到距离目标向量最近的码字。我们证明了对于平衡（无偏）码和相对误差w/m约为\(\log ^2 n/n\)的情况，可以通过具有LPN区分器的oracle访问来解决（n, m, w）-NCP问题。
> 
> 我们的证明依赖于一个用于码字的平滑引理，我们还证明了这个引理有进一步的含义：我们证明了具有上述参数的（n, m, w）-NCP问题属于复杂类\(\mathrm {{Search}\hbox {-}\mathcal {BPP}}^\mathcal {SZK}\)（即可以还原为具有统计零知识协议的问题），这意味着它不太可能是\(\mathcal {NP}\)-难的。然后我们证明了具有非常低噪声率\(\log ^2(n)/n\)的LPN的困难性意味着碰撞抗性哈希函数的存在（我们之前的结果暗示了在这个参数范围内，LPN也是\(\mathcal {BPP}^\mathcal {SZK}\)）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_21](https://doi.org/10.1007/978-3-030-17659-4_21)
## New Techniques for Obfuscating Conjunctions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-obfuscating-conjunctions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#new-techniques-for-obfuscating-conjunctions)**
### 作者
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Tancrède Lepoint, SRI International, New York, NY, USA
### 摘要
> 一个逻辑合取（conjunction）是一个函数 \(f(x_1,\dots ,x_n) = \bigwedge _{i \in S} l_i\) ，其中 \(S \subseteq [n]\) ，每个 \(l_i\) 是 \(x_i\) 或者 \(\lnot x_i\) 。Bishop等人（CRYPTO 2018）最近提出了一种通过将逻辑合取嵌入到有噪声的Reed-Solomon码字的错误位置，并将码字放置在群指数中来模糊化合取。他们在通用群模型中证明了随机合取的分布式虚拟黑盒（VBB）安全，其中 \(|S| \ge 0.226n\) 。尽管合取混淆已经在LWE [31, 47]中被证明存在，但这些构造依赖于大量的技术机制。
> 
> 在这项工作中，我们对简单合取混淆技术进行了广泛研究。
> 
> 我们将Bishop等人的方案抽象化，得到一个等效但更高效的“双重”方案，可以处理指数大小的字母表上的合取。该方案具有直接的通用群安全证明，我们将其与一种新的组合论论证相结合，得到了任意大小 |S| 的分布式VBB安全。
> 
> 如果我们用一个随机二进制线性码取代Reed-Solomon码，我们可以通过标准LPN证明安全性，并避免在群中进行编码。这解决了Bishop等人提出的在标准模型中证明此简单方法安全性的一个开放问题。
> 
> 我们给出了一个新的构造，实现了信息理论上的分布式VBB安全和弱功能性保持，对于 \(|S| \ge n - n^\delta \) 和 \(\delta < 1\) 。在假设离散对数和 \(\delta < 1/2\) 的情况下，我们实现了针对计算有界对手的强功能性保持，同时实现了信息理论安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_22](https://doi.org/10.1007/978-3-030-17659-4_22)
## Distributional Collision Resistance Beyond One-Way Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#distributional-collision-resistance-beyond-one-way-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#distributional-collision-resistance-beyond-one-way-functions)**
### 作者
* Nir Bitansky, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Ilan Komargodski, Cornell Tech, New York, NY, USA
* Eylon Yogev, Technion, Haifa, Israel
### 摘要
> 分布式碰撞抵抗是一种对碰撞抵抗的放松，它只要求在条件为与x碰撞时的均匀随机y的情况下难以抽样到碰撞(x, y)，其中x是均匀随机的。这个概念介于单向性和碰撞抵抗之间，但其确切能力仍不为人所了解。一方面，分布式碰撞抵抗哈希函数无法以黑盒方式从单向函数构建，这可能表明它们更强大。另一方面，到目前为止，它们还没有产生任何超出单向函数的应用。
> 
> 假设存在分布式碰撞抵抗哈希函数，我们构建了一个常数轮次的统计隐藏承诺方案。这样的承诺方案是基于单向函数未知的，并且无法通过黑盒方式从单向函数获得。我们的构造依赖于Haitner等人（STOC’09）对无法访问的熵生成器到统计隐藏承诺的规约。相反地，我们表明两条消息的统计隐藏承诺意味着分布式碰撞抵抗，从而在这两个概念之间建立了一种松散的等价关系。
> 
> 第一个结果的推论是，常数轮次的统计隐藏承诺由类别\({\textsf {SZK}}\)中的平均情况难度所暗示（已知可暗示分布式碰撞抵抗）。这种暗示好像是众所周知的，但据我们所知尚未被明确证明。我们提供了这种暗示的另一种证明，可以说比通过分布式碰撞抵抗更直接。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_23](https://doi.org/10.1007/978-3-030-17659-4_23)
## Multi-target Attacks on the Picnic Signature Scheme and Related Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#multi-target-attacks-on-the-picnic-signature-scheme-and-related-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#multi-target-attacks-on-the-picnic-signature-scheme-and-related-protocols)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Niv Nadler, Beersheba, Israel
### 摘要
> Picnic是一个由Chase等人在2017年ACM CCS会议上介绍，并提交给NIST的后量子标准项目的数字签名方案。在NIST的项目中，Picnic是最具创新性的之一，利用了近期在通用电路零知识（ZK）协议构造方面的实际高效进展。
> 
> 本文针对Picnic及其底层ZK协议ZKB++，设计了多目标攻击。通过访问单个或多个用户生成的S个签名，我们可以在理论上取得用户长度为κ比特的签名密钥，计算复杂度约为2^(κ-7)/S。这比Picnic声称的对经典（非量子）攻击具有2^κ的安全性更快，速度增加了2^7 * S倍（因为每个签名大约包含2^7个攻击目标）。
> 
> 尽管在大多数多目标攻击中，攻击者可以轻松地对可用目标进行排序和匹配，但在我们对Picnic的攻击中不是这样，因为每个目标只能获得不同的信息位。因此，在计算模型中达到信息论复杂度是具有挑战性的，我们需要通过仔细分析ZKB++及其底层电路来进行密码分析优化。我们对于κ = 128的最佳攻击时间复杂度为T = 2^77，当S = 2^64。另外，我们可以在所有签名都由相同的签名密钥生成的情况下，通过达到信息论复杂度T = 2^64，对于S = 2^57进行攻击。
> 
> 我们的攻击利用了Picnic签名算法中伪随机生成器的一个弱点。这个弱点在最近的Picnic 2.0版本中得以修复。
> 
> 除了对Picnic的攻击之外，我们还展示了对最近提出的ZKB++协议改进（由Katz、Kolesnikov和Wang提出）同样容易受到多目标攻击的漏洞。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_24](https://doi.org/10.1007/978-3-030-17659-4_24)
## Durandal: A Rank Metric Based Signature Scheme.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#durandal-a-rank-metric-based-signature-scheme) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#durandal-a-rank-metric-based-signature-scheme)**
### 作者
* Nicolas Aragon, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Olivier Blazy, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Philippe Gaborit, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Adrien Hauteville, XLIM-DMI, University of Limoges, 123 Avenue Albert Thomas, 87060, Limoges Cedex, France
* Gilles Zémor, Université de Bordeaux, Institut de Mathématiques, UMR 5251, 351 cours de la Libération, 33400, Talence, France
### 摘要
> 我们描述了一种变体的Schnorr-Lyubashevsky方法来设计适用于基于等级的密码学的签名方案。这种新方法使我们能够获得对签名的随机化，这在基于码的密码学中以前似乎难以实现。我们对攻击进行了详细分析，并针对我们的方案提供了EUF-CMA证明。我们的方案依赖于理想等级支持学习和理想等级综合问题的安全性，以及一个新引入的问题：乘积空间子空间不可分辨性，我们对此进行了详细分析。总体而言，我们提出的参数是高效的，并且在签名大小方面与Dilithium基于格子的方案相当，对于小于20 kB的公钥，签名大小为4 kB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_25](https://doi.org/10.1007/978-3-030-17659-4_25)
## SeaSign: Compact Isogeny Signatures from Class Group Actions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-3].md#seasign-compact-isogeny-signatures-from-class-group-actions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-3].md#seasign-compact-isogeny-signatures-from-class-group-actions)**
### 作者
* Luca De Feo, Université Paris-Saclay – UVSQ, LMV, UMR CNRS 8100, Versailles, France
* Steven D. Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
### 摘要
> 我们提出了一种新的同源密码签名方案，将 CSIDH 的类群操作与 Fiat-Shamir 抽取结合起来。我们的技术允许在 128 位安全级别下具有小于一千字节大小的签名，即使在量子随机预言机模型下也可以紧密地安全规约（到非标准问题）。因此，我们的签名潜在比格签名更短，但目前签名和验证的成本很高。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17659-4_26](https://doi.org/10.1007/978-3-030-17659-4_26)
