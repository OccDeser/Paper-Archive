# Eurocrypt[2019-1]
## Compact Adaptively Secure ABE for \mathsf NC^1 from k-Lin.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)**
### 作者
* Lucas Kowalczyk, Columbia University, New York, USA
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
### 摘要
> 我们提出了紧凑属性基加密（ABE）方案，针对\(\mathsf {NC^1}\)，在k-Lin假设下，具有多项式安全损失的适应安全性。我们的KP-ABE方案实现了密文大小与属性长度呈线性关系，并且在多次使用的情况下，与策略大小无关。对于CP-ABE，我们实现了类似的效率保证。这解决了Lewko和Waters在CRYPTO 2011中提出的一个核心的未解决问题。先前的适应安全构造要么强制属性具有“一次使用限制”（或者密文大小随策略大小增长），要么需要q类型的

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_1](https://doi.org/10.1007/978-3-030-17653-2_1)
## Unbounded Dynamic Predicate Compositions in Attribute-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 我们提出了几种转换方法，将一组基于属性的加密(ABE)方案用于更简单谓词的组合，从而获得了更具表达力的复合谓词ABE方案。之前关于这种谓词组合的提议，最近的一个是Ambrona等人在Crypto'17上的提议，可以认为是静态的（或部分动态的），这意味着指定组合的策略（或其结构）必须在设置时确定下来。相反地，我们的转换是动态且无限制的：它们允许用户在自己的密钥或密文中指定任意和无限大小的组合策略。我们提出了三类组合策略的转换，即任意单调跨度程序、任意分支程序和任意确定有限自动机的类别。这些广义策略根据任意谓词定义，因此可以进行模块化组合。模块化的一个应用是一种新型ABE，其中策略可以“嵌套”在密文和密钥策略之上。作为另一个应用，我们以模块化和清晰的方式，在q-比例假设下，实现了第一个完全安全的完全无限制的密钥策略ABE，用于非单调跨度程序。我们的转换方法在由Agrawal和Chase在Eurocrypt'17上提出的ABE通用框架"符号配对编码"中起作用。在我们的转换方法的核心，我们观察和利用了符号属性的无限性质，以实现无限大小的策略组合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_2](https://doi.org/10.1007/978-3-030-17653-2_2)
## (R)CCA Secure Updatable Encryption with Integrity Protection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection)**
### 作者
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Anja Lehmann, IBM Research – Zurich, Rüschlikon, Switzerland
### 摘要
> 可更新的加密方案允许数据主机使用来自客户端的所谓更新令牌，将客户端的密文从旧密钥更新为新密钥。密钥轮换在实践中是常见需求，以减轻随时间密钥泄露所带来的影响。可更新的加密有两种实现方式：一种是依赖于密文的，即数据拥有者必须（部分地）下载所有数据，并为每个密文派生一个专用令牌。Everspaugh等人在这个设置中提出了CCA和CTXT安全的方案。另一种更方便的变体是不依赖于密文的，即它允许使用一个单一令牌来更新所有密文。然而，迄今为止，在这种设置下，令牌的广泛功能性以相当薄弱的安全性为代价：Boneh等人和Lehmann与Tackmann只实现了CPA安全且没有提供完整性保护。可以说，当针对将数据外包给不受信任的主机的情况时，明文完整性应该是最基本的安全要求。否则，数据主机可能会任意更改或注入密文。事实上，BLMR13和LT18的方案都存在这个弱点，甚至EPRS17仅对不可任意注入密文的对手提供完整性。在这项工作中，我们提供了第一个具有超出CPA的安全性的不依赖于密文的可更新加密方案，特别是提供了强大的完整性保护。我们的可更新加密方案的构建和安全证明出人意料地模块化。我们提供了一个通用的转换，几乎可以将方案的密钥轮换和机密性/完整性分开处理，即可更新方案的安全性是从其静态构建模块的简单属性中派生出来的。我们通用方法的一个有趣副作用是，它立即暗示了EPRS17和LT18作为可更新加密的基本附加属性引入的密文更新的不可链接性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_3](https://doi.org/10.1007/978-3-030-17653-2_3)
## Aurora: Transparent Succinct Arguments for R1CS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs)**
### 作者
* Eli Ben-Sasson, Technion/STARKWare, Haifa, Israel
* Michael Riabzev, Technion/STARKWare, Haifa, Israel
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
* Nicholas P. Ward, UC Berkeley, Berkeley, USA
* Madars Virza, MIT Media Lab, Cambridge, USA
### 摘要
> 我们设计，实现和评估了一种用于Rank-1约束满足（R1CS）的零知识简洁非交互证明（SNARG）。 R1CS是一种广泛使用的NP语言，正在进行标准化。 我们的SNARG具有透明的设置，可能是后量子安全的，并且使用轻量级密码学。证明符合n个约束的大小为O（log ^2 n）; 它可以使用O（n log n）场操作生成，并使用O（n）进行验证。在128位安全性下，即使对于几百万个约束条件，证明也小于{250} kB，比具有类似特征的先前SNARG短10多倍。
> 
> 我们构造的关键要素是解决经典sumcheck问题[LNLK92]的单变量模拟的新交互式Oracle证明（IOP）。该协议验证了任何子组上的Reed-Solomon码字的条目的总和。
> 
> 我们还提供了libiop，这是一个基于IOP编写论据的库，其中一系列转换工具使程序员能够通过编写简单的IOP子组件来编写新的论据。我们已经使用此库指定了我们的构造和之前的构造，并计划公开源代码。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_4](https://doi.org/10.1007/978-3-030-17653-2_4)
## The Double Ratchet: Security Notions, Proofs, and Modularization for the Signal Protocol.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)**
### 作者
* Sandro Coretti, New York University, New York, USA
* Yevgeniy Dodis, New York University, New York, USA
* Joël Alwen, Wickr Inc., San Francisco, USA
### 摘要
> Signal是一种著名的安全通信协议，被数十亿人使用，包括Signal本身、WhatsApp、Facebook Messenger、Skype和Google Allo等众多安全文字通信应用。它的核心是使用“双扳手”概念，对每条消息进行加密和认证，并使用新的对称密钥；它具有许多吸引人的特性，例如前向安全性、遭受妥协后的安全性和“即时（无延迟）解密”，这些特性之前的通信协议从未同时实现过。
> 
> 尽管Signal协议以及扳手功能的形式分析近来引起了很多关注，但我们认为目前没有任何一种分析是完全令人满意的。为解决这个问题，我们提出了一个清晰而全面的安全通信定义，明确指出我们期望的安全类型，包括前向安全性、遭受妥协后的安全性和即时解密。我们首次明确规范化和建模即时解密属性，这意味着（除其他事项外）各方在某条消息永久丢失时能够无缝恢复，这是任何最近的“可证明替代Signal”都无法实现的特性。
> 
> 我们通过以下组件构建了一个模块化的“广义Signal协议”：（a）连续密钥协商（CKA），我们引入了这个清晰的基元，它可以轻松通用地建立在公钥加密上（而不仅仅是当前Signal协议中的Diffie-Hellman），并大致模拟“公钥扳手”；（b）带相关数据的前向安全认证加密（FS-AEAD），大致捕捉“对称密钥扳手”；（c）一种双输入哈希函数，在其第一个（分别对应第二个）输入中作为伪随机函数（响应或生成器）。因此，除了将我们的框架实例化为现有广泛使用的基于Diffie-Hellman的Signal协议之外，我们还可以轻松实现后量子安全，并不依赖于分析中的随机神谕。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_5](https://doi.org/10.1007/978-3-030-17653-2_5)
## Efficient Ratcheting: Almost-Optimal Guarantees for Secure Messaging.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)**
### 作者
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Marta Mularczyk, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### 摘要
> 在大规模监控和信息泄露的时代，网络通信尤其是消息传递的隐私日益引起人们的关注。由于安全的消息传递协议在不太安全的终端设备上执行，并且会话持续时间较长，它们旨在确保强大的安全性，即使秘密状态和本地随机性可能被暴露。
> 
> 可以使用经过身份验证的加密等标准技术来实现包括前向保密在内的最基本的安全属性。现代协议，如Signal，更进一步提供了所谓的后向保密，或者可以从状态暴露中恢复。这些附加的保证性会以一定的效率损失为代价（它们需要公钥基元）。
> 
> 在安全性谱的另一端是Jaeger和Stepanovs以及Poettering和Rösler的作品，它们对安全消息传递方案可以达到的最佳安全性进行了刻画。然而，他们的概念验证构造相比Signal而言效率损失极大。此外，这一限制似乎是固有的。
> 
> 本文探讨了中间的领域：我们的起点是基本的高效构造，然后我们探究在不损失太多效率的前提下，我们能够达到多接近最佳安全性的程度。我们提出了一种构造，其保证性比Signal更强，比最佳安全性略弱，但效率更接近Signal（仅使用标准的公钥密码学）。
> 
> 在技术层面上，实现最佳保证性固有地需要进行键更新的公钥基元，其中更新信息允许公开。我们考虑密钥更新信息为秘密。由于状态暴露暂时破坏了机密性，我们精心设计了这种具有秘密更新能力的基元，如果所谓的秘密更新信息泄漏，其安全性可以逐渐降低。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_6](https://doi.org/10.1007/978-3-030-17653-2_6)
## Indistinguishability Obfuscation Without Multilinear Maps: New Methods for Bootstrapping and Instantiation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
### 摘要
> 构建不可区分性混淆（\(\mathsf{iO}\)）[17]是密码学中一个核心的未解决问题。我们提供了新的方法来推进这一目标。我们的贡献可以总结如下：
> 
> 1. 引导。在最近的一项工作中，林和Tessaro [71]（LT）展示了可以使用（i）多项式度数为L的功能加密（\(\mathsf {FE}\)），（ii）具有分块局部性L和多项式扩展的伪随机生成器（\(\mathsf {PRG}\)），以及（iii）学习与错误（\(\mathsf{LWE}\)）构造\(\mathsf{iO}\)。由于存在从双线性映射的标准假设[16, 68]构造二次多项式的\(\mathsf {FE}\)，理想情况下设置\(L=2\)，可以得到从广泛接受的假设中得到的\(\mathsf{iO}\)。
> 
> 不幸的是，不久之后就有研究[18, 73]表明，具有局部区块度为2并且LT构造所需的扩展因子具体为\(\varOmega (n \cdot 2^{b(3+\epsilon )})\)（其中n为输入长度，b为块长度）的\(\mathsf{PRG}\)不存在。在最坏情况下，这些下界排除了具有\(\varOmega (n \cdot 2^{b(2+\epsilon )})\)伸展的2块局部\(\mathsf{PRG}\)。虽然[18, 73]对于基于双线性映射构建\(\mathsf{iO}\)提供了强有力的否定证据，但它们无法完全排除可能性；一个诱人的差距仍然存在。根据当前的下界状态，具有扩展因子\(\varOmega (n \cdot 2^{b(1+\epsilon )})\)的2块局部\(\mathsf{PRG}\)的存在仍然是开放的，尽管这种伸展并不足以用于LT引导，因此对于\(\mathsf{iO}\)的相关性尚不清楚。
> 
> 在这项工作中，我们改进情况如下。
> 
> (a) 放宽对布尔伪随机生成器的要求：在这项工作中，我们展示了下界留下的扩展因子的窄范围确实足够用于\(\mathsf{iO}\)。我们展示了一种从（i）具有度数L的多项式的\(\mathsf {FE}\)，（ii）具有分块局部性L和扩展因子\(\tilde{\varOmega }(n \cdot 2^{b(1+\epsilon )})\)的\(\mathsf{PRG}\)，以及（iii）\(\mathsf{LWE}\)（或\(\mathsf{RLWE}\)）构造\(\mathsf {FE}\)的新方法。
> 
> (b) 拓宽足够随机性生成器的类别：我们的引导定理可以使用比在\(\mathsf{iO}\)中迄今考虑的更广泛的伪随机生成器类别来实例化，并且可以绕过已知的对于\(\mathsf{iO}\)足够的\(\mathsf{PRG}\)的算术度数的下界[18, 73]；特别地，这些可以采用算术度数为2的实例，基于双线性映射和\(\mathsf{LWE}\)额外的假设来获得\(\mathsf{iO}\)。更详细地说，我们可以使用以下两类\(\mathsf{PRG}\)

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_7](https://doi.org/10.1007/978-3-030-17653-2_7)
## Sum-of-Squares Meets Program Obfuscation, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited)**
### 作者
* Boaz Barak, Harvard University, Cambridge, USA
* Samuel B. Hopkins, University of California, Berkeley, USA
* Aayush Jain, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
* Pravesh Kothari, Princeton University and the Institute for Advanced Study, Princeton, USA
### 摘要
> 我们研究了由二次多项式计算的伪随机生成器变体的安全性攻击。特别是我们给出了打破单向映射的一般条件，其中每个输出都是输入的二次多项式（在实数域上）。作为推论，我们打破了Ananth，Jain和Sahai（ePrint 2018）以及Agrawal（ePrint 2018）最近提出的用于构建不可区分混淆的安全性假设的二次度候选。我们提出了猜想，说明我们的攻击扩展到更广泛的实例，并特别提供了实验证据表明我们打破了Lin-Matt（ePrint 2018）的假设。我们的算法使用半定规划，具体来说，使用了低秩恢复（Recht，Fazel，Parrilo 2007）和矩阵补全（Gross 2009）的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_8](https://doi.org/10.1007/978-3-030-17653-2_8)
## How to Leverage Hardness of Constant-Degree Expanding Polynomials over \mathbb R R to build i풪 i O.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)**
### 作者
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### 摘要
> 在这项工作中，我们基于双线性群上的SXDH假设，介绍和构建了任何常数\(D \ge 3\)的D限制函数加密（FE）。这个概念是对最近由Ananth等人（ePrint 2018）在通用双线性群模型中引入和构建的3限制FE的推广。
> 
> 一个\(D=(d+2)\)限制的FE方案是一个密钥FE方案，允许一个加密器有效地加密形式为\(M=(\varvec{x},\varvec{y},\varvec{z})\)的消息。这里，\(\varvec{x}\in \mathbb {F}_{\mathbf {p}}^{d\times n}\)，\(\varvec{y},\varvec{z}\in \mathbb {F}_{\mathbf {p}}^n\)。可以为函数\(f=\varSigma _{\varvec{I}= (i_1,..,i_d,j,k)}\ c_{\varvec{I}}\cdot \varvec{x}[1,i_1] \cdots \varvec{x}[d,i_d] \cdot \varvec{y}[j]\cdot \varvec{z}[k]\)发布函数密钥，其中系数\(c_{\varvec{I}}\in \mathbb {F}_{\mathbf {p}}\)。如果函数密钥和密文已知，则可以学习\(f(\varvec{x},\varvec{y},\varvec{z})\)，如果该值的绝对值受安全参数和n的多项式界限制。安全要求是密文隐藏了\(\varvec{y}\)和\(\varvec{z}\)，但不要求隐藏\(\varvec{x}\)。因此，\(\varvec{x}\)可以被视为公共属性。
> 
> D限制FE允许对常数次多项式进行有用的评估，同时只需要在双线性群上的SXDH假设。因此，它是利用常数次多项式在\(\mathbb {R}\)上扩展的硬度的强大工具。特别地，我们在Ananth等人的工作基础上展示了如何建立不可区分混淆（\(i\mathcal {O}\)），仅假设SXDH在双线性群上成立，以及LWE和与\(\mathbb {R}\)上常数次多项式的弱伪随机性质相关的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_9](https://doi.org/10.1007/978-3-030-17653-2_9)
## XOR-Counts and Lightweight Multiplication with Fixed Elements in Binary Finite Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)**
### 作者
* Lukas Kölsch, University of Rostock, Rostock, Germany
### 摘要
> XOR-度量衡量二进制有限域中某些算术操作的效率。我们对过去使用的两种不同的XOR-度量提出一些新的结果进行了证明。特别地，我们否定了[10]中的一个猜想。我们考虑在二进制有限域中使用一个固定元素进行乘法的实现。在这里，我们完全描述了所有乘法矩阵可以使用精确地2个XOR操作实现的元素，证实了[2]中的一个猜想。此外，我们在更一般的情况下提供了新的结果和示例，显示出在实现中可以有显著的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_10](https://doi.org/10.1007/978-3-030-17653-2_10)
## DLCT: A New Tool for Differential-Linear Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis)**
### 作者
* Achiya Bar-On, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizman, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
### 摘要
> 差分密码分析和线性密码分析是对分组密码进行密码分析的两种最知名的技术。1994年，Langford和Hellman提出了差分线性（DL）攻击，该攻击基于将被攻击的密码E分成两个子密码\(E_0\)和\(E_1\)，并将\(E_0\)的差分特性与\(E_1\)的线性近似组合起来对整个密码E进行攻击。差分线性技术被用于对许多密码进行攻击，包括AES决赛选手Serpent，ICEPOLE，COCONUT98，Chaskey，CTC2和8轮DES。
> 
> 过去几年中，已有几篇旨在对DL攻击进行形式化并在其中准确估计其复杂性的论文。其中，Blondeau，Leander和Nyberg（《密码学杂志》，2017）的最新作品在仅假设两个子密码\(E_0\)和\(E_1\)是独立的情况下得出了一个准确的表达式。
> 
> 在本文中，我们展示了在许多情况下，两个子密码之间的依赖性显著影响了DL攻击的复杂性，并且尤其是可以被对手利用来使攻击更加高效。我们介绍了差分线性连通性表（DLCT），它允许我们考虑两个子密码之间的依赖性，并选择在\(E_0\)中的差分特性和在\(E_1\)中的线性近似，以利用这种依赖性。然后，我们展示了如何使用快速傅里叶变换有效地构建DLCT。最后，我们利用DLCT对ICEPOLE和8轮DES进行差分线性攻击，并解释了对于Serpent和CAESAR决赛选手Ascon的已公布的实验结果如何与标准的差分线性框架不符。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_11](https://doi.org/10.1007/978-3-030-17653-2_11)
## Linear Equivalence of Block Ciphers with Partial Non-Linear Layers: Application to LowMC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Daniel Kales, Graz University of Technology, Graz, Austria
* Sebastian Ramacher, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Angela Promitzer, Graz, Austria
### 摘要
> 《LowMC》是由Albrecht等人在2015年设计的一种块密码系列。它针对实际实施的多方计算、完全同态加密和零知识证明进行了优化。《LowMC》被用于提交到NIST的后量子标准化项目的《Picnic》签名方案中，并成为其他新型后量子密码系统中的一个重要组件。许多《LowMC》实例使用了相对较新的设计策略（由Gérard等人在CHES 2013上提出），即在每一轮中仅将非线性层应用于状态的一部分，其中非线性操作的不足部分通过繁重的线性代数进行部分补偿。由于高线性代数复杂度已成为几个应用的瓶颈，设计人员提出了一个开放问题，即如何在不引入额外的非线性操作（或者不损害安全性）的情况下减少线性代数的复杂度。
> 
> 在本文中，我们考虑块大小为n、部分非线性层大小为\(s \leq n\)和r个加密轮的《LowMC》实例。我们重新设计了《LowMC》的线性组件，使其在几乎所有方面都能改善《LowMC》的性能，同时保持其规格。我们的大部分优化都适用于具有部分非线性层的所有SP网络，并对这种相对较新的设计方法提供了新的见解。
> 
> 我们的主要结果表明，当\(s < n\)时，每个《LowMC》实例都属于一类等效实例，它们的线性层有所不同。然后，我们从这个类中选择一个代表性实例，该实例的加密（和解密）比任意实例都能实现更高的效率。这产生了一种新的加密算法，它等效于标准算法，但将线性层的评估时间和存储空间从\(r \cdot n^2\)比特减少到大约\(r \cdot n^2 - (r-1)(n-s)^2\)比特。此外，我们还减小了《LowMC》的轮密钥和常量的大小，并优化了其密钥计划和实例生成算法。所有这些优化都能为较小的s和合理选择的r提供实质性的改进。最后，我们规范化了块密码的线性等价概念，并证明了我们结果中一些的最优性。
> 
> 我们在不同的《LowMC》应用（如《Picnic》）中对我们的优化进行了全面的基准测试，结果显示运行时间和内存消耗的改进因子通常在2倍到40倍之间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_12](https://doi.org/10.1007/978-3-030-17653-2_12)
## Distributed Differential Privacy via Shuffling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling)**
### 作者
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Adam Smith, Computer Science Department, Boston University, Boston, USA
* David Zeber, Mozilla Foundation, Mountain View, USA
* Maxim Zhilyaev, Mountain View, USA
### 摘要
> 我们考虑设计可扩展、强大的协议来计算有关敏感数据的统计信息的问题。具体而言，我们研究如何在分布式环境中设计差分私有协议，其中每个用户持有一份私有数据。文献中主要考虑了两种模型：中心模型，在该模型中，一个可信服务器明文收集用户数据，可以获得更高的准确性；本地模型，在该模型中，用户使用随机化方法对数据进行处理，无需信任服务器，但准确性有所限制。迄今为止，希望在没有可信服务器的情况下实现中心模型的准确性的尝试主要集中在密码多方计算（MPC）的变体上，这限制了可扩展性。
> 
> 在本文中，我们开始分析研究了一种具有随机模型的分布式差分私有算法，该模型位于本地模型和中心模型之间。这种易于实现的模型是ESA框架的一种特殊情况，它使用一个匿名通道来随机排列一组用户提供的消息。对于求和查询，我们展示了该模型提供了中心模型的能力，同时避免了信任中心服务器和密码安全函数评估的复杂性。更一般地，我们提供了证据表明，随机模型的能力严格位于中心模型和本地模型之间：对于模型的自然限制，我们展示了广泛研究的选择问题的随机协议所需的样本复杂性指数级高于中心模型协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_13](https://doi.org/10.1007/978-3-030-17653-2_13)
## Lower Bounds for Differentially Private RAMs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams)**
### 作者
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### 摘要
> 在这项工作中，我们研究隐私保护存储原语，适用于差分隐私框架下的外包数据库上的数据分析。差分隐私数据分析的目标是在不泄露任何个人隐私的情况下，披露一个群体的全局特性。通常，差分隐私攻击者仅能获得全局特性。对于外包数据库的情况，则需要考虑攻击者可以观察到数据的访问模式。匿名RAM（ORAM）可以用于隐藏访问模式，但在某些情况下，为了与差分隐私兼容并只保护个别访问的隐私，使用ORAM可能过于冗余。
> 
> 我们考虑\((\epsilon ,\delta )\)-差分隐私RAM，它是ORAM的弱化版本，仅保护个别操作，似乎更适合用于外包数据库上的数据分析。由于差分隐私RAM的安全性较弱于ORAM，有希望可以绕过Larsen和Nielsen [CRYPTO ’18]提出的（存储n个b位条目的数组和具有c位内存的客户端）的带宽下界\(\varOmega (\log (nb/c))\)。然而，我们的回答是否定的，并且针对\(\epsilon = O(1)\)和\(\delta \le 1/3\)的隐私预算提出了一个\(\varOmega (\log (nb/c))\)的带宽下界。
> 
> ORAM下界所使用的信息传输技术似乎不能适应差分隐私较弱的安全性保证。相反，我们通过调整时序图技术来证明我们的下界。据我们所知，这是第一篇使用时序图技术研究隐私保护存储原语底限的论文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_14](https://doi.org/10.1007/978-3-030-17653-2_14)
## Beyond Birthday Bound Secure MAC in Faulty Nonce Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)**
### 作者
* Avijit Dutta, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Suprita Talnikar, Indian Statistical Institute, Kolkata, India
### 摘要
> **加密后认证（EtM）**是一种常用的认证加密（AE）模式。不幸的是，几乎所有遵循EtM范式的设计，包括TLS的AE套件，在使用过程中容易受到nonce滥用的攻击。重复使用一次nonce值会泄漏哈希密钥，从而导致一种通用伪造攻击。只有两种遵循EtM范式且能够抵抗nonce滥用攻击的认证加密方案，即GCM-RUP (CRYPTO-17)和\(\mathsf {GCM/2}^{+} \) (INSCRYPT-12)。然而，它们在尊重nonce设置的情况下仅保证到生日界限内的安全性，这对于单个密钥的数据限制会有一定的限制。在本文中，我们展示了一种基于nonce的EHtM（FSE-10）变体nEHtM，该变体使用分组密码构建，在遭受nonce滥用时具有超越生日界限（BBB）的不可伪造安全性。我们将nEHtM与使用EtM范式的CENC（FSE-06）加密模式相结合，实现了基于nonce的AE方案CWC+。CWC+与CWC AE方案（FSE-04）非常接近（仅需要更多的异或运算），不仅提供了BBB安全性，还在遭受nonce滥用时具有安全性的优雅退化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_15](https://doi.org/10.1007/978-3-030-17653-2_15)
## Tight Time-Memory Trade-Offs for Symmetric Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption)**
### 作者
* Joseph Jaeger, University of California, San Diego, La Jolla, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 具体安全证明以攻击者的时间/查询复杂度为函数给出上限。然而，密码分析表明，其他资源限制，尤其是攻击者的内存，可能会使可实现的优势变小，因此这些已证明的上限过于悲观。然而，处理内存限制已经超出了现有的安全证明的范围。
> 
> 本文开始研究基本对称密码学的时间-内存的折衷。我们展示了受到生日攻击界限影响的方案，如计数器模式加密，在攻击者的内存减少时变得更安全（从时间复杂度的角度）。
> 
> 这项工作的一个关键步骤是对开关引理的泛化：对于具有S位内存并发出q个不同查询的对手，我们证明了一个与置换不可区分的n到n位随机函数，只要 \(S \times q \ll 2^n\)。这个结果假设了一个组合猜想，我们对此进行了讨论，并立即推出了CTR和OFB加密的确定性有状态版本的折衷。
> 
> 我们还展示了一个基于安全PRF的随机CTR安全性的无条件时间-内存折衷。通过前面提到的猜想，我们将结果扩展到假设只有一个分组的消息加密时，依赖于PRP。
> 
> 我们的结果仅依赖于基础分组密码的标准PRF/PRP安全性。我们将证明的核心框架放在可能独立感兴趣的流式算法的不可区分性的一般框架中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_16](https://doi.org/10.1007/978-3-030-17653-2_16)
## Non-Malleable Codes Against Bounded Polynomial Time Tampering.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering)**
### 作者
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Maryland, College Park, USA
* Huijia Lin, University of Washington, Seattle, USA
### 摘要
> 我们构建了高效的非可塑编码(NMC)，这些编码在计算上对任何固定多项式时间内可计算的函数的篡改是安全的。我们的构造是在纯净的（无CRS）模型中，并且需要以下假设：（1）对于某个指数\(2^{\beta n}\)（\(\beta >0\)）大小的\(NP\)电路而言，\(\mathbf{E}\)难以解（在去随机化文献中被广泛使用），（2）存在亚指数陷门置换，和（3）具有亚指数声誉的\(\mathbf{P}\)-证书存在。
> 
> 虽然构造针对任意多项式时间篡改安全的NMC是不可能的（Dziembowski，Pietrzak，Wichs，ICS ’10），但是已经通过概率构造证明了存在针对\(O(n^c)\)时间篡改函数（对于任何固定的c）安全的NMC（Cheraghchi 和 Guruswami，ITCS ’14）。在Eurocrypt ’14中，假设具有比篡改函数的运行时间更长的不可篡改CRS的情况下给出了一个显式构造。在本文中，我们展示了在计算假设下，我们可以绕过这些限制。具体来说，在上述假设下，我们获得了纯模型中针对\(O(n^c)\)时间篡改函数（对于任何固定的c）的非可塑编码，其码字长度与篡改时间限制无关。
> 
> 我们对NMC的新构造与非交互式非可塑性承诺有所联系。事实上，我们展示了在NMC设置中，只需具有一个称为准非可塑性承诺的较弱概念就足够了——这些是在纯模型中的非交互式、非可塑性承诺，在其中对手以\(O(n^c)\)时间运行，而诚实方可以以更长（多项式）时间运行。然后，我们从任何亚指数OWF和\(\mathbf{E}\)对某些指数大小的\(\mathbf{NP}\)电路难以解的假设中构造出一个4标签的准非可塑性承诺，并使用标签放大技术支持指数数量的标签。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_17](https://doi.org/10.1007/978-3-030-17653-2_17)
## Continuous Non-Malleable Codes in the 8-Split-State Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model)**
### 作者
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 不可塑代码（NMCs）是由Dziembowski、Pietrzak和Wichs [20]引入的，它在传统的纠错（甚至纠错检测）无法实现的情况下提供了有用的消息完整性保证；例如，当攻击者可以完全覆盖编码消息时。NMC已经成为编码理论和密码学交叉领域中的基本对象。特别是，对非可塑代码和相关的非可塑提取器的研究进展，已经为构建多源随机性提取器等更基本问题提供了新的见解和进展。最近的大量研究工作集中在分隔状态模型中非可塑代码的各种构建上。文献中引入了许多NMC的变体，例如强NMC，超强NMC和连续NMC。其中最一般，也是最有用的概念是连续非可塑代码的概念，它允许敌手进行连续的篡改。我们在恒定的分隔状态模型中提出了第一个高效的信息理论安全的连续非可塑代码。我们相信我们的主要技术结果可能会具有独立的兴趣，并且其中一些想法将来可能用于在其他相关问题上取得进展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_18](https://doi.org/10.1007/978-3-030-17653-2_18)
## Correlated-Source Extractors and Cryptography with Correlated-Random Tapes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在本文中，我们考虑一个情景，即一方在密码算法的多次执行中使用相关随机带。我们研究在这种情况下是否仍然可以保持安全性。作为例子，我们介绍了相关带零知识和相关带多方计算的概念。在多次执行中，即使一方使用相关随机带，仍然必须保持零知识属性和理想/实际模型的安全性。
> 
> 我们的构造基于一种新类型的随机性提取器，我们称之为相关源提取器。相关源提取器可以看作是非可变性提取器的对偶，并允许敌对方选择多个篡改函数对随机源进行操作。相关源提取器保证即使在篡改后的源上提取器的输出已知，原始源上的输出仍然是均匀随机的。基于（种子化的）相关源提取器和可重置安全计算协议，我们展示了如何直接在CRS模型中获得相关带零知识和相关带多方计算的积极结果。考虑到已知在完美随机性密码学上的不可能结果，这是最紧密的。
> 
> 我们的主要技术贡献是一个显式构造的相关源提取器，其中种子的长度与篡改次数无关。此外，我们还提供了（非显式的）几乎最优参数的相关源提取器的存在性结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_19](https://doi.org/10.1007/978-3-030-17653-2_19)
## Revisiting Non-Malleable Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing)**
### 作者
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, UC Berkeley, Berkeley, USA
### 摘要
> 一个阈值秘密共享方案（阈值t）允许分销者在一组参与方中分享一个秘密，使得任何t人或更多人的组可以恢复此秘密，而至多t-1人的组则无法了解到关于此秘密的任何信息。在Goyal和Kumar（STOC'18）的最近工作中，他们引入了一个防篡改的阈值秘密共享方案，当其份额受到篡改攻击时，这个方案可以保护阈值秘密共享。特别的，这个方案可以保证从篡改份额中恢复的秘密要么是原来的秘密，要么与原来的秘密无关。
> 
> 在这项工作中，我们继续研究阈值防篡改秘密共享方案，并针对独立篡改每份秘密的篡改函数类。我们注重提高效率并保证更强的安全属性。我们得出以下结果：
> 
> 对比改进。我们提出了第一个阈值防篡改秘密共享方案，其比率 > 0。具体来说，对于任意的 n，t ≥ 4， 我们给出了一个 t-n 防篡改秘密共享方案，其比率为 \(\varTheta (\frac{1}{t\log ^2 n})\)。 在先前的构建中，比率是 \(\varTheta (\frac{1}{n\log m})\)，其中 m 是秘密的长度，因此随着 \(m \rightarrow \infty \)，比率趋向于 0。此外，我们还优化了我们的构造参数，并提供了一个具体有效的方案。
> 
> 多次篡改。我们首次提出了在有界篡改的更强安全环境中安全的阈值防篡改秘密共享方案，其中份额被多个（但数量有限）可能不同的篡改函数篡改。这种方案的比率是 \(\varTheta (\frac{1}{k^3t\log ^2 n})\)，其中 k 是篡改次数的事先界限。我们通过证明无法在事先无界限的篡改次数的情况下，拥有一个安全的阈值防篡改的秘密共享方案来补充这个积极的结果。
> 
> 通用访问结构。 我们扩大了我们的结果，超出了阈值秘密共享，并提供了对多次（有限）篡改攻击安全的更通用的单调访问结构的率效非易篡改秘密共享方案的构建方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_20](https://doi.org/10.1007/978-3-030-17653-2_20)
## Multi-party Virtual State Channels.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels)**
### 作者
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Lisa Eckey, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 智能合约是以程序代码编写的自动执行协议，被认为是区块链技术的主要应用之一。尽管它们得到了以太坊等知名加密货币的支持，但其进一步推广受到了根本性的可扩展性挑战的阻碍。例如，在以太坊中，合约执行的延迟超过15秒，并且每秒可以执行的合约数量非常有限。状态通道网络是旨在解决这些挑战的核心原语之一。它们在慢且昂贵的区块链之上形成第二层，从而以微不足道的成本实现即时的合约处理。
> 
> 在这项工作中，我们提供了第一个完整描述的状态通道网络，具有以下关键特点。首先，它支持虚拟多方状态通道，即可以在没有区块链交互的情况下创建和关闭状态通道，并允许具有任意数量方的合约。其次，我们协议的最坏情况时间复杂度对于任意复杂的通道都是恒定的。这与现有的虚拟状态通道构建相比，其最坏情况时间复杂度与涉及方的数量呈线性关系。除了我们的新构建，我们还提供了一个全面的模块化设计和安全分析模型。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_21](https://doi.org/10.1007/978-3-030-17653-2_21)
## Aggregate Cash Systems: A Cryptographic Investigation of Mimblewimble.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)**
### 作者
* Georg Fuchsbauer, Inria, Paris, France
* Michele Orrù, Inria, Paris, France
* Georg Fuchsbauer, École normale supérieure, CNRS, PSL, Paris, France
* Michele Orrù, École normale supérieure, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> Mimblewimble是一个由匿名作者在2016年提出的电子现金系统。它结合了最初为比特币设想的几种增强隐私的技术，如机密交易（Maxwell，2015年）、交易的非交互式合并（Saxena，Misra，Dhar，2014年）和交易输入和输出的剪切（Maxwell，2013年）。作为一个显著的结果，硬币在花费后可以被删除，同时保持账本的公共可验证性，而这在比特币中是不可能的。这导致账本的空间节省巨大，并为新用户提供了效率提升，他们必须验证系统的视图。
> 
> 在本文中，我们对Mimblewimble进行了可证明安全性分析。我们为Mimblewimble的一个抽象称为聚合现金系统提供了精确的语法和形式化安全性定义。然后，在这个定义框架下正式证明了Mimblewimble的安全性。我们的结果特别意味着两种自然实例（使用Pedersen承诺和Schnorr或BLS签名）在标准假设下被证明安全，不会发生通胀和硬币被窃取的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_22](https://doi.org/10.1007/978-3-030-17653-2_22)
## Proof-of-Stake Protocols for Privacy-Aware Blockchains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains)**
### 作者
* Chaya Ganesh, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Aarhus, Denmark
### 摘要
> 权益证明（PoS）协议正在成为对区块链（或分布式账本）中共识的浪费性的工作证明（PoW）协议最有希望的替代方法之一。然而，当前的PoS协议固有地揭示了利益相关者的身份和财富，因此似乎与保护隐私的加密货币（例如ZCash，Monero等）不兼容。本文对具有隐私属性的PoS协议进行了正式研究。我们的研究结果包括：
> 
> 1. 一个（理论上的）可行性结果，表明可以构造一类通用的私密PoS（PPoS）协议，并将隐私添加到一类广泛的PoS协议中，
> 
> 2. 一个保护隐私的流行PoS协议Ouroboros Praos的版本。
> 
> 为了实现我们的结果，我们定义了匿名可验证的随机函数的概念，我们相信这个概念具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_23](https://doi.org/10.1007/978-3-030-17653-2_23)
## Consensus Through Herding.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding)**
### 作者
* T.-H. Hubert Chan, The University of Hong Kong, Lung Fu Shan, Hong Kong
* Rafael Pass, Cornell and Thunder Research, New York, USA
* Elaine Shi, Cornell and Thunder Research, New York, USA
### 摘要
> 状态机复制（SMR）是一个关键的抽象概念，用于一组节点达成对不断增长、线性有序的事务记录的协议。在去中心化的加密货币应用中，我们希望设计的SMR协议能够（1）抵抗适应性的腐败；并且（2）实现小的带宽和短的确认时间。在适应性腐败的情况下（没有依赖于强假设，如抹除模型或工作证明），所有过去构建SMR的方法都无法实现短的确认时间或小的带宽。
> 
> 我们提出了一个全新的达成共识的范例，这与经典方法有很大的不同。我们的协议受到一种被称为从众的社会现象的启发，人们更倾向于做被视为社会规范的选择。在我们的共识协议中，领导者选举和投票融合为一个（随机）过程：在每一轮中，每个节点都尝试为其认为到目前为止最受欢迎的项目投票：这样的投票尝试并不总是成功的，但成功的概率却是确定的。重要的是，节点被选中为v投票的概率与它被选中为\(v' \ne v\)投票的概率是独立的。我们会展示如何利用适当的，适应性安全的加密构建块，来实现这样一个分布式的，随机的选举过程。
> 
> 我们证明，令人惊讶的是，这个新的范例不仅可以达成共识（例如，在加密货币系统中对一批未确认的交易达成共识），而且它还允许我们推导出第一个SMR协议，即使在适应性腐败的情况下，该协议只需要对数级别的许多轮数和对数级别的许多诚实消息进行多播以确认每批交易；而且重要的是，我们在标

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_24](https://doi.org/10.1007/978-3-030-17653-2_24)
