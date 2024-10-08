# Eurocrypt[2023-2]
## New Ways to Garble Arithmetic Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits)**
### 作者
* Marshall Ball, New York University, New York, USA
* Hanjun Li, University of Washington, Seattle, USA
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, Peking University, Beijing, China
### 摘要
> Applebaum, Ishai, 和 Kushilevitz 在 FOCS'11 的美丽工作开启了对Yao的模糊电路的算术变体的研究。算术模糊方案是一种有效的转换，将环\(\mathcal {R}\)上的算术电路\(C：\mathcal {R}^n \rightarrow \mathcal {R}^m\) 转换为模糊电路\(\widehat{C}\)和n个仿射函数\(L_i\)，其中\(i \in [n]\)，使得\(\widehat{C}\) 和\(L_i(x_i)\) 仅透露输出C(x)而不透露x的任何其他信息。AIK 提出了支持在有界（可能是指数级大）范围内计算整数的第一个算术模糊方案，这是基于具有学习误差(LWE)的算法。相比之下，将C转换为布尔电路并应用Yao的模糊电路则将输入视为比特字符串而不是环元素，因此不是“算术”。
> 
> 在这项工作中，我们提出了新的算术电路模糊方法，改进了效率，模块化和功能性的最新进展。为了衡量效率，我们将模糊方案的速率定义为模糊电路\(\widehat{C}\)的比特长度和明文计算表\(C \ell\)之间的最大比率，其中\(\ell \)是线值的位长度（例如，Yao的模糊电路的速率为\(O(\lambda )\)）。
> 
> 我们提出了基于决策复合剩余（DCR）假设的大整数计算的第一个恒定速率算数模糊电路，显著提高了Applebaum，Ishai 和 Kushilevitz 的方案的效率。
> 
> 我们构建了一个算术模糊方案，用于模 \(\mathcal {R}= \mathbb {Z}_p\)上的模块化计算，其中p是任意的整数模，基于DCR或LWE。基于DCR的实例化可以实现大p的速率\(O(\lambda )\)。此外，我们的构造是模块化的，并且对基础环和简单的键扩展设备进行黑盒使用。
> 
> 我们描述了第一个支持算术电路的变种，这些算术电路在有界整数上进行了扩充并具有布尔计算（例如，整数值的截断和两个值之间的比较），同时在模糊算术部分时保持恒定速率。
> 
> 据我们所知，之前仅使用不可辨识性混淆的强大原语或深度有限的受限电路才能实现恒定速率（布尔或算术）的模糊。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_1](https://doi.org/10.1007/978-3-031-30617-4_1)
## Actively Secure Half-Gates with Minimum Overhead Under Duplex Networks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks)**
### 作者
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 积极保护的两方计算（2PC）是现代加密学的标志性构件之一。为积极保护的2PC设计协议的主要目标之一是减少与半诚实2PC协议相比的通信开销。在这篇论文中，我们提出了一个新的积极保护的常数轮2PC协议，每个AND门的单向通信为 \(2\kappa +5\) 比特（用于 \(\kappa \)-bit计算安全性和任何统计安全性），基本上与半诚实半门协议的单向通信相匹配。我们通过两种新的技术来实现：
> 
> 1. 最近Dittmer等人（Crypto 2022）的压缩技术显示，对于不向加密者泄露掩码线值的认证加密，宽松的预处理就足够了。我们引入了新形式的认证位，并提出了一种生成认证AND三重的新技术，将预处理的单向通信从 \(5\rho +1\) 比特减少到每个AND门的2比特，用于 \(\rho \)-比特统计安全。
> 
> 2. 很遗憾，上述压缩技术只与较小型的认证加密电路（每个AND门的大小为 \(2\kappa +3\rho \) 比特）兼容。我们设计了一种新的认证加密，不使用信息理论的MACs，而是使用无泄漏的双重执行来验证电路中的线值。这允许我们使用更紧凑的基于半门的认证加密电路（每个AND门的大小为 \(2\kappa +1\) 比特），同时保持与压缩技术的兼容性。我们的新技术可以实现每个AND门的 \(2\kappa +5\) 比特的单向通信。
> 
> 我们产生认证AND三重的技术也可以用来优化双向通信（即总通信）量，通过将其与Dittmer等人的认证加密电路结合使用，从而得到一个具有每个AND门 \(2\kappa +3

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_2](https://doi.org/10.1007/978-3-031-30617-4_2)
## Black-Box Reusable NISC with Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, US
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们重新审视可重用的非交互安全计算（NISC）问题。对于发送者-接收者功能f的标准NISC协议使接收者能够加密其输入x，以便任何发送者在输入y的情况下都可以发送回一个仅揭示f(x, y)的消息。即使其中一方可能是恶意的，安全性也应该得到保证。可重用的NISC协议具有附加特性，即接收者的消息可以安全地用于计算多个输出\(f(x,y_i)\)。在每个会话中，即使恶意发送者可以了解诚实接收者每个输出的部分信息，安全性也应该得到保证。
> 
> 我们提出了第一个通用函数f的可重用NISC协议，该协议仅对任何两消息的遗忘传输协议进行黑盒使用，并使用随机预言。所有先前的可重用NISC协议要么对密码原语进行非黑盒使用（Cachin等人，ICALP 2002），要么需要更强大的遗忘传输的算术变体，并且仅限于\(\textsf{NC}^1\)或类似类别的f（Chase等人，Crypto 2019）。我们的结果通过从标准NISC到可重用NISC的通用编译器获得，该编译器利用了用于安全多方计算的特殊类型的诚实多数协议。
> 
> 最后，我们将上述主要结果扩展到可重用的双向NISC，其中两方可以在第一轮中加密其输入，然后在多个会话中揭示其输入的不同函数。这个扩展要么需要对加法同态承诺进行额外的（黑盒）使用，要么要求各方在会话之间维护状态。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_3](https://doi.org/10.1007/978-3-031-30617-4_3)
## Maliciously-Secure MrNISC in the Plain Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model)**
### 作者
* Rex Fernando, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, Jerusalem, 91904, Israel
### 摘要
> 我们研究了由轮优化的多方计算（MPC）的强版本。贝纳穆达和林（TCC '20）的最新工作确定了一种称为多方可复用非交互安全计算（MrNISC）的安全多方计算（MPC）版本，它同时将几个基本的安全计算方面与标准仿真安全结合到一个原语中：轮优化、简洁性、并发性和适应性。更详细地说，MrNISC本质上是一个两轮MPC协议，其中第一轮消息作为参与方个体的私有输入的可复用承诺。利用这些承诺，任何方的子集都可以通过广播每个方的一条消息来稍后计算他们选择的任意函数的结果。任何能够观察到这些方的承诺和评估消息的人（甚至是外部观察者）都可以获得函数输出而不知道其他任何信息。重要的是，输入承诺可以在不知道其他参与方的任何情况下（无论是他们的身份还是数量）计算，并且可以用于任意数量的计算。
> 
> 目前为止，已知有几个基于（双线性）群假设或LWE的MrNISC协议。它们都满足反诚恶意安全性（在普通模型下），并需要可信设置假设以获得恶意安全性。我们对普通模型下不存在可信设置的恶意安全MrNISC协议感兴趣。由于标准多项式仿真概念在少于四轮中无法实现，我们关注具有超多项式时间仿真（SPS）的安全性。
> 
> 我们的主要结果是第一个在普通模型中具有恶意安全SPS MrNISC。该结果通过通用地编译任何反诚恶意MrNISC来获得，并且我们编译器的安全性依赖于各种经过深入研究的假设，如不可区分性混淆器、\( Z ^*_{p}\) 上的DDH和非对称配对群、时锁谜题（所有这些都需要次指数难度）。作为特例，我们基于坚实的假设获得了第一个两轮恶意安全SPS MPC。该MPC还具有并发自合性，并且其第一条消息是短的（即其大小与参与方数量无关），并可在任意数量的计算中复用。在我们的工作之前，针对两轮恶意安全的MPC，从任何一组假设中都无法获得同时具备并发MPC、可重用MPC以及第一条消息与参与方数量独立无关的MPC。独立感兴趣的是我们的一个构建模块：基于深入研究的假设，首次构建了一个一轮非可篡改承诺方案，避免使用无关密钥散列函数和非标准的硬度增强假设。完整版本的论文可在[26]中找到。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_4](https://doi.org/10.1007/978-3-031-30617-4_4)
## Minimizing Setup in Broadcast-Optimal Two Round MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Technical University of Denmark, Kongens Lyngby, Denmark
### 摘要
> 在本文中，我们考虑使用不同通信通道的两轮安全计算协议：即，在不同轮中均不可用广播的协议，第一轮和第二轮均可用广播的协议，仅第一轮可用广播的协议，或仅第二轮可用广播的协议。Cohen、Garay和Zikas（Eurocrypt 2020）以及Damgård、Magri、Ravi、Siniscalchi和Yakoubov（Crypto 2021）的先前工作为各种通信结构中的各个阈值的安全性保证提供了严格的特征化。
> 
> 在这项工作中，我们引入了一个新的安全概念，即选择性可识别的中止，它保证了每个诚实的参与方要么获得输出，要么终止识别一个腐败的参与方（诚实的参与方可能会在识别不同的腐败的参与方方面产生潜在冲突）。我们调查了在两轮多方计算中广播模式在各种设定下（例如是否有PKI、是否有诚实多数）能否实现这一保证。
> 
> 此外，我们确定了在没有PKI的诚实多数设定下可能发生的事件，这解决了Damgård等人留下的问题。我们表明，在没有PKI的情况下，即使有诚实多数，也无法实现比诚实少数设定更强的安全性保证。然而，如果确保三分之二的参与方是诚实的，可以在仅在第二轮使用广播的情况下实现可识别的中止。
> 
> 在没有PKI的情况下，我们使用与以前工作根本不同的技术来避免依赖第一轮的私人通信，因为在没有公钥加密密钥的情况下假设这样的私人通道是不现实的。我们还表明，有点令人惊讶的是，除非腐败门限为一，第一轮中有私人通道并不会增强安全性保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_5](https://doi.org/10.1007/978-3-031-30617-4_5)
## Sublinear-Communication Secure Multiparty Computation Does Not Require FHE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe)**
### 作者
* Elette Boyle, Reichman University, Herzliya, Israel
* Pierre Meyer, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Université Paris Cité, CNRS, IRIF, Paris, France
### 摘要
> 安全计算使互不信任的各方能够在保密输入的基础上共同计算一个函数，同时不泄露任何与函数输出无关的信息。长期以来，一个挑战是了解此类协议所需的通信复杂性，特别是当通信可以在所需函数的电路表示大小的次线性范围内进行时。在两方场景中，基于各种结构和难度假设已经取得了显著的进展，肯定回答了这个问题。相比之下，在多方场景中，只有一种一般方法已知：使用完全同态加密（FHE）。即使仅涉及三方，存在两种损坏，这一现状仍然存在。
> 
> 我们提出了一个框架，用于实现安全的次线性通信（N+1）方计算，基于只有N方的特定形式的函数秘密共享。与此同时，基于多种不被认为意味着FHE的假设，我们展示了在三方和五方场景下对于各种函数类进行次线性安全计算的影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_6](https://doi.org/10.1007/978-3-031-30617-4_6)
## Actively Secure Arithmetic Computation and VOLE with Constant Computational Overhead.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Niv Konstantini, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们研究了两方安全算术计算的复杂性，其中目标是在有主动（即恶意）对手存在的情况下评估一个有限域\(\mathbb {F}\)上的算术电路。在被动设置中，Applebaum等人（Crypto 2017）构建了一个协议，每个门只进行恒定（摊销）数量的域操作。该协议使用底层域\(\mathbb {F}\)作为黑盒，对（标准的）遗忘传递进行黑盒使用，并且其安全性基于已有的密码学假设的算术类比。我们提出了这个协议的主动安全变种，首次实现了所有以上特性。该协议依赖相同的假设，并且仅在计算和通信方面增加了轻微的开销。
> 
> 在此过程中，我们构建了一个高效的向量遗忘线性评估（VOLE）协议，并提出了多个实用和理论优化方法，以及一个原型实现。我们最高效的变体可以实现一个渐进比例为1/4（即对于长度为w的向量，我们发送大约4w个元素\(\mathbb {F}\)），仅比被动安全协议稍差，其比例为1/3。该协议在快速网络上似乎在实践中具有竞争力，即使对于相对较小的域\(\mathbb {F}\)和相对较短的向量也是如此。具体而言，我们的VOLE协议有3轮，即使对于长度为10K的向量，其每个条目的摊销成本也不到4个OT（遗忘传递）和不到300个算术操作。其中大部分操作（约200个）可以在离线的非交互阶段进行预处理。（对于更长的向量可以获得更好的常数。）我们的一些优化依赖于关于噪声线性码不可变性的新的难以计算的假设，这可能具有独立的兴趣。
> 
> 我们的技术方法采用了两个新成分。首先，我们提出了一个新的信息理论条件揭示秘密（CDS）的构造，并展示了如何使用它来使Applebaum等人的VOLE协议对抗主动对手具有免疫能力。其次，通过使用低次多项式的基本性质，我们展示了对于一些简单的算术功能，可以很容易地将Yao的加密电路协议升级到具有轻微开销的主动设置中，同时保持轮次复杂度不变。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_7](https://doi.org/10.1007/978-3-031-30617-4_7)
## SuperPack: Dishonest Majority MPC with Constant Online Communication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication)**
### 作者
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Vipul Goyal, NTT Research, Palo Alto, CA, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Tsinghua University, Beijing, China
* Chenkai Weng, Northwestern University, Evanston, IL, USA
### 摘要
> 在这项工作中，我们介绍了一种新颖的主动安全不诚实多数MPC（多方计算）协议SuperPack，其效率随着诚实方的数量增加而提高。具体地说，设\(0<\epsilon <1/2\)，考虑一个腐败\(t<n(1-\epsilon )\)个方的对手。SuperPack协议需要在线通信中的每个乘法门使用\(6/\epsilon \)个有限域元素（field elements），假设电路相关的预处理，并且使用\(10/\epsilon \)个有限域元素，假设电路无关的预处理。相比之下，大部分以前的研究，如SPDZ（Damgård等人，ESORICS 2013）及其派生版本，在只有一个诚实方或只有常数（非多数）比例的诚实方时都表现出相同的性能。唯一的例外是Goyal等人（CRYPTO 2022），其使用\(58/\epsilon + 96/\epsilon ^2\)个有限域元素来进行电路无关的预处理。我们的工作在电路无关的预处理模型中将这个结果大幅提升了至少25倍。
> 
> 从实际角度看，我们还将我们的工作与最好的在具体方面效率较高的在线协议Turbospeedz（Ben-Efraim等人，ACNS 2019）进行了比较，后者在所有方之间的每个乘法门要使用\(2(1-\epsilon )n\)个有限域元素。随着n的增加和\(\epsilon \)接近1/2，我们的在线协议在性能上优于Turbospeedz。例如，如果存在90%的腐败（\(\epsilon =0.1\)），当\(n=50\)时，我们的在线协议比Turbospeedz好了1.5倍，当\(n=100\)时，这个因子是3倍；对于70%的腐败（\(\epsilon =0.3\)），当\(n=50\)时，我们的在线协议优于Turbospeedz 3.5倍，而当\(n=100\)时，这个因子为7倍。
> 
> 我们的电路相关预处理可以从OLE/VOLE实例化。在我们的工作中，OLE/VOLE相关性所需的量要比Le Mans（Rachuri和Scholl，CRYPTO 2022）所需的量减小一个大约为\(\approx \epsilon n/2\)的因子，而后者用于实例化Turbospeedz的预处理。
> 
> 我们的不诚实多数协议依赖于打包秘密共享，并借鉴了诚实多数TurboPack协议（Escudero等人，CCS 2022）的思想，以实现任何电路拓扑结构的具体效率，而不仅仅是SIMD。我们实现了SuperPack和Turbospeedz，并通过实验结果验证，我们的方法确实在具有相当大数量方的分布式环境中带来性能更好的运行时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_8](https://doi.org/10.1007/978-3-031-30617-4_8)
## Detect, Pack and Batch: Perfectly-Secure MPC with Linear Communication and Constant Expected Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time)**
### 作者
* Ittai Abraham, VMware Research, 5 Sapir St., 4685209, Herzliya, Israel
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Shravani Patil, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> 我们证明了对于具有C个门和深度D的电路，可以在O((Cn+n^4 + Dn^2)log n)的通信复杂度和O(D)的预期时间内获得完全安全且具有最佳弹性的多方计算（MPC）。对于D≪n和C≥n^3，这是第一个具有线性通信复杂度和每层恒定预期时间复杂度的完全安全最佳弹性MPC协议。
> 
> 与现有的玩家淘汰框架中的MPC协议[Beerliova and Hirt TCC’08, and Goyal, Liu, and Song CRYPTO’19]相比，对于C > n^3 和D≪n，我们的结果将运行时间从Θ(n+D)显著改进为期望O(D)，同时保持通信复杂度为O(Cnlog n)。
> 
> 与获得期望O(D)时间复杂度的最新MPC协议[Abraham, Asharov, and Yanai TCC’21]相比，对于C > n^3，我们的结果将通信复杂度从O(Cn^4log n)显著改进为O(Cnlog n)，同时保持预期运行时间为O(D)。
> 
> 我们技术贡献的一个显著部分围绕着我们称之为可检测秘密共享的新原语。它是完全隐藏的，弱绑定的，并且具有这样一个性质，要么重建成功，要么(O(n))个参与方被（私下）检测到。一方面，我们展示了可检测秘密共享足够强大，可以生成MPC所需的乘法三元组。另一方面，我们展示了如何通过具有只有O(n^4log(n)+plogn)的通信复杂度的检测秘密共享来共享p个秘密。当分享p≥n^4个秘密时，通信成本平均为每个秘密只需O(1)。
> 
> 我们的第二项技术贡献是一种新的可验证秘密共享协议，可以以O(n^4log(n)+pnlogn)的词复杂度共享p个秘密。当分享p≥n^3个秘密时，通信成本平均为每个秘密只需O(n)。最好的先前要求每个秘密O(n^3)的通信。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_9](https://doi.org/10.1007/978-3-031-30617-4_9)
## An Incremental PoSW for General Weight Distributions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions)**
### 作者
* Hamza Abusalah, IMDEA Software Institute, Madrid, Spain
* Valerio Cini, Austrian Institute of Technology, Vienna, Austria
### 摘要
> 一个顺序工作（PoSW）方案允许证明者说服验证者，它按照顺序计算了一定数量的计算步骤。最近，在轻客户端区块链协议中发现了图标记 PoSW 方案的应用，尤其是引导过程中。引导协议允许轻客户端仅凭有关区块链的最少信息来持有其稳定前缀的承诺。
> 
> 增量型顺序工作（iPoSW）方案允许证明者以非平凡方式递增证明：给定\(\chi ,\pi _1\)和整数\(N_1,N_2\)，使得 \(\pi _1\) 对 \(N_1\) 是有效证明，它生成一个对 \(N_1+N_2\) 有效的证明 \(\pi\)。
> 
> 在本研究中，我们基于 Abusalah 等人提出的基于跳表的 PoSW 方案构建了一个 iPoSW 方案，并使用 Döttling 等人强大的即时抽样技术在随机预言模型下证明了其安全性。此外，与 Döttling 等人的 iPoSW 方案不同，我们的方案是首个适用于构建链知识的增量非交互式论证（SNACK）方案的 iPoSW 方案，这些方案是高效利用空间和时间的轻客户端协议的核心。特别地，我们的方案适用于一般的权重分布，这被我们定义为可逐步抽样的分布。我们的一般处理方式恢复了 Döttling 等人方案下的分布以及作为特殊情况的 SNACK 引导应用下的分布。在实现我们的通用构建时，我们开发了一种新的即时抽样技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_10](https://doi.org/10.1007/978-3-031-30617-4_10)
## Witness-Succinct Universally-Composable SNARKs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks)**
### 作者
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, University of Edinburgh, Edinburgh, Scotland
* Daniel Tschudi, Concordium, Zug, Switzerland
### 摘要
> 零知识简明非交互性知识证明（zkSNARKs）在许多实际应用中，包括区块链，证明紧凑性变得越来越重要，是一个越来越基本的工具。在通用可组合性（UC）框架（Canetti, FOCS'01）中，对SNARKs安全性的证明可以防止致命性的篡改攻击。为了保持SNARKs在UC模型中的安全性，必须展示它们的模拟可提取性，即知识提取者既是黑匣子的，又是直线的，这意味着由诚实的证明者生成的证明是非篡改的。然而，现有关于SNARKs的模拟可提取性结果要么缺乏一些这些特性，要么必须牺牲见证的简洁性来证明UC安全性。
> 
> 在本文中，我们提供了一个编译器，将任何可模拟可提取NIZKAoK转换为在全局随机预言机模型下UC安全的编译器，并重要的是，同时保持相同水平的证据简洁性。结合现有的zkSNARKs，我们实现了据我们所知，第一个同时实现UC安全性和恒定大小证明的zkSNARKs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_11](https://doi.org/10.1007/978-3-031-30617-4_11)
## Speed-Stacking: Fast Sublinear Zero-Knowledge Proofs for Disjunctions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions)**
### 作者
* Aarushi Goel, NTT Research, Tokyo, Japan
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> 建立在最近编译器的基础上，用于高效合取（例如多个子句的OR）零知识证明（如Goel等人[EUROCRYPT’22]所述），我们提出了一种新的编译器。当应用于亚线性大小的证明时，该编译器可以实现亚线性大小的合取零知识，并具有亚线性证明时间（而不会显著增加证明大小）。我们的关键观察是，在亚线性大小的零知识证明系统中，模拟比诚实证明者要快得多（无论是在具体还是渐近意义上）。我们研究了将我们的编译器应用于两类\(O(\log n)\)轮协议：交互式oracle证明，具体包括Aurora[EUROCRYPT'19]和Fractal[EUROCRYPT'20]；以及折叠论证，具体包括压缩\(\varSigma \)-协议[CR-YPTO'20, CRYPTO'21]和Bulletproofs[S & P'18]。这项研究验证了编译器可以带来显著的节省。例如，将我们的编译器应用于Fractal，我们能够用仅\(O((N+\ell ) \cdot \text {polylog}(N))\)的计算量来证明一个大小为N的\(\ell \)个子句的析取，相比之下，直接证明析取需要\(O(\ell N \cdot \text {polylog}(N))\)的计算量。我们还发现，我们的编译器为理解零知识证明提供了一种新的视角，这由多个协议的例子所证明，这些协议在“独立”复杂度相同的情况下，堆叠时表现出截然不同的行为。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_12](https://doi.org/10.1007/978-3-031-30617-4_12)
## Proof-Carrying Data from Arithmetized Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles)**
### 作者
* Megan Chen, Boston University, Boston, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Tom Gur, University of Warwick, Coventry, UK
* Jack O’Connor, University of Warwick, Coventry, UK
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> Proof-carrying data（PCD）是一种强大的密码学原语，可以使互不信任的各方以高效可验证的方式进行分布式计算。已知的PCD构造是通过递归组合SNARKs或相关原语获得的。具有理想属性（如透明设置）的SNARKs是在随机预言机模型中构造的。然而，使用这样的SNARKs构造PCD需要启发式地实例化预言机并以非黑盒方式使用预言机。[CCS22]在低次随机预言机模型中构造了SNARKs，从而避免了这个问题，但在现实世界中实例化他们的模型似乎很困难。
> 
> 在本文中，我们引入了一个新的模型：arithmetized random oracle model（AROM）。我们提供了一个合理的标准模型（仅软件）实例化的AROM，并且我们在AROM中仅给定标准模型的冲突抗性哈希函数的情况下构造了PCD。此外，我们的PCD构造适用于任意深度的一致性谓词。我们通过展示如何构造使用AROM查询预言机的计算的SNARKs，并在AROM中使用预言机查询累积方案来获得我们的PCD构造。然后我们构造了这样一个AROM的累积方案。
> 
> 我们提供了一种高效的“懒惰采样”算法（模拟器）来模拟AROM直到某个误差。我们的模拟器使我们能够证明AROM中密码构造的安全性，并且ROM中的zkSNARKs也满足AROM中的零知识性质。该算法是非平凡的，并依赖于代数查询复杂性和组合Nullstellensatz中的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_13](https://doi.org/10.1007/978-3-031-30617-4_13)
## Supersingular Curves You Can Trust.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust)**
### 作者
* Andrea Basso, University of Birmingham, Birmingham, UK
* Andrea Basso, University of Bristol, Bristol, UK
* Giulio Codogni, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Guido Maria Lido, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Deirdre Connolly, Zcash Foundation, Mclean, USA
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
* Travis Morrison, Virginia Tech, Blacksburg, VA, USA
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Sikhar Patranabis, IBM Research India, Bangalore, India
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 生成一个超常椭圆曲线，以至于没有人知道它的等幂环，这是一个极为困难的任务，尽管有几种依赖于这样一个对象的同源协议。虽然通常建议使用受信任的设置作为一种解决方法，但仍有几个方面不明确。在这项工作中，我们开发了必要的工具，以便实际运行这样一个分布式可信设置仪式。
> 
> 我们的关键贡献是第一个与任何基本域兼容的同构性知识的统计零知识证明。为了证明统计零知识性，我们引入了具有 Borel 水平结构的等时图，并证明它们具有 Ramanujan 属性。然后，我们在简化的通用组合性框架中分析基于我们的零知识证明的分布式可信设置协议的安全性。最后，我们开发了一个优化的零知识证明实现，并提出了一个具体部署可信设置协议的策略。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_14](https://doi.org/10.1007/978-3-031-30617-4_14)
## On Valiant's Conjecture - Impossibility of Incrementally Verifiable Computation from Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles)**
### 作者
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 在TCC 2008年的里程碑论文中，Paul Valiant提出了“增量可验证计算”的概念。这使得证明者能够逐步计算出一个简洁的证明，用于正确执行（可能是）长时间运行的过程。该论文后来获得了2019年TCC测试时效奖。构造过程在没有任何进一步计算假设的情况下，在随机预言模型中被证明具有安全性。然而，总体证明采用了非标准版本的随机预言方法，其中哈希函数有时是一个随机预言，有时作为电路具有简短的描述。Valiant明确指出了这个模型是非标准的，但推测标准的随机预言方法不足以满足要求。这个猜想已经开放了14年。我们证明了如果证明系统能够以递增方式接收长证人作为输入并且也是零知识的话，则该猜想成立。Valiant最初的构造并没有具备这些属性，但在他的模型中可以很容易地进行扩展。我们将我们的结果与最近关于SNARKs和增量可验证计算的可能性和不可能性结果进行了联系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_15](https://doi.org/10.1007/978-3-031-30617-4_15)
## SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption)**
### 作者
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Alex Lombardi, Simons Institute and UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
### 摘要
> 我们在决策型Diffie-Hellman（DDH）问题在次指数难度下进行了有界深度计算的简洁非交互式论证（SNARGs）构造。这是首个基于Diffie-Hellman假设的SNARGs构造。我们的SNARG也是明确的：对于每个（真实的）语句x，计算上很难找到除了预设证明者策略生成的证明之外的任何接受证明。
> 
> 我们通过展示如何在DDH下实例化Fiat-Shamir启发式来获得我们的结果，用于Goldwasser-Kalai-Rothblum（GKR）交互式证明系统的一种变体。我们的新技术贡献是：（1）提供一个\(TC^0\)电路族，用于在一类特殊特征为2的域上找到三次多项式的根（Healy-Viola，STACS 2006）；（2）构造GKR协议的一种变体，其对所述域上的三次多项式的和检查协议（Lund-Fortnow-Karloff-Nisan，STOC 1990）的调用只涉及到。沿途，由于我们可以为和检查协议的某些变体实例化Fiat-Shamir启发式，我们还展示了在DDH次指数复杂度下存在（次指数级）困难的问题的复杂类\(\textsf{PPAD}\）。之前的\(\textsf{PPAD}\)困难结果要么需要双线性映射，要么需要错误学习假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_16](https://doi.org/10.1007/978-3-031-30617-4_16)
## HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates)**
### 作者
* Binyi Chen, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Espresso Systems, Menlo Park, USA
* Zhenfei Zhang, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Stanford University, Stanford, USA
* Dan Boneh, Stanford University, Stanford, USA
### 摘要
> Plonk是一种广泛使用的简洁非交互式证明系统，它使用单变量多项式承诺。Plonk非常灵活：它支持具有低次数的“自定义”门电路以及具有查找门的电路（查找门确保其输入包含在预定义表中）。对于大型电路，生成Plonk证明的瓶颈是需要计算大型FFT。
> 
> 我们介绍了HyperPlonk，这是Plonk在布尔超立方体上的适应，使用多线性多项式承诺。HyperPlonk保留了Plonk的灵活性，但提供了几个额外的优点。首先，它避免了在证明生成过程中进行FFT的需求。其次，更重要的是，它支持比Plonk更高次数的自定义门，而不会影响证明者的运行时间。这两者都可以极大地加快证明者的运行时间。由于HyperPlonk依赖于多线性多项式承诺，我们重新审视了Orion和Virgo的两种优雅构造。我们展示了如何将Orion的开放证明大小降低到小于10 KB（几乎是1000倍的改进），并展示了如何使基于Virgo FRI的开放证明更加简单和更短（这是扩展摘要，完整版本详见EPRINT[22]）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_17](https://doi.org/10.1007/978-3-031-30617-4_17)
## Spartan and Bulletproofs are Simulation-Extractable (for Free!).
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Paul Grubbs, University Of Michigan, Ann Arbor, USA
### 摘要
> 增加先进的零知识证明系统，特别是zkSNARKs的部署，在实际应用中引发了对其抵御现实世界攻击安全性的关键问题。实践中涉及到的两类攻击是适应性正确性攻击和可塑性攻击。适应性正确性攻击是指攻击者可以通过在生成证明后选择其公共输入来证明错误的陈述；而可塑性攻击是指攻击者可以使用有效的证明来创建另一个有效的证明，而它自己无法创造出这个证明。先前的研究表明，模拟提取性（SIM-EXT）是证明系统的一种强安全概念，能够防范这些攻击。
> 
> 在本文中，我们证明了两种透明的基于离散对数的zkSNARKs——Spartan和Bulletproofs，如果底层群体满足离散对数假设，则在随机预言模型下为模拟提取性（SIM-EXT）。由于这些假设是用于证明Spartan和Bulletproofs的标准安全性属性的必要条件，我们的结果表明，SIM-EXT在这些方案中似乎是“免费”的。我们的结果是Spartan的第一个SIM-EXT证明，涵盖了线性验证器和亚线性验证器两个变体。我们对Bulletproofs的结果涵盖了聚合区间证明和算术电路变体，而且这是首次不依赖于代数群模型（AGM）的结果，解决了Ganesh等人（EUROCRYPT'22）提出的一个悬而未决的问题。作为我们分析的一部分，我们发展了一个Attema等人（TCC'22）的树构建者提取定理的推广，这可能是独立感兴趣的一部分。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_18](https://doi.org/10.1007/978-3-031-30617-4_18)
## Complete Characterization of Broadcast and Pseudo-signatures from Correlations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations)**
### 作者
* Varun Narayanan, Technion, Haifa, Israel
* Vinod M. Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Neha Sangwan, Tata Institute of Fundamental Research, Mumbai, India
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
### 摘要
> 如果不存在额外的资源，只有在诚实方严格占三分之二的情况下，仅通过双方安全链接来连接的各方之间才能实现无条件安全的广播。当各方拥有额外资源，例如相关随机性时，可以规避这个限制。Fitzi、Wolf和Wullschleger（CRYPTO 2004）试图描述三方之间共享的相关随机性的条件，以使他们能够实现广播。由于他们的不可能性论证存在缺陷，他们的描述是不正确的。使用一种新颖的构造方法，我们证明了广播在更大类别的相关性下是可行的。实际上，我们实现了伪签名，这是使用信息论的数字签名的对应物，通过它可以获得无条件安全的广播。我们还获得了一个相匹配的不可能性结果，从而描述了三方广播（和伪签名）可以基于的相关性类别。我们的不可能性证明扩展了Fischer、Lynch和Merritt（Distr. Comp., 1986）的众所周知的论证方法，适用于各方观察到相关随机性的情况，并且可能具有独立的研究意义。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_19](https://doi.org/10.1007/978-3-031-30617-4_19)
## Privacy-Preserving Blueprints.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints)**
### 作者
* Markulf Kohlweiss, University of Edinburgh and Input Output, Edinburgh, UK
* Anna Lysyanskaya, Brown University, Providence, USA
* An Nguyen, Brown University, Providence, USA
### 摘要
> 如果每个人在所有访问控制需求中都使用匿名凭证，按设计，将无法追踪违法行为者。这将使得合法的控制措施，如追踪非法交易和恐怖嫌疑人，无法进行。在这里，我们提出了一种保护隐私的蓝图功能，允许审计员发布函数\(f(x,\cdot)\)的编码\(\textsf{pk}_{\textsf{A}}\)，其中f是公开已知的函数，x是秘密输入。例如，x可能是一个秘密的观察名单，而f(x, y)如果\(y\in x\)则返回y。在输入她的数据y和审计员的\(\textsf{pk}_{\textsf{A}}\)后，用户可以计算一个仲裁\(Z\)，以便任何人都可以验证\(Z\)是否从用户的凭证属性正确计算出来，而且审计员可以从\(Z\)恢复f(x,y)。我们的贡献如下：
> 
> 我们定义了安全的f-蓝图系统；我们的定义旨在为匿名凭证系统提供模块化扩展。
> 
> 我们展示了可以利用全同态加密和NIZK证明系统为所有函数f构建安全的f-蓝图系统。这个结果在理论上很有意义，但对于实际使用来说并不高效。
> 
> 我们在基于DDH假设的随机预言机模型下实现了一个针对观察名单函数的最优蓝图系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_20](https://doi.org/10.1007/978-3-031-30617-4_20)
