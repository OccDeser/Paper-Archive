# Crypto[2021-4]
## Witness Authenticating NIZKs and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#witness-authenticating-nizks-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#witness-authenticating-nizks-and-applications)**
### 作者
* Hanwen Feng, Beihang University, Beijing, China
* Qiang Tang, The University of Sydney, Sydney, Australia
### 摘要
> 我们开始研究见证认证NIZK证明系统（waNIZKs），其中可以使用语句x的证人w来确定是否确实使用w生成了x的有效证明。这种新的身份验证功能可以实现更多样化的应用，并对完整性提出新的要求：（1）没有对手可以生成一个有效证明，而这个证明不会被任何证人认出；（2）或者使用她有效的证人伪造一个证明来诬陷他人。为了克服传统零知识性的明显障碍，我们定义了熵零知识性，要求证明在证人具有足够的计算熵的情况下不泄露任何部分信息。
> 
> 我们对这个新的原始进行了正式处理。建模结果相当复杂，涉及多个微妙的问题，需要特别小心。我们提出了基于标准假设的普适构造。我们还展示了在不可篡改（完美单向）哈希、具有验证者本地吊销的群签名和可检查明文的公钥加密方面的三个应用。我们的waNIZK为所有这些应用提供了提高当前技术水平的新工具。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_1](https://doi.org/10.1007/978-3-030-84259-8_1)
## Towards a Unified Approach to Black-Box Constructions of Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#towards-a-unified-approach-to-black-box-constructions-of-zero-knowledge-proofs)**
### 作者
* Xiao Liang, Stony Brook University, Stony Brook, NY, 11790, USA
* Omkant Pandey, Stony Brook University, Stony Brook, NY, 11790, USA
### 摘要
> 通用的零知识证明对于所有 \(\mathsf {NP} \) 语言的应用极大地简化了安全协议的设计。然而，它们固有地需要底层关系的代码。如果关系中包含对加密函数的黑盒调用，则在使用零知识证明时必须了解该函数的代码，即使关系和证明都只需要对该函数进行黑盒访问。Rosulek（Crypto'12）表明，即使是对于简单的语句，如存在于单向函数范围中的成员资格，也需要非黑盒访问的非平凡证明。
> 
> 我们提出了一种绕过Rosulek的不可能结果的替代方法。我们不直接要求给定单向函数 f 的零知识证明，而是试图构造一个新的单向函数F，只要具有 f 的黑盒访问能力和用于证明非平凡语句（如范围成员资格）的关联的零知识协议。我们称 F 及其证明系统为基于证明的单向函数。我们类似地定义了其他基元的基于证明的版本，具体是伪随机生成器和抗冲突哈希函数。
> 
> 我们展示了如何从普通版本的每个上述基元构造基于证明的版本，前提是对输入有适度但必要的限制。
> 
> 首先，我们展示了如果证明者完全选择输入，则无法以黑盒方式从普通版本构造基于证明的伪随机生成器，从而确立了输入受到限制的必要性。
> 
> 我们接下来提出了处理形式为 (x, r) 的输入的黑盒构造，其中 r 是由验证者均匀选择的。这类似于广泛使用的 Goldreich-Levin 定理中的限制。相关的零知识证明支持对输出的范围成员资格以及对输入前缀的任意谓词。
> 
> 我们的结果为将来可能实现这样一种可能性打开了门，即对于需要对上述基元进行黑盒访问的关系，可以通过使用基于证明的基元来实例化，而无需违反它们的黑盒特性，从而实现通用的零知识证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_2](https://doi.org/10.1007/978-3-030-84259-8_2)
## Compressing Proofs of k-Out-Of-n Partial Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#compressing-proofs-of-k-out-of-n-partial-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#compressing-proofs-of-k-out-of-n-partial-knowledge)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Serge Fehr, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> 在Cramer、Damgård和Schoenmakers（CRYPTO 1994）提出的部分知识证明中，一个证明者如果对于给定的公共陈述的某个k子集知道证人，可以说服验证者接受该主张，而不需揭示哪个k子集。他们的解决方案结合了Σ协议理论和线性秘密分享，并且对于一般的k、n，实现了线性通信复杂度。特别是“一中选出一个”情况下的k=1，在过去几十年间已经出现了大量应用，例如电子投票、环签名和保密交易系统等。
> 
> 在本文中，我们专注于离散对数（DL）设置，证明者声称知道k个元素的DLs。Groth和Kohlweiss（EUROCRYPT 2015）已经展示了如何以对数（n的对数）通信代替线性通信解决特殊情况k=1。然而，他们的方法明确利用了k=1，并不能推广到k>1。或者，解决所考虑问题的一种间接方法是将k个元素中的k中选关系转换为电路，并应用通信高效的电路零知识证明。对于k=1，这种方法已经得到高度优化，例如在ZCash中。
> 
> 我们的主要贡献是一种新型的、简单的诚实验证者零知识证明协议，用于证明k out of n DLs的知识，具有对数级通信复杂度，并且适用于一般的k和n，而不需要任何通用电路零知识证明机制。我们的解决方案提出了压缩的Σ协议理论（CRYPTO 2020）的新扩展，然后利用它来压缩一个新的用于证明k-out-of-n DL's知识的Σ协议，使其大小降至对数级别。后者的Σ协议受到了CRYPTO 1994方法的启发，但对原始协议进行了仔细重新设计以应用压缩技术。有趣的是，即使对于k=1和一般的n，我们的方法都改进了之前的直接方法，因为它减少了证明者的复杂性而不增加通信复杂性。除了概念上的简单性外，我们还确定了实际相关领域，在这些领域中，我们的方法相对于基于电路-ZK的通用方法在证明大小和证明者复杂性方面取得了渐近和具体的改进。
> 
> 最后，我们展示了核心结果的各种扩展和推广。例如，我们将我们的协议扩展到Pedersen（向量）承诺开启的部分知识的证明，和/或包括满足某些附加约束的证人的证明，并展示如何将我们的结果扩展到非阈值访问结构。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_3](https://doi.org/10.1007/978-3-030-84259-8_3)
## Mac'n'Cheese: Zero-Knowledge Proofs for Boolean and Arithmetic Circuits with Nested Disjunctions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#macncheese-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits-with-nested-disjunctions)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Alex J. Malozemoff, Galois, Inc., Portland, USA
* Marc B. Rosen, Galois, Inc., Portland, USA
### 摘要
> 零知识证明在许多密码应用中是一个重要的基石。不幸的是，当证明陈述变得非常庞大时，现有的零知识证明系统很容易达到它们的极限：无论是计算开销、内存占用还是所需带宽都超过了实际可容忍的水平。
> 
> 我们提出了一个交互式的布尔和算术电路零知识证明系统，称为“Mac'n'Cheese”，重点支持大规模电路。我们的工作遵循了承诺和证明的范式，并使用基于向量遗忘线性评估的信息理论MAC（Message Authentication Codes）来实现高效率。我们还展示了如何优化析取运算，提出了一种通用的OR转换，用于证明m个陈述的析取，其通信复杂度与最长陈述成正比（再加上一个与m的对数项）。这些析取可以进一步嵌套，可以有效地证明具有多层析取的复杂陈述。我们还展示了如何利用Fiat-Shamir变换使“Mac'n'Cheese”非交互式（在预处理阶段之后），并且只有一个小的准确性降级。
> 
> 我们已经实现了“Mac'n'Cheese”的在线阶段，并且在运行于延迟为95毫秒、带宽为31.5 Mbps的网络上，每个AND门的运行时间为144纳秒，每个乘法门的运行时间为1.5微秒，域为\(\mathbb {F} _{2^{61} - 1} \)。此外，我们展示了析取优化如预期的提高了通信效率：当证明一个包含八个分支和每个分支大约包含10亿次乘法的布尔电路时，“Mac'n'Cheese”所需的通信比单分支案例多出75个字节。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_4](https://doi.org/10.1007/978-3-030-84259-8_4)
## Time- and Space-Efficient Arguments from Groups of Unknown Order.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#time-and-space-efficient-arguments-from-groups-of-unknown-order) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#time-and-space-efficient-arguments-from-groups-of-unknown-order)**
### 作者
* Alexander R. Block, Purdue University, West Lafayette, USA
* Justin Holmgren, NTT Research, Sunnyvale, CA, USA
* Alon Rosen, IDC Herzliya, Herzliya, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Pratik Soni, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们构造了公共币时间和空间有效的\(\mathbf {NP} \)零知识证明。对于每个时间T和空间S的非确定性RAM计算，证明者在时间\(T \cdot {{\,\mathrm{polylog}\,}}(T)\)和空间\(S \cdot {{\,\mathrm{polylog}\,}}(T)\)内运行，验证者在时间\(n \cdot {{\,\mathrm{polylog}\,}}(T)\)内运行，其中n是输入长度。我们的协议依赖于隐藏序群，可以通过从因子分解的困难（安全质数的乘积）进行可信设置，或者使用类群进行无需可信设置的实例化。可以使用Fiat-Shamir变换启发式地使论证系统不可交互。
> 
> 我们的证明基于DARK（Bünz等人，Eurocrypt 2020），这是一个最近的简洁且高效可验证的多项式承诺方案。我们展示了如何以时间和空间有效的方式实现DARK的一个变种。在此过程中，我们：
> 
> 1. 发现了DARK安全性证明中的一个重要漏洞。
> 
> 2. 给出了一个克服上述漏洞的非平凡修改的DARK方案。修正版还依赖比原始DARK方案中的加密假设弱得多的加密假设。我们的证明以一种新颖的方式利用了从整数格理论中的一些想法。
> 
> 3. 将Pietrzak的（ITCS 2019）指数化（\(\mathsf {PoE}\)）协议推广到适用于未知阶的通用群（不依赖于任何加密假设）。
> 
> 在证明这些结果的过程中，我们开发了用于处理（隐藏顺序）群的通用技术，这可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_5](https://doi.org/10.1007/978-3-030-84259-8_5)
## Broadcast Encryption with Size N1/3 and More from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#broadcast-encryption-with-size-n1-3-and-more-from-k-lin)**
### 作者
* Hoeteck Wee, NTT Research, California, USA
* Hoeteck Wee, ENS, Paris, France
### 摘要
> 我们提出了一种基于配对的密文策略属性加密（CP-ABE）方案，适用于度为3的多项式类，并具有紧凑参数：公钥、密文和密钥包含O(n)个群元素，其中n是函数的输入长度。作为一个直接的推论，我们得到了一个基于配对的广播加密方案，适用于N个用户，参数的大小为\(O(N^{1/3})\)，打破了基于配对的广播加密长期以来的\(\sqrt{N}\)限制。我们所有的构建都能够对无限协作进行自适应安全，并依赖于（双边的）k-Lin假设在素数阶双线性群中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_6](https://doi.org/10.1007/978-3-030-84259-8_6)
## Fine-Grained Secure Attribute-Based Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#fine-grained-secure-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#fine-grained-secure-attribute-based-encryption)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
### 摘要
> 精细化密码学是在一个对手的资源被事先限制的设置中构建加密系统的过程，而诚实方的资源比对手少。目前，只有简单形式的加密方案，如秘密密钥和公钥加密，是在这个设置中构建的。在本文中，我们通过提出第一个精细化安全的属性基加密(ABE)方案，丰富了精细化密码学中可用的工具。我们的构造在广泛接受的最坏情况假设下具有自适应安全性，即\(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\)，并且使用谓词编码(Wee, TCC'14)的概念以通用方式呈现。通过适当地实例化底层编码，我们可以获得不同类型的ABE方案，包括基于身份的加密。以前，在精细化密码学中，所有这些方案都是未知的。我们的主要技术贡献是在不使用配对或迪菲-赫尔曼假设的情况下构建ABE方案。因此，我们的结果表明，即使单向函数不存在，我们仍然可以拥有具有有意义安全性的ABE方案。为了更多地应用我们的技术，我们构建了一个高效的(准自适应)非交互式零知识(QA-NIZK)证明系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_7](https://doi.org/10.1007/978-3-030-84259-8_7)
## Multi-input Quadratic Functional Encryption from Pairings.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#multi-input-quadratic-functional-encryption-from-pairings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#multi-input-quadratic-functional-encryption-from-pairings)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Rishab Goyal, MIT, Cambridge, USA
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### 摘要
> 我们从配对构造了第一个多输入功能加密（MIFE）方案，用于二次函数。我们的构造支持多项式数量的用户，其中第i个用户，对于\(i \in [n]\)，加密输入\(\mathbf{x}_i \in \mathbb {Z}^m\) 以获得密文\(\mathsf {CT}_i\)，密钥生成器为向量\(\mathbf{c} \in \mathbb {Z}^{({mn})^2}\) 提供密钥\(\mathsf {SK}_\mathbf{c}\)，解密时，通过给定\(\mathsf {CT}_1,\ldots ,\mathsf {CT}_n\) 和\(\mathsf {SK}_\mathbf{c}\)，恢复\(\langle \mathbf{c}, \mathbf{x} \otimes \mathbf{x} \rangle\) ，而不泄露其他信息。我们在标准的双边矩阵Diffie-Hellman假设下，实现了基于不可区分性的（选择性）安全性，针对无限制的串通攻击。所有先前的MIFE方案要么只支持内积（线性函数），要么依赖于强密码学假设，比如不可区分性混淆或多线性映射。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_8](https://doi.org/10.1007/978-3-030-84259-8_8)
## Functional Encryption for Turing Machines with Dynamic Bounded Collusion from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#functional-encryption-for-turing-machines-with-dynamic-bounded-collusion-from-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Narasimha Sai Vempati, IIT Madras, Chennai, India
* Monosij Maitra, TU Darmstadt, Darmstadt, Germany
* Shota Yamada, AIST Japan, Tsukuba, Japan
### 摘要
> Gorbunov、Vaikuntanathan和Wee（CRYPTO 2012）的经典研究和后续工作提供了从温和假设构建有界串谋功能加密（FE）电路的方法。在这项工作中，我们在有界串谋FE方面以几种方式改进了现状：
> 
> 1. 新的安全概念。我们引入了动态有界串谋FE的概念，其中对串谋上限的声明被推迟到加密时刻。这使得加密方能够根据不同密文的敏感程度动态选择串谋上限。因此，密文的大小与其自身的串谋上限成线性增长，而公钥的大小与串谋上限无关。相比之下，所有先前的构造都会导致公钥和密文的大小至少与固定上限Q成线性增长。
> 
> 2. 具有动态有界串谋的电路的CPFE。我们提供了第一个具有动态有界串谋安全的电路完全功能加密（CPFE）方案。通过假设基于身份的加密（IBE），我们构建了满足非自适应模拟安全性的无界大小电路的CPFE。通过将底层假设加强为具有接收者选择性开放安全性的IBE，我们获得了具有有界大小电路的CPFE，它具有自适应模拟安全性。此外，我们还展示了IBE对这些原语是一个必要的假设。此外，通过依赖学习与错误（LWE）假设，我们获得了首个简洁的CPFE用于电路，即支持无界大小但有固定输出长度和深度的电路。该方案实现了自适应模拟安全性。
> 
> 3. 具有动态有界串谋的电路的KPFE。我们提供了第一个具有无界大小但有界深度和输出长度的电路的KPFE，该方案满足LWE的动态有界串谋安全。我们的构造实现了自适应模拟安全，改进了[20]的安全性。
> 
> 4. 具有动态有界串谋的TM/NL的KP和CP FE。我们提供了第一个具有有界串谋功能加密的TM/NL的公钥设置的KPFE和CPFE构造，该构造基于LWE。我们的构造实现了非自适应模拟安全。我们的构造中的输入和机器可以是多项式长度的无界长度。
> 
> 我们提供了满足自适应安全性的上述方案的变种，但代价是支持较小的计算类别，即非确定性对数空间（NL）。由于NL包含非确定有限自动机（NFA），这个结果涵盖了所有先前基于标准假设[7, 9]的均匀模型的有界串谋FE的工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_9](https://doi.org/10.1007/978-3-030-84259-8_9)
## Receiver-Anonymity in Rerandomizable RCCA-Secure Cryptosystems Resolved.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#receiver-anonymity-in-rerandomizable-rcca-secure-cryptosystems-resolved)**
### 作者
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Baosheng Wang, School of Computer, National University of Defense Technology, Changsha, China
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Mathematics and Informatics, Fujian Normal University, Fuzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### 摘要
> 在这项工作中，我们解决了Prabhakaran和Rosulek在CRYPTO 2007提出的开放问题，并提出了第一种匿名、可重复和可随机化的可选择密文攻击（RCCA）安全的公钥加密方案。这个解决方案为许多以隐私为导向的应用提供了一个非常理想的RCCA安全级别。我们构建的核心是对平滑投影哈希函数（Cramer and Shoup, EUROCRYPT 2002）进行的非平凡扩展，以及用于构建具有接收者匿名性的可重复RCCA安全加密方案的模块化通用框架。该框架提供了对原始Prabhakaran和Rosulek方案的增强抽象（它是标准模型中第一个实现可重复RCCA安全加密的构建），其中最关键的增强是第一次实现了接收者匿名性这一理想属性，对于隐私设置至关重要。它还作为对RCCA安全性更直观和通用理解的概念性提升，例如，可以导致概念的新实现。最后，需要注意的是（由于CCA安全性不适用于我们工作的隐私应用），在这里呈现的具体结果和概念上的进步似乎大大扩展了可重复RCCA安全加密概念的能力和相关性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_10](https://doi.org/10.1007/978-3-030-84259-8_10)
## White Box Traitor Tracing.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#white-box-traitor-tracing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#white-box-traitor-tracing)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> 叛徒追踪旨在确定解密密钥的泄露源头。由于"叛徒"可以试图将他们的密钥隐藏在混淆代码中以逃避追踪，因此追踪算法应适用于一般的、潜在被混淆的解码器程序。在这种一般解码器程序的情况下，先前的工作使用黑盒追踪：追踪算法忽略解码器的具体实现，而是通过向解码器提问并观察输出来进行追踪。
> 
> 我们观察到，在某些情况下，这种黑盒追踪会引发一致性和用户隐私问题。另一方面，这些问题似乎并非固有于白盒追踪，白盒追踪算法实际上会检查解码器的实现。因此，我们开发了新的白盒叛徒追踪方案，提供一致性和/或隐私保护。我们的方案可以根据不同的假设进行实例化，包括公钥加密、非交互零知识证明和不可区分性混淆等，具有不同的权衡。据我们所知，我们是第一个在一般解码器设置中考虑白盒追踪的研究。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_11](https://doi.org/10.1007/978-3-030-84259-8_11)
## Does Fiat-Shamir Require a Cryptographic Hash Function?
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#does-fiat-shamir-require-a-cryptographic-hash-function) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#does-fiat-shamir-require-a-cryptographic-hash-function)**
### 作者
* Yilei Chen, Tsinghua University, Beijing, China
* Alex Lombardi, MIT, Cambridge, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Sunnyvale, USA
* Willy Quach, Northeastern University, Boston, USA
### 摘要
> Fiat-Shamir转换是一种通用方法，通过使用协议转录的确定性哈希替换随机验证者消息，以减少公开币协议中的交互。这种转换的健全性通常是根据启发式方法得出的，缺乏形式化的安全证明。相反，为了论证安全性，可以依赖于随机预言机方法，该方法不正式地说明只要随机预言机正确地实例化Fiat-Shamir，一个“足够非结构化”的哈希函数（例如固定长度SHA-2）应该足够使用。最后，对于某些特殊的交互式协议，已经知道如何（1）分离哈希函数的具体安全属性，以满足Fiat-Shamir的实例化，并且（2）基于像学习与错误一样的密码假设构建满足此属性的哈希函数。
> 
> 在这项工作中，我们放弃了这种方法，并问Fiat-Shamir是否真正需要一个密码哈希函数。令人惊讶的是，我们展示了在两种最常见的应用中，即构建签名方案以及（通用型）非交互式零知识论证，可以使用非常简单和非密码学哈希函数（如模P求和或位分解）实例化Fiat-Shamir并保持健全性。在某些情况下，我们做出了理想化的假设（即我们调用了通用群模型），而在其他情况下，我们证明了在普通模型中的健全性。
> 
> 在负面方面，我们还确定了一些重要情况，其中密码哈希函数被证明是实例化Fiat-Shamir所必需的。我们希望这项工作能够促进对哈希函数在Fiat-Shamir转换中精确角色的理解的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_12](https://doi.org/10.1007/978-3-030-84259-8_12)
## Composition with Knowledge Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#composition-with-knowledge-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#composition-with-knowledge-assumptions)**
### 作者
* Thomas Kerber, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Aggelos Kiayias, The University of Edinburgh and IOHK, Edinburgh, Scotland
* Markulf Kohlweiss, The University of Edinburgh and IOHK, Edinburgh, Scotland
### 摘要
> 零知识简洁非交互性论证（zk-SNARKs）依赖于它们的安全性的知识假设。与此同时，随着加密系统的复杂性和规模的不断增长，安全协议的组合形式变得至关重要。当前可组合安全性的黄金标准，通用组合和构造密码学框架无法捕获知识假设，因为它们的核心组合证明禁止白盒提取。在本文中，我们提出了一个正式模型，允许知识假设的组合。尽管对于一般情况显示了不可能性，但我们证明了该模型在同时限制几个协议实例的知识假设时的实用性。最后，通过在我们的框架内使用现有结果，我们提供了第一个同时简洁和可组合的zk-SNARK实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_13](https://doi.org/10.1007/978-3-030-84259-8_13)
## Non-interactive Batch Arguments for NP from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#non-interactive-batch-arguments-for-np-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#non-interactive-batch-arguments-for-np-from-standard-assumptions)**
### 作者
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, USA
### 摘要
> 我们研究设计“非交互批量论证”（non-interactive batch arguments）的问题，用于\(\mathsf {NP}\)（非确定性多项式时间）计算类的证明。这样的论证系统允许高效的证明者证明多个\(\mathsf {NP}\)语句，且其大小小于组合见证长度。
> 
> 我们在普通参考字符串模型基于标准密码学假设提供了第一个这样的\(\mathsf {NP}\)论证系统的构建。先前的研究要求非标准假设（或随机预言机模型），或者只能支持私有验证。
> 
> 我们结果的核心是一个新的双模式交互批量论证系统，适用于\(\mathsf {NP}\)计算类。我们展示了如何将通常应用于证明系统的Fiat-Shamir的相关性难题框架应用于这样的交互论证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_14](https://doi.org/10.1007/978-3-030-84259-8_14)
## Targeted Lossy Functions and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#targeted-lossy-functions-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#targeted-lossy-functions-and-applications)**
### 作者
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 有损陷阱门函数，由Peikert和Waters（STOC '08）引入，可以以两种不可区分的方式进行初始化：在可逆模式下，该函数保留关于其输入的所有信息，并且可以在给定陷阱门的情况下高效地进行反演；而在有损模式下，该函数会丢失关于其输入的一些信息。这样的函数在密码学中找到了无数的应用，并可以基于各种Cryptomania假设构建。在这项工作中，我们引入了有针对性的有损函数（TLFs），它们在两个正交维度上放宽了有损陷阱门函数的要求。首先，在可逆模式下，它们不需要反演陷阱门。其次，函数的有损模式是以某个目标输入初始化的，并且只需要丢失关于这个特定目标的信息。即使给定了目标，可逆和有损模式也应该是不可区分的。我们从Minicrypt假设构造了TLFs，特别是从可逆伪随机生成器或在可逆性的自然放松下的单向函数。然后，我们将TLFs推广到支持分支，并构造了全可逆但一个失去可逆性的变体、以及全有损但一个保留可逆性的变体。我们展示了有针对性有损函数的广泛应用。在几种情况下，我们得到了以前仅在Cryptomania假设下已知的原语的首个Minicrypt构造。我们的应用包括：
> 
> 基于单向函数的伪熵函数。
> 
> 确定性泄露鲁棒的消息认证码和改进的泄露鲁棒对称密钥加密。
> 
> 从单向函数中提取相关性依赖源的抽取器。
> 
> 基于单向函数的选择开放安全的对称密钥加密。
> 
> 从（指数安全的）陷阱门函数和可逆伪随机生成器构造CCA PKE的新方法。
> 
> 我们还讨论了与分布式点函数的有趣联系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_15](https://doi.org/10.1007/978-3-030-84259-8_15)
## The t-wise Independence of Substitution-Permutation Networks.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#the-t-wise-independence-of-substitution-permutation-networks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#the-t-wise-independence-of-substitution-permutation-networks)**
### 作者
* Tianren Liu, University of Washington, Seattle, WA, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> 块密码，如高级加密标准（Rijndael），在实践中被广泛使用，但我们对其安全性的理解仍然非常不完整。本文促进并继续一个旨在证明块密码对重要和深入研究的攻击类别具有安全性的研究计划。具体而言，我们开始研究具体块密码构造范式（如代换-置换网络和密钥交替密码）的（几乎）t-独立性。足够强的（几乎）成对独立性已足以抵抗（截断的）差分攻击和线性密码分析，因此这是一个相关且有意义的目标。我们的研究结果有两个方面。
> 
> 我们的第一个结果涉及模拟高级加密标准（AES）等密码的代换-置换网络（SPN）。我们证明，使用具体的S盒和适当的线性混合层对实例化的SPN，在给定足够多的轮数和独立子密钥的情况下，几乎具有成对独立性。我们的证明依赖于对输入差异上的S盒计算在输出差异子空间采样的表征，以及一个新的随机性提取引理（我们用傅里叶分析技术证明），该引理确定了这种采样产生均匀性的条件。我们特别使用我们的技术证明了对于高级加密标准块密码（其使用修补逆函数\(x \mapsto x^{-1}\)的变体作为S盒）和MiMC块密码（其使用立方函数\(x \mapsto x^3\)作为S盒）的足够多轮次的几乎成对独立性，假设存在独立子密钥。
> 
> 其次，我们证明使用大多数排列对密钥交替密码（可以看作是代换-置换网络的退化情况）进行实例化可以在\(t + o(t)\)轮次中获得（几乎）t-独立性。为了做到这一点，我们使用概率方法开发了两个新引理，即独立放大引理和距离放大引理，使我们能够推理密钥交替密码的演化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_16](https://doi.org/10.1007/978-3-030-84259-8_16)
## Low-Complexity Weak Pseudorandom Functions in $\mathtt {AC}0[\mathtt {MOD}2]$.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#low-complexity-weak-pseudorandom-functions-in-mathtt-ac-0-mathtt-mod-2)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 弱伪随机函数（WPRF）是一种带有密钥的函数\(f_k:\{0,1\}^n\rightarrow \{0,1\}\)，对于随机密钥k，一组样本\((x, f_k(x))\)，对于均匀随机的输入x，不能有效地区分与完全随机的输入-输出对（x, y）。我们研究在\(\mathtt {AC}0[\mathtt {MOD}2] \)中的WPRF，这是通过带有奇偶性门的\(\mathtt {AC}0 \)电路可计算的函数类别，并做出以下贡献。
> 
> 基于稀疏多项式的WPRF。我们提出了首个可通过稀疏多元多项式在\(\mathbb {F}_2\)上计算的WPRF候选。我们证明它对于线性和代数攻击具有亚指数级安全性。
> 
> \(\mathtt {AC}0\circ \mathtt {MOD}2 \)中的WPRF。我们研究了通过奇偶性门的\(\mathtt {AC}0\)电路计算的WPRF的存在性。我们提出了Akavia等人（ITCS 2014）之前的WPRF候选的修改版本，并证明它抵抗了Bogdanov和Rosen（ECCC 2017）用来在准多项式时间破解原始候选的代数攻击。我们提供了关于使用公共奇偶性门的可能性的证据，并将这个问题与其他猜想联系起来。
> 
> 在拉普兰和加密狂热之间。我们展示了\(\mathtt {AC}0[\mathtt {MOD}2] \)中的WPRF意味着一种学习带有噪音（LPN）假设的变体。我们进一步展示了在\(\mathtt {AC}0[\mathtt {MOD}2] \)的一个子类中的WPRF，该子类包括了Boyle等人（FOCS 2020）最近的一个候选，假设一个看似薄弱的额外猜想下，可以实现公钥加密。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_17](https://doi.org/10.1007/978-3-030-84259-8_17)
## MPC-Friendly Symmetric Cryptography from Alternating Moduli: Candidates, Protocols, and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#mpc-friendly-symmetric-cryptography-from-alternating-moduli-candidates-protocols-and-applications)**
### 作者
* Itai Dinur, Ben-Gurion University, Beersheba, Israel
* Steven Goldfeder, Cornell Tech, New York, USA
* Mahimna Kelkar, Cornell Tech, New York, USA
* Tzipora Halevi, Brooklyn College, CUNY, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Vivek Sharma, Graduate Center, CUNY, New York, USA
* Greg Zaverucha, Microsoft Research, Redmond, USA
### 摘要
> 我们研究了一种新的对称加密原语候选，它利用在\(\mathbb {Z}_2\)和\(\mathbb {Z}_3\)上的线性函数的交替来支持快速的安全多方计算（MPC）协议。这是对Boneh等人（TCC 2018）和Cheon等人（PKC 2021）发起的这种弱伪随机函数的研究的延续。
> 
> 我们提出了以下贡献。
> 
> 候选人。我们基于交替模数提出了新的对称原语设计。这包括候选的单向函数、伪随机生成器和弱伪随机函数。我们提出了基于密码分析的具体参数。
> 
> 协议。我们提供了一种统一的方法来安全地评估不同MPC模型中的模数交替原语。对于Boneh等人的初始候选人，我们的协议在所有性能指标上至少提高了2倍。我们报告了优化实现的效率基准。
> 
> 应用。我们展示了我们的候选人在各种应用中的有用性。这包括短的“Picnic风格”签名方案，以及用于忽略式伪随机函数、分层键派生和函数秘密共享的分布式密钥生成的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_18](https://doi.org/10.1007/978-3-030-84259-8_18)
## No Time to Hash: On Super-Efficient Entropy Accumulation.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#no-time-to-hash-on-super-efficient-entropy-accumulation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#no-time-to-hash-on-super-efficient-entropy-accumulation)**
### 作者
* Yevgeniy Dodis, New York University, New York, NY, USA
* Siyao Guo, New York University Shanghai, Shanghai, China
* Zhiye Xie, New York University Shanghai, Shanghai, China
* Noah Stephens-Davidowitz, Cornell University, Ithaca, NY, USA
### 摘要
> 真实世界中使用的随机数生成器(RNGs)不能在每次使用新的熵输入X刷新其状态R时承受（缓慢的）密码哈希。相反，它们使用“超高效”的简单熵累积过程，例如
> 
> 其中\(\mathsf {rot}_{\alpha ,n}\)将n比特状态R旋转固定数量\(\alpha\)。例如，Microsoft的RNG在\(n=32\)时使用\(\alpha =5\)，在\(n=64\)时使用\(\alpha =19\)。这些数字从何而来？它们是好的选择吗？应该用更好的输入比特排列\(\pi\)来替代旋转吗？
> 
> 在这项工作中，我们通过将连续的熵输入序列\(X_1,X_2,\ldots\)建模为来自某个自然分布族\(\mathcal{D}\)的独立（但否则对抗性的）样本，对这些实际问题进行了严格的研究。我们的贡献如下。
> 
> 我们定义了2单调分布作为丰富的分布族\(\mathcal{D}\)，包括相关的实际分布（高斯分布，指数分布等），但避免了微不足道的不可能结果。
> 
> 对于任意的\(\alpha\)，其中\(\gcd (\alpha ,n)=1\)，我们证明旋转从任何（未知的）熵为k的2单调分布的n个独立样本\(X_1,\ldots ,X_n\)中累积\(\varOmega (n)\)比特的熵。
> 
> 然而，我们也证明，对于给定的n，某些\(\alpha\)的选择比其他选择效果好得多。例如，我们证明在\(n=64\)时，\(\alpha =19\)是最佳选择之一；相比之下，在\(n=32\)时，\(\alpha =5\)是不错的选择，但通常比\(\alpha =7\)差。
> 
> 更一般地，给定一个排列\(\pi\)和\(k\ge 1\)，我们定义一个简单的参数，覆盖数\(C_{\pi ,k}\)，并证明它能够刻画添加独立、2单调样本，每个样本的最小熵为k，直到规则积累非常接近n比特的步骤数量。
> 
> 我们构建了一个简单的排列\(\pi ^*\)，它能够在所有k值上实现几乎最优\(C_{\pi ^*,k}\approx n/k\)，并通过实验证实它与所有旋转\(\mathsf {rot}_{\alpha ,n}\)相比更有优势。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_19](https://doi.org/10.1007/978-3-030-84259-8_19)
## A Logarithmic Lower Bound for Oblivious RAM (for All Parameters).
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#a-logarithmic-lower-bound-for-oblivious-ram-for-all-parameters)**
### 作者
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, Ithaca, USA
### 摘要
> 通过Goldreich和Ostrovsky（J. ACM 1996）引入的无意识RAM（ORAM）是一种隐藏访问模式的（概率性）RAM，即对于每个输入，观察到的访问位置是相似分布的。近年来，无论是在上限还是下限方面都取得了巨大的进展，本质上明确了在各种参数设置中可能的最小开销。
> 
> 我们观察到，在一个非常自然的参数设置中，没有已知的非平凡的下限，甚至没有在受限的计算模型（如所谓的球和容器模型）中的下限。设N和w分别是我们希望无意识模拟的RAM的单元格数量和单元格位大小。用b表示ORAM的单元格位大小。以前的所有ORAM下限都有一个乘法因子w/b，这使得它们在许多感兴趣的参数设置中都是平凡的。
> 
> 在这项工作中，我们证明了一个新的ORAM下限，捕捉到了这种设置（在所有其他设置中，从定量上讲它至少和以前的下限一样好）。我们证明了任何ORAM必须对每个逻辑操作进行（摊还的）内存探测。这里，m表示ORAM本地存储的位大小。我们的下限意味着对访问的对数开销是必要的，即使b >> w。我们的下限对于所有参数设置来说都是紧密的，上限是log(b/w)的因子。我们的下限也适用于非合谋多服务器设置。
> 
> 作为应用，我们得出了在线和离线模型中ORAM所需开销的首次（无条件）分离。具体来说，当w = log N时，存在一个离线ORAM，每个逻辑操作（平均）进行o(1)个内存探测，而每个在线ORAM必须进行Ω(log N / loglog N)个内存探测。以前在任何参数设置中都不知道这样的分离，即使在球和容器模型中也是如此。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_20](https://doi.org/10.1007/978-3-030-84259-8_20)
## Oblivious RAM with Worst-Case Logarithmic Overhead.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#oblivious-ram-with-worst-case-logarithmic-overhead) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#oblivious-ram-with-worst-case-logarithmic-overhead)**
### 作者
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Ilan Komargodski, Hebrew University of Jerusalem, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, CA, USA
* Wei-Kai Lin, Cornell University, New York, USA
* Elaine Shi, CMU, Pittsburgh, USA
### 摘要
> 我们提出了第一个支持最坏情况下O(N)访问开销的Oblivious RAM（ORAM）构造方法，其中N为内存块数，任何块大小大于等于O(N)。同时，我们只需要客户端内存占用一个常数数量的内存块。我们依赖于单向函数的存在并保证计算安全性。我们的研究结果解决了ORAM构造的基本可行性结果的长期研究，因为对数开销是必要的。
> 
> 先前最好的对数开销构造方法只在平均意义上保证，即只有在足够长的访问序列中才能实现对数开销，其中一些个别访问会产生O(N)开销。以最坏情况开销为指标的之前最好的ORAM构造方法实现了O(log^2 N/log log N)的开销。
> 
> 从技术上讲，我们设计了一种新颖的用于现代ORAM构造的去摊销框架，该框架使用了“洗牌输入”的假设。我们的框架与之前的去摊销框架大不相同，之前的框架来自Ostrovsky和Shoup（STOC'97），似乎根本不足以应用于现代ORAM构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_21](https://doi.org/10.1007/978-3-030-84259-8_21)
## Puncturable Pseudorandom Sets and Private Information Retrieval with Near-Optimal Online Bandwidth and Time.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#puncturable-pseudorandom-sets-and-private-information-retrieval-with-near-optimal-online-bandwidth-and-time)**
### 作者
* Elaine Shi, CMU, Pittsburgh, USA
* Waqar Aqeel, Duke, Durham, USA
* Bruce Maggs, Duke, Durham, USA
* Balakrishnan Chandrasekaran, Vrije Universiteit Amsterdam, Amsterdam, The Netherlands
### 摘要
> 想象一台或多台非合谋服务器，每台服务器都持有一个大型的公共数据库，例如DNS条目的存储库。客户端希望在不向服务器披露查询的情况下访问此数据库中的条目。传统的私人信息检索（PIR）方案每个查询实现的带宽为对数多项式，但需要服务器执行线性计算，这是部署的重要障碍。然而，最近的一些研究表明，通过引入一次性、每个客户端的离线预处理阶段，可以随后用每个查询的次线性在线计算时间提供无限数量的客户端查询（并且可以将预处理的成本分摊到无限多个查询）。
> 
> 然而，现有的预处理PIR方案（支持无限查询）在实现次线性在线计算时，存在一些不可取的权衡：在线时间或带宽方面要么明显非最优，要么要求服务器为每个客户端或每个查询存储线性数量的状态，或者需要多个多项式对数数量的非合谋服务器。
> 
> 我们提出了一种新颖的2服务器预处理PIR方案，每个查询实现的在线计算为~O(√n)，客户端存储为~O(√n)，同时保持了传统PIR方案的对数多项式在线带宽。在线带宽和计算都在多对数因子上是最优的。在我们的构造中，每个服务器仅存储原始数据库，没有任何额外的内容，每个在线查询都在单次往返中完成。我们的构造依赖于标准的LWE假设。作为一个重要的垫脚石，我们提出了一种称为私密可尖刺伪随机集的密码学对象的新的更广义的定义，并给出了与之前方法显著不同的创新构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_22](https://doi.org/10.1007/978-3-030-84259-8_22)
## Authenticated Key Exchange and Signatures with Tight Security in the Standard Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#authenticated-key-exchange-and-signatures-with-tight-security-in-the-standard-model)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Sven Schäge, Ruhr-Universität Bochum, Bochum, Germany
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们构建了在标准模型中实现密切安全的首个经过认证的密钥交换协议。以往的研究要么依赖于似乎本质上需要随机预言机的技术，要么只实现了“多位猜测”安全性，这种安全性并不被认为是紧密可组合的，例如用于构建安全通道。
> 
> 我们的构建是通用的，基于数字签名和密钥封装机制(KEMs)。我们解决的主要技术挑战是确定合适的KEM安全概念，一方面足够强大以产生紧密安全性，但同时又足够弱以在标准模型中进行有效实例化，基于如通用哈希证明系统等标准技术。
> 
> 具有在自适应损坏存在下的紧密多用户安全性的数字签名方案是一个核心构建块，被用于所有已知的具有前向安全性的紧密安全的AKE构造中。我们识别出先前已知的Bader等人(TCC 2015)的高效标准模型方案的安全证明中存在的微妙漏洞。我们开发了一个新的变体，它生成了当前最高效的签名方案，实现了这种强安全性概念，而无需随机预言机，并基于标准的困难假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_23](https://doi.org/10.1007/978-3-030-84259-8_23)
## KHAPE: Asymmetric PAKE from Key-Hiding Key Exchange.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-4].md#khape-asymmetric-pake-from-key-hiding-key-exchange) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-4].md#khape-asymmetric-pake-from-key-hiding-key-exchange)**
### 作者
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### 摘要
> OPAQUE【Jarecki等人，Eurocrypt 2018】是一种正在开发中的非对称密码认证密钥交换（aPAKE）协议，用作互联网标准和TLS 1.3中的使用。OPAQUE将一个隐式伪随机函数（OPRF）与认证密钥交换相结合，提供了强大的安全特性，包括抵抗预计算攻击（称为saPAKE安全）。然而，OPAQUE的安全性关键取决于OPRF的安全性。如果后者被破解（通过密码分析、量子攻击或安全丧失），用户的密码将暴露于离线字典攻击之中。为了解决这个弱点，我们提出了KHAPE，这是OPAQUE的一种变种，它不需要使用OPRF来实现aPAKE安全，从而提高了韧性和近乎最佳的计算性能。OPRF可以选择性地添加到KHAPE中，以增强saPAKE安全性，但在OPRF受损时不会暴露密码给离线字典攻击。
> 
> 除了对OPRF受损具有韧性外，KHAPE使用基于DH（使用HMQV）的实现，在指数运算方面在aPAKE协议中性能最佳，其成本低于在未经认证的Diffie-Hellman交换中增加一个指数运算。如果服务器启动交换，则KHAPE使用三条消息，如果客户端启动交换，则使用四条消息（比OPAQUE多一条）。
> 
> 论文中的所有结果都在理想密码模型下在UC框架内得到证明。我们对KHAPE使用的隐藏密钥AKE进行了独立研究，以及我们对3DH（Signal的基础）、HMQV和SKEME的AKE安全的UC证明，它们作为KHAPE的高效实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84259-8_24](https://doi.org/10.1007/978-3-030-84259-8_24)
