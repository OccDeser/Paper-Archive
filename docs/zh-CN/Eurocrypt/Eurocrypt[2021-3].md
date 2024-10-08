# Eurocrypt[2021-3]
## sf LogStack: Stacked Garbling with O(b log b) Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#sf-logstack-stacked-garbling-with-o-b-log-b-computation)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 安全的双方计算（2PC）可以通过使用加密电路（GC）有效地实现任意程序。直到最近，人们普遍认为，必须通过网络传输与整个程序成比例的GC，包括由于条件分支而完全丢弃的部分程序。最近的研究表明这种观念是错误的，只有与最长程序执行路径成比例的通信就足够了（Heath和Kolesnikov，CRYPTO 20，[HK20a]）。尽管这项最近的研究减少了通信量，但增加了计算量。对于具有b个分支的条件，玩家使用O（b²）计算（传统的GC仅使用O（b））。
> 
> 我们的方案LogStack将堆叠式加密计算从O（b²）减少到O（blog b）, 而通信量与[HK20a]相同。[HK20a]增加计算量的原因是在评估非活动分支时出现的垃圾标签的盲目收集。垃圾由昂贵的复用器进行收集。从高层面上看，我们重新设计了堆叠和垃圾回收以避免二次方的扩展。
> 
> 我们的构造也更节省空间：[HK20a]算法需要O（b）空间，而我们的算法仅使用O（log b）空间。这种空间效率使得即使是一般的设置也能处理大量的分支。
> 
> [HK20a]假设了一个随机预言（RO）。我们追踪了这种需求的来源，规范了对基本密码编码方案的简单而自然的附加假设，并且不再依赖RO：LogStack在标准模型中是安全的。尽管如此，LogStack可以被实例化为基于非标准假设的典型GC技巧，如自由XOR和半门，因此可以以高效率实现。
> 
> 我们实现了LogStack（在RO模型中，基于半门加密）并报告了性能。就挂钟时间而言，在少于16个分支的情况下，我们的性能与[HK20a]相当；对于更大的分支因子，我们的方法显然胜过[HK20a]。例如，给定1024个分支，我们的方法快了31倍。
> 
> 请不要犹豫与我们联系以了解更多信息。
> 
> Thank you!

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_1](https://doi.org/10.1007/978-3-030-77883-5_1)
## Large Scale, Actively Secure Computation from LPN and Free-XOR Garbled Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits)**
### 作者
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Aner Ben-Efraim, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Nigel P. Smart, Department of Computer Science, University of Bristol, Bristol, UK
* Eduardo Soria-Vazquez, Department of Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 我们提出了一种基于编码电路的MPC（多方计算）协议，该协议既具有积极的安全性，又支持自由XOR技术，并且每个参与方的通信复杂度为O(n)。这一改进基于Ben-Efraim、Lindell和Omri的协议，后者仅实现了被动安全性，而不支持自由XOR。我们的构建基于一种新型的基于LPN（线性近似）的加密变体，但它的缺点是需要一个相当昂贵的编码阶段。为了解决这个问题，我们提出了第二个协议，假设至少n/c个参与方是诚实的（对于任意固定值c）。这个第二个协议可以在预处理过程中显著减轻负担，但会稍微牺牲在线效率。我们通过实施演示了我们的评估阶段的实用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_2](https://doi.org/10.1007/978-3-030-77883-5_2)
## Threshold Garbled Circuits and Ad Hoc Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#threshold-garbled-circuits-and-ad-hoc-secure-computation)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Vipul Goyal, NTT Research and CMU, Pittsburgh, PA, USA
* Rafail Ostrovsky, UCLA Department of Computer Science and Department of Mathematics, Los Angeles, CA, USA
### 摘要
> 加密技术中，乱序电路（GCs）是基础和强大的工具，自引入以来已经考虑了许多乱序电路的变体。乱序电路的一个重要特性是，只有当准确地获得每个输入线的一个密钥时，它们才能安全地评估：既不多也不少。在这项工作中，我们研究了以下情况：1）某些线路密钥丢失，但我们仍然有兴趣计算乱序电路的输出；2）乱序电路的评估者可能同时拥有常数个线路的两个密钥。我们通过非交互多方计算（NIMPC）的概念来研究这个问题，该概念与乱序电路有密切的关联。在这个概念中，有一个固定数量的参与方（n），他们可以从可信设置中获取相关信息。然后，这些参与方可以将他们的输入发送给一个评估者，评估者可以计算出函数的输出。类似于Beimel等人提出的临时安全计算的概念[ITCS 2016]，我们考虑当在线阶段参与的方少于n方时，并且还允许这些方与评估者串通。我们将这个概念称为阈值NIMPC。
> 
> 此外，我们还证明了当在线阶段参与的方数是固定阈值\(l\le n\)时，可以安全地评估任何\(l\)输入函数。我们的结果是基于一个新的秘密分享方案（可能具有独立的兴趣）以及Benhamouda、Krawczyk和Rabin提出的结果[Crypto 2017]。我们的协议可以用于在信息理论的环境中计算\(NC^1\)中的任何函数，并且假设单向函数可以计算P中的任何函数。
> 
> 作为第二（也是主要）贡献，我们考虑了一个稍微不同的安全概念，即在线阶段参与的方数没有指定，并且可以是高于阈值\(l\)的任意数c（在这种情况下，评估者不能与其他方串通）。我们解决了Beimel、Ishai和Kushilevitz留下的一个未解问题[Eurocrypt 2017]，展示了如何在加入了误差学习假设的情况下，为c为常数的情况构建一个安全的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_3](https://doi.org/10.1007/978-3-030-77883-5_3)
## Indistinguishability Obfuscation from Simple-to-State Hard Problems: New Assumptions, New Techniques, and Simplification.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification)**
### 作者
* Romain Gay, IBM, Zurich, Switzerland
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Amit Sahai, UCLA, Los Angeles, CA, 90095, USA
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### 摘要
> 在这项工作中，我们研究了构建函数加密和不可区分混淆（\(i\mathcal {O}\)）所需的一组简单陈述的假设，以支持由多项式大小电路描述的所有函数。我们的工作在多个方面改进了Jain、Lin、Matt和Sahai（Eurocrypt 2019）的最新工作。
> 
> 新假设：在我们的工作之前，所有从简单假设中构建\(i\mathcal {O}\)的方法都需要涉及LWE样本和整数上的常数次数多项式的新颖伪随机生成器，该多项式在LWE样本的误差上进行求值。相比之下，自Goldreich (2000)的工作以来，可以由常数次数多项式计算的布尔伪随机生成器（PRGs）已经被广泛研究。（Goldreich和后续的研究探讨了具有常数局部性的布尔伪随机生成器，可以由常数次数多项式计算。）我们展示了如何用足够拉伸的适当布尔伪随机生成器替换先前工作中使用的整数上的新型伪随机对象，当与具有合适参数的二元误差LWE结合使用时。二进制误差LWE和常数次数的Goldreich PRGs自我们工作之前就成为了广泛密码分析的研究课题，因此我们通过针对这些对象的密码分析研究中的算法的安全性来支持我们的假设的可信度。
> 
> 新技术：我们引入了一些新技术：
> 
> - 我们展示了如何构建部分隐藏的公钥函数加密，支持消息的秘密部分的2次函数，以及消息的公共部分的算术\(\mathsf {NC^1}\)函数，只假设对称配对群上的标准假设。
> 
> - 我们构建了仅基于LWE假设，对于所有采用线性密钥生成的电路的单密文秘密密钥函数加密。
> 
> 简化：与先前的工作不同，我们的新技术还使我们能够直接构建多项式大小电路的公钥函数加密（无需调用任何引导定理，也无需从秘密密钥到公钥函数加密的转换），并且仅基于底层假设的多项式困难性。函数加密方案满足了对效率的强烈要求，其中密文的大小仅以电路输出大小而不是电路大小为次线性增长。最后，假设底层假设是亚指数难的，我们可以引导这个构造来实现\(i\mathcal {O}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_4](https://doi.org/10.1007/978-3-030-77883-5_4)
## Candidate Obfuscation via Oblivious LWE Sampling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#candidate-obfuscation-via-oblivious-lwe-sampling)**
### 作者
* Hoeteck Wee, NTT Research Inc., San Francisco, USA
* Daniel Wichs, NTT Research Inc., San Francisco, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们提出了一种新的简单的区分难度混淆（iO）的构造候选方案。我们的方案受到格子和学习与错误（LWE）技术的启发，但我们无法在标准假设下证明其安全性。相反，我们制定了一个新的可证伪假设，在该假设下该方案是安全的。此外，该方案很可能实现了后量子安全性。
> 
> 我们的构造基于Brakerski，Döttling，Garg和Malavolta（EUROCRYPT'20）最近提出的“分裂全同态加密”框架，并为该框架提供了一个新的实例化。作为第一步，我们构建了一个iO方案，可以根据LWE假设证明其安全性，并且可以在不知道相应密钥的情况下隐秘生成LWE样本。我们定义了一种明确的LWE隐秘采样概念，足以支持该构造。已知使用iO可以隐秘采样来自任何分布（从非常强的意义上），而我们的结果提供了一个反证，表明能够隐秘采样来自特定LWE分布（从更弱的意义上）也意味着iO。作为第二步，我们给出了隐秘LWE采样的一种启发式压缩方法。在非常高的层面上，我们通过使用加密的伪随机函数在同态方式下生成伪随机LWE样本来实现这一点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_5](https://doi.org/10.1007/978-3-030-77883-5_5)
## Black-Box Non-interactive Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#black-box-non-interactive-non-malleable-commitments)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, USA
* George Lu, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### 摘要
> 最近在从明智的假设中建立非互动的非可塑承诺方面取得了令人兴奋的进展。所有提出的方法都分为两个步骤。首先，基于各种次指数难度假设获得非常小的标签/身份空间的简单“基本”承诺方案。接下来，假设次指数非交互见证不可区分证明(NIWIs)和无钥匙碰撞抵抗哈希函数的变种，构建非互动编译器，将基于标签的小标签空间的非可塑承诺转换为基于标签的更大标签空间的非可塑承诺。
> 
> 我们提出了第一个非互动非可塑承诺的黑匣子构造。我们的关键技术贡献是非互动一致性证明的新颖实现，这是标签放大所需的。在我们的工作之前，标签放大的唯一已知方法是在没有设置并且在基本方案的黑匣子使用的情况下添加多轮交互(Goyal，Lee，Ostrovsky和Visconti，FOCS 2012)。
> 
> 我们的构造满足已知的最强非可塑性定义，即 CCA（选择承诺攻击）安全性。除了是黑匣子之外，我们的方法也不需要次指数的NIWIs，这是所有先前工作中普遍存在的。我们不依赖NIWIs，而是依赖于次指数提示PRGs，可以基于广泛的假设获得，例如次指数CDH或LWE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_6](https://doi.org/10.1007/978-3-030-77883-5_6)
## Non-interactive Distributional Indistinguishability (NIDI) and Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments)**
### 作者
* Dakshita Khurana, University of Illinois, Urbana-Champaign, Urbana, USA
### 摘要
> 我们引入非交互式分布不可区分论证（NIDI），以应对NIWI证明的一个重要缺点：即在证明关于具有唯一见证者的\(\mathsf {NP}\)语言的陈述时，缺乏有意义的保密性。
> 
> NIDI论证允许证明者\({\mathcal P}\)向验证者\({\mathcal V}\)发送单个消息，通过该消息\({\mathcal V}\)从（秘密）分布\({\mathcal D}\)中获取一个样本d，以及d属于NP语言\({\mathcal L}\)的成员证明。
> 
> 声音保证是，如果验证者\({\mathcal V}\)获得的样本d不在\({\mathcal L}\)中，则\({\mathcal V}\)输出\(\bot\)。隐私保证是，关于分布的秘密保持隐藏：对于每一对支持在NP语言\({\mathcal L}\)中的（足够）难以区分的分布\({\mathcal D}_0\)和\({\mathcal D}_1\)，一个输出来自\({\mathcal D}_0\)的在\({\mathcal L}\)中成员证明的NIDI与一个输出来自\({\mathcal D}_1\)的在\({\mathcal L}\)中成员证明的NIDI不可区分。
> 
> 我们基于次指数难度不可区分混淆和次指数安全（变体）单向函数构建了NIDI论证。
> 
> 我们演示了NIDI和我们的技术在获得第一个（可松弛的）非交互式构造时的初步应用，这些构造基于良基假设，并且具有以下特性：
> 
> 可证隐藏已提交消息的提交与证明（Commit-and-prove）
> 
> 针对非均匀对手的CCA-安全承诺
> 
> 我们的承诺方案的提交阶段包括来自提交者向接收者的单个消息，随后是接收者的随机输出（无需返回给提交者）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_7](https://doi.org/10.1007/978-3-030-77883-5_7)
## Public-Coin Statistical Zero-Knowledge Batch Verification Against Malicious Verifiers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers)**
### 作者
* Inbar Kaslasi, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevanr, UC Berkeley, Berkeley, USA
### 摘要
> 假设问题 \(\varPi\) 具有通信复杂度为 m 的统计零知识（\(\mathsf{SZK}\)）证明。对于 \(\mathsf{SZK}\) 的批量验证问题，我们要询问是否可以证明 k 个实例 \(x_1,\dots ,x_k\) 都属于 \(\varPi\)，且其统计零知识证明的通信复杂度优于 \(k \cdot m\)（这是在每个输入上独立执行原始协议的平凡解法的复杂度）。
> 
> 在最近的工作中，Kaslasi 等人（TCC, 2020）针对任何具有非交互式 \(\mathsf{SZK}\)（\(\mathsf{NISZK}\)）证明系统的问题构建了这样一个批量验证协议。他们的结果有两个缺点，即其协议具有私币属性，并且只对诚实验证者具有零知识性。
> 
> 在本文中，我们通过构建一个公币恶意验证者 \(\mathsf{SZK}\)协议，消除了这两个缺点，用于 \(\mathsf{NISZK}\) 的批量验证。与前述的先前工作类似，我们的协议的通信复杂度为 \(\big(k+{\mathsf{poly}}(m)\big) \cdot \mathrm{polylog}(k,m)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_8](https://doi.org/10.1007/978-3-030-77883-5_8)
## Efficient Range Proofs with Transparent Setup from Bounded Integer Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Huang Lin, Mercury’s Wing and Suterusu Project, Beijing, China
* Michael Reichle, DIENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Michael Reichle, Inria, Paris, France
### 摘要
> 我们介绍了一种构建范围证明的新方法。我们的方法是模块化的，基于标准假设，使用比现有技术方法更少的通信和（更多）较少的计算，而且无需信任设置，从而实现高度竞争力的范围证明。我们的范围证明可以作为各种协议的即插即用替代品，例如分布式分类账，匿名交易系统等，从而显著减少这些应用的通信和计算。
> 
> 我们结果的核心是一种将有限域上的任何承诺转换为允许承诺并有效地证明有关有界整数的关系的承诺方案的新方法。将这些新的承诺与基于平方分解的范围证明的经典方法相结合，我们获得了以前仅限于基于RSA的范围证明（具有高通信和计算成本以及信任设置）的范例的几种新实例。更具体地说，我们得到了以下结果：
> 
> 根据离散对数假设，我们获得了所有现有候选范围证明中最紧凑和高效的范围证明（无需信任设置）。相比于标准范围大小和安全参数的状态下，我们的证明要比最新的Bulletproof（Bootle等人，CRYPTO'18）短12％至20％，而且对于证明者和验证者来说更有效率，效率提高了一个数量级。
> 
> 根据LWE假设，我们在批处理设置中获得了一种优于现有技术的范围证明，当需要至少几十个范围证明时。当所需的范围证明数量增加时，我们的范围证明的摊销通信量相比于现有技术提高了多达两个数量级。
> 
> 最后，根据标准类群假设，我们获得了第一个具体高效的标准整数承诺方案（不对承诺的整数有大小限制），而且无需信任设置。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_9](https://doi.org/10.1007/978-3-030-77883-5_9)
## Towards Accountability in CRS Generation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#towards-accountability-in-crs-generation)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, Santa Barbara, USA
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Vipul Goyal, NTT Research and Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 众所周知，许多密码学基元在没有共同参考字符串（CRS）的情况下是无法实现的。其中包括 NP 非交互式零知识证明或少于四轮的恶意安全计算等。这些基元的安全性严重依赖于一种假设：生成 CRS 的可信机构不会滥用 CRS 生成中使用的随机性。然而，我们认为并不存在绝对可信的权威机构，每个机构都必须对任何信任负责才能够得到良好的基础。事实上，一个恶意权威机构可以根据其所生成的 CRS，在协议的传输记录中揭示诚实方的私有输入。
> 
> 虽然完全消除对可信机构的信任可能并非完全可行，但我们是否可以朝着实现某种形式的问责迈进？我们提出了一个新的概念，在这个概念中，如果 CRS 权威向其他人发布协议执行的私有输入，那么我们可以提供一个公开可验证的证明，证明该权威机构的不当行为。我们研究了在非交互式零知识和两轮安全的两方计算环境中实现这一概念的可行性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_10](https://doi.org/10.1007/978-3-030-77883-5_10)
## Robust Property-Preserving Hash Functions for Hamming Distance and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#robust-property-preserving-hash-functions-for-hamming-distance-and-more)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 强健的保持属性的散列函数（PPH），是由 Boyle、Lavigne 和 Vaikuntanathan 在[ITCS 2019]中最近引入的，将大型输入 x 和 y 压缩为短摘要 h(x) 和 h(y)，并且可以在仅访问相应的哈希值的情况下对 x 和 y 进行谓词 P 的计算。与局部敏感的散列函数不同，强健的 PPH 函数能够确保在查看 h 后任意选择 x 和 y 的情况下，正确评估 h(x) 和 h(y) 上的谓词。
> 
> 我们的主要结果是针对精确汉明距离谓词的强健 PPH 函数，
> 
> 其中 d(x, y) 是 x 和 y 之间的汉明距离。我们的 PPH 函数将 n 位字符串压缩为 \(\mathcal {O}(t \lambda )\)-位摘要，其中 \(\lambda \) 是安全参数。构造基于 q 强双线性离散对数假设。
> 
> 在此过程中，我们构造了一个针对集合交集谓词的强健 PPH 函数，
> 
> 该函数将大小为 n 的集合 X 和 Y（元素来自任意宇宙 U）压缩成长度为 \(\mathcal {O}(t\lambda )\)-位的摘要。这个 PPH 函数可能具有独立的研究价值。我们提出了一个几乎匹配的 \(\varOmega (t \log t)\) 对于任何交集谓词的摘要大小下界，表明我们的压缩率接近最优。最后，我们还展示了如何将我们的交集谓词的 PPH 函数扩展到多于两个输入的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_11](https://doi.org/10.1007/978-3-030-77883-5_11)
## Alibi: A Flaw in Cuckoo-Hashing Based Hierarchical ORAM Schemes and a Solution.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution)**
### 作者
* Brett Hemenway Falk, University of Pennsylvania, Philadelphia, USA
* Daniel Noble, University of Pennsylvania, Philadelphia, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 曾经有一个哈希表
> 
> 其中存放了一些额外的物品
> 
> 一切看起来很美好
> 
> 但是事情出错了
> 
> 当这些物品被存储在缓存中时
> 
> 首个遗忘性RAM协议引入了“分层解决方案”（STOC '90），其中服务器存储了一系列几何级增长容量的哈希表。每个ORAM查询将从层级的每个级别中读取少量位置，并且每个层级的层次结构将以几何级增长的间隔重新洗牌和重建，以确保同一级别上没有重复的查询。这产生了一个具有多对数级开销的ORAM协议。
> 
> 未来的研究扩展和改进了分层解决方案，使用布谷鸟哈希（ICALP '11）替代传统的哈希，并使用组合藏匿（Goodrich等，SODA '12）替代布谷鸟哈希。在这项研究中，我们发现了Goodrich等人（SODA '12）的协议中使用了布谷鸟哈希和隐藏物品库存的一个微妙问题。
> 
> 我们提供了一种具体的区分攻击，用于使用布谷鸟哈希和组合藏匿的分层ORAM。这个安全漏洞已经传播到至少5个后续的分层ORAM协议，包括最近的最优ORAM方案OptORAMa（Eurocrypt '20）。
> 
> 除了我们的攻击之外，我们还找到了一个简单的修复方法，不会增加渐进复杂性。
> 
> 然而，我们注意到我们的攻击只影响更近期的分层ORAM，而不影响早期先于布谷鸟哈希使用的协议，或其他类型的ORAM解决方案（例如路径ORAM或电路ORAM）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_12](https://doi.org/10.1007/978-3-030-77883-5_12)
## Structured Encryption and Dynamic Leakage Suppression.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#structured-encryption-and-dynamic-leakage-suppression)**
### 作者
* Marilyn George, Brown University, Providence, USA
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
### 摘要
> 结构化加密（STE）方案以一种使其能够进行私有查询的方式对数据结构进行加密。 STE的特殊情况包括可搜索对称加密（SSE）和图形加密。与所有次线性加密搜索解决方案一样，STE会泄露有关对持久敌手的查询的信息。针对这一问题，最近开展了一个关于泄漏抑制的研究方向，重点是采用技术来减少STE方案的泄漏。
> 
> 引人注目的例子是查询等式抑制框架（Kamara等人，CRYPTO'18），它将动态STE方案转化为不泄漏查询等式的新方案。不幸的是，这个框架只能生成静态方案，并且留下了一个未解决的问题，即设计一种可以产生动态构造的解决方案。
> 
> 在这项工作中，我们提出了一个动态查询等式抑制框架，可以将泄漏查询等式的体积隐藏半动态或可变的STE方案转换为不泄漏查询等式的新型完全动态构建方案。然后，我们使用我们的框架设计了三种新的完全动态STE方案，它们几乎是完全零泄漏的，并且在数据和查询分布的自然假设下，渐近地比使用黑盒ORAM模拟更有效。 这些是其种类的第一个构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_13](https://doi.org/10.1007/978-3-030-77883-5_13)
## Dynamic Ad Hoc Clock Synchronization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#dynamic-ad-hoc-clock-synchronization)**
### 作者
* Christian Badertscher, IOHK, Hong Kong, China
* Peter Gaži, IOHK, Hong Kong, China
* Aggelos Kiayias, IOHK, Hong Kong, China
* Alexander Russell, IOHK, Hong Kong, China
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Mansfield, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### 摘要
> 时钟同步可以通过利用一个较弱的同步假设，即局部时钟大致相同的速度，使各方建立起一个共同的全局时间概念。尽管在容错的分布式计算文献中对该问题进行了深入研究，但现有的解决方案并不适用于参与者未知的情况，例如Beimel等人的自适应模型[EUROCRYPT 17]，或是随时间动态变化的情况，例如Garay等人的波动/休眠/动态可用性模型[CRYPTO 17]，Pass和Shi [ASIACRYPT 17]以及Badertscher等人的模型[CCS 18]。
> 
> 我们展示了如何应用和扩展来自区块链文献的想法，设计在这种动态自适应的场景中工作并容忍少数受损的同步器，这是基于局部时钟大致相同速度的标准假设。我们讨论了诚实多数哈希算力和诚实多数PKI设置。我们的主要成果是一种同步器，直接集成到一个新的权益证明（PoS）区块链协议Ouroboros Chronos中，我们构建并证明其安全性；据我们所知，这是第一个仅依赖于局部时钟，同时容忍最坏情况腐败和动态波动参与的PoS区块链协议。我们相信这个结果可能会引起独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_14](https://doi.org/10.1007/978-3-030-77883-5_14)
## TARDIS: A Foundation of Time-Lock Puzzles in UC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#tardis-a-foundation-of-time-lock-puzzles-in-uc)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Sabine Oechsner, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Rafael Dowsley, Monash University, Melbourne, Australia
### 摘要
> 时间锁谜题（TLP）等基于时间的原语在实际协议中得到广泛应用，部分原因是由于区块链领域的兴趣激增，人们普遍认为TLP和相关原语可以解决许多问题。不幸的是，这些原语在组合使用时，其安全性常常站不住脚或者明显错误。其中一个原因是TLP本质上并不是UC安全的，而且在UC模型中对时间进行建模和使用也非常棘手。另一方面，仅仅指定独立的任务概念，例如只使用不可塑形（non-malleable）的TLP，可能对于给定的任务来说会很困难甚至是不可能完成。即使在可能的情况下，独立安全的原语在实践中安全地应用起来也更加困难，因为它在组合下的行为是不清楚的。理想的解决方案将是在UC框架中建立TLP的模型，以便进行简单的模块化证明。在本文中，我们为使用UC模型中的时间锁谜题和相关计时原语来证明实际协议的组合安全性提供了一个基础。我们基于随机预言机构建了UC安全的TLP，并且证明了使用随机预言机是必要的。为了证明安全性，我们提供了一种简单而抽象的方式来推理UC协议中的时间。最后，我们通过构建一些有趣的应用来展示这个基础的实用性，例如具有输出独立中止的UC安全的双方计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_15](https://doi.org/10.1007/978-3-030-77883-5_15)
## On the Power of Multiple Anonymous Messages: Frequency Estimation and Selection in the Shuffle Model of Differential Privacy.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy)**
### 作者
* Badih Ghazi, Google Research, Mountain View, USA
* Ravi Kumar, Google Research, Mountain View, USA
* Ameya Velingker, Google Research, Mountain View, USA
* Noah Golowich, MIT EECS, Cambridge, USA
* Rasmus Pagh, BARC and University of Copenhagen, Copenhagen, Denmark
### 摘要
> 这篇研究论文探讨了通用安全多方计算原则在原则上可应用于在分布式数据上实现与策展人（也称为中心模型）模型匹配的差分隐私机制。本文研究了在差分隐私文献中被称为混洗模型的一种较弱基元之上运行的协议的能力。这种协议可通过已知的加密方法可扩展地实现，并且已知能够实现比本地模型中可能的错误小得多的非交互式、差分隐私协议。我们研究了混洗模型中的基本计数问题，并在几种情境中获得了对错误和通信的紧密上至对数多项式因子的界限。
> 
> 对于n个用户和域大小为B的经典频率估计问题，我们得到了：
> 
> 在单消息混洗模型中\(\ell _\infty \)错误的\(\tilde{\varOmega }( \min (\root 4 \of {n}, \sqrt{B}))\)近似紧密下界。这意味着从Erlingsson等人（SODA 2019）和Balle等人（Crypto 2019）的混洗放大工作中得到的协议对于单消息协议几乎是最优的。
> 
> 在多消息混洗模型中，每个用户通信为\(\mathrm {poly}(\log {B}, \log {n})\)比特，\(\ell _\infty \)错误最多为\(\mathrm {poly}(\log B, \log n)\)，相较于单消息算法，这提供了一个指数级的错误改进。这意味着对于一些经典问题，如重频元素、d维范围计数、中位数和分位数的M-估计以及更一般的稀疏非适应性统计查询算法，我们得到了具有类似错误和通信保证的协议。
> 
> 对于域大小为\(B\)的选择问题，我们证明：
> 
> 在单消息混洗模型中，关于用户数量的近似紧密下界为\(\varOmega (B)\)。这在很大程度上改进了Cheu等人（Eurocrypt 2019）所得到的\(\varOmega (B^{1/17})\)下界。
> 
> 我们下界证明中的一个关键因素是在低隐私（也称为高 \(\varepsilon \)）区域内本地私有频率估计错误的下界。为此，我们开发了新工具来改进Duchi等人（FOCS 2013; JASA 2018）和Bassily & Smith（STOC 2015）的结果，这些技术仅在高隐私设置中给出了紧密的界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_16](https://doi.org/10.1007/978-3-030-77883-5_16)
## Non-Interactive Anonymous Router.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#non-interactive-anonymous-router)**
### 作者
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Ke Wu, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 匿名路由是最基本的在线隐私问题之一，并且已经被广泛研究了几十年。几乎所有已知的匿名路由方法（例如，混合网络，DC网络等）都依赖于多个服务器或路由器进行某种交互式协议；在阈值模型中保证匿名性，即，如果一个或多个服务器/路由器表现诚实，则匿名性得到保证。与所有先前的方法不同，我们提出了一个新颖的非交互式抽象，称为非交互式匿名路由器（NIAR），即使只有一个不受信任的路由器也可以发挥作用。在NIAR方案中，假设n个发送方每个都想与不同的接收方进行通信。进行一次性可信设置，以便每个发送方获得一个发送密钥，每个接收方获得一个接收密钥，路由器接收一个“加密”发送方到接收方的排列映射的令牌。在每个时间步长中，每个发送方可以使用其发送方密钥加密其消息，路由器可以使用其令牌将来自发送方的n个密文转换为n个变换后的密文。然后将每个变换后的密文传递给相应的接收方，接收方可以使用其接收方密钥解密消息。粗略地说，安全性要求不可信任的路由器即使与一部分腐败的发送方和/或接收方串通，也不能危害诚实方的隐私，包括谁与谁交谈以及消息内容。我们展示如何基于适当的双线性群中的标准决策线性假设构建具有可证明安全保证的通信高效的NIAR方案。我们发现NIAR的一个引人注目的应用是实现非交互式匿名洗牌器（NIAS），其中不受信任的服务器或数据分析师只能解密来自n个发送方的排列版本的消息，其中排列是隐藏的。NIAS可用于构建保护隐私的调查，混洗模型中的差分私有协议和伪名公告栏。除了这一主要结果，我们还描述了一种当一部分发送方可能崩溃时实现容错的变体。最后，我们进一步探讨了一个称为完全内部者保护的安全概念，并且表明如果我们另外假设次指数安全的不可区分混淆和次指数安全的单向函数，就可以构建具有偏执安全性的NIAR方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_17](https://doi.org/10.1007/978-3-030-77883-5_17)
## Bifurcated Signatures: Folding the Accountability vs. Anonymity Dilemma into a Single Private Signing Scheme.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York City, USA
### 摘要
> 随着现代密码学的发展，通常会开发替代的加密方案，以实现在某些重要方面是正交的目标。因此，我们不得不选择一个既实现第一个目标又不实现第二个目标的方案，或者反之。这导致了两种相互竞争的方案。在用户隐私的基本领域，特别是在匿名（多次使用凭证）签名中，隐名性与问责制之间存在这样的正交性。
> 
> 这项工作的概念贡献是通过设计颠倒上述正交性，实际上基本上代表了过去25年左右的情况，并提出了一种替代方法，其中相反的属性被精心地融入到一个单一方案中。这些方案将以双分支的方式同时支持两种相反的属性，其中：
> 
> 首先，基于在消息上下文和内容、用户等方面表达的丰富语义，适用一个谓词，将相关属性针对每个消息操作点按方式运用；和
> 
> 其次，同时，这些方案提供了我们所谓的“分支隐藏”，即得出的计算值隐藏了外部人员实际上已经在本地应用了哪种属性。
> 
> 具体来说，我们精确定义并给出了“双分支匿名签名”（BiAS）的第一个构建和安全性证明，它支持绝对匿名或具有问责制的匿名，基于特定的上下文谓词，同时又是分支隐藏的。这种新颖的签名方案具有许多以前很难实现或未被考虑的应用，特别是因为：（i）条件可追踪性不依赖于受信任的机构，因为它（非交互地）封装到签名中；和（ii）签名者知道谓词值，并且可以在每次签名时做出明智的选择。
> 
> 从技术上讲，我们利用同态承诺实现了BiAS，可以表示为有限深度电路的一般谓词族。我们的构建是通用的，并且可以用标准模型从格和双线性映射更高效地实例化。特别是，在使用具有适当效率属性的承诺时，签名长度与电路大小无关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_18](https://doi.org/10.1007/978-3-030-77883-5_18)
## Abuse Resistant Law Enforcement Access Systems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-3].md#abuse-resistant-law-enforcement-access-systems)**
### 作者
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Gijs Van Laer, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 随着端到端加密通信服务的日益部署，技术公司和执法机构之间就对加密通信合法访问的需求展开了激烈的辩论。不幸的是，现有解决这个问题的方案存在严重的技术风险，比如操作者滥用以及密钥材料被盗。在这项工作中，我们研究了建立执法访问系统的问题，以减少未经授权的监视可能。我们首先定义了一个满足滥用抵抗的执法访问系统（ARLEAS）的一组理想特性，并解决了每个特性的动机问题。然后，我们在通用可组合性（UC）框架中形式化这些定义，并提出了两种实现该定义的主要构造。第一个构造允许预期访问，仅在发出和激活授权令牌后才允许监视加密通信。第二种更强大的构造允许对授权令牌发布前发生的通信进行回顾式访问。为了说明构建后一种类型的协议的技术挑战，我们最后研究了实现这些系统所需的最小假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_19](https://doi.org/10.1007/978-3-030-77883-5_19)
