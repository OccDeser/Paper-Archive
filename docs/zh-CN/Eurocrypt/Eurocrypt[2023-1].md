# Eurocrypt[2023-1]
## Indistinguishable Predictions and Multi-group Fair Learning.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#indistinguishable-predictions-and-multi-group-fair-learning) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#indistinguishable-predictions-and-multi-group-fair-learning)**
### 作者
* Guy N. Rothblum, Apple, Cupertino, USA
### 摘要
> 预测算法为个体分配数字，这些数字被广泛理解为个体的“概率”——例如，一个申请者会还款的概率是多少？自动预测越来越多地成为改变生活的决策基础，这引发了一系列担忧。对于预测结果公平性的担忧尤为令人担忧：例如，预测可能在受保护的少数族裔群体上表现不佳。我们对形式化和解决此类担忧的最新发展进行了调查。
> 
> 受计算不可区分性理论的启发，最近提出的结果不可区分性（Outcome Indistinguishability，OI）[Dwork等，STOC 2021]要求预测的结果分布无法与真实世界的分布区分开来。结果不可区分性对于获得有意义的预测是一个强要求。令人高兴的是，这是可以实现的：算法公平性文献中的技术[Hebert-Johnson等，ICML 2018]可以从真实世界的结果数据中得出学习OI预测器的算法。
> 
> 回到解决公平性担忧的动机，结果不可区分性可以用于为受保护的人口统计群体提供强健且普适的保证[Rothblum和Yona，ICML 2021]。这提供了可以学习单个预测器的算法，该预测器在给定丰富的重叠子群集合G中的每个群体中“表现良好”。性能是使用损失函数来衡量的，该函数可以相当通用，本身可以融入公平性考虑。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_1](https://doi.org/10.1007/978-3-031-30545-0_1)
## Worst-Case Subexponential Attacks on PRGs of Constant Degree or Constant Locality.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#worst-case-subexponential-attacks-on-prgs-of-constant-degree-or-constant-locality) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#worst-case-subexponential-attacks-on-prgs-of-constant-degree-or-constant-locality)**
### 作者
* Akın Ünal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> 在这项工作中，我们将对多项式延伸的代数伪随机数生成器（PRGs）的伪随机性提出新的攻击。我们的算法适用于广泛的PRGs类别，并且在一般的本地PRGs的情况下比目前已知的攻击更快。与大多数代数攻击不同，在我们的攻击中，我们将证明亚指数时间和空间限制，而不对PRGs做任何假设或假设任何进一步的猜想。因此，我们在这篇文章中首次提出了对常数次数多项式PRGs的亚指数区分攻击，并且弥补了轻量级PRGs亚指数密码分析中的当前差距。
> 
> 具体而言，对于通过\(F : \mathbb {Z}_q^{n} \rightarrow \mathbb {Z}_q^{m}\)计算的PRGs，其由\(Z_q\)上的d次多项式计算，并且具有\(m = n^{1+e}\)的延伸，我们提供了一个攻击，其空间和时间复杂度分别为\(n^{O(n^{1 - \frac{e}{d-1}})}\)和显著优势\(1 - {O(n^{1 - \frac{e}{d-1}}/{q})}\)。如果q位于\(O(n^{1 - \frac{e}{d-1}})\)，我们提供了一个具有相同空间和时间复杂度的第二个攻击，其优势至少为\(q^{-O(n^{1 - \frac{e}{d-1}})}\)。如果F具有常数局部性d且q是常数，我们构造了一个第三个攻击，其空间和时间复杂度为\(\exp (O(n^{1 - \frac{e'}{(q-1)d-1}}))\)，显著优势为\(1-O(n^{-\frac{e'}{(q-1)d-1}})\)，其中\(e'<e\)为常数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_2](https://doi.org/10.1007/978-3-031-30545-0_2)
## Fine-Grained Non-interactive Key-Exchange: Constructions and Lower Bounds.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#fine-grained-non-interactive-key-exchange-constructions-and-lower-bounds) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#fine-grained-non-interactive-key-exchange-constructions-and-lower-bounds)**
### 作者
* Abtin Afshar, University of Virginia, Charlottesville, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Elahe Sadeghi, University of Texas at Austin, Austin, USA
### 摘要
> 在这项工作中，我们在细粒度的设置下开始研究K-NIKE协议，其中正直方和对手之间的运行时间存在多项式差距。我们的目标是展示在\(K \ge 3\)时，基于比K-NIKE协议更弱的假设是否可能或不可能构建这种协议。我们的贡献有三个方面。
> 
> 我们证明随机预言机可以被用来获得每个常数K的细粒度K-NIKE协议。特别地，我们展示了如何将Merkle的双方协议推广到K方的情况，使得正直方每个需要n个查询，而对手需要\(n^{K/(K-1)}\)个查询才能找到密钥。
> 
> 然后，我们进一步提高安全性，同时避免使用配对。特别地，我们展示了在Shoup的通用群模型中存在具有二次查询差距的4方NIKE协议，正直方的查询数量与对手的查询数量之间存在二次差距。
> 
> 最后，我们展示了使用纯代数方法获得3-NIKE存在局限性。特别地，我们证明在Maurer的通用群模型中的任何n个查询的3-NIKE协议都可以被\(O(n^2)\)个查询的攻击者破解。相比于Shoup的模型，Maurer的GGM对于各方和对手都更加有限，因为群元素没有明确的标签。尽管受限，该模型仍涵盖了Diffie Hellman协议。在我们的工作之前，使用多项式数量的查询是否能破解Maurer模型中的3-NIKE协议尚未得到解答。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_3](https://doi.org/10.1007/978-3-031-30545-0_3)
## Speak Much, Remember Little: Cryptography in the Bounded Storage Model, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#speak-much-remember-little-cryptography-in-the-bounded-storage-model-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#speak-much-remember-little-cryptography-in-the-bounded-storage-model-revisited)**
### 作者
* Yevgeniy Dodis, New York University, New York, NY, 10012, USA
* Willy Quach, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
### 摘要
> 有界存储模型（BSM）的目标是通过仅限制对手的存储容量来构建无条件安全的加密协议，但同时给予对手无限的计算能力。在这里，我们考虑了BSM的流式变体，诚实的参与方可以相互传输大量数据以压倒对手的存储，即使他们自己的存储容量明显小于对手的存储容量。以前的工作在这个模型中展示了一些令人印象深刻的结果，包括密钥协商和无意传递，但前提是对手的存储\(m=O(n^2)\)最多是正比于诚实用户存储n的二次方倍。此外，Dziembowski和Maurer（DM）的工作也给出了一个似乎匹配的下界，表明当\(m>n^2\)时，BSM中的密钥协商是不可能的。
> 
> 在这项工作中，我们观察到DM的下界只适用于更受限制的BSM版本，并不适用于流式变体。令人惊讶的是，我们展示了在流式BSM中可以构建密钥协商和无意传递协议，其中对手的存储可以更大，甚至指数级\(m=2^{O(n)}\)。容纳更大的m值的唯一代价是我们的协议的轮数和通信复杂性相应增长，我们提供了下界来表明增加轮数和通信是必要的。
> 
> 作为我们工作的额外好处，我们还展示了我们在BSM中的无意传递（OT）协议满足基于仿真的安全概念。相比之下，即使对于\(m=O(n^2)\)的受限情况，之前的解决方案也只满足较弱的区分性定义。作为我们OT协议的一个应用，我们获得了在BSM中的通用多方计算（MPC），允许m和n之间出现指数级的差距，同时实现基于仿真的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_4](https://doi.org/10.1007/978-3-031-30545-0_4)
## Non-uniformity and Quantum Advice in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#non-uniformity-and-quantum-advice-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#non-uniformity-and-quantum-advice-in-the-quantum-random-oracle-model)**
### 作者
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### 摘要
> QROM（量子随机预言机模型），由Boneh等人在Asiacrypt 2011中引入，涵盖了所有通用算法。然而，它未能描述具有预处理能力的非均匀量子算法，该算法接收有限的经典或量子建议。
> 
> 由于普遍认为非均匀算法是攻击者的正确模型，从Nayebi、Aaronson、Belovs和Trevisan（QIC 2015）的工作开始，一系列研究探讨了在随机预言机模型中的非均匀安全性。Chung、Guo、Liu和Qian（FOCS 2020）提供了一个框架，并为许多密码应用确立了非均匀安全性。尽管他们在许多应用程序中使用经典建议达到了几乎最优的界限，但他们对量子建议的界限远非紧凑。
> 
> 在这项工作中，我们继续研究QROM中的量子建议。我们提出了一个新的想法，推广了先前的多实例框架，我们认为这更加友好于量子，并且应该是多实例游戏的量子模拟。为此，我们将Chung等人关于量子建议的界限与其在经典建议下的界限相匹配，表明在QROM中，对于许多自然的安全游戏来说，量子建议几乎与经典建议一样好/坏。
> 
> 最后，我们展示了在QROM中的一些虚构游戏中，相对于非结构化的预言机，量子建议在某些参数范围内可以比经典建议好上指数倍。据我们所知，这为量子建议相对于经典建议在未结构化预言机方面存在一般性的差异提供了证据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_5](https://doi.org/10.1007/978-3-031-30545-0_5)
## Black-Box Separations for Non-interactive Classical Commitments in a Quantum World.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#black-box-separations-for-non-interactive-classical-commitments-in-a-quantum-world) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#black-box-separations-for-non-interactive-classical-commitments-in-a-quantum-world)**
### 作者
* Kai-Min Chung, Academia Sinica, New Taipei, Taiwan
* Yao-Ting Lin, UCSB, Santa Barbara, USA
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
### 摘要
> 承诺在密码学中是基本的。在经典世界中，承诺与单向函数的存在是等价的。众所周知，就其轮延迟而言，最理想的承诺形式（即非交互承诺）不能从单向函数中以黑盒方式构建[Mahmoody-Pass，Crypto'12]。然而，如果允许各方使用量子计算和通信，则已知可以实际构建（用于经典位）非交互承诺[Koshiba-Odaira，Arxiv'11和Bitansky-Brakerski，TCC'21]。
> 
> 我们重新审视在量子世界中进行非交互承诺的假设，并研究是否可以通过对单向函数进行黑盒使用来使用量子计算和经典通信实现。我们证明除非在多项式兼容猜想[Austrin等，Crypto'22]错误的情况下，否则这样做是不可能的。我们进一步将我们的不可能性扩展到具有量子解承诺的协议。这补充了Bitansky和Brakerski [TCC'21]的积极结果，因为他们仅要求经典解承诺消息。由于非交互承诺可以基于可逆单向函数，假设多项式兼容猜想，因此即使允许构造和安全约简为量子，我们也可以在单向函数和可逆单向函数（例如一次性密码）之间获得黑盒分离。这改善了曹和薛[理论计算机科学'21]的分离，其中他们仅允许安全约简为量子。
> 
> 在技术层面上，我们证明从“足够大”的集合（即调用者）中随机抽取抽样预言机将使它们针对多项式量子查询对手成为单向函数，后者还会获得关于预言机的任意多项式大小的量子建议。这给出了Hhan等人最近结果[Asiacrypt

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_6](https://doi.org/10.1007/978-3-031-30545-0_6)
## On Non-uniform Security for Black-Box Non-interactive CCA Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#on-non-uniform-security-for-black-box-non-interactive-cca-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#on-non-uniform-security-for-black-box-non-interactive-cca-commitments)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, IL, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 我们获得了针对非均匀对手的非交互CCA承诺的黑盒构建。这使得在小标签空间中使用适当的基本承诺方案的黑盒成为可能，而该方案的变种为次指数级提示PRG（Koppula和Waters，Crypto 2019）和具有针对非均匀对手的安全性的无密钥次指数级抗碰撞散列函数（Bitansky，Kalai和Paneth，STOC 2018及Bitansky和Lin，TCC 2018）。
> 
> 先前关于非交互非可塑性或CCA承诺的所有工作都首先为相对较小的身份/标签空间构建了一个“基本”方案，然后构建了一个标签扩增编译器，以获得指数级的身份空间承诺。先前的黑盒构建要么增加多轮交互（Goyal，Lee，Ostrovsky和Visconti，FOCS 2012），要么仅实现针对均匀对手的安全性（Garg，Khurana，Lu和Waters，Eurocrypt 2021）。
> 
> 我们的关键技术贡献是一种新颖的用于CCA承诺的标签扩增编译器，用于替代先前工作中所需的非交互一致性证明。我们的构建满足已知最强的非可塑性定义，即CCA2（选定承诺攻击）安全性。除了只对基本方案进行黑盒使用外，我们的构建还用次指数级提示PRG替换了次指数级NIWIs，这可以基于（次指数级）CDH或LWE等假设获得。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_7](https://doi.org/10.1007/978-3-031-30545-0_7)
## Polynomial-Time Cryptanalysis of the Subspace Flooding Assumption for Post-quantum i풪.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#polynomial-time-cryptanalysis-of-the-subspace-flooding-assumption-for-post-quantum-i) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#polynomial-time-cryptanalysis-of-the-subspace-flooding-assumption-for-post-quantum-i)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 不可区分混淆（iO）是一种高度灵活的原语，可以应用于多种先进的密码学应用。直到最近，iO的可行性状态还不清楚，但在Jain-Lin-Sahai STOC 2021、Jain-Lin-Sahai Eurocrypt 2022的研究中，他们表明iO最终可以基于经过深入研究的困难假设。不幸的是，其中一个假设在量子多项式时间下被破解。幸运的是，Brakerski等人在Eurocrypt 2020中提出的研究工作，以及Gay-Pass STOC 2021、Wichs-Wee Eurocrypt 2021、Brakerski等人的ePrint 2021、Devadas等人的TCC 2021的工作，同时为构建具有合理后量子安全性的iO创造了新的途径，即在泄漏情况下的LWE的新形式的循环安全。与此同时，这一系列工作的有效密码分析也开始出现（Hopkins等人的Crypto 2021）。
> 
> 确定产生后量子iO的最简单假设且可以通过已知的密码分析工具理解是非常重要的。在这种精神下，在Hopkins等人的密码分析的背景下，Devadas等人最近基于一个完全指定且简单陈述的假设以及一个彻底的初始密码分析提出了一个优雅的iO构造。
> 
> 我们的工作在他们方案的“最终假设”上提供了一个多项式时间的可区分器。我们的算法非常简单：解决一个根据该假设设计的线性系统。然而，我们算法的正确性论证却不平凡。
> 
> 我们还分析了Devadas等人描述的同一假设的“T-sum”版本，并在一个合理的猜想下排除了任何导致iO的T值的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_8](https://doi.org/10.1007/978-3-031-30545-0_8)
## Reverse Firewalls for Oblivious Transfer Extension and Applications to Zero-Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#reverse-firewalls-for-oblivious-transfer-extension-and-applications-to-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#reverse-firewalls-for-oblivious-transfer-extension-and-applications-to-zero-knowledge)**
### 作者
* Suvradip Chakraborty, Visa Research, Palo Alto, USA
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Pratik Sarkar, Department of Computer Science, Boston University, Boston, USA
### 摘要
> 在颠覆的环境中，对手通过篡改诚实方的机器来通过协议记录中泄露诚实方的秘密。Mironov和Stephens-Davidowitz（EUROCRYPT'15）的工作引入了反向防火墙（RF）的概念，以防止对诚实方机器的篡改。RF框架中的所有已知构造都依赖底层操作的可塑性，以便RF对协议记录进行重新随机化/消毒。因此，RF受限于提供一定结构的协议，并且基于公钥操作。在这项工作中，我们开始研究存在篡改的高效多方计算（MPC）协议。在这方面上，
> 
> 我们在RF框架中构建了第一个Oblivious Transfer（OT）扩展协议。我们使用\(\mathcal {O}(\kappa )\)公钥操作和\(\mathcal {O}(1)\)廉价对称密钥操作获得\(\textsf {poly}(\kappa )\)恶意安全OTs，其中\(\kappa \)是安全参数。
> 
> 我们在RF设置中构建了第一个零知识协议，在该协议中，每个乘法门可以使用\(\mathcal {O}(1)\)对称密钥操作进行证明。我们通过使用我们的OT扩展协议以及将Quicksilver（Yang，Sarkar，Weng和Wang，CCS'21）的ZK协议扩展到RF设置来实现这一点。
> 
> 在此过程中，我们介绍了可修饰交互证明的新思想，这可能是独立感兴趣的。我们为Sigma协议定义了一种全可塑性概念，与先前的概念不同，它允许修改实例以及协议记录。我们构建了满足这个概念的新协议，为这样的协议构建了RF，并将它们用于构建我们的OT扩展。
> 
> 我们工作的关键思想是展示如何以RF友好的方式获得相关随机性，而无需对整个协议记录进行重新随机化。这使我们能够避免随着电路规模增长而变得昂贵的公钥操作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_9](https://doi.org/10.1007/978-3-031-30545-0_9)
## Oblivious Transfer with Constant Computational Overhead.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#oblivious-transfer-with-constant-computational-overhead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#oblivious-transfer-with-constant-computational-overhead)**
### 作者
* Elette Boyle, IDC Herzliya and NTT Research, Sunnyvale, USA
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Nicolas Resch, University of Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 密码任务的计算开销是安全实现任务的计算成本与完全不安全实现任务的计算成本之间的渐近比率。
> 
> Ishai、Kushilevitz、Ostrovsky和Sahai（STOC 2008）证明了，在假设存在遗忘传送（OT）协议和局部伪随机生成器（PRG）的情况下，可以以常数计算开销实现布尔电路的安全双方计算，而不受所需安全级别的影响。然而，这仅适用于诚实参与方的情况。该领域的一个关键问题是恶意参与方是否可能得到类似的结果。即便是在实现常数大小函数（如位的OT）的更简单任务上，这个问题也没有得到解答。
> 
> 我们针对OT的情况对这个问题进行了肯定回答，假设：（1）标准OT协议，（2）略强的“相关稳健”变种的局部PRG，（3）标准的稀疏变种的带噪声学习奇偶校验（LPN）假设。我们构建的优化版本的方案每个参与方每个位OT需要少于100个比特的操作。在128比特安全性下，这比之前最好的协议提高了1-2个数量级。
> 
> 我们通过构建一个常计算开销的伪随机相关生成器（PCG）来实现这一点，用于位的OT相关。这样的PCG通过局部扩展短的相关种子来生成N个伪随机的位OT实例。结果就是，我们得到了一个端到端的协议，用于生成N个伪随机位OT实例，通信量小于N，计算量为O（N），而与N成指数关系的安全性。
> 
> 最后，我们将主结果应用于具有常计算开销的其他安全计算任务。这包括对具有较宽松的恶意参与方安全概念的一般电路协议，实现N个自然常数大小函数实例的协议，并将主要未解决问题简化为可能更简单的关于容错计算的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_10](https://doi.org/10.1007/978-3-031-30545-0_10)
## Endemic Oblivious Transfer via Random Oracles, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#endemic-oblivious-transfer-via-random-oracles-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#endemic-oblivious-transfer-via-random-oracles-revisited)**
### 作者
* Zhelei Zhou, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China
* Zhelei Zhou, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Bingsheng Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### 摘要
> 亚型遗忘传输（Endemic Oblivious Transfer，简称EOT）的概念是由Masny和Rindal（CCS'19）引入的。EOT相较于传统的随机OT提供了较弱的安全性保证，即恶意方可以任意固定它们的输出。作者们提出了一个在RO模型下基于量身定制和非标准假设Choose-and-Open DDH的1轮UC安全EOT协议。
> 
> 在这项工作中，我们系统地研究了在UC/GUC框架下的EOT。我们在RO模型下提出了一个新的1轮UC安全EOT构造，在DDH假设下成立。在GUC框架下，我们提出了第一个在Canetti等人（CCS'14）提出的全局受限观察RO（GroRO）模型下基于CDH假设的1轮EOT构造。我们还提供了一个不可能性结果，证明了在Camenisch等人（Eurocrypt'18）提出的全局受限可编程RO（GrpRO）模型中不存在1轮GUC安全的EOT协议。随后，在GrpRO模型中，我们提供了第一个轮数最优（2轮）的基于DDH假设的EOT协议，并对EOT与其他密码学原语之间的关系进行了研究。
> 
> 作为附加产物，我们还在GroRO模型中提出了第一个2轮GUC安全的承诺方案，并且展示了GroRO模型与GrpRO模型之间的差异，这可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_11](https://doi.org/10.1007/978-3-031-30545-0_11)
## Half-Tree: Halving the Cost of Tree Expansion in COT and DPF.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#half-tree-halving-the-cost-of-tree-expansion-in-cot-and-dpf) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#half-tree-halving-the-cost-of-tree-expansion-in-cot-and-dpf)**
### 作者
* Xiaojie Guo, State Key Laboratory of Cryptology, Beijing, China
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Jiang Zhang, State Key Laboratory of Cryptology, Beijing, China
* Xiaojie Guo, Nankai University, Tianjin, China
* Zheli Liu, Nankai University, Tianjin, China
* Xiao Wang, Northwestern University, Evanston, USA
* Wenhao Zhang, Northwestern University, Evanston, USA
* Xiang Xie, Shanghai Qi Zhi Institute, Shanghai, China
* Xiang Xie, PADO Labs, Hong Kong, China
### 摘要
> GGM树广泛应用于相关遗忘传输（COT）、子域向量遗忘线性评估（sVOLE）、分布式点函数（DPF）和分布式比较函数（DCF）的设计中。通常，GGM树带来的计算和通信开销在这些协议中占主导地位。本文提出了一系列优化方法，可以将这些开销减少一半。
> 
> 减半COT和sVOLE的开销。我们的COT协议在最先进的COT协议使用的每个GGM树层级中引入了额外的相关性。因此，它将AES调用的数量和通信开销减少了一半。将这个想法推广到sVOLE，我们能够通过减半计算或减半通信实现类似的改进。
> 
> 减半DPF和DCF的开销。我们提出了改进的两方协议，用于分布式生成DPF/DCF密钥。我们这些协议背后的树结构可以实现更高效的全域评估，并将最先进的DPF/DCF协议的通信和轮次复杂性减半。
> 
> 所有协议都在随机置换模型下可以被证明是安全的，并且可以基于固定密钥的AES-NI进行加速。我们还改进了针对可提供的交易者场景的近似伪随机函数（PPRF）、DPF和DCF的最先进方案，这在独立利益方面具有重要意义。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_12](https://doi.org/10.1007/978-3-031-30545-0_12)
## A New Framework for Quantum Oblivious Transfer.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#a-new-framework-for-quantum-oblivious-transfer) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#a-new-framework-for-quantum-oblivious-transfer)**
### 作者
* Amit Agarwal, University of Illinois Urbana-Champaign, Champaign, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, USA
* Nishant Kumar, University of Illinois Urbana-Champaign, Champaign, USA
* James Bartusek, University of California Berkeley, Berkeley, USA
### 摘要
> 我们提出了一种从量子信息构建遗忘转移的新模板，我们称之为“固定基础”框架。我们的框架与之前的研究（例如Crepeau和Kilian，FOCS'88）不同之处在于，除了一些故意用共轭基础测量的隐藏陷阱量子比特外，每个参与者都固定了正确的测量基础的选择。我们在量子随机预言机模型（QROM）中实例化了这个模板，以获得具有安全性的简单协议，以抵御恶意对手：
> 
> 在参与方事先共享EPR对的模型中进行的非交互式随机输入比特OT。
> 
> 无需设置的两轮随机输入比特OT，通过展示上述协议即使（潜在恶意的）OT接收者设置了EPR对也仍然安全。
> 
> 没有纠缠或设置时的BB84态的三轮选择性输入字符串OT。这改进了需要至少五轮的CK88模板的自然变体。
> 
> 在此过程中，我们开发了一些可能具有独立兴趣的技术工具。我们证明自然函数（如XOR）使得从某些量子熵源中无需种子的随机抽取成为可能。我们还使用理想化的（即可提取和模棱两可的）二进制承诺，通过证明QROM中简单高效的构造的安全性而获得。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_13](https://doi.org/10.1007/978-3-031-30545-0_13)
## Optimal Single-Server Private Information Retrieval.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#optimal-single-server-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#optimal-single-server-private-information-retrieval)**
### 作者
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Yiannis Tselekounis, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Wei-Kai Lin, Northeastern University, Boston, USA
### 摘要
> 我们构建了一个具有最优带宽和服务器计算量（多对数因子）的单服务器预处理私密信息检索（PIR）方案，假设学习困难（LWE）问题具有难度。我们的方案实现了分摊\(\widetilde{O}_{\lambda }(\sqrt{n})\)服务器和客户端计算以及\(\widetilde{O}_\lambda (1)\)每个查询的带宽，完成一个往返的通信，并需要\(\widetilde{O}_\lambda (\sqrt{n})\)客户端存储。特别地，相比Corrigan-Gibbs，Henzinger和Kogan（Eurocrypt'22）的最先进方案，我们实现了带宽的显著减少：他们的方案每个查询需要\(\widetilde{O}_{\lambda }(\sqrt{n})\)的带宽，与我们的计算和存储的开销相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_14](https://doi.org/10.1007/978-3-031-30545-0_14)
## Weighted Oblivious RAM, with Applications to Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#weighted-oblivious-ram-with-applications-to-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#weighted-oblivious-ram-with-applications-to-searchable-symmetric-encryption)**
### 作者
* Léonard Assouline, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
* Brice Minaud, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
### 摘要
> 现有的混淆随机访问内存（ORAM）协议不能以非平凡的方式支持可变大小的数据项存储。虽然研究可变大小数据项的ORAM本身就很有意义，但也受到对更高性能和更安全的可搜索对称加密（SSE）方案的需求的推动。
> 
> 在本文中，我们介绍了加权ORAM的概念，以支持不同大小的数据块存储。我们提出了一个基于满足某种适用性准则的底层标准ORAM的高效加权ORAM方案建立框架。这一准则适用于各种树状ORAM方案，包括简单ORAM和路径ORAM。我们推导出了几种加权ORAM的实例，与标准ORAM相比，开销极小。作为直接应用，我们获得了具有有吸引力安全性特性的高效SSE构建。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_15](https://doi.org/10.1007/978-3-031-30545-0_15)
## NanoGRAM: Garbled RAM with $\widetilde{O}(\log N)$ Overhead.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#nanogram-garbled-ram-with-widetilde-o-log-n-overhead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#nanogram-garbled-ram-with-widetilde-o-log-n-overhead)**
### 作者
* Andrew Park, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Wei-Kai Lin, Northeastern University, Boston, USA
### 摘要
> 我们提出了一种名为NanoGRAM的新的加密RAM构造，其实现了每次内存访问的摊销成本为\(\widetilde{O}(\lambda \cdot (W \log N + \log ^3 N))\)比特，其中\(\lambda \)是安全参数，W是块大小，N是总块数，\(\widetilde{O}(\cdot )\)隐藏着\({\textsf{poly}} \log \log \)因子。对于足够大的块大小，其中\(W = \varOmega (\log ^2 N)\)，我们的方案实现了每次内存访问的\(\widetilde{O}(\lambda \cdot W \log N)\)成本，其中对N的依赖是最优的（除了\({\textsf{poly}} \log \log \)因子），就评估程序的运行时间而言。我们的渐近性能甚至与最先进的互动式方案相匹配（模除\({\textsf{poly}} \log \log \)因子），即在加密电路上运行Circuit ORAM，并且我们消除了基线方案中必要的对数次交互。此外，我们在Heath等人最近的作品（Eurocrypt '22）的渐近性能上也有改进。我们的方案采用了与实际加密电路主流文献相同的假设，即循环相关性鲁棒哈希或随机预言。我们评估了NanoGRAM的具体性能，并将其与一些渐近性能较差的基线进行了比较。我们展示了在内存大小为\(N = 2^9\)时，NanoGRAM开始优于天真的线性扫描加密RAM，并且在\(N = 2^{13}\)时开始优于Heath等人的最近构造。
> 
> 最后，作为一个副产品，我们还展示了假设只有单向函数的情况下存在一种加密RAM方案，每次内存访问的摊销成本为\(\widetilde{O}(\lambda ^2 \cdot (W \log N + \log ^3 N))\)。同样，对于块大小为\(W = \varOmega (\log ^2 N)\)比特的情况，对N的依赖几乎是最优的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_16](https://doi.org/10.1007/978-3-031-30545-0_16)
## Lower Bound Framework for Differentially Private and Oblivious Data Structures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#lower-bound-framework-for-differentially-private-and-oblivious-data-structures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#lower-bound-framework-for-differentially-private-and-oblivious-data-structures)**
### 作者
* Giuseppe Persiano, Universitá di Salerno and Google, Fisciano, Italy
* Kevin Yeo, Google and Columbia University, New York, USA
### 摘要
> 近年来，对执行操作提供隐私的数据结构的研究取得了重要进展。这些基本构件旨在确保对物理内存的可观察访问模式不会泄露有关查询和更新的重要信息。包括Larsen和Nielsen [Crypto’18]、Persiano和Yeo [Eurocrypt’19]、Hubácek等人[ TCC’19]和Komargodski和Lin [Crypto’21]在内的多篇最近的研究表明，即使针对包括混淆和差分隐私在内不同RAM块b和存储单元ω大小选择的各种隐私概念，也需要对数开销支持基本的RAM（数组）操作。
> 
> 我们沿着这条研究路线继续前进，并提出了第一个即便对块数b和存储单元ω的大小没有限制也适用的差分隐私RAM（DPRAMs）的对数下界。这是差分隐私RAM在块远小于存储单元的情况下\(b \ll \omega \)的第一个对数下界。此外，我们还提出了差分隐私变种的经典数据结构问题，包括集合、前驱（后继）和不相交集合（并查集），这些问题已知存在亚对数明文构造。我们的所有下界都适用于多个非勾结服务器的设置。
> 
> 此外，我们还解决了这一丰富研究领域中的一个不幸问题，即下界技术难以使用，并且需要针对每个新结果进行定制。为了使技术更易于使用，我们将证明通用化为一个框架，将证明对数下界简化为证明一个特定问题满足两个简单且最小的条件。我们展示了我们的框架易于使用，因为我们论文中的所有下界都利用了这个框架，并且我们希望我们的框架将激发更多对这些下界技术的使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_17](https://doi.org/10.1007/978-3-031-30545-0_17)
## Lower Bounds for (Batch) PIR with Private Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#lower-bounds-for-batch-pir-with-private-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#lower-bounds-for-batch-pir-with-private-preprocessing)**
### 作者
* Kevin Yeo, Google and Columbia University, New York, USA
### 摘要
> 在本论文中，我们研究带有私有预处理的（批量）私密信息检索。私密信息检索（PIR）是一个问题，其中一个或多个服务器持有一个包含 n 位的数据库，并且客户端希望从服务器检索数据库中的第 i 位。在带有私有预处理的 PIR（也称为离线-在线 PIR）中，客户端能够在离线阶段计算出一个私有的 r 位提示，并可利用该提示执行检索，最多访问 t 项。为了保护隐私，客户端希望对一个已被某些服务器泄漏的对手隐藏索引 i。在批量 PIR 设置中，客户端同时执行查询以检索多个条目的内容。
> 
> 我们对提示大小 r 和查询期间所访问的条目数 t 之间的权衡关系进行了精确描述。对于任何使客户端能够执行批量检索 k 项的 PIR 方案，当 \(r \geq k\) 时，我们证明下界 \(tr = \varOmega (nk)\)。当 \(r < k\) 时，我们证明 \(t = \varOmega (n)\)。我们的下界适用于方案出错概率至多为 1/15，并且针对只泄露 O(1) 个服务器中的一个的 PPT 对手成立。我们的工作还解决了单个查询设置 \((k = 1)\) 的乘法对数差距问题，因为我们的下界与已知构建相匹配。我们的下界适用于每个数据库条目存储时没有修改，但可以任意复制每个条目的模型。
> 
> 最后，我们展示了私密信息检索和细粒度复杂性中的在线矩阵-向量（\(\textsf{OMV}\)）猜想之间的联系。我们提供了在一般计算模型中证明双服务器 PIR 方案下界的障碍，因为它们将立即推导出 \(\textsf{OMV}\) 猜想。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_18](https://doi.org/10.1007/978-3-031-30545-0_18)
## How to Compress Encrypted Data.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#how-to-compress-encrypted-data) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#how-to-compress-encrypted-data)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Kasper Green Larsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### 摘要
> 我们研究了一种任务，即对由n个每个大小为\xi位的密文组成的向量进行遗忘压缩，其中最多有t个对应的明文非零。这个问题通常出现在涉及加密外包存储的应用中，比如可搜索加密或遗忘消息检索。我们提出了两种具有可证明最坏情况保证的新算法，通过只使用同态加法和常数乘法来解决这个问题。我们的两种新构造在渐近和具体方面都有所改进，相比现有技术。
> 
> 我们的第一个构造基于稀疏多项式，完全正确，并且通过将输入向量压缩成\(\mathcal {O}({ t \xi })\)位，实现了渐近最优的压缩率。可以通过执行\(\mathcal {O}({ n \log n })\)个同态加法和常数乘法来进行同态压缩。该构造的主要缺点是解码复杂度为\(\varOmega (\sqrt{n})\)。
> 
> 我们的第二个构造基于一种新颖的可逆布隆查找表的变体，具有概率为\(1-2^{-\kappa }\)的正确性。与我们的第一个构造相比，它的压缩率稍差，因为它将输入向量压缩成\(\mathcal {O}({\xi \kappa t /\log t})\)位，其中\(\kappa \ge \log t\)。作为交换条件，这个构造的压缩和解压缩都非常高效。压缩复杂度由\(\mathcal {O}({n \kappa /\log t})\)个同态加法和常数乘法主导。解压缩复杂度由\(\mathcal {O}({\kappa t /\log t})\)个解密操作和同样多的伪随机排列反转主导。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_19](https://doi.org/10.1007/978-3-031-30545-0_19)
## Public Key Encryption with Secure Key Leasing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#public-key-encryption-with-secure-key-leasing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#public-key-encryption-with-secure-key-leasing)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 我们介绍了公钥加密与安全租约 (PKE-SKL) 的概念。我们的概念支持解密密钥的租用，使得租用密钥可以实现解密功能，同时保证如果用户返回的量子解密密钥通过有效性测试，则用户已失去解密能力。我们的概念在精神上类似于Ananth和La Placa（Eurocrypt 2021）介绍的安全软件租赁 (SSL) 的概念，但是我们考虑了更一般的敌对策略。（具体而言，我们的对手不受限于使用诚实的评估算法来运行盗版软件。）我们的结果可以总结如下：
> 
> 1. 定义：我们引入了带有安全租赁密钥的PKE的定义，并形式化了我们称之为针对租赁密钥攻击的不可区分性（IND-KLA 安全）的安全概念。我们还为PKE-SKL引入了单向性概念，称之为OW-KLA安全，并且通过使用（量子）Goldreich-Levin引理，证明了一个OW-KLA安全的PKE-SKL方案可以提升为IND-KLA安全方案。
> 
> 2. 构建具有安全租赁密钥的IND-KLA PKE方案：我们通过利用满足我们称之为一致性或不一致性安全的安全租赁密钥攻击（CoIC-KLA 安全）的PKE方案，提供了OW-KLA安全的PKE-SKL的构建（如上所述，暗示了IND-KLA安全的PKE-SKL）。然后，我们使用1-密钥策略函数加密 (CPFE) 构建了一个满足CoIC-KLA安全的PKE方案，而这个方案反过来可以基于任何IND-CPA安全的PKE方案。
> 
> 3. 基于身份的加密、属性基加密和功能加密与安全租赁密钥：我们在身份基加密 (IBE)、属性基加密 (ABE) 和功能加密 (FE) 等高级加密方案的背景下，提供了安全租赁密钥的定义。然后，通过将上述PKE-SKL与标准的IBE、ABE和FE方案结合起来，我们提供了相应的构建方式。值得注意的是，我们的定义允许对手在安全博弈中请求区分密钥，也就是说，只要它在看到挑战密文之前返回这些密钥（并且它们通过了有效性测试），通过简单解密挑战密文即可区分挑战位。虽然我们所有的构建都满足这个更强的定义，但在IBE和ABE（但不是FE）安全博弈中，对手只允许有限数量的这类密钥。
> 
> 在我们的工作之前，单解密器加密 (SDE) 的概念已经在PKE（Georgiou and Zhandry, Eprint 2020）和FE（Kitigawa and Nishimaki, Asiacrypt 2022）的背景下进行研究，但所有的构建都依赖于包括不可区分性混淆在内的强假设。相比之下，我们的构建不需要任何额外的假设，表明可以免费升级PKE/IBE/ABE/FE以支持安全租赁密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_20](https://doi.org/10.1007/978-3-031-30545-0_20)
## Another Round of Breaking and Making Quantum Money: - How to Not Build It from Lattices, and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#another-round-of-breaking-and-making-quantum-money-how-to-not-build-it-from-lattices-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#another-round-of-breaking-and-making-quantum-money-how-to-not-build-it-from-lattices-and-more)**
### 作者
* Jiahui Liu, University of Texas at Austin, Austin, USA
* Hart Montgomery, Linux Foundation, San Francisco, USA
* Mark Zhandry, NTT and Princeton University, Princeton, USA
### 摘要
> 这项工作为公开可验证的量子货币提供了正面和负面的结果。
> 
> 在第一部分中，我们提出了一个通用定理，证明了来自格子的某种自然类的量子货币方案是不安全的。我们利用这个定理来破解最近的量子货币提案[KLS22]。
> 
> 在第二部分中，我们提出了一个建立量子货币和量子闪电的框架，称为不变货币，它抽象和形式化了一些关于量子货币的思想[FHG+12]以及其前置工作[LAF+10]。除了形式化这个框架，我们还提供了一些具体的、松散来自经典指数知识假设的计算难题，其难度将暗示出量子闪电的安全性，量子闪电是对量子货币的加强，即使银行也不能重复银行票据。
> 
> 我们讨论了我们框架的潜在实例化，包括使用密码学群作用的预言构造，以及在椭圆曲线上的同构性、重排功能加密和结实编码等实例化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_21](https://doi.org/10.1007/978-3-031-30545-0_21)
## From the Hardness of Detecting Superpositions to Cryptography: Quantum Public Key Encryption and Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-1].md#from-the-hardness-of-detecting-superpositions-to-cryptography-quantum-public-key-encryption-and-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-1].md#from-the-hardness-of-detecting-superpositions-to-cryptography-quantum-public-key-encryption-and-commitments)**
### 作者
* Minki Hhan, KIAS, Seoul, Republic of Korea
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 最近，Aaronson等人（arXiv:2009.07450）表明，检测两个正交状态之间的干涉与交换这些状态一样困难。虽然他们最初的动机来自量子引力，我们表明了在量子密码学中的应用。
> 
> 1.我们从密码学的非阿贝尔群作用构建了第一个公钥加密方案。有趣的是，我们方案的密文是量子的，即使消息是经典的。这解决了Ji等人（TCC’19）提出的一个悬而未决的问题。我们通过一个称为交换-陷门函数对构建了这个方案，这可能是独立感兴趣的。
> 
> 2.我们提供了一个简单高效的编译器，将量子比特承诺的类型进行转换。更确切地说，对于任何前缀\(\textrm{X},\textrm{Y}\in \{\text {计算上，统计上，完全}\}\)，如果基础方案是X-隐藏并且Y-绑定，那么结果方案是Y-隐藏并且X-绑定。我们的编译器只调用基础方案一次。以前已知的所有编译器都多次调用基础方案（Crépeau等人，Eurocrypt’01和Yan，Asiacrypt’22）。对于转换的安全性证明，我们通过考虑量子辅助输入推广了Aaronson等人的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30545-0_22](https://doi.org/10.1007/978-3-031-30545-0_22)
